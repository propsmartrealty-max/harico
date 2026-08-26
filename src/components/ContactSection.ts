import { dispatchLead } from '../utils/leadDispatcher';

export function createContactSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'section contact-section lux-reveal';

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Direct Developer Connect</span>
        <h2 class="section-title fade-in-up delay-1">Sales Gallery & VIP Site Tours</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Experience our designer show homes, explore structural samples, and receive personalized cost sheets directly from our senior investment advisors.
        </p>
      </div>

      <div class="contact-main-grid">
        
        <!-- Left: Interactive Visit Booking Card -->
        <div class="contact-card-box p-xl rounded-lg bg-white border">
          <div class="flex items-center gap-sm mb-md">
            <span class="contact-icon-badge"><i class="fa-solid fa-calendar-check text-gold"></i></span>
            <div>
              <h3 class="text-xl font-bold text-navy m-0">Schedule VIP Site Visit</h3>
              <p class="text-xs text-muted m-0">Zero-Wait Priority Assistance</p>
            </div>
          </div>

          <form id="contact-hub-form" class="contact-form-inner">
            <div class="form-row-2">
              <div class="form-group-clean">
                <label class="form-lbl">Full Name *</label>
                <input type="text" id="contact-name" class="input-clean" required placeholder="Your Name">
              </div>
              <div class="form-group-clean">
                <label class="form-lbl">Phone Number *</label>
                <input type="tel" id="contact-phone" class="input-clean" required placeholder="+91 XXXXX XXXXX">
              </div>
            </div>

            <div class="form-row-2 mt-md">
              <div class="form-group-clean">
                <label class="form-lbl">Preferred Project *</label>
                <select id="contact-project" class="input-clean" required>
                  <option value="Harico Edge (Punawale)">Harico Edge (Punawale - 2 & 3 BHK)</option>
                  <option value="Harico Divaam (Kiwale-Ravet)">Harico Divaam (Kiwale - 24 Storeys)</option>
                  <option value="Harico Pride (Punawale)">Harico Pride (Punawale - Pre-Launch)</option>
                  <option value="All Sentosa Projects">All Projects / Investment Advice</option>
                </select>
              </div>
              <div class="form-group-clean">
                <label class="form-lbl">Preferred Time Slot</label>
                <select id="contact-slot" class="input-clean">
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>
            </div>

            <div class="form-group-clean mt-md">
              <label class="form-lbl">Specific Requirements / Message</label>
              <textarea id="contact-msg" class="input-clean textarea-clean" rows="3" placeholder="Tell us your budget, carpet area preferences, or home loan queries..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-full mt-lg btn-contact-submit">
              <i class="fa-solid fa-paper-plane mr-2"></i> Confirm VIP Site Visit via WhatsApp
            </button>
            <p class="text-xs text-muted text-center mt-xs">🔒 100% Privacy Guaranteed. Direct developer assistance with Zero Brokerage.</p>
          </form>
        </div>

        <!-- Right: Sales Offices & Direct Helpline Information -->
        <div class="contact-info-column flex flex-col gap-md">
          
          <!-- Sales Desk Card -->
          <div class="info-card-box p-lg rounded-lg bg-navy text-white">
            <h4 class="text-gold font-bold text-lg mb-sm"><i class="fa-solid fa-headset mr-2"></i> Official Developer Helpline</h4>
            <p class="text-sm text-light mb-md">Our sales gallery is open 7 days a week from 9:30 AM to 7:30 PM.</p>
            
            <div class="contact-line-item mb-sm">
              <i class="fa-solid fa-phone text-gold mr-2"></i>
              <a href="tel:+917744009295" class="text-white font-bold hover-gold">+91 7744009295</a>
            </div>
            <div class="contact-line-item mb-sm">
              <i class="fa-brands fa-whatsapp text-success mr-2"></i>
              <a href="https://wa.me/917744009295?text=Hi,%20I%20would%20like%20to%20connect%20with%20a%20sales%20representative%20regarding%20Harico%20Estates." target="_blank" class="text-white font-semibold hover-gold">Chat on WhatsApp (24x7)</a>
            </div>
            <div class="contact-line-item">
              <i class="fa-solid fa-envelope text-gold mr-2"></i>
              <a href="mailto:contact@haricoestates.in" class="text-white hover-gold">contact@haricoestates.in</a>
            </div>
          </div>

          <!-- Project Locations Strip -->
          <div class="info-card-box p-lg rounded-lg bg-white border">
            <h4 class="text-navy font-bold text-base mb-sm"><i class="fa-solid fa-map-location-dot text-gold mr-2"></i> Experience Center Locations</h4>
            
            <div class="office-loc-item pb-sm mb-sm border-bottom">
              <p class="font-bold text-navy text-sm m-0">Harico Edge & Pride Site Gallery</p>
              <p class="text-xs text-muted m-0">Near Bhumkar Chowk, 2 mins from Mumbai-Pune Expressway, Punawale, Pune 411033</p>
              <a href="https://maps.google.com/?q=Punawale+Pune" target="_blank" class="text-xs text-gold font-bold mt-xs inline-block">
                <i class="fa-solid fa-diamond-turn-right mr-1"></i> Get Driving Directions &rarr;
              </a>
            </div>

            <div class="office-loc-item">
              <p class="font-bold text-navy text-sm m-0">Harico Divaam Sales Lounge</p>
              <p class="text-xs text-muted m-0">Opposite Sentosa Water Park, Mukai Chowk corridor, Kiwale-Ravet, PCMC 412101</p>
              <a href="https://maps.google.com/?q=Kiwale+Pune" target="_blank" class="text-xs text-gold font-bold mt-xs inline-block">
                <i class="fa-solid fa-diamond-turn-right mr-1"></i> Get Driving Directions &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .contact-section {
      background-color: #F8FAFC;
      padding: 90px 0;
    }

    .contact-main-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 30px;
      align-items: start;
    }

    .contact-card-box {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }

    .contact-icon-badge {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(212, 175, 55, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .form-row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .form-group-clean {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-lbl {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--color-navy);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .input-clean {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-family: inherit;
      color: var(--color-navy);
      outline: none;
      transition: all 0.2s ease;
    }

    .input-clean:focus {
      border-color: var(--color-gold);
      background: #FFFFFF;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }

    .textarea-clean {
      resize: vertical;
    }

    .info-card-box {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }

    .hover-gold:hover {
      color: var(--color-gold) !important;
    }

    @media (max-width: 900px) {
      .contact-main-grid {
        grid-template-columns: 1fr;
      }
      .form-row-2 {
        grid-template-columns: 1fr;
      }
    }
  `;
  section.appendChild(style);

  // Form submission handler
  setTimeout(() => {
    const form = section.querySelector('#contact-hub-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (section.querySelector('#contact-name') as HTMLInputElement)?.value;
      const phone = (section.querySelector('#contact-phone') as HTMLInputElement)?.value;
      const project = (section.querySelector('#contact-project') as HTMLSelectElement)?.value;
      const slot = (section.querySelector('#contact-slot') as HTMLSelectElement)?.value;
      const msg = (section.querySelector('#contact-msg') as HTMLTextAreaElement)?.value;

      // 1. Dispatch lead to propsmartrealty@gmail.com
      dispatchLead({
        name,
        phone,
        project,
        timeSlot: slot,
        message: msg,
        interestType: 'VIP Site Visit Booking'
      });

      // 2. Open WhatsApp
      let waMsg = `*VIP Site Visit Booking Request* 🏛️\n\n`;
      waMsg += `*Name:* ${name}\n`;
      waMsg += `*Phone:* ${phone}\n`;
      waMsg += `*Selected Project:* ${project}\n`;
      waMsg += `*Time Slot:* ${slot}\n`;
      if (msg) waMsg += `*Requirements:* ${msg}\n`;
      waMsg += `\n_Lead dispatched to propsmartrealty@gmail.com_`;

      window.open(`https://wa.me/917744009295?text=${encodeURIComponent(waMsg)}`, '_blank');
      (e.target as HTMLFormElement).reset();
    });
  }, 0);

  return section;
}
