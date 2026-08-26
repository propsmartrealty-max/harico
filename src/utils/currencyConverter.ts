/**
 * Real-Time Multi-Currency Converter Engine for NRI & International Investors
 * Supports: INR (₹), USD ($), AED (د.إ), EUR (€), GBP (£)
 */

export type CurrencyCode = 'INR' | 'USD' | 'AED' | 'EUR' | 'GBP';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rateToInr: number; // 1 Unit of Currency = X INR
  name: string;
}

export const exchangeRates: Record<CurrencyCode, CurrencyRate> = {
  INR: { code: 'INR', symbol: '₹', rateToInr: 1, name: 'Indian Rupee' },
  USD: { code: 'USD', symbol: '$', rateToInr: 86.5, name: 'US Dollar' },
  AED: { code: 'AED', symbol: 'AED ', rateToInr: 23.5, name: 'UAE Dirham' },
  EUR: { code: 'EUR', symbol: '€', rateToInr: 90.2, name: 'Euro' },
  GBP: { code: 'GBP', symbol: '£', rateToInr: 108.5, name: 'British Pound' }
};

class CurrencyManager {
  private currentCurrency: CurrencyCode = 'INR';
  private listeners: Array<(currency: CurrencyCode) => void> = [];

  constructor() {
    const saved = localStorage.getItem('harico_currency') as CurrencyCode;
    if (saved && exchangeRates[saved]) {
      this.currentCurrency = saved;
    }
  }

  public getCurrency(): CurrencyCode {
    return this.currentCurrency;
  }

  public setCurrency(currency: CurrencyCode) {
    if (exchangeRates[currency]) {
      this.currentCurrency = currency;
      localStorage.setItem('harico_currency', currency);
      this.notifyListeners();
    }
  }

  public subscribe(callback: (currency: CurrencyCode) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(cb => cb(this.currentCurrency));
  }

  public convertFromInrLakhs(lakhs: number): string {
    const totalInr = lakhs * 100000;
    const rate = exchangeRates[this.currentCurrency];

    if (this.currentCurrency === 'INR') {
      if (lakhs >= 100) {
        return `₹ ${(lakhs / 100).toFixed(2)} Cr*`;
      }
      return `₹ ${lakhs.toFixed(2)} Lacs*`;
    }

    const converted = totalInr / rate.rateToInr;
    if (converted >= 1000000) {
      return `${rate.symbol}${(converted / 1000000).toFixed(2)}M*`;
    }
    return `${rate.symbol}${Math.round(converted).toLocaleString()}*`;
  }
}

export const currencyManager = new CurrencyManager();
