export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header-pill-wrapper';

  // Scroll detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Spy Scroll Logic
    const sections = ['home', 'builder-legacy', 'projects', 'project-comparison', 'specifications', 'location-hub', 'amenities', 'emi-calculator', 'faq', 'contact'];
    let currentSection = '';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 160)) {
          currentSection = sectionId;
        }
      }
    });

    document.querySelectorAll('.pill-nav-link').forEach(link => {
      link.classList.remove('active');
      const target = link.getAttribute('data-target');
      if (target === currentSection || (currentSection === 'builder-legacy' && target === 'home')) {
        link.classList.add('active');
      }
    });
  });

  header.innerHTML = `
    <div class="pill-navbar">
      <!-- Logo Section -->
      <a href="/" class="pill-logo-link nav-link-internal" data-target="home">
        <img src="/harico_logo.png" alt="Harico Estates" class="pill-logo-img">
      </a>
      
      <!-- Desktop Navigation Menu Inside Pill -->
      <nav class="pill-nav-menu">
        <ul class="pill-nav-list">
          <li><a href="/" class="pill-nav-link nav-link-internal active" data-target="home">Home</a></li>
          <li><a href="/projects" class="pill-nav-link nav-link-internal" data-target="projects">Projects</a></li>
          <li><a href="/project-comparison" class="pill-nav-link nav-link-internal" data-target="project-comparison">Compare</a></li>
          <li><a href="/specifications" class="pill-nav-link nav-link-internal" data-target="specifications">Specs</a></li>
          <li><a href="/location-hub" class="pill-nav-link nav-link-internal" data-target="location-hub">Location</a></li>
          <li><a href="/amenities" class="pill-nav-link nav-link-internal" data-target="amenities">Amenities</a></li>
          <li><a href="/emi-calculator" class="pill-nav-link nav-link-internal" data-target="emi-calculator">EMI Calc</a></li>
          <li><a href="/faq" class="pill-nav-link nav-link-internal" data-target="faq">FAQs</a></li>
          <li><a href="/contact" class="pill-nav-link nav-link-internal" data-target="contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Action Button inside Pill -->
      <div class="pill-actions">
        <a href="https://wa.me/917744009295?text=Hi,%20I%20have%20an%20enquiry%20regarding%20Harico%20Estates%20projects." target="_blank" class="btn-pill-whatsapp">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span class="btn-text">Enquire</span>
        </a>

        <!-- Mobile Toggle Button -->
        <button class="pill-mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div class="pill-mobile-drawer">
      <div class="mobile-drawer-header flex justify-between items-center pb-md border-bottom">
        <img src="/harico_logo.png" alt="Harico Estates" style="height: 36px;">
        <button class="drawer-close-btn">&times;</button>
      </div>
      <ul class="mobile-drawer-list mt-md">
        <li><a href="/" class="mobile-drawer-link" data-target="home">Home</a></li>
        <li><a href="/projects" class="mobile-drawer-link" data-target="projects">Featured Projects</a></li>
        <li><a href="/project-comparison" class="mobile-drawer-link" data-target="project-comparison">Compare Landmarks</a></li>
        <li><a href="/specifications" class="mobile-drawer-link" data-target="specifications">Construction Specs</a></li>
        <li><a href="/location-hub" class="mobile-drawer-link" data-target="location-hub">Location Matrix</a></li>
        <li><a href="/amenities" class="mobile-drawer-link" data-target="amenities">Lifestyle Amenities</a></li>
        <li><a href="/emi-calculator" class="mobile-drawer-link" data-target="emi-calculator">EMI Calculator</a></li>
        <li><a href="/faq" class="mobile-drawer-link" data-target="faq">MahaRERA FAQs</a></li>
        <li><a href="/contact" class="mobile-drawer-link" data-target="contact">Contact & Site Visit</a></li>
      </ul>
      <div class="mt-lg">
        <a href="tel:+917744009295" class="btn btn-primary w-full text-center block">
          <i class="fa-solid fa-phone mr-2"></i> Call +91 7744009295
        </a>
      </div>
    </div>
  `;

  // Attach Styles
  const style = document.createElement('style');
  style.textContent = `
    .header-pill-wrapper {
      position: fixed;
      top: 14px;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 1000;
      display: flex;
      justify-content: center;
      padding: 0 16px;
      pointer-events: none;
      transition: top 0.3s ease;
    }

    .pill-navbar {
      pointer-events: auto;
      width: 100%;
      max-width: 1260px;
      background: rgba(10, 25, 47, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 9999px;
      border: 1px solid rgba(212, 175, 55, 0.4);
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
      padding: 6px 16px 6px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header-pill-wrapper.scrolled .pill-navbar {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.35);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    }

    /* Logo inside Pill */
    .pill-logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .pill-logo-img {
      height: 38px;
      width: auto;
      object-fit: contain;
      filter: brightness(0) invert(1);
      transition: filter 0.3s ease;
    }

    .header-pill-wrapper.scrolled .pill-logo-img {
      filter: none;
    }

    /* Nav Links inside Pill */
    .pill-nav-menu {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    .pill-nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .pill-nav-link {
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      text-decoration: none;
      padding: 6px 13px;
      border-radius: 9999px;
      transition: all 0.2s ease;
      font-family: var(--font-heading);
      white-space: nowrap;
    }

    .header-pill-wrapper.scrolled .pill-nav-link {
      color: var(--color-navy);
    }

    .pill-nav-link:hover {
      color: var(--color-gold);
      background: rgba(212, 175, 55, 0.15);
    }

    .pill-nav-link.active {
      color: #FFFFFF !important;
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%) !important;
      box-shadow: 0 2px 10px rgba(212, 175, 55, 0.4);
    }

    /* Action Buttons inside Pill */
    .pill-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 8px;
      flex-shrink: 0;
    }

    .btn-pill-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #25D366;
      color: #FFFFFF;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 7px 16px;
      border-radius: 9999px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
      transition: transform 0.2s ease, background-color 0.2s ease;
    }

    .btn-pill-whatsapp:hover {
      background: #20BA56;
      transform: scale(1.04);
      color: #FFFFFF;
    }

    /* Mobile Toggle Button */
    .pill-mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 22px;
      height: 16px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    .pill-mobile-toggle span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #FFFFFF;
      border-radius: 2px;
      transition: background-color 0.3s ease;
    }

    .header-pill-wrapper.scrolled .pill-mobile-toggle span {
      background-color: var(--color-navy);
    }

    /* Mobile Drawer */
    .pill-mobile-drawer {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      max-width: 320px;
      height: 100vh;
      background: rgba(255, 255, 255, 0.99);
      backdrop-filter: blur(20px);
      box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
      padding: 30px 25px;
      display: flex;
      flex-direction: column;
      transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1100;
      pointer-events: auto;
      overflow-y: auto;
    }

    .pill-mobile-drawer.open {
      right: 0;
    }

    .drawer-close-btn {
      font-size: 2rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--color-navy);
      line-height: 1;
    }

    .mobile-drawer-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .mobile-drawer-link {
      font-size: 1.05rem;
      color: var(--color-navy);
      font-weight: 600;
      text-decoration: none;
      display: block;
      transition: color 0.2s ease, transform 0.2s ease;
      font-family: var(--font-heading);
    }

    .mobile-drawer-link:hover {
      color: var(--color-gold);
      transform: translateX(4px);
    }

    @media (max-width: 1180px) {
      .pill-nav-menu {
        display: none;
      }
      .pill-mobile-toggle {
        display: flex;
      }
      .pill-navbar {
        padding: 6px 14px;
      }
      .btn-pill-whatsapp .btn-text {
        display: none;
      }
      .btn-pill-whatsapp {
        padding: 8px;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        justify-content: center;
      }
    }
  `;
  header.appendChild(style);

  // Bind Drawer Interactions
  setTimeout(() => {
    const toggleBtn = header.querySelector('.pill-mobile-toggle');
    const closeBtn = header.querySelector('.drawer-close-btn');
    const drawer = header.querySelector('.pill-mobile-drawer');

    toggleBtn?.addEventListener('click', () => {
      drawer?.classList.add('open');
      document.body.classList.add('menu-open');
    });

    closeBtn?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      document.body.classList.remove('menu-open');
    });

    header.querySelectorAll('.mobile-drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer?.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }, 0);

  return header;
}
