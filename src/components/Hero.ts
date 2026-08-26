import { router } from '../router';

export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero-section-refined';

  section.innerHTML = `
    <div class="hero-bg-overlay"></div>
    <div class="hero-glow-orb"></div>
    
    <div class="container hero-container-refined flex flex-col justify-center items-center text-center">
      
      <!-- Luxury Pre-heading Capsule -->
      <div class="hero-pre-badge fade-in-up">
        <span class="badge-sparkle">✦</span>
        <span>A 39-Year Legacy of Luxury by Sentosa Developers</span>
        <span class="badge-sparkle">✦</span>
      </div>

      <!-- Refined Hero Headline -->
      <h1 class="hero-title-refined fade-in-up delay-1">
        Architectural Elegance <br />
        <span class="text-gold-gradient">Crafted for Elevated Living</span>
      </h1>
      
      <!-- Refined Subtitle -->
      <p class="hero-subtitle-refined fade-in-up delay-1">
        Spacious 2 & 3 BHK luxury residences in Punawale & Kiwale featuring dual private balconies, 100+ curated amenities, and seamless 2-minute connectivity to the Mumbai-Pune Expressway.
      </p>

      <!-- Key Micro-Feature Chips -->
      <div class="hero-feature-chips fade-in-up delay-2">
        <div class="feature-chip">
          <i class="fa-solid fa-shield-halved text-gold"></i>
          <span>100% MahaRERA Verified</span>
        </div>
        <div class="feature-chip">
          <i class="fa-solid fa-compass-drafting text-gold"></i>
          <span>Zero Space Wastage Plans</span>
        </div>
        <div class="feature-chip">
          <i class="fa-solid fa-road text-gold"></i>
          <span>2 Mins to Expressway</span>
        </div>
        <div class="feature-chip">
          <i class="fa-solid fa-leaf text-gold"></i>
          <span>70% Open Green Zones</span>
        </div>
      </div>

      <!-- Refined Concierge Property Finder Widget -->
      <div class="hero-finder-card fade-in-up delay-2">
        <div class="finder-inner-grid">
          
          <div class="finder-input-box">
            <label class="finder-lbl"><i class="fa-solid fa-location-dot text-gold mr-1"></i> Location</label>
            <select id="finder-location" class="finder-select-clean">
              <option value="all">All Micro-Markets (Punawale & Kiwale)</option>
              <option value="punawale">Punawale, Pune (Harico Edge & Pride)</option>
              <option value="kiwale">Kiwale, Pune (Harico Divaam 24-Storey)</option>
            </select>
          </div>

          <div class="finder-input-box">
            <label class="finder-lbl"><i class="fa-solid fa-bed text-gold mr-1"></i> Configuration</label>
            <select id="finder-config" class="finder-select-clean">
              <option value="all">2 & 3 BHK Ultra-Premium</option>
              <option value="2bhk">2 BHK Smart & Grande (724 - 848 sq.ft)</option>
              <option value="3bhk">3 BHK Luxury & Royale (920 - 1180 sq.ft)</option>
            </select>
          </div>

          <div class="finder-input-box">
            <label class="finder-lbl"><i class="fa-solid fa-wallet text-gold mr-1"></i> Budget Range</label>
            <select id="finder-budget" class="finder-select-clean">
              <option value="all">All Budgets (₹71L - ₹1.20Cr)</option>
              <option value="under75">₹71.00 Lacs - ₹75 Lacs</option>
              <option value="75to100">₹75 Lacs - ₹1.00 Crore</option>
              <option value="above100">₹1.00 Crore & Above</option>
            </select>
          </div>

          <div class="finder-submit-box">
            <button id="btn-hero-search" class="btn btn-primary btn-finder-action">
              <span>Find Residences</span>
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Action Buttons -->
      <div class="hero-cta-group fade-in-up delay-3 mt-lg">
        <a href="/projects" class="btn btn-primary btn-hero-gold">
          <i class="fa-solid fa-building-circle-check mr-2"></i> Explore All Projects
        </a>
        <button class="btn btn-glass btn-hero-tour hero-enquire-btn">
          <i class="fa-solid fa-calendar-check mr-2"></i> Schedule VIP Site Tour
        </button>
      </div>

      <!-- Refined Trust Metric Capsules -->
      <div class="hero-trust-metrics-bar fade-in-up delay-3 mt-xl">
        <div class="metric-capsule">
          <span class="metric-val" data-counter-target="39" data-counter-suffix="+">39+</span>
          <span class="metric-txt">Years of Legacy</span>
        </div>
        <div class="metric-divider-line"></div>
        <div class="metric-capsule">
          <span class="metric-val" data-counter-target="20" data-counter-suffix="+">20+</span>
          <span class="metric-txt">Landmarks Delivered</span>
        </div>
        <div class="metric-divider-line"></div>
        <div class="metric-capsule">
          <span class="metric-val" data-counter-target="5000" data-counter-suffix="+">5,000+</span>
          <span class="metric-txt">Delighted Families</span>
        </div>
        <div class="metric-divider-line"></div>
        <div class="metric-capsule">
          <span class="metric-val" data-counter-target="100" data-counter-suffix="+">100+</span>
          <span class="metric-txt">Curated Amenities</span>
        </div>
      </div>

    </div>
    
    <!-- Floating Minimalist Scroll Cue -->
    <div class="hero-scroll-cue fade-in-up delay-3">
      <span class="mouse-frame">
        <span class="mouse-dot"></span>
      </span>
      <span class="scroll-cue-txt">Scroll to explore</span>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .hero-section-refined {
      min-height: 100vh;
      width: 100%;
      position: relative;
      background-image: url('/assets/hero_new.png'); 
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      padding: 130px 0 90px;
      overflow: hidden;
    }

    .hero-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(5, 15, 30, 0.78) 0%,
        rgba(10, 25, 47, 0.88) 60%,
        rgba(10, 25, 47, 0.96) 100%
      );
      z-index: 1;
    }

    .hero-glow-orb {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
      width: 600px;
      height: 400px;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0) 70%);
      z-index: 1;
      pointer-events: none;
    }

    .hero-container-refined {
      position: relative;
      z-index: 2;
      max-width: 1120px;
    }

    /* Pre-heading Badge */
    .hero-pre-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(212, 175, 55, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.5);
      padding: 7px 20px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-gold);
      margin-bottom: 22px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .badge-sparkle {
      color: var(--color-gold);
      font-size: 0.9rem;
    }

    /* Hero Typography */
    .hero-title-refined {
      font-size: clamp(2.6rem, 5.2vw, 4.4rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1.2rem;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      text-shadow: 0 4px 35px rgba(0, 0, 0, 0.7);
      font-family: var(--font-heading);
    }
    
    .text-gold-gradient {
      background: linear-gradient(135deg, #F3E7C4 0%, #D4AF37 50%, #AA8010 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-style: italic;
      font-weight: 500;
    }

    .hero-subtitle-refined {
      font-size: clamp(1rem, 1.8vw, 1.25rem);
      font-weight: 400;
      margin-bottom: 1.8rem;
      max-width: 820px;
      color: #E2E8F0;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
      line-height: 1.65;
    }

    /* Micro Feature Chips */
    .hero-feature-chips {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 25px;
    }

    .feature-chip {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      gap: 7px;
      transition: all 0.25s ease;
    }

    .feature-chip:hover {
      background: rgba(212, 175, 55, 0.15);
      border-color: var(--color-gold);
      transform: translateY(-2px);
    }

    /* Concierge Property Finder Card */
    .hero-finder-card {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 16px;
      padding: 18px 24px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(212, 175, 55, 0.45);
      width: 100%;
      max-width: 980px;
      margin: 0 auto;
    }
    
    .finder-inner-grid {
      display: grid;
      grid-template-columns: 1.2fr 1.2fr 1.1fr auto;
      gap: 16px;
      align-items: center;
    }
    
    .finder-input-box {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    .finder-lbl {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-navy);
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    
    .finder-select-clean {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      padding: 11px 14px;
      border-radius: 8px;
      color: var(--color-navy);
      font-size: 0.88rem;
      font-weight: 600;
      outline: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .finder-select-clean:focus {
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }
    
    .btn-finder-action {
      padding: 13px 24px;
      white-space: nowrap;
      height: 100%;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 700;
      background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
      color: var(--color-navy);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
      transition: all 0.25s ease;
      cursor: pointer;
    }

    .btn-finder-action:hover {
      background: linear-gradient(135deg, #E5C158 0%, #C9970C 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
    }

    /* CTA Group */
    .hero-cta-group {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .btn-hero-gold {
      padding: 15px 32px;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      border-radius: 9999px;
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      color: #FFFFFF;
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.35);
    }

    .btn-hero-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(212, 175, 55, 0.5);
      background: linear-gradient(135deg, #E5C158 0%, #BD9118 100%);
    }
    
    .btn-hero-tour {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.45);
      color: #FFFFFF;
      padding: 15px 32px;
      font-size: 0.95rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: 600;
      border-radius: 9999px;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .btn-hero-tour:hover {
      background: var(--color-white);
      color: var(--color-navy);
      border-color: var(--color-white);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    /* Trust Metric Capsules Bar */
    .hero-trust-metrics-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(10, 25, 47, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 9999px;
      padding: 12px 34px;
      gap: 28px;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    
    .metric-capsule {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .metric-val {
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--color-gold);
      font-family: var(--font-heading);
      line-height: 1.1;
    }
    
    .metric-txt {
      font-size: 0.72rem;
      color: #CBD5E1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
    
    .metric-divider-line {
      width: 1px;
      height: 26px;
      background: rgba(255, 255, 255, 0.18);
    }

    /* Scroll Cue */
    .hero-scroll-cue {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      opacity: 0.75;
    }
    
    .scroll-cue-txt {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #CBD5E1;
      font-weight: 600;
    }

    .mouse-frame {
      display: block;
      width: 22px;
      height: 34px;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 14px;
      position: relative;
    }

    .mouse-dot {
      display: block;
      width: 4px;
      height: 6px;
      background: var(--color-gold);
      border-radius: 2px;
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
      animation: mouseScrollAnim 2s infinite;
    }

    @keyframes mouseScrollAnim {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 14px); opacity: 0; }
    }

    @media (max-width: 900px) {
      .finder-inner-grid {
        grid-template-columns: 1fr;
      }
      .hero-trust-metrics-bar {
        flex-wrap: wrap;
        border-radius: 16px;
        gap: 15px;
        padding: 15px;
      }
      .metric-divider-line {
        display: none;
      }
      .hero-section-refined {
        padding: 110px 0 70px;
      }
    }
  `;
  section.appendChild(style);

  // Search logic & event handlers
  setTimeout(() => {
    const searchBtn = section.querySelector('#btn-hero-search');
    const locSelect = section.querySelector<HTMLSelectElement>('#finder-location');

    searchBtn?.addEventListener('click', () => {
      const loc = locSelect?.value;
      if (loc === 'kiwale') {
        router.navigate('/project/harico-divaam');
      } else if (loc === 'punawale') {
        router.navigate('/project/harico-edge');
      } else {
        router.navigate('/projects');
      }
    });

    const enquireBtn = section.querySelector('.hero-enquire-btn');
    enquireBtn?.addEventListener('click', () => {
      if ((window as any).showEnquireModal) {
        (window as any).showEnquireModal('VIP Site Tour Request (Refined Hero)');
      }
    });
  }, 0);

  return section;
}
