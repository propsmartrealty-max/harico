export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  // Add sticky functionality with scroll detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Spy Scroll Logic
    const sections = ['home', 'projects', 'amenities', 'contact'];
    let currentSection = '';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId === 'home' ? 'hero' : sectionId); // Map home to hero
      if (section) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 150)) {
          currentSection = sectionId;
        }
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === currentSection) {
        link.classList.add('active');
      }
    });
  });

  header.innerHTML = `
    <div class="header-container">
      <!-- Logo Section -->
      <a href="/" class="logo-link nav-link-internal" data-target="home">
         <img src="/harico_logo.png" alt="Harico Estates" class="logo-img">
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="nav-menu">
        <ul class="nav-list">
          <li><a href="/" class="nav-link nav-link-internal active" data-target="home">Home</a></li>
          <li><a href="/projects" class="nav-link nav-link-internal" data-target="projects">Projects</a></li>
          <li><a href="/amenities" class="nav-link nav-link-internal" data-target="amenities">Amenities</a></li>
          <li><a href="/contact" class="nav-link nav-link-internal" data-target="contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Actions Section -->
      <div class="header-actions">
        <!-- Contact Icons -->
        <a href="https://wa.me/917744009295" target="_blank" class="btn btn-whatsapp header-whatsapp">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span class="btn-text-content">+91 7744009295</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav">
      <ul class="mobile-nav-list">
        <li><a href="/" class="mobile-nav-link" data-target="home">Home</a></li>
        <li><a href="/projects" class="mobile-nav-link" data-target="projects">Projects</a></li>
        <li><a href="/amenities" class="mobile-nav-link" data-target="amenities">Amenities</a></li>
        <li><a href="/contact" class="mobile-nav-link" data-target="contact">Contact</a></li>
      </ul>
    </div>
  `;

  // Attach Styles
  const style = document.createElement('style');
  style.textContent = `
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 90px;
      z-index: var(--z-header);
      background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent); /* Init gradient for hero */
      transition: all var(--transition-normal);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      height: 70px;
    }

    .header-container {
      width: 100%;
      max-width: var(--container-width);
      padding: 0 var(--container-padding);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    /* Logo Styling */
    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 100%;
      z-index: 10;
    }
    
    .logo-img {
      height: 60px; /* Refined initial size */
      width: auto;
      object-fit: contain;
      transition: all var(--transition-normal);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    }
    
    .header.scrolled .logo-img {
       height: 50px;
    }

    /* Desktop Navigation */
    .nav-menu {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 3rem;
      align-items: center;
    }

    .nav-link {
      color: var(--color-white);
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      position: relative;
      padding: 8px 0;
      transition: color var(--transition-fast);
      font-family: var(--font-heading);
    }
    
    .nav-link.active::after {
        width: 100%;
    }

    .header.scrolled .nav-link {
      color: var(--color-navy);
      font-weight: 600;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-gold);
      transition: width var(--transition-normal);
    }

    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-link:hover, .nav-link.active {
        color: var(--color-gold);
    }

    /* Actions Area */
    .header-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10;
    }
    
    .btn-whatsapp {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #25D366;
      color: white;
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.4);
      letter-spacing: 0.5px;
    }
    
    .btn-whatsapp:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.5);
      background-color: #20BA56;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      z-index: calc(var(--z-header) + 10);
      cursor: pointer;
    }
    
    .mobile-menu-btn span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-white);
      transition: all var(--transition-fast);
      border-radius: 2px;
    }
    .header.scrolled .mobile-menu-btn span { background-color: var(--color-navy); }
    
    /* When menu is open, force spans to be visible/dark if needed */
    body.menu-open .mobile-menu-btn span {
        background-color: var(--color-navy) !important;
    }

    /* Mobile Nav Overlay */
    .mobile-nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      max-width: 300px;
      height: 100vh;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      z-index: var(--z-header);
      padding: 120px 30px 40px;
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: -5px 0 25px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
    }

    .mobile-nav.open {
      right: 0;
    }

    .mobile-nav-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .mobile-nav-link {
      font-size: 1.4rem;
      color: var(--color-navy);
      font-weight: 600;
      text-decoration: none;
      display: block;
      transition: color 0.2s;
      font-family: var(--font-heading);
    }
    
    .mobile-nav-link:hover {
        color: var(--color-gold);
        transform: translateX(5px);
    }

    @media (max-width: 900px) {
      .nav-menu { display: none; }
      .mobile-menu-btn { display: flex; }
      .header-actions {
        gap: 0.5rem;
      }
      .btn-whatsapp .btn-text-content { display: none; } 
      .btn-whatsapp { 
        padding: 10px; 
        border-radius: 50%;
        width: 45px;
        height: 45px;
        justify-content: center;
        gap: 0;
      }
      .logo-img { height: 50px; }
      .header { height: 70px; }
      
      /* Ensure header is visible on mobile if transparent isn't working well with image */
      .header:not(.scrolled) {
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent); 
      }
    }
  `;
  header.appendChild(style);

  // Logic
  setTimeout(() => {
    // Scroll Logic for links: Link listener ONLY responsible for closing mobile menu.
    // Navigation is handled by global Router listener on document.
    document.querySelectorAll('.nav-link-internal, .mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        // Just close mobile menu
        const mobileNav = header.querySelector('.mobile-nav') as HTMLElement;
        if (mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          document.body.classList.remove('menu-open');
          const mobileBtn = header.querySelector('.mobile-menu-btn') as HTMLElement;
          resetBurger(mobileBtn);
        }
      });
    });

    // Mobile Menu Toggle
    const mobileBtn = header.querySelector('.mobile-menu-btn') as HTMLElement;
    const mobileNav = header.querySelector('.mobile-nav') as HTMLElement;

    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('menu-open');

      const spans = mobileBtn.querySelectorAll('span');
      if (mobileNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        spans.forEach(s => s.style.backgroundColor = 'var(--color-navy)');
      } else {
        resetBurger(mobileBtn);
      }
    });

    function resetBurger(btn: HTMLElement) {
      const spans = btn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';

      // Reset color check
      if (!header.classList.contains('scrolled')) {
        spans.forEach(s => s.style.backgroundColor = 'var(--color-white)');
      } else {
        spans.forEach(s => s.style.backgroundColor = 'var(--color-navy)');
      }
    }

  }, 0);

  return header;
}
