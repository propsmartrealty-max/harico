export function createEmiCalculator(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'emi-calculator';
  section.className = 'section emi-calculator-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Financial Planning Tools</span>
        <h2 class="section-title fade-in-up delay-1">Home Loan EMI Calculator</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Plan your dream home with Harico Estates. Calculate your estimated monthly installments, interest breakdown, and explore approved bank loan options with lowest interest rates.
        </p>
      </div>

      <div class="emi-card-wrapper">
        <div class="grid grid-cols-2 emi-grid gap-xl items-center">
          
          <!-- Controls Column -->
          <div class="emi-controls-box">
            
            <!-- Loan Amount Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="loan-amount-range" class="slider-label">Loan Amount</label>
                <div class="slider-value-display">
                  ₹ <span id="loan-amount-text">60,00,000</span>
                </div>
              </div>
              <input type="range" id="loan-amount-range" min="2000000" max="20000000" step="100000" value="6000000" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>₹20 Lacs</span>
                <span>₹1 Crore</span>
                <span>₹2 Crores</span>
              </div>
            </div>

            <!-- Interest Rate Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="interest-rate-range" class="slider-label">Interest Rate (% p.a.)</label>
                <div class="slider-value-display">
                  <span id="interest-rate-text">8.50</span> %
                </div>
              </div>
              <input type="range" id="interest-rate-range" min="7.0" max="13.0" step="0.1" value="8.5" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>7.0%</span>
                <span>8.5% (Avg Bank Rate)</span>
                <span>13.0%</span>
              </div>
            </div>

            <!-- Loan Tenure Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="loan-tenure-range" class="slider-label">Loan Tenure (Years)</label>
                <div class="slider-value-display">
                  <span id="loan-tenure-text">20</span> Years
                </div>
              </div>
              <input type="range" id="loan-tenure-range" min="5" max="30" step="1" value="20" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>5 Yrs</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <!-- Bank Partners Strip -->
            <div class="bank-partners-strip mt-md p-md bg-light-subtle rounded-md">
              <span class="text-xs uppercase font-bold text-gold tracking-wide block mb-xs">Approved Financial Partners:</span>
              <div class="flex flex-wrap gap-xs text-xs font-semibold text-navy">
                <span class="bank-pill">SBI</span>
                <span class="bank-pill">HDFC</span>
                <span class="bank-pill">ICICI</span>
                <span class="bank-pill">Axis Bank</span>
                <span class="bank-pill">Bank of Baroda</span>
              </div>
            </div>

          </div>

          <!-- Results & Visualization Column -->
          <div class="emi-result-box">
            <div class="emi-display-card text-center p-xl">
              <span class="emi-display-label uppercase tracking-widest text-xs font-bold text-gold">Estimated Monthly EMI</span>
              <div class="emi-display-amount">
                ₹ <span id="monthly-emi-result">52,069</span><span class="per-month">/mo*</span>
              </div>
              
              <!-- Breakdown Stats -->
              <div class="breakdown-grid mt-lg pt-lg border-top-gold">
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Principal Amount</span>
                  <span class="text-base font-bold text-navy" id="breakdown-principal">₹ 60,00,000</span>
                </div>
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Total Interest Payable</span>
                  <span class="text-base font-bold text-accent-gold" id="breakdown-interest">₹ 64,96,467</span>
                </div>
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Total Payment (Principal + Interest)</span>
                  <span class="text-lg font-bold text-navy" id="breakdown-total">₹ 1,24,96,467</span>
                </div>
              </div>

              <!-- Visual Progress Proportion Bar -->
              <div class="proportion-bar-container mt-md">
                <div class="proportion-bar flex">
                  <div class="bar-principal" id="bar-principal" style="width: 48%;"></div>
                  <div class="bar-interest" id="bar-interest" style="width: 52%;"></div>
                </div>
                <div class="flex justify-between text-xs mt-xs">
                  <span class="flex items-center gap-xs"><span class="legend-dot bg-navy"></span> Principal: <b id="pct-principal">48%</b></span>
                  <span class="flex items-center gap-xs"><span class="legend-dot bg-gold"></span> Interest: <b id="pct-interest">52%</b></span>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="mt-lg">
                <a href="https://wa.me/917744009295?text=Hi,%20I%20used%20the%20Harico%20Estates%20EMI%20Calculator.%20Please%20help%20me%20with%20customized%20bank%20loan%20rates%20and%20offers." target="_blank" class="btn btn-primary w-full btn-loan-cta">
                  <i class="fa-brands fa-whatsapp mr-2"></i> Get Lowest Bank Loan Rates
                </a>
                <p class="text-xs text-muted mt-xs italic">*Calculations are indicative. Actual rates subject to bank approval.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .emi-calculator-section {
      background: #FAFBFC;
      border-top: 1px solid #EFEFEF;
      border-bottom: 1px solid #EFEFEF;
      padding: 90px 0;
    }
    
    .emi-card-wrapper {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: 0 15px 40px rgba(10, 25, 47, 0.06);
      border: 1px solid rgba(212, 175, 55, 0.2);
    }
    
    .slider-label {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--color-navy);
    }
    
    .slider-value-display {
      background: rgba(212, 175, 55, 0.12);
      color: var(--color-navy);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 1rem;
      border: 1px solid rgba(212, 175, 55, 0.4);
      font-family: var(--font-heading);
    }
    
    .custom-range {
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: #E2E8F0;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
    }
    
    .custom-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--color-gold);
      border: 3px solid #FFF;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    
    .custom-range::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }
    
    .bank-pill {
      background: #FFFFFF;
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid #E2E8F0;
      color: var(--color-navy);
    }
    
    .emi-display-card {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      border-radius: var(--radius-md);
      color: #FFFFFF;
      box-shadow: 0 10px 30px rgba(10, 25, 47, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .emi-display-amount {
      font-size: clamp(2.2rem, 3.5vw, 3.2rem);
      font-weight: 800;
      color: #FFFFFF;
      font-family: var(--font-heading);
      margin: 10px 0;
      letter-spacing: -0.5px;
    }
    
    .per-month {
      font-size: 1.1rem;
      color: var(--color-gold);
      font-weight: 500;
    }
    
    .border-top-gold {
      border-top: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .breakdown-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .breakdown-grid .breakdown-item:last-child {
      grid-column: 1 / -1;
      background: rgba(255,255,255,0.05);
      padding: 10px;
      border-radius: 6px;
    }
    
    .text-accent-gold {
      color: var(--color-gold);
    }
    
    .proportion-bar {
      height: 10px;
      border-radius: 5px;
      overflow: hidden;
      background: #334155;
    }
    
    .bar-principal {
      background: #60A5FA;
      transition: width 0.3s ease;
    }
    
    .bar-interest {
      background: var(--color-gold);
      transition: width 0.3s ease;
    }
    
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    
    .legend-dot.bg-navy { background: #60A5FA; }
    .legend-dot.bg-gold { background: var(--color-gold); }
    
    .btn-loan-cta {
      background: var(--color-gold);
      color: var(--color-navy);
      font-weight: 700;
      padding: 14px 20px;
    }
    
    .btn-loan-cta:hover {
      background: var(--color-gold-hover);
      color: #FFFFFF;
    }

    @media (max-width: 900px) {
      .emi-card-wrapper {
        padding: 25px 15px;
      }
      .emi-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  section.appendChild(style);

  // EMI Calculation Logic
  setTimeout(() => {
    const amountSlider = section.querySelector<HTMLInputElement>('#loan-amount-range');
    const rateSlider = section.querySelector<HTMLInputElement>('#interest-rate-range');
    const tenureSlider = section.querySelector<HTMLInputElement>('#loan-tenure-range');

    const amountText = section.querySelector<HTMLElement>('#loan-amount-text');
    const rateText = section.querySelector<HTMLElement>('#interest-rate-text');
    const tenureText = section.querySelector<HTMLElement>('#loan-tenure-text');

    const emiResult = section.querySelector<HTMLElement>('#monthly-emi-result');
    const principalResult = section.querySelector<HTMLElement>('#breakdown-principal');
    const interestResult = section.querySelector<HTMLElement>('#breakdown-interest');
    const totalResult = section.querySelector<HTMLElement>('#breakdown-total');

    const barPrincipal = section.querySelector<HTMLElement>('#bar-principal');
    const barInterest = section.querySelector<HTMLElement>('#bar-interest');
    const pctPrincipal = section.querySelector<HTMLElement>('#pct-principal');
    const pctInterest = section.querySelector<HTMLElement>('#pct-interest');

    function formatINR(val: number): string {
      return Math.round(val).toLocaleString('en-IN');
    }

    function calculate() {
      if (!amountSlider || !rateSlider || !tenureSlider) return;

      const P = parseFloat(amountSlider.value);
      const r = parseFloat(rateSlider.value) / 12 / 100;
      const n = parseFloat(tenureSlider.value) * 12;

      // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      if (amountText) amountText.textContent = formatINR(P);
      if (rateText) rateText.textContent = parseFloat(rateSlider.value).toFixed(2);
      if (tenureText) tenureText.textContent = tenureSlider.value;

      if (emiResult) emiResult.textContent = formatINR(emi);
      if (principalResult) principalResult.textContent = '₹ ' + formatINR(P);
      if (interestResult) interestResult.textContent = '₹ ' + formatINR(totalInterest);
      if (totalResult) totalResult.textContent = '₹ ' + formatINR(totalPayment);

      const principalPct = Math.round((P / totalPayment) * 100);
      const interestPct = 100 - principalPct;

      if (barPrincipal) barPrincipal.style.width = principalPct + '%';
      if (barInterest) barInterest.style.width = interestPct + '%';
      if (pctPrincipal) pctPrincipal.textContent = principalPct + '%';
      if (pctInterest) pctInterest.textContent = interestPct + '%';

      const loanCta = section.querySelector<HTMLAnchorElement>('.btn-loan-cta');
      if (loanCta) {
        const msg = `Hi Harico Estates Financial Desk, I calculated an estimated EMI of ₹${formatINR(emi)}/month for a loan of ₹${formatINR(P)} at ${parseFloat(rateSlider.value).toFixed(2)}% for ${tenureSlider.value} years. Please share pre-approved bank loan options and interest subsidies.`;
        loanCta.href = `https://wa.me/917744009295?text=${encodeURIComponent(msg)}`;
      }
    }

    amountSlider?.addEventListener('input', calculate);
    rateSlider?.addEventListener('input', calculate);
    tenureSlider?.addEventListener('input', calculate);

    calculate();
  }, 0);

  return section;
}
