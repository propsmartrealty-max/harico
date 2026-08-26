import { dispatchLead } from '../utils/leadDispatcher';

export function createEnquireModal(): HTMLElement {
  const modal = document.createElement('div');
  modal.id = 'enquire-modal';
  modal.className = 'modal-overlay hidden';

  modal.innerHTML = `
    <div class="modal-content-advanced">
      <button class="close-btn-adv" title="Close modal" aria-label="Close modal">&times;</button>
      
      <!-- Modal Header Banner -->
      <div class="modal-adv-header">
        <div class="vip-badge-pill">
          <i class="fa-solid fa-crown text-gold mr-1"></i> VIP Priority Access • Direct Developer Desk
        </div>
        <h2 class="modal-adv-title">Unlock Exclusive Pricing & Cost Sheets</h2>
        <p class="modal-adv-subtitle">
          Register for guaranteed zero brokerage, customized payment plans, and instant brochure downloads.
        </p>
      </div>

      <!-- Perks Strip -->
      <div class="perks-strip-grid">
        <div class="perk-item">
          <i class="fa-solid fa-shield-halved text-gold"></i>
          <span>MahaRERA Sanctioned</span>
        </div>
        <div class="perk-item">
          <i class="fa-solid fa-car-side text-gold"></i>
          <span>Free AC Cab Site Visit</span>
        </div>
        <div class="perk-item">
          <i class="fa-solid fa-file-invoice-dollar text-gold"></i>
          <span>Instant Cost Sheet</span>
        </div>
      </div>

      <!-- Main Interactive Lead Capture Form -->
      <form class="adv-enquire-form" id="advEnquireForm">
        
        <!-- Project Selector Chips -->
        <div class="form-section-group">
          <label class="adv-label">1. Select Project of Interest *</label>
          <div class="chip-selector-grid" id="project-chip-group">
            <button type="button" class="project-chip active" data-project="Harico Divaam (Kiwale)">
              <span class="chip-title">Harico Divaam</span>
              <span class="chip-meta">Kiwale-Ravet • Starts ₹71L*</span>
            </button>
            <button type="button" class="project-chip" data-project="Harico Edge (Punawale)">
              <span class="chip-title">Harico Edge</span>
              <span class="chip-meta">Punawale • Starts ₹74L*</span>
            </button>
            <button type="button" class="project-chip" data-project="Harico Pride (Punawale)">
              <span class="chip-title">Harico Pride</span>
              <span class="chip-meta">Punawale • Pre-Launch</span>
            </button>
          </div>
        </div>

        <!-- Configuration & Interest Type -->
        <div class="form-row-grid-2">
          <div class="adv-form-group">
            <label for="adv-config" class="adv-label">2. Configuration *</label>
            <select id="adv-config" class="adv-input-select" required>
              <option value="2 BHK Smart / Premium">2 BHK Luxury (with Balconies)</option>
              <option value="3 BHK Comfort / Grand">3 BHK Grand High-Rise</option>
              <option value="All Projects Comparison">All Projects / Investment Advice</option>
              <option value="Commercial Spaces">Commercial / Retail Shops</option>
            </select>
          </div>

          <div class="adv-form-group">
            <label for="adv-intent" class="adv-label">3. Primary Requirement *</label>
            <select id="adv-intent" class="adv-input-select" required>
              <option value="Download Brochure & Cost Sheet">📑 Brochure & Detailed Cost Sheet</option>
              <option value="Schedule Free Cab Site Visit">🚗 Book Free Cab Site Visit</option>
              <option value="Pre-Launch Discount & Floor Plans">🏷️ Pre-Launch Offers & Inventory</option>
              <option value="Home Loan & EMI Calculation">🏦 Home Loan & Lowest EMI Advice</option>
            </select>
          </div>
        </div>

        <!-- Contact Information Fields -->
        <div class="adv-form-group">
          <label for="adv-name" class="adv-label">Full Name *</label>
          <div class="input-with-icon">
            <i class="fa-solid fa-user input-icon"></i>
            <input type="text" id="adv-name" class="adv-input" required placeholder="e.g. Rahul Sharma" autocomplete="name" />
          </div>
        </div>

        <div class="form-row-grid-2">
          <div class="adv-form-group">
            <label for="adv-phone" class="adv-label">Phone Number (WhatsApp) *</label>
            <div class="input-with-icon">
              <span class="country-badge-prefix">+91</span>
              <input type="tel" id="adv-phone" class="adv-input input-phone-pad" required placeholder="98765 43210" pattern="[0-9]{10}" maxlength="10" autocomplete="tel" />
            </div>
          </div>

          <div class="adv-form-group">
            <label for="adv-email" class="adv-label">Email Address (Optional)</label>
            <div class="input-with-icon">
              <i class="fa-solid fa-envelope input-icon"></i>
              <input type="email" id="adv-email" class="adv-input" placeholder="rahul@domain.com" autocomplete="email" />
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn-adv-submit" id="advSubmitBtn">
          <span class="btn-text"><i class="fa-brands fa-whatsapp mr-2"></i> Get Instant Pricing & Connect</span>
          <span class="btn-loader hidden"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting & Routing Lead...</span>
        </button>

        <!-- Privacy & Trust Guarantee -->
        <p class="adv-privacy-text">
          <i class="fa-solid fa-lock text-gold mr-1"></i> 100% Privacy Assured. Direct developer consultation. No spam.
        </p>

      </form>
    </div>
  `;

  // Dynamic Logic & Interaction
  const closeBtn = modal.querySelector('.close-btn-adv')!;
  const form = modal.querySelector('#advEnquireForm') as HTMLFormElement;
  const projectChips = modal.querySelectorAll<HTMLButtonElement>('.project-chip');
  const submitBtn = modal.querySelector('#advSubmitBtn') as HTMLButtonElement;
  const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
  const btnLoader = submitBtn.querySelector('.btn-loader') as HTMLElement;

  let selectedProject = 'Harico Divaam (Kiwale)';

  // Chip selection logic
  projectChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      projectChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedProject = chip.dataset.project || 'Harico Estates';
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = modal.querySelector('#adv-name') as HTMLInputElement;
    const phoneInput = modal.querySelector('#adv-phone') as HTMLInputElement;
    const emailInput = modal.querySelector('#adv-email') as HTMLInputElement;
    const configSelect = modal.querySelector('#adv-config') as HTMLSelectElement;
    const intentSelect = modal.querySelector('#adv-intent') as HTMLSelectElement;

    // Show Loading state
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    submitBtn.disabled = true;

    const leadData = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      project: selectedProject,
      requirement: configSelect.value,
      interestType: intentSelect.value
    };

    // 1. Dispatch lead to propsmartrealty@gmail.com
    dispatchLead(leadData);

    // 2. Format WhatsApp Message
    const phoneNumber = '917744009295';
    let waMsg = `*VIP Priority Enquiry — Harico Estates* 🏡\n\n`;
    waMsg += `*Project:* ${leadData.project}\n`;
    waMsg += `*Name:* ${leadData.name}\n`;
    waMsg += `*Phone:* ${leadData.phone}\n`;
    if (leadData.email) waMsg += `*Email:* ${leadData.email}\n`;
    waMsg += `*Configuration:* ${leadData.requirement}\n`;
    waMsg += `*Requirement:* ${leadData.interestType}\n`;
    waMsg += `\n_Please send the official brochure, cost sheet, and schedule our VIP site visit._`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      closeModal();
      form.reset();
      btnText.classList.remove('hidden');
      btnLoader.classList.add('hidden');
      submitBtn.disabled = false;
    }, 600);
  });

  // Global window method to show modal with specific project pre-selected
  (window as any).showEnquireModal = (projectName?: string) => {
    if (projectName) {
      projectChips.forEach((chip) => {
        const proj = chip.dataset.project || '';
        if (proj.toLowerCase().includes(projectName.toLowerCase()) || projectName.toLowerCase().includes(proj.toLowerCase())) {
          projectChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          selectedProject = proj;
        }
      });
    }
    modal.classList.remove('hidden');
  };

  // Exit-Intent Trigger on Desktop (Once per session)
  let exitIntentTriggered = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentTriggered && modal.classList.contains('hidden') && !sessionStorage.getItem('exit_modal_shown')) {
      exitIntentTriggered = true;
      sessionStorage.setItem('exit_modal_shown', 'true');
      (window as any).showEnquireModal();
    }
  });

  // Styles
  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(10, 25, 47, 0.78);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      padding: 15px;
    }

    .modal-overlay.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .modal-content-advanced {
      background: #FFFFFF;
      width: 100%;
      max-width: 560px;
      border-radius: 16px;
      position: relative;
      box-shadow: 0 25px 60px rgba(10, 25, 47, 0.3);
      padding: 30px 32px;
      border: 1px solid rgba(212, 175, 55, 0.3);
      max-height: 92vh;
      overflow-y: auto;
      transform: translateY(0) scale(1);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .modal-overlay.hidden .modal-content-advanced {
      transform: translateY(25px) scale(0.96);
    }

    .close-btn-adv {
      position: absolute;
      top: 16px;
      right: 18px;
      background: #F1F5F9;
      border: none;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      font-size: 1.3rem;
      cursor: pointer;
      color: #64748B;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .close-btn-adv:hover {
      background: #E2E8F0;
      color: var(--color-navy);
      transform: scale(1.08);
    }

    .modal-adv-header {
      text-align: center;
      margin-bottom: 16px;
    }

    .vip-badge-pill {
      display: inline-flex;
      align-items: center;
      background: rgba(212, 175, 55, 0.12);
      color: var(--color-navy);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 8px;
      border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .modal-adv-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 0 0 6px;
      line-height: 1.25;
    }

    .modal-adv-subtitle {
      font-size: 0.82rem;
      color: #64748B;
      margin: 0;
      line-height: 1.4;
    }

    /* Perks Strip */
    .perks-strip-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      background: #F8FAFC;
      border-radius: 8px;
      padding: 10px 8px;
      margin-bottom: 18px;
      border: 1px solid #E2E8F0;
    }

    .perk-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 0.68rem;
      font-weight: 700;
      color: var(--color-navy);
      gap: 3px;
    }

    /* Form Styles */
    .adv-enquire-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .adv-label {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--color-navy);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      display: block;
    }

    /* Project Chip Selector */
    .chip-selector-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .project-chip {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 8px 6px;
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 2px;
      transition: all 0.2s ease;
    }

    .project-chip .chip-title {
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--color-navy);
    }

    .project-chip .chip-meta {
      font-size: 0.65rem;
      color: #64748B;
    }

    .project-chip:hover {
      border-color: var(--color-gold);
      background: #FFFDF5;
    }

    .project-chip.active {
      background: #FFFDF5;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.4);
    }

    .project-chip.active .chip-title {
      color: #997300;
    }

    .form-row-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .adv-form-group {
      display: flex;
      flex-direction: column;
    }

    .adv-input-select, .adv-input {
      width: 100%;
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.86rem;
      color: var(--color-navy);
      outline: none;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .adv-input-select:focus, .adv-input:focus {
      border-color: var(--color-gold);
      background: #FFFFFF;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
    }

    .input-with-icon {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 12px;
      color: #94A3B8;
      font-size: 0.85rem;
      pointer-events: none;
    }

    .input-with-icon .adv-input {
      padding-left: 36px;
    }

    .country-badge-prefix {
      position: absolute;
      left: 10px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-navy);
      background: #E2E8F0;
      padding: 3px 6px;
      border-radius: 4px;
      pointer-events: none;
    }

    .input-with-icon .input-phone-pad {
      padding-left: 52px;
    }

    /* Submit Button */
    .btn-adv-submit {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      color: #FFFFFF;
      border: 1px solid var(--color-gold);
      padding: 14px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s ease;
      margin-top: 4px;
      box-shadow: 0 4px 15px rgba(10, 25, 47, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-adv-submit:hover {
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      color: #0A192F;
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.35);
      transform: translateY(-1px);
    }

    .btn-adv-submit:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .adv-privacy-text {
      font-size: 0.7rem;
      color: #94A3B8;
      text-align: center;
      margin: 0;
    }

    @media (max-width: 580px) {
      .modal-content-advanced {
        padding: 24px 18px;
      }
      .form-row-grid-2 {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .chip-selector-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  modal.appendChild(style);

  return modal;
}
