import { dispatchLead } from '../utils/leadDispatcher';

export function createEnquireModal(): HTMLElement {
  const modal = document.createElement('div');
  modal.id = 'enquire-modal';
  modal.className = 'modal-overlay hidden';

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn">&times;</button>
      <div class="modal-header">
        <h2 class="modal-title">Enquire Now</h2>
        <p class="modal-subtitle">Register your interest and we'll get in touch with you shortly.</p>
        <p id="project-context" class="modal-project-context" style="display:none; color:var(--color-gold); font-weight:600; margin-top:5px;"></p>
      </div>
      <form class="enquire-form" id="enquireForm">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" required placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input type="tel" id="phone" required placeholder="+91 XXXXX XXXXX">
        </div>
        <div class="form-group">
          <label for="email">Email Address (Optional)</label>
          <input type="email" id="email" placeholder="name@domain.com">
        </div>
        <div class="form-group">
          <label for="requirement">Requirement *</label>
          <select id="requirement" required>
            <option value="" disabled selected>Select Configuration</option>
            <option value="2 BHK Smart / Premium">2 BHK Luxury Residences</option>
            <option value="3 BHK Comfort / Grand">3 BHK Luxury Residences</option>
            <option value="All Projects">All Projects / Investment Advice</option>
            <option value="Office / Commercial">Commercial Space</option>
          </select>
        </div>
        <div class="form-group">
          <label for="interest">I am interested in</label>
          <select id="interest" required>
            <option value="details">Requesting Details & Cost Sheet</option>
            <option value="visit">Scheduling a VIP Site Visit</option>
            <option value="callback">Requesting a Priority Call Back</option>
          </select>
        </div>
        <button type="submit" class="btn-submit w-full">Submit & Connect via WhatsApp</button>
      </form>
    </div>
  `;

  // Interaction Logic
  const closeBtn = modal.querySelector('.close-btn')!;
  const form = modal.querySelector('#enquireForm')!;
  const projectContextEl = modal.querySelector('#project-context') as HTMLElement;

  let currentProjectName = '';

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const nameInput = form.querySelector('#name') as HTMLInputElement;
    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
    const emailInput = form.querySelector('#email') as HTMLInputElement;
    const requirementInput = form.querySelector('#requirement') as HTMLSelectElement;
    const interestInput = form.querySelector('#interest') as HTMLSelectElement;

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting & Routing Lead...';

    // 1. Dispatch lead to propsmartrealty@gmail.com
    dispatchLead({
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput?.value || '',
      project: currentProjectName || 'Harico Estates Portal',
      requirement: requirementInput.value,
      interestType: interestInput.value === 'details' ? 'Requesting Details' : interestInput.value === 'visit' ? 'Site Visit' : 'Call Back'
    });

    // 2. Construct WhatsApp URL
    const phoneNumber = '917744009295';
    let message = `*New Enquiry from Harico Estates Website* 🏡\n\n`;

    if (currentProjectName) {
      message += `*Project:* ${currentProjectName}\n`;
    }

    message += `*Name:* ${nameInput.value}\n`;
    message += `*Phone:* ${phoneInput.value}\n`;
    if (emailInput?.value) message += `*Email:* ${emailInput.value}\n`;
    message += `*Configuration:* ${requirementInput.value}\n`;
    message += `*Inquiry Type:* ${interestInput.value === 'details' ? 'Requesting Details' : interestInput.value === 'visit' ? 'Site Visit' : 'Call Back'}\n`;
    message += `\n_Lead dispatched to propsmartrealty@gmail.com_`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      modal.classList.add('hidden');
      (e.target as HTMLFormElement).reset();
      submitBtn.textContent = originalText;
    }, 600);
  });

  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(10, 25, 47, 0.7);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: var(--z-modal, 2000);
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease, visibility 0.3s;
    }

    .modal-overlay.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .modal-content {
      background: var(--color-white);
      padding: 40px;
      width: 90%;
      max-width: 500px;
      border-radius: var(--radius-lg);
      position: relative;
      box-shadow: var(--shadow-xl);
      transform: translateY(0) scale(1);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .modal-overlay.hidden .modal-content {
      transform: translateY(20px) scale(0.95);
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 25px;
      background: none;
      border: none;
      font-size: 2rem;
      line-height: 1;
      cursor: pointer;
      color: var(--color-text-light);
      transition: color 0.2s;
    }
    
    .close-btn:hover {
      color: var(--color-accent-red);
    }

    .modal-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .modal-title {
      font-family: var(--font-heading);
      color: var(--color-navy);
      margin-bottom: 10px;
      font-size: var(--font-size-2xl);
    }
    
    .modal-subtitle {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
    }

    .enquire-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-size: 0.9rem;
      color: var(--color-text-main);
      font-weight: 600;
    }

    .form-group input, .form-group select {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      font-family: var(--font-body);
      font-size: 1rem;
      transition: border-color 0.2s, box-shadow 0.2s;
      background-color: var(--color-secondary-bg);
    }

    .form-group input:focus, .form-group select:focus {
      border-color: var(--color-gold);
      outline: none;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
      background-color: var(--color-white);
    }

    .btn-submit {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: 14px;
      border: none;
      border-radius: var(--radius-md);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
      margin-top: 10px;
    }
    
    .btn-submit:hover {
        background-color: var(--color-navy-light);
    }
    
    .btn-submit:active {
        transform: translateY(1px);
    }

    .w-full {
      width: 100%;
    }
  `;
  modal.appendChild(style);

  (window as any).showEnquireModal = (projectName?: string) => {
    modal.classList.remove('hidden');
    currentProjectName = projectName || 'General Enquiry';

    if (currentProjectName) {
      projectContextEl.textContent = `Project: ${currentProjectName}`;
      projectContextEl.style.display = 'block';
    } else {
      projectContextEl.style.display = 'none';
    }
  };

  return modal;
}
