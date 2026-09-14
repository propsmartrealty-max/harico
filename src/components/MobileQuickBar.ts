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
      background: rgba(10, 25, 47, 0.82);
      backdrop-filter: var(--liquid-glass-blur-heavy);
      -webkit-backdrop-filter: var(--liquid-glass-blur-heavy);
      border: 1px solid rgba(212, 175, 55, 0.45);
      border-radius: 9999px;
      padding: 6px 8px;
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr;
      gap: 6px;
      box-shadow: 
        inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.25),
        inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2),
        0 12px 35px rgba(0, 0, 0, 0.5);
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
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: var(--font-heading);
      white-space: nowrap;
    }

    .quick-bar-btn.btn-call {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
    }

    .quick-bar-btn.btn-wa {
      background: #25D366;
      color: #FFFFFF;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.4),
        0 4px 14px rgba(37, 211, 102, 0.4);
    }

    .quick-bar-btn.btn-tour {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(186, 142, 17, 0.95) 100%);
      color: #0A192F;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 
        inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.7),
        0 4px 15px rgba(212, 175, 55, 0.4);
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
