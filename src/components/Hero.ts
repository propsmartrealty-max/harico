import { router } from '../router';

export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero-section';

  section.innerHTML = `
    <div class="hero-overlay"></div>
    <div class="hero-content container flex flex-col justify-center items-center text-center">
      
      <!-- Top Trust Tag -->
      <div class="hero-trust-tag fade-in-up">
        <span class="trust-shield-icon"><i class="fa-solid fa-shield-halved"></i></span>
        <span>A 39-Year Legacy by Sentosa Developers & Harico Estates</span>
      </div>

      <h1 class="hero-title fade-in-up delay-1">
        Experience Ultra-Luxury Living <br />
        <span class="text-gold">in Punawale & Kiwale</span>
      </h1>
      
      <p class="hero-subtitle fade-in-up delay-1">
        Spacious 2 & 3 BHK Homes with Dual Balconies, 100+ Lifestyle Amenities, and 2-Minute Expressway Proximity.
      </p>

      <!-- Quick Finder Search Bar Widget -->
      <div class="hero-quick-finder fade-in-up delay-2">
        <div class="finder-form-grid">
          
          <div class="finder-field">
            <label><i class="fa-solid fa-location-dot text-gold mr-1"></i> Micro-Location</label>
            <select id="finder-location" class="finder-select">
              <option value="all">All Locations (Punawale & Kiwale)</option>
              <option value="punawale">Punawale, Pune</option>
              <option value="kiwale">Kiwale, Pune</option>
            </select>
          </div>

          <div class="finder-field">
            <label><i class="fa-solid fa-bed text-gold mr-1"></i> Configuration</label>
            <select id="finder-config" class="finder-select">
              <option value="all">2 & 3 BHK Homes</option>
              <option value="2bhk">2 BHK Luxury (724 - 848 sq.ft)</option>
              <option value="3bhk">3 BHK Grand (920 - 1180 sq.ft)</option>
            </select>
          </div>

          <div class="finder-field">
            <label><i class="fa-solid fa-indian-rupee-sign text-gold mr-1"></i> Price Budget</label>
            <select id="finder-budget" class="finder-select">
              <option value="all">All Budgets (₹64.5L - ₹1.2Cr)</option>
              <option value="under75">₹64.5 Lacs - ₹75 Lacs</option>
              <option value="75to100">₹75 Lacs - ₹1.00 Crore</option>
              <option value="above100">₹1.00 Crore+</option>
            </select>
          </div>

          <div class="finder-action">
            <button id="btn-hero-search" class="btn btn-primary btn-finder-search">
              <i class="fa-solid fa-magnifying-glass mr-2"></i> Explore Homes
            </button>
          </div>

        </div>
      </div>

      <!-- Action Buttons -->
      <div class="hero-actions fade-in-up delay-2 mt-lg">
        <a href="/projects" class="btn btn-primary hero-btn">Explore All Projects</a>
        <button class="btn btn-glass hero-enquire-btn">Schedule Site Visit</button>
      </div>

      <!-- Trust Metrics Bar inside Hero -->
      <div class="hero-stats-strip fade-in-up delay-3 mt-xl">
        <div class="stat-pill">
          <span class="stat-num">39+</span>
          <span class="stat-lbl">Years Legacy</span>
        </div>
        <div class="stat-sep"></div>
        <div class="stat-pill">
          <span class="stat-num">20+</span>
          <span class="stat-lbl">Landmarks Delivered</span>
        </div>
        <div class="stat-sep"></div>
        <div class="stat-pill">
          <span class="stat-num">5,000+</span>
          <span class="stat-lbl">Happy Families</span>
        </div>
        <div class="stat-sep"></div>
        <div class="stat-pill">
          <span class="stat-num">100%</span>
          <span class="stat-lbl">MahaRERA Registered</span>
        </div>
      </div>

    </div>
    
    <div class="scroll-indicator fade-in-up delay-3">
        <span class="mouse-icon">
            <span class="wheel"></span>
        </span>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .hero-section {
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
      color: var(--color-white);
      margin-top: -90px;
      padding: 140px 0 100px;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(10, 25, 47, 0.75) 0%,
        rgba(10, 25, 47, 0.88) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1100px;
    }

    .hero-trust-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.4);
      padding: 8px 18px;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-gold);
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }
    
    .trust-shield-icon {
      color: var(--color-gold);
    }

    .hero-title {
      font-size: clamp(2.6rem, 5.5vw, 4.5rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      text-shadow: 0 4px 30px rgba(0,0,0,0.8);
      font-family: var(--font-heading);
    }
    
    .text-gold {
      color: var(--color-gold);
      position: relative;
      font-style: italic;
      font-weight: 400;
    }

    .hero-subtitle {
      font-size: clamp(1.05rem, 2vw, 1.35rem);
      font-weight: 400;
      margin-bottom: 2rem;
      max-width: 800px;
      color: #E2E8F0;
      text-shadow: 0 2px 15px rgba(0,0,0,0.8);
      line-height: 1.6;
    }

    /* Quick Finder Widget */
    .hero-quick-finder {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(16px);
      border-radius: var(--radius-lg);
      padding: 16px 20px;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(212, 175, 55, 0.5);
      width: 100%;
      max-width: 950px;
      margin: 0 auto;
    }
    
    .finder-form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr auto;
      gap: 15px;
      align-items: center;
    }
    
    .finder-field {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .finder-field label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-navy);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .finder-select {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      padding: 10px 12px;
      border-radius: 6px;
      color: var(--color-navy);
      font-size: 0.9rem;
      font-weight: 600;
      outline: none;
      cursor: pointer;
      transition: border-color 0.2s ease;
    }
    
    .finder-select:focus {
      border-color: var(--color-gold);
    }
    
    .btn-finder-search {
      padding: 14px 26px;
      white-space: nowrap;
      height: 100%;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .hero-actions {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .hero-btn {
      padding: 16px 36px;
      font-size: 1rem;
      letter-spacing: 1px;
    }
    
    .btn-glass {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: white;
      padding: 16px 36px;
      font-size: 1rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .btn-glass:hover {
      background: var(--color-gold);
      border-color: var(--color-gold);
      color: var(--color-navy);
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    /* Hero Stats Strip */
    .hero-stats-strip {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(10, 25, 47, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50px;
      padding: 12px 30px;
      gap: 25px;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
    
    .stat-pill {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .stat-num {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--color-gold);
      font-family: var(--font-heading);
      line-height: 1.1;
    }
    
    .stat-lbl {
      font-size: 0.7rem;
      color: #CBD5E1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
    
    .stat-sep {
      width: 1px;
      height: 25px;
      background: rgba(255, 255, 255, 0.2);
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      opacity: 0.8;
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
      40% {transform: translateX(-50%) translateY(-10px);}
      60% {transform: translateX(-50%) translateY(-5px);}
    }

    .mouse-icon {
      display: block;
      width: 26px;
      height: 42px;
      border: 2px solid rgba(255,255,255,0.7);
      border-radius: 20px;
      position: relative;
    }

    .wheel {
      display: block;
      width: 4px;
      height: 8px;
      background: var(--color-gold);
      border-radius: 2px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: scrollWheel 2s infinite;
    }

    @keyframes scrollWheel {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 16px); opacity: 0; }
    }

    @media (max-width: 900px) {
      .finder-form-grid {
        grid-template-columns: 1fr;
      }
      .hero-stats-strip {
        flex-wrap: wrap;
        border-radius: 16px;
        gap: 15px;
        padding: 15px;
      }
      .stat-sep {
        display: none;
      }
    }
  `;
  section.appendChild(style);

  // Quick search button logic
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
        (window as any).showEnquireModal('VIP Site Visit Request (Hero)');
      }
    });
  }, 0);

  return section;
}
