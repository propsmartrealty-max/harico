export function createMobileQuickBar(): HTMLElement {
  const bar = document.createElement('aside');
  bar.className = 'mobile-quick-action-bar';
  bar.setAttribute('aria-label', 'Quick Contact');

  bar.innerHTML = `
    <div class="quick-bar-container">
      
      <!-- Direct Call Button -->
      <a href="tel:+917744009295" class="quick-bar-btn btn-call" aria-label="Call Harico Sales">
        <i class="fa-solid fa-phone"></i>
        <span>Call Now</span>
      </a>

      <!-- WhatsApp Inquiry Button -->
      <a href="https://wa.me/917744009295?text=Hi,%20I%20have%20an%20enquiry%20regarding%20Harico%20Estates%20projects." target="_blank" class="quick-bar-btn btn-wa" aria-label="WhatsApp Enquiry">
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <!-- VIP Site Visit Modal Button -->
      <button class="quick-bar-btn btn-tour" onclick="if(window.showEnquireModal) window.showEnquireModal('Mobile Quick Bar Site Visit');" aria-label="Book VIP Site Tour">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Site Visit</span>
      </button>

    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .mobile-quick-action-bar {
      display: none;
      position: fixed;
      bottom: 12px;
      left: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
    }

    .quick-bar-container {
      pointer-events: auto;
      background: rgba(10, 25, 47, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.45);
      border-radius: 9999px;
      padding: 6px 8px;
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr;
      gap: 6px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    }

    .quick-bar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 8px;
      border-radius: 9999px;
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: var(--font-heading);
      white-space: nowrap;
    }

    .quick-bar-btn.btn-call {
      background: rgba(255, 255, 255, 0.1);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .quick-bar-btn.btn-wa {
      background: #25D366;
      color: #FFFFFF;
      box-shadow: 0 2px 10px rgba(37, 211, 102, 0.4);
    }

    .quick-bar-btn.btn-tour {
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      color: #FFFFFF;
    }

    @media (max-width: 768px) {
      .mobile-quick-action-bar {
        display: block;
      }
      body {
        padding-bottom: 75px; /* Prevent floating bar from overlapping footer */
      }
    }
  `;
  bar.appendChild(style);

  return bar;
}
