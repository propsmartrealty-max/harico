(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function A(){const e=document.createElement("header");e.className="header",window.addEventListener("scroll",()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled");const a=["home","projects","amenities","contact"];let n="";a.forEach(o=>{const r=document.getElementById(o==="home"?"hero":o);if(r){const i=r.offsetTop;window.scrollY>=i-150&&(n=o)}}),document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("data-target")===n&&o.classList.add("active")})}),e.innerHTML=`
    <div class="header-container">
      <!-- Logo Section -->
      <a href="#home" class="logo-link nav-link-internal" data-target="home">
         <img src="/harico_logo.png" alt="Harico Estates" class="logo-img">
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="nav-menu">
        <ul class="nav-list">
          <li><a href="#home" class="nav-link nav-link-internal active" data-target="home">Home</a></li>
          <li><a href="#projects" class="nav-link nav-link-internal" data-target="projects">Projects</a></li>
          <li><a href="#amenities" class="nav-link nav-link-internal" data-target="amenities">Amenities</a></li>
          <li><a href="#contact" class="nav-link nav-link-internal" data-target="contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Actions Section -->
      <div class="header-actions">
        <!-- Contact Icons -->
        <a href="https://wa.me/917744009295" target="_blank" class="btn btn-whatsapp header-whatsapp">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
        <li><a href="#home" class="mobile-nav-link" data-target="home">Home</a></li>
        <li><a href="#projects" class="mobile-nav-link" data-target="projects">Projects</a></li>
        <li><a href="#amenities" class="mobile-nav-link" data-target="amenities">Amenities</a></li>
        <li><a href="#contact" class="mobile-nav-link" data-target="contact">Contact</a></li>
      </ul>
    </div>
  `;const t=document.createElement("style");return t.textContent=`
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
  `,e.appendChild(t),setTimeout(()=>{document.querySelectorAll(".nav-link-internal, .mobile-nav-link").forEach(r=>{r.addEventListener("click",i=>{const l=i.currentTarget.dataset.target;if(l){i.preventDefault(),e.querySelector(".mobile-nav").classList.remove("open"),document.body.classList.remove("menu-open");const s=e.querySelector(".mobile-menu-btn");if(o(s),l==="home")window.location.hash&&window.location.hash!=="#/"&&window.location.hash!==""?window.location.hash="/":window.scrollTo({top:0,behavior:"smooth"});else{const d=document.getElementById(l);if(d){const g=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:g,behavior:"smooth"})}else window.location.hash=l}}})});const a=e.querySelector(".mobile-menu-btn"),n=e.querySelector(".mobile-nav");a.addEventListener("click",()=>{n.classList.toggle("open"),document.body.classList.toggle("menu-open");const r=a.querySelectorAll("span");n.classList.contains("open")?(r[0].style.transform="rotate(45deg) translate(5px, 6px)",r[1].style.opacity="0",r[2].style.transform="rotate(-45deg) translate(5px, -6px)",r.forEach(i=>i.style.backgroundColor="var(--color-navy)")):o(a)});function o(r){const i=r.querySelectorAll("span");i[0].style.transform="none",i[1].style.opacity="1",i[2].style.transform="none",e.classList.contains("scrolled")?i.forEach(l=>l.style.backgroundColor="var(--color-navy)"):i.forEach(l=>l.style.backgroundColor="var(--color-white)")}},0),e}function T(){const e=document.createElement("section");e.id="hero",e.className="hero-section",e.innerHTML=`
    <div class="hero-overlay"></div>
    <div class="hero-content container flex flex-col justify-center items-center text-center">
      <h1 class="hero-title fade-in-up">
        Experience Premium Living <br />
        <span class="text-gold">in Punawale</span>
      </h1>
      <p class="hero-subtitle fade-in-up delay-1">
        Discover spacious 2 & 3 BHK homes designed for your lifestyle.
      </p>
      <div class="hero-actions fade-in-up delay-2">
        <a href="#projects" class="btn btn-primary hero-btn">View Projects</a>
        <button class="btn btn-glass hero-enquire-btn">Enquire Now</button>
      </div>
    </div>
    
    <div class="scroll-indicator fade-in-up delay-3">
        <span class="mouse-icon">
            <span class="wheel"></span>
        </span>
    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .hero-section {
      height: 100vh;
      min-height: 600px;
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
      margin-top: var(--header-height-negative, -80px);
      padding-top: 80px;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(10, 25, 47, 0.5) 0%,
        rgba(10, 25, 47, 0.7) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 900px;
    }

    .hero-title {
      font-size: clamp(3rem, 6vw, 5rem);
      font-weight: 800; /* Extra Bold for visibility */
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
      color: #FFFFFF; /* Force Pure White */
      text-shadow: 0 4px 30px rgba(0,0,0,0.8); /* Stronger shadow */
      font-family: 'Montserrat', sans-serif; /* Explicitly set Google Font */
    }
    
    .text-gold {
        color: var(--color-gold);
        position: relative;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300; 
        font-style: italic;
        text-shadow: 0 4px 30px rgba(0,0,0,0.8);
    }

    .hero-subtitle {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      font-weight: 400; /* Regular weight */
      margin-bottom: 3rem;
      max-width: 700px;
      color: #FFFFFF; /* Force Pure White */
      text-shadow: 0 4px 20px rgba(0,0,0,0.8); /* Stronger shadow */
      line-height: 1.6;
      letter-spacing: 0.5px;
      font-family: 'Poppins', sans-serif;
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
    
    /* Glass Button Styles */
    .btn-glass {
        background: rgba(255, 255, 255, 0.1);
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
    }
    
    .btn-glass:hover {
        background: var(--color-gold);
        border-color: var(--color-gold);
        color: var(--color-navy);
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    /* Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: 40px;
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
        width: 30px;
        height: 48px;
        border: 2px solid rgba(255,255,255,0.7);
        border-radius: 20px;
        position: relative;
    }

    .wheel {
        display: block;
        width: 4px;
        height: 8px;
        background: var(--color-white);
        border-radius: 2px;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        animation: scrollWheel 2s infinite;
    }

    @keyframes scrollWheel {
        0% { transform: translate(-50%, 0); opacity: 1; }
        100% { transform: translate(-50%, 20px); opacity: 0; }
    }

    /* Animations */
    .fade-in-up {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .delay-1 { animation-delay: 0.3s; }
    .delay-2 { animation-delay: 0.6s; }
    .delay-3 { animation-delay: 1.2s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
        .hero-section {
            background-attachment: scroll;
        }
        .hero-title {
            font-size: 2.5rem;
        }
    }
  `,e.appendChild(t),setTimeout(()=>{const a=e.querySelector(".hero-enquire-btn");a&&a.addEventListener("click",()=>{window.showEnquireModal&&window.showEnquireModal()})},0),e}function z(e){const t=document.createElement("article");return t.className="project-card",t.onclick=a=>{if(a.target.tagName.toLowerCase()==="button")return;const n=e.slug||e.id;window.location.hash=`#project/${n}`},t.innerHTML=`
    <div class="card-image-wrapper">
      <img src="${e.image}" alt="${e.title}" class="card-image" loading="lazy">
      <div class="card-badges">
        <span class="status-badge ${e.status.toLowerCase()}">${e.status}</span>
      </div>
      <div class="card-overlay">
        <button class="btn-overlay btn-explore" onclick="event.stopPropagation(); window.location.hash = '#project/${e.slug||e.id}'">Explore</button>
        <button class="btn-overlay btn-enquire" onclick="event.stopPropagation(); window.showEnquireModal('${e.title}');">Enquire</button>
      </div>
    </div>
    
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">${e.title}</h3>
        <p class="card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px; color:var(--color-gold)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${e.location}
        </p>
      </div>
      
      <div class="card-details">
         <div class="detail-item">
            <span class="detail-icon">🏢</span>
            <div class="detail-text">
                <span class="detail-label">Type</span>
                <span class="detail-value">${e.type}</span>
            </div>
         </div>
         ${e.price?`
         <div class="detail-item">
            <span class="detail-icon">💰</span>
            <div class="detail-text">
                <span class="detail-label">Price</span>
                <span class="detail-value">${e.price}</span>
            </div>
         </div>
         `:""}
      </div>

      <div class="card-actions">
        <div class="btn-text">
          View Details 
          <span class="arrow-icon">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L17 6L12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 6H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `,t}const B=`
  .project-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); /* Softer, deeper shadow */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.05);
  }

  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }

  /* Image Section */
  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3; /* Standard balanced ratio */
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .project-card:hover .card-image {
    transform: scale(1.1);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 25, 47, 0.4); /* Navy tint */
    opacity: 0; 
    transition: opacity 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .project-card:hover .card-overlay {
    opacity: 1;
  }
  
  .btn-overlay {
      background: var(--color-white);
      color: var(--color-navy);
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8rem;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.4s 0.1s ease;
      border: none;
  }
  
  .project-card:hover .btn-overlay {
      transform: translateY(0);
      opacity: 1;
  }
  
  .btn-overlay.btn-explore { transition-delay: 0.1s; }
  .btn-overlay.btn-enquire { 
      transition-delay: 0.2s; 
      margin-left: 10px;
      background: var(--color-gold);
      color: var(--color-white);
  }

  .card-badges {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 2;
  }

  .status-badge {
    padding: 6px 12px;
    border-radius: 4px; /* Square edges for modern tech look or soft round */
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.95);
    color: var(--color-navy);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    backdrop-filter: blur(4px);
  }
  
  .status-badge.ongoing { border-left: 3px solid var(--color-gold); }
  .status-badge.completed { border-left: 3px solid var(--color-success); }
  .status-badge.upcoming { border-left: 3px solid var(--color-navy); }

  /* Content Section */
  .card-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
  }

  .card-header {
    border-bottom: 1px solid var(--color-border-light);
    padding-bottom: 15px;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 5px;
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
  }

  .card-location {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .card-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  
  .detail-icon {
      margin-top: 2px;
      font-size: 1.1rem;
  }
  
  .detail-text {
      display: flex;
      flex-direction: column;
  }

  .detail-label {
    font-size: 0.7rem;
    color: var(--color-text-light);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .detail-value {
    font-size: 0.9rem;
    color: var(--color-navy);
    font-weight: 600;
  }

  .card-actions {
    margin-top: auto;
    padding-top: 10px;
  }

  .btn-text {
    width: 100%;
    text-align: left;
    padding: 0;
    background: transparent;
    color: var(--color-gold);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: color var(--transition-normal);
  }

  .project-card:hover .btn-text {
    color: var(--color-navy);
  }
  
  .arrow-icon {
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
  }
  
  .project-card:hover .arrow-icon {
      transform: translateX(8px);
      color: var(--color-navy);
  }
`,x={1:{id:"1",slug:"harico-edge",title:"HARICO EDGE",location:"Punawale, Pune",status:"Ongoing",type:"2 & 3 BHK Premium Homes",price:"74 Lacs Onwards",possession:"2029",image:"/assets/harico-edge-hero.png",tagline:"A Glimpse Into Excellence | The Edge Of Timeless Modern Sophistication",description:"Harico Edge (formerly Sentosa Edge) offers a peaceful and modern lifestyle in one of Pune’s most convenient and growing neighbourhoods, Punawale. Spread across a 2.5-acre land parcel, the project features well-designed 2 and 3 BHK Ultra-Premium homes that are spacious, bright, and thoughtfully planned. With soothing green views, practical layouts, 2 balconies in 2 BHKs, and a walk-in wardrobe in 3 BHKs, every home is designed for comfortable, easy family living. The community brings together 50+ lifestyle amenities for relaxation, fitness, and leisure. RERA ID: PM1260002501839.",amenities:["Swimming Pool","Kids Play Area","Party Lawn","Temple & Flag Hoisting","Gazebo","Sun Bathing Area","Pool Deck Area","Rooftop Amenities","Yoga & Zumba Room","Gym & Jogging Track","Sunset Point","Decorated Entrance Gate","Intercom System & CCTV","EV Charging Point","Solar Power Backup","Multipurpose Hall","Mini Theater","Barbeque Counter","Day Care Room","Library","Snooker Lounge"],connectivity:[{title:"Mumbai-Pune Highway",time:"02 min"},{title:"Preschool & Schools",time:"01 min"},{title:"Decathlon Sports - Wakad",time:"08 Min"},{title:"Balaji Temple Punawale",time:"04 Min"},{title:"Akshara International School",time:"10 Min"},{title:"JSPM College",time:"03 Min"},{title:"Phoenix Mall of the Millennium",time:"10 Min"},{title:"Lifepoint Multispecialty Hospital",time:"11 Min"}],configurations:[{type:"2 BHK Smart",carpet:"741 sq.ft",price:"₹ 74 Lacs*"},{type:"2 BHK Premium",carpet:"781 sq.ft",price:"₹ 80 Lacs*"},{type:"2 BHK Grande",carpet:"826 sq.ft",price:"₹ 84 Lacs*"},{type:"3 BHK Comfort",carpet:"942 sq.ft",price:"₹ 89 Lacs*"},{type:"3 BHK Luxury",carpet:"1048 sq.ft",price:"₹ 98 Lacs*"},{type:"3 BHK Grande",carpet:"1114 sq.ft",price:"₹ 1.12 Cr*"},{type:"3 BHK Royale",carpet:"1148 sq.ft",price:"₹ 1.18 Cr*"}],seo:{title:"Harico Edge Punawale | Premium 2 & 3 BHK Flats near Wakad",description:"Harico Edge (Sentosa Edge) in Punawale offers ultra-premium 2 & 3 BHK homes with 50+ amenities. Near Mumbai-Pune Highway & Phoenix Mall. RERA: PM1260002501839.",keywords:"Harico Edge, Sentosa Edge, 2 BHK Punawale, 3 BHK Punawale, Flats near Wakad, New Construction Punawale, Harico Estates"}},2:{id:"2",slug:"2-3-bhk-flats-in-kiwale-harico-divaam",title:"HARICO DIVAAM",location:"Kiwale, Pune",status:"Upcoming",type:"2 & 3 BHK Premium Homes",price:"Starts ₹64.50 Lacs*",image:"/assets/harico-divaam-hero.jpg",tagline:"Divine Living Experience | Premium 2 & 3 BHK Homes | A Sentosa Group Venture",description:"Harico Divaam (Sentosa Harico Codename Divine) offers a perfect blend of modern architecture and divine living in Kiwale. Backed by a 39-year legacy of the Sentosa Group, this project is spread across 5 acres with 5 towers of 24 storeys each. It offers a lifestyle of luxury and convenience with over 100+ world-class lifestyle amenities categorized into Water & Wellness, Sports & Entertainment, and Premium Lifestyle.",amenities:[{category:"Water & Wellness",items:["Resort-inspired Swimming Pool","Children's Splash Pool","Poolside Leisure Deck","Cabana-style Pergolas","BBQ & Poolside Party Deck","Sacred Temple Pavilion","Meditation & Yoga Lawns","Zen Tranquillity Garden","Reflexology Walkway","Sensory & Aromatherapy Garden","Sky-level Gym","Indoor Yoga Studio"]},{category:"Sports & Entertainment",items:["Children's Play Zone","Creative Sand Play","Multi-purpose Sports Court","Professional Mini Cricket Turf","Jogging & Walking Track","Dedicated Pet Park","Open-air Amphitheatre","Party Hall with DJ System","Private Mini Theatre","Indoor Games Lounge","Music/Dance/Hobby Studio"]},{category:"Premium Lifestyle",items:["12 Premium Guest Suites","Luxury Salon & Beauty Parlour","Exclusive Residents' Sky Lounge","Co-working Spaces","Podcast & Content Creator Studio","Sky Observation Deck","EV Charging Points"]}],connectivity:[{title:"Mumbai-Pune Expressway",time:"02 Min"},{title:"Mukai Chowk / Ravet",time:"05 Min"},{title:"Sentosa Water Park",time:"Opposite"},{title:"MCA Stadium (Gahunje)",time:"Near"},{title:"Symbiosis College",time:"Near"},{title:"Hinjewadi IT Park",time:"20 Min"},{title:"Phoenix Mall of the Millennium",time:"10 Min"},{title:"Aditya Birla Hospital",time:"15 Min"},{title:"D.Y. Patil University",time:"10 Min"}],configurations:[{type:"2 BHK Smart",carpet:"724 sq.ft",price:"₹ 64.50 - 66.50 Lacs*"},{type:"2 BHK Comfort",carpet:"760 sq.ft",price:"₹ 67.50 - 69.50 Lacs*"},{type:"2 BHK Prime",carpet:"791 sq.ft",price:"₹ 69.90 - 71.90 Lacs*"},{type:"2 BHK Grand",carpet:"848 sq.ft",price:"₹ 72.00 - 74.00 Lacs*"},{type:"3 BHK Smart",carpet:"920 sq.ft",price:"₹ 80.50 - 82.50 Lacs*"},{type:"3 BHK Comfort",carpet:"983 sq.ft",price:"₹ 86.00 - 88.00 Lacs*"},{type:"3 BHK Prime",carpet:"1051 sq.ft",price:"₹ 93.00 - 95.00 Lacs*"},{type:"3 BHK Grand",carpet:"1108 sq.ft",price:"₹ 95.00 - 97.00 Lacs*"}],possession:"2028",masterLayout:"/assets/harico-divaam-master-layout.png",floorPlans:[{title:"2 BHK Smart",image:"/assets/harico-divaam-2bhk-smart.png"},{title:"2 BHK Comfort",image:"/assets/harico-divaam-2bhk-comfort-v3.png"},{title:"2 BHK Prime",image:"/assets/harico-divaam-2bhk-prime-v3.png"},{title:"2 BHK Grand",image:"/assets/harico-divaam-2bhk-grand.png"},{title:"3 BHK Smart",image:"/assets/harico-divaam-3bhk-smart-v3.png"},{title:"3 BHK Comfort",image:"/assets/harico-divaam-3bhk-comfort.png"},{title:"3 BHK Grand",image:"/assets/harico-divaam-3bhk-grand-v3.png"}],seo:{title:"Harico Divaam Kiwale | Luxury 2 & 3 BHK Flats | Sentosa Legacy",description:"Harico Divaam offers divine 2 & 3 BHK homes in Kiwale, Pune using Sentosa Group's 39-year legacy. 100+ Amenities, Sky Lounge, EV Charging. Near Mumbai-Pune Expressway.",keywords:"Harico Divaam, Sentosa Kiwale, 2 BHK Kiwale, 3 BHK Kiwale, Luxury Flats Pune, Flats near Expressway, Sentosa Divine"}},3:{id:"3",slug:"premium-2-3-bhk-punawale-harico-pride",title:"HARICO PRIDE",location:"Punawale, Pune",status:"Ongoing",type:"Premium 2 & 3 BHK Homes",price:"Coming Soon",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",tagline:"Premium in Every Inch and Intention",description:"Discover the biggest carpet and beautifully designed 2 & 3 BHK residences at Harico Pride in Punawale. These homes are enhanced by natural light, cross ventilation, and green surroundings. Smartly designed, Harico Pride offers a lifestyle that blends comfort, safety, and daily convenience.",amenities:["Swimming Pool","Clubhouse","Gym","Rooftop Amenities","Children Play Area","Party Lawn","Landscape Garden","Yoga Deck","Senior Citizen Sitout"],connectivity:[{title:"Mumbai-Pune Expressway",time:"05 Min"},{title:"Aditya Birla Hospital",time:"10 Min"},{title:"Phoenix Mall",time:"10 Min"},{title:"Bhiku Vallabh Kale School",time:"02 Min"}],configurations:[],reraId:"P52100050231",seo:{title:"Harico Pride Punawale | New Launch 2 & 3 BHK | Sentosa Pride",description:"Harico Pride (Sentosa Pride) in Punawale offers spacious 2 & 3 BHK homes with premium amenities. Near Bhiku Vallabh Kale School. RERA: P52100050231.",keywords:"Harico Pride, Sentosa Pride, 2 BHK Punawale, 3 BHK Punawale, New Launch Pune, Premium Apartments Punawale"}}},I=Object.values(x);function R(){const e=document.createElement("section");e.id="projects",e.className="section projects-section",e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Exceptional Living</span>
        <h2 class="section-title fade-in-up delay-1">Exclusive Works</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="tabs-container fade-in-up delay-2 mb-xl text-center">
        <button class="filter-tab active" data-filter="all">All Projects</button>
        <button class="filter-tab" data-filter="residential">Residential</button>
        <button class="filter-tab" data-filter="commercial">Commercial</button>
        <button class="filter-tab" data-filter="ongoing">Ongoing</button>
      </div>
      
      <div class="grid projects-grid">
        <!-- Projects injected here -->
      </div>
    </div>
  `;const t=e.querySelector(".projects-grid"),a=e.querySelectorAll(".filter-tab"),n=new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&(l.target.classList.add("visible"),n.unobserve(l.target))})},{threshold:.1});function o(i){t.innerHTML="";const l=I.filter(c=>i==="all"?!0:i==="ongoing"?c.status==="Ongoing":i==="residential"?c.type.toLowerCase().includes("home")||c.type.includes("BHK")||c.type.includes("Apartment"):i==="commercial"?c.type.toLowerCase().includes("commercial")||c.type.includes("Office"):!0);if(l.length===0){t.innerHTML='<div class="text-center col-span-full py-xl text-muted">No projects found in this category.</div>';return}l.forEach((c,s)=>{const d=z(c);d.classList.add("project-card-wrapper"),d.style.opacity="0",d.style.transform="translateY(30px)",d.classList.add("animate-card"),d.style.transitionDelay=`${s*.1}s`,t.appendChild(d),setTimeout(()=>n.observe(d),50)})}o("all"),a.forEach(i=>{i.addEventListener("click",()=>{a.forEach(c=>c.classList.remove("active")),i.classList.add("active");const l=i.getAttribute("data-filter")||"all";o(l)})});const r=document.createElement("style");return r.textContent=`
    ${B}
    
    .projects-section {
      background-color: var(--color-secondary-bg);
      padding: 100px 0;
      position: relative;
    }
    
    .eyebrow {
      display: block;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 15px;
      font-family: var(--font-heading);
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--color-navy);
      font-weight: 700;
      margin-bottom: 20px;
      font-family: var(--font-heading);
    }

    .title-separator {
      width: 80px;
      height: 3px;
      background-color: var(--color-gold);
      margin-bottom: 30px; /* Reduced to fit tabs */
      position: relative;
    }
    
    .title-separator::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 10px;
        height: 3px;
        background-color: var(--color-navy);
    }

    /* Tabs Styles */
    .tabs-container {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    .filter-tab {
        background: transparent;
        border: 1px solid var(--color-border);
        padding: 10px 25px;
        border-radius: 30px;
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 1px;
    }

    .filter-tab:hover {
        border-color: var(--color-gold);
        color: var(--color-gold);
    }

    .filter-tab.active {
        background: var(--color-gold);
        border-color: var(--color-gold);
        color: var(--color-white);
        box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
    }

    .mx-auto { margin-left: auto; margin-right: auto; }
    .mb-xl { margin-bottom: var(--spacing-xl); }
    .col-span-full { grid-column: 1 / -1; }
    .text-muted { color: var(--color-text-light); }
    .py-xl { padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl); }

    .projects-grid {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      padding: 0 10px;
    }

    /* Animation Classes */
    .animate-card {
        transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    .animate-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .fade-in-up {
        opacity: 0;
        animation: fadeUp 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    
    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
  `,e.appendChild(r),e}function N(){const e=document.createElement("div");e.className="amenities-section section";const t={pool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20c1.333-1.667 3-1.667 4.333 0S9.667 21.667 11 20s3-1.667 4.333 0S18.667 21.667 20 20"/><path d="M2 16c1.333-1.667 3-1.667 4.333 0S9.667 17.667 11 16s3-1.667 4.333 0S18.667 17.667 20 16"/><path d="M12 9a4 4 0 1 1 4 4"/></svg>',gym:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l-2 2 3.5 3.5L9 10 4 8z"/><path d="M20 8l2 2-3.5 3.5L15 10l5-2z"/><path d="M9 10l1.3 7h3.4L15 10"/><path d="M4 8l-2 2 3.5 3.5L9 10 4 8zM20 8l2 2-3.5 3.5L15 10l5-2z"/><circle cx="12" cy="5" r="3"/></svg>',clubhouse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M10 8h4"/><path d="M12 8v8"/><path d="M8.5 14h7"/></svg>',track:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6a4.5 4.5 0 0 1 4.24 2.74L13 8l-2 2-1-1.5L8 10l4 5 5-2 1 2.5L20 13"/><path d="M16 16v4h4v-4"/></svg>',garden:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 8a7 7 0 1 0-7 7"/><path d="M10.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/><path d="M12 22a8 8 0 0 1-8-8"/></svg>',sitout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9h3v10h-3z"/><path d="M22 6h-3v3h3z"/><path d="M5 9H2v10h3z"/><path d="M2 6h3v3H2z"/><path d="M6 19v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6"/></svg>',hall:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>'},a=[{title:"Swimming Pool",icon:t.pool},{title:"Gymnasium",icon:t.gym},{title:"Club House",icon:t.clubhouse},{title:"Children Play Area",icon:t.play},{title:"Jogging Track",icon:t.track},{title:"Landscaped Garden",icon:t.garden},{title:"Senior Citizen Area",icon:t.sitout},{title:"Multipurpose Hall",icon:t.hall}];e.innerHTML=`
    <div class="container">
      <div class="text-center mb-lg" style="margin-bottom: 3rem;">
        <h3 class="section-heading-center">Leisure Crafted For You</h3>
        <p class="section-subtitle">World-class amenities for a premium lifestyle</p>
      </div>
      
      <div class="amenities-grid-custom">
        <!-- Injected Below -->
      </div>
    </div>
  `;const n=e.querySelector(".amenities-grid-custom");a.forEach(r=>{const i=document.createElement("div");i.className="amenity-box",i.innerHTML=`
      <div class="amenity-icon-wrapper">${r.icon}</div>
      <p class="amenity-title">${r.title}</p>
    `,n.appendChild(i)});const o=document.createElement("style");return o.textContent=`
    .amenities-section {
      background-color: var(--color-primary-bg);
      padding: 5rem 0;
    }
    
    .section-heading-center {
      font-size: 2.5rem;
      color: var(--color-navy);
      margin-bottom: 0.5rem;
      font-family: var(--font-heading);
    }
    
    .section-subtitle {
        color: var(--color-text-secondary);
        font-size: 1.1rem;
    }

    .amenities-grid-custom {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .amenity-box {
      background: var(--color-white);
      padding: 2.5rem 1.5rem;
      text-align: center;
      border-radius: var(--radius-lg);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); /* Very subtle initially */
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid var(--color-border-light);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    .amenity-box::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, var(--color-gold-light) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 0;
    }

    .amenity-box:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: var(--color-gold);
    }
    
    .amenity-box:hover::before {
        opacity: 0.1;
    }

    .amenity-icon-wrapper {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
      color: var(--color-gold);
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease;
    }
    
    .amenity-icon-wrapper svg {
        width: 100%;
        height: 100%;
    }
    
    .amenity-box:hover .amenity-icon-wrapper {
        transform: scale(1.1);
    }

    .amenity-title {
      font-weight: 600;
      color: var(--color-navy);
      font-size: 1.1rem;
      position: relative;
      z-index: 1;
      font-family: var(--font-heading);
    }

    @media (max-width: 1024px) {
      .amenities-grid-custom {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .amenities-grid-custom {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .amenity-box {
        padding: 1.5rem;
      }
      .section-heading-center {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .amenities-grid-custom {
        grid-template-columns: 1fr;
      }
    }
  `,e.appendChild(o),e}function q(){const e=document.createElement("footer");e.className="footer-section",e.id="contact",e.innerHTML=`
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo-wrapper">
             <img src="/harico_logo.png" alt="Harico Estates" class="footer-logo-img">
          </div>
          <p class="footer-desc">
            Redefining luxury living since 2010. We build homes that inspire and elevate your lifestyle.
          </p>
          <div class="social-links">
             <a href="#" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 0 011-1h3z"></path></svg>
             </a>
             <a href="#" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
             <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 6.127-1.291l.003 9.597h4.852v-10.298c0-7.88-8.917-7.614-11.014-3.684v-2.018z"/></svg>
             </a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4 class="footer-heading">Navigate</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Projects</h4>
          <ul class="footer-links">
            <li><a href="#project/premium-2-3-bhk-flats-in-punawale-harico-edge">HARICO EDGE</a></li>
            <li><a href="#project/commercial-office-spaces-wakad-harico-heights">Harico Heights</a></li>
            <li><a href="#project/premium-2-3-bhk-punawale-harico-pride">HARICO PRIDE</a></li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4 class="footer-heading">Contact Us</h4>
          <ul class="footer-contact">
            <li>
                <span class="icon">📍</span>
                <span>Punawale, Pune, Maharashtra 411033</span>
            </li>
            <li>
                <span class="icon">📞</span>
                <a href="tel:+917744009295">+91 7744009295</a>
            </li>
            <li>
                <span class="icon">✉️</span>
                <!-- Email Removed -->
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Harico Estates. All rights reserved.</p>
        <div class="legal-links">
           <a href="#">Privacy Policy</a>
           <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .footer-section {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: var(--spacing-3xl) 0 var(--spacing-lg);
      position: relative;
    }
    
    .footer-section::before {
        /* Subtle gold top border */
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
        opacity: 0.5;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: var(--spacing-2xl);
      margin-bottom: var(--spacing-2xl);
    }

    /* Brand Column */
    .brand-col {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .footer-logo-wrapper {
        margin-bottom: 15px;
        /* background: white; Removed for transparent look */
        padding: 0; /* Reduced padding since bg is gone */
        display: inline-block;
        width: fit-content;
    }

    .footer-logo-img {
       height: 80px; /* Increased from 60px */
       width: auto;
       display: block;
       filter: brightness(0) invert(1); /* Make logo white for dark bg */
       opacity: 0.9;
    }
    
    .footer-desc {
      color: var(--color-text-light);
      line-height: 1.6;
      font-size: var(--font-size-sm);
      max-width: 300px;
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 15px;
        margin-top: 10px;
    }
    
    .social-links a {
        color: var(--color-text-light);
        transition: color var(--transition-fast), transform var(--transition-fast);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 50%;
    }
    
    .social-links a:hover {
        color: var(--color-gold);
        border-color: var(--color-gold);
        transform: translateY(-2px);
    }

    /* Headings */
    .footer-heading {
      color: var(--color-gold);
      font-size: 0.9rem;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    /* Links */
    .footer-links, .footer-contact {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .footer-links a {
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color var(--transition-fast), padding-left var(--transition-fast);
    }

    .footer-links a:hover {
      color: var(--color-white);
      padding-left: 5px;
    }

    /* Contact Info */
    .footer-contact li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        color: var(--color-text-light);
        font-size: 0.95rem;
        line-height: 1.5;
    }
    .footer-contact .icon {
        color: var(--color-gold);
        font-size: 1.1rem;
    }
    .footer-contact a {
        color: inherit;
        transition: color var(--transition-fast);
    }
    .footer-contact a:hover {
        color: var(--color-gold);
    }


    /* Bottom Bar */
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: var(--spacing-lg);
      font-size: 0.85rem;
      color: var(--color-text-light);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .legal-links {
        display: flex;
        gap: 20px;
    }
    
    .legal-links a {
        color: var(--color-text-light);
        transition: color var(--transition-fast);
    }
    .legal-links a:hover {
        color: var(--color-white);
    }

    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
    }
  `,e.appendChild(t),e}function H(){const e=document.createElement("div");e.id="enquire-modal",e.className="modal-overlay hidden",e.innerHTML=`
    <div class="modal-content">
      <button class="close-btn">&times;</button>
      <div class="modal-header">
        <h2 class="modal-title">Enquire Now</h2>
        <p class="modal-subtitle">Register your interest and we'll get in touch with you shortly.</p>
        <p id="project-context" class="modal-project-context" style="display:none; color:var(--color-gold); font-weight:600; margin-top:5px;"></p>
      </div>
      <form class="enquire-form" id="enquireForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" required placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" required placeholder="+91 XXXXX XXXXX">
        </div>
        <!-- Email Removed -->
        <div class="form-group">
          <label for="requirement">Requirement</label>
          <select id="requirement" required>
            <option value="" disabled selected>Select Configuration</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="Office Space">Office Space</option>
            <option value="Shop">Shop/Showroom</option>
          </select>
        </div>
        <div class="form-group">
          <label for="interest">I am interested in</label>
          <select id="interest" required>
            <option value="details">Requesting Details</option>
            <option value="visit">Scheduling a Site Visit</option>
            <option value="callback">Requesting a Call Back</option>
          </select>
        </div>
        <button type="submit" class="btn-submit w-full">Submit Enquiry</button>
      </form>
    </div>
  `;const t=e.querySelector(".close-btn"),a=e.querySelector("#enquireForm"),n=e.querySelector("#project-context");let o="";t.addEventListener("click",()=>{e.classList.add("hidden")}),e.addEventListener("click",i=>{i.target===e&&e.classList.add("hidden")}),a.addEventListener("submit",i=>{i.preventDefault();const l=a.querySelector('button[type="submit"]'),c=a.querySelector("#name"),s=a.querySelector("#phone"),d=a.querySelector("#requirement"),u=a.querySelector("#interest"),g=l.textContent;l.textContent="Opening WhatsApp...";const b="917744009295";let h="Hello, I am interested in";o&&(h+=` *${o}*`),h+=`.

Requirement: *${d.value}*
Interest: ${u.value}
Name: ${c.value}
Phone: ${s.value}`;const w=`https://wa.me/${b}?text=${encodeURIComponent(h)}`;setTimeout(()=>{window.open(w,"_blank"),e.classList.add("hidden"),i.target.reset(),l.textContent=g},800)});const r=document.createElement("style");return r.textContent=`
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
  `,e.appendChild(r),window.showEnquireModal=i=>{e.classList.remove("hidden"),o=i||"",o?(n.textContent=`Project: ${o}`,n.style.display="block"):n.style.display="none"},e}function j(e){const t=document.createElement("div");t.className="quick-info-bar",t.innerHTML=`
    <div class="container flex justify-between items-center h-full">
      <div class="info-item">
        <span class="info-label">Location</span>
        <span class="info-value">${e.location}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Configuration</span>
        <span class="info-value">${e.type}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Price</span>
        <span class="info-value">${e.price||"On Request"}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Possession</span>
        <span class="info-value">${e.possession||(e.status==="Ongoing"?"Dec 2026":"Ready")}</span>
      </div>
      <div class="info-action">
        <button onclick="window.showEnquireModal('${e.title}');" class="btn btn-primary btn-sm btn-whatsapp-bar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Get Price on WhatsApp
        </button>
      </div>
    </div>
    </div>
  `;const a=document.createElement("style");return a.textContent=`
    .quick-info-bar {
      background-color: var(--color-navy);
      color: var(--color-white);
      height: 80px;
      width: 100%;
      border-bottom: 2px solid var(--color-gold);
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .info-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-gold);
      margin-bottom: 2px;
    }

    .info-value {
      font-size: 1rem;
      font-weight: 600;
    }

    .info-separator {
      width: 1px;
      height: 40px;
      background-color: rgba(255,255,255,0.2);
    }

    .btn-sm {
      padding: 8px 20px;
      font-size: 0.9rem;
    }
    
    .btn-whatsapp-bar {
        display: inline-flex;
        align-items: center;
        background-color: #25D366;
        border: none;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    
    .btn-whatsapp-bar:hover {
        background-color: #20BA5C;
        color: white;
    }
    
    .mr-2 { margin-right: 8px; }

    @media (max-width: 768px) {
      .quick-info-bar {
        height: auto;
        padding: 15px 0;
      }
      .container.flex {
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
      }
      .info-separator {
        display: none;
      }
      .info-item {
        align-items: center;
        min-width: 45%;
        text-align: center;
      }
    }
  `,t.appendChild(a),t}function D(e){const t=document.createElement("div");t.className="config-section";const a=e.configurations||[];t.innerHTML=`
    <h3 class="section-heading">Project Configuration</h3>
    <div class="table-responsive">
      <table class="config-table">
        <thead>
          <tr>
            <th>Unit Type</th>
            <th>Carpet Area</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${a.length>0?a.map(o=>`
            <tr>
                <td><span class="unit-type">${o.type}</span></td>
                <td><span class="unit-area">${o.carpet}</span></td>
                <td>
                    <a href="https://wa.me/917744009295?text=Hi, I am interested in ${encodeURIComponent(o.type)} at ${encodeURIComponent(e.title)}. Please share the price breakup." target="_blank" class="btn-price-request">
                        <span class="icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </span>
                        Request Price
                    </a>
                </td>
            </tr>
          `).join(""):'<tr><td colspan="3" style="text-align:center; padding: 20px;">Configurations coming soon</td></tr>'}
        </tbody>
      </table>
    </div>
  `;const n=document.createElement("style");return n.textContent=`
    .config-section {
      margin-top: var(--spacing-xl);
    }
    
    .section-heading {
      font-size: 1.5rem;
      color: var(--color-navy);
      margin-bottom: var(--spacing-lg);
      border-left: 4px solid var(--color-gold);
      padding-left: 15px;
      font-family: var(--font-heading);
    }

    .table-responsive {
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }

    .config-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--color-white);
    }

    .config-table th, .config-table td {
      padding: 20px 25px;
      text-align: left;
      border-bottom: 1px solid var(--color-border-light);
    }

    .config-table th {
      background-color: var(--color-navy);
      color: var(--color-white);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
    }
    
    .config-table tr:last-child td {
        border-bottom: none;
    }
    
    .config-table tr {
        transition: background-color 0.2s ease;
    }
    
    .config-table tr:hover {
        background-color: #FAFCFF; /* Very light blue tint on hover */
    }

    .config-table td {
      color: var(--color-text-main);
      vertical-align: middle;
    }
    
    .unit-type {
        font-weight: 700;
        color: var(--color-navy);
        font-size: 1.05rem;
    }
    
    .unit-area {
        color: var(--color-text-secondary);
        font-weight: 500;
    }

    .btn-price-request {
      background: transparent;
      color: var(--color-gold);
      padding: 8px 18px;
      border-radius: 50px;
      text-decoration: none;
      font-size: 0.85rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 1px solid var(--color-gold);
    }

    .btn-price-request:hover {
      background: var(--color-gold);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
    }
    
    .btn-price-request .icon {
        display: flex;
        align-items: center;
    }
  `,t.appendChild(n),t}function K(e){const t=document.createElement("div");t.className="project-details-page";const a=document.createElement("div");a.className="pd-hero",a.style.backgroundImage=`url('${e.image}')`,a.innerHTML=`
    <div class="pd-hero-overlay"></div>
    <div class="container pd-hero-content">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="#home">Home</a> &gt; <a href="#projects">Projects</a> &gt; <span class="current">${e.title}</span>
      </nav>
      <h1 class="pd-title">${e.title}</h1>
      <p class="pd-subtitle">${e.tagline||"The Edge Of Timeless Modern Sophistication"}</p>
      <div class="mt-lg fade-in-up">
         <a href="#projects" class="btn btn-secondary" style="border-color:white; color:white;">Back to Projects</a>
      </div>
    </div>
  `;const n=j(e),o=document.createElement("div");o.className="pd-content-wrapper section";const r=document.createElement("div");r.className="container";const i=document.createElement("div");i.className="about-section mb-xl",i.id="about",i.innerHTML=`
    <h2 class="section-heading">About Project</h2>
    <p class="text-body">${e.description}</p>
    ${e.reraId?`<p class="mt-md text-sm" style="color: var(--color-text-secondary); font-weight: 500;">RERA Registration: <span style="color: var(--color-navy);">${e.reraId}</span></p>`:""}
  `;const l=D(e);l.id="pricing";const c=document.createElement("div");c.className="section bg-light",c.id="amenities";const s={"Swimming Pool":"fa-person-swimming","Resort-inspired Swimming Pool":"fa-water","Children's Splash Pool":"fa-child","Poolside Leisure Deck":"fa-umbrella-beach","Cabana-style Pergolas":"fa-tent","BBQ & Poolside Party Deck":"fa-fire-burner","Sacred Temple Pavilion":"fa-om","Meditation & Yoga Lawns":"fa-seedling","Zen Tranquillity Garden":"fa-leaf","Reflexology Walkway":"fa-shoe-prints","Sensory & Aromatherapy Garden":"fa-wind","Sky-level Gym":"fa-dumbbell","Indoor Yoga Studio":"fa-person-yoga","Children's Play Zone":"fa-child-reaching","Creative Sand Play":"fa-bucket","Multi-purpose Sports Court":"fa-basketball","Professional Mini Cricket Turf":"fa-baseball-bat-ball","Jogging & Walking Track":"fa-person-running","Dedicated Pet Park":"fa-dog","Open-air Amphitheatre":"fa-masks-theater","Party Hall with DJ System":"fa-music","Private Mini Theatre":"fa-film","Indoor Games Lounge":"fa-chess-board","Music/Dance/Hobby Studio":"fa-guitar","12 Premium Guest Suites":"fa-bed","Luxury Salon & Beauty Parlour":"fa-scissors","Exclusive Residents' Sky Lounge":"fa-martini-glass-citrus","Co-working Spaces":"fa-briefcase","Podcast & Content Creator Studio":"fa-microphone","Sky Observation Deck":"fa-binoculars","EV Charging Points":"fa-charging-station",Clubhouse:"fa-house-user","Landscaped Garden":"fa-tree","Gym & Jogging Track":"fa-dumbbell","Temple & Flag Hoisting":"fa-om",Gazebo:"fa-tent","Sun Bathing Area":"fa-umbrella-beach","Pool Deck Area":"fa-water","Rooftop Amenities":"fa-city","Yoga & Zumba Room":"fa-person-yoga","Sunset Point":"fa-cloud-sun","Decorated Entrance Gate":"fa-dungeon","Intercom System & CCTV":"fa-video","Solar Power Backup":"fa-solar-panel","Multipurpose Hall":"fa-people-roof","Mini Theater":"fa-film","Barbeque Counter":"fa-fire-burner","Day Care Room":"fa-baby-carriage",Library:"fa-book-open","Snooker Lounge":"fa-bowling-ball"},d=p=>`
    <div class="amenity-box">
        <div class="icon-circle">
            <i class="fa-solid ${s[p]||"fa-star"}"></i>
        </div>
        <span class="amenity-name">${p}</span>
    </div>
  `;let u="";e.amenities&&e.amenities.length>0&&typeof e.amenities[0]!="string"?u=e.amenities.map(p=>`
        <div class="amenities-category mb-lg">
            <h3 class="category-title text-center mb-md" style="font-family: var(--font-heading); color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px;">${p.category}</h3>
            <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                ${p.items.map(M=>d(M)).join("")}
            </div>
        </div>
      `).join(""):u=`
        <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px;">
            ${(e.amenities||[]).map(p=>d(p)).join("")}
        </div>
      `,c.innerHTML=`
    <div class="container">
        <div class="section-header text-center mb-xl">
            <h2 class="section-title">World Class Amenities</h2>
            <div class="title-separator mx-auto"></div>
        </div>
        ${u}
    </div>
  `;const b=document.createElement("style");b.textContent=`
    .amenity-box {
        background: white;
        padding: 30px 20px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        border: 1px solid transparent;
        position: relative;
        overflow: hidden;
    }
    
    .amenity-box:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        border-color: rgba(212, 175, 55, 0.3);
    }
    
    .amenity-box::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--color-gold);
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: center;
    }
    
    .amenity-box:hover::after {
        transform: scaleX(1);
    }

    .icon-circle {
        width: 60px;
        height: 60px;
        background: #f8f9fa;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--color-gold);
        transition: all 0.3s ease;
        margin-bottom: 5px;
    }
    
    .amenity-box:hover .icon-circle {
        background: var(--color-gold);
        color: white;
        transform: rotateY(180deg);
    }
    
    .amenity-name {
        font-weight: 600;
        color: var(--color-navy);
        font-size: 0.95rem;
        line-height: 1.4;
    }
  `,c.appendChild(b);const h=document.createElement("div");h.className="section pd-location",h.id="location";const w=(e.connectivity||[]).map(p=>`
    <div class="connect-item" style="display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid rgba(0,0,0,0.1);">
        <span style="font-weight:600; color:var(--color-navy);">${p.title}</span>
        <span style="color:var(--color-gold); font-weight:700;">${p.time}</span>
    </div>
  `).join("");h.innerHTML=`
    <div class="container grid grid-cols-2 gap-lg">
      <div class="location-info">
        <h3 class="section-heading mb-md">Connectivity</h3>
        <div class="connectivity-list" style="background:white; padding:20px; border-radius:10px; box-shadow:var(--shadow-md);">
            ${w}
        </div>
      </div>
      <div class="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043232!2d73.79292636283737!3d18.52460355403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bc2e9d924155%3A0x6b77c57f7243c3d5!2sPunawale%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707010000000!5m2!1sen!2sin" width="100%" height="400" style="border:0; border-radius:10px;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  `;let k="";e.masterLayout&&(k+=`
        <div class="mb-xl">
            <h3 class="section-heading text-center mb-lg">Master Layout</h3>
            <div class="layout-image-container fade-in-up" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); background: white;">
                <img src="${e.masterLayout}" alt="Master Layout" style="width: 100%; height: auto; display: block;">
            </div>
        </div>
    `),e.floorPlans&&e.floorPlans.length>0&&(k+=`
        <div class="mb-xl">
             <h3 class="section-heading text-center mb-lg">Floor Plans</h3>
             <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                ${e.floorPlans.map(p=>`
                    <div class="plan-item fade-in-up" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                        <div class="plan-img-wrapper" style="padding: 20px; background: #fff;">
                            <img src="${p.image}" alt="${p.title}" style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
                        </div>
                        <div class="plan-info text-center py-md" style="border-top: 1px solid #f0f0f0; background: #fafafa;">
                            <h4 style="margin: 0; color: var(--color-navy); font-family: var(--font-heading);">${p.title}</h4>
                        </div>
                    </div>
                `).join("")}
             </div>
        </div>
    `);const S=document.createElement("div");S.className="section container",S.innerHTML=k;const L=H();t.appendChild(a),t.appendChild(n);const v=document.createElement("div");v.className="pd-sections-wrapper",r.appendChild(i),v.appendChild(r),v.appendChild(c),v.appendChild(S);const P=document.createElement("div");P.className="section container",P.appendChild(l),v.appendChild(P),v.appendChild(h),t.appendChild(v),t.appendChild(L);const E=document.createElement("style");return E.textContent=`
    .pd-hero {
      height: 60vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -80px;
    }

    .pd-hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(5, 12, 51, 0.8);
    }

    .pd-hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: var(--color-white);
    }

    .breadcrumbs {
      font-size: 0.9rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.7);
    }
    .breadcrumbs a {
      color: var(--color-white);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color var(--transition-fast);
    }
    .breadcrumbs a:hover {
      border-color: var(--color-gold);
    }
    .breadcrumbs .current {
      color: var(--color-gold);
      font-weight: 600;
    }

    .pd-title {
      font-size: 3.5rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .pd-subtitle {
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .text-body {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--color-text-light);
      max-width: 800px;
    }

    .bg-white { background-color: var(--color-white); }
    .mb-md { margin-bottom: var(--spacing-md); }
    .mb-xl { margin-bottom: var(--spacing-xl); }

    @media (max-width: 768px) {
      .pd-title { font-size: 2rem; }
      .pd-hero { height: 50vh; }
      .pd-location .grid-cols-2 { grid-template-columns: 1fr; }
    }
  `,t.appendChild(E),setTimeout(()=>{},0),t}function F(){const e=document.createElement("section");e.id="builder-legacy",e.className="builder-legacy-section";const t=[{year:"1987",name:"SATYAM COMPLEX",location:"THANE - DISTRICT",area:"48,000 SQ. FT."},{year:"1990",name:"SHIVDHAM COMPLEX",location:"THANE - DISTRICT",area:"2,52,500 SQ. FT."},{year:"1992",name:"SAMARPAM COMPLEX",location:"THANE - DISTRICT",area:"40,000 SQ. FT."},{year:"1997",name:"GULRAJ RESIDENCY",location:"KONDHWA",area:"60,000 SQ. FT."},{year:"2009",name:"SENTOSA RESIDENCY",location:"HADAPSAR",area:"32,000 SQ. FT."},{year:"2011",name:"SENTOSA PARADISE",location:"WAKAD",area:"48,000 SQ. FT."},{year:"2012",name:"SENTOSA ELYSIUM",location:"WAKAD",area:"45,692 SQ. FT."},{year:"2014",name:"SENTOSA PEARL",location:"WAKAD",area:"61,486 SQ. FT."},{year:"2016",name:"ROYAL PALMS",location:"THANE - DISTRICT",area:"2,10,000 SQ. FT."},{year:"2017",name:"SENTOSA PALM",location:"WAKAD",area:"22,023 SQ. FT."},{year:"2017",name:"SENTOSA PRIDE PH 1",location:"PUNAWALE",area:"1,75,303 SQ. FT."},{year:"2018",name:"REGENCY PLAZA",location:"THANE - DISTRICT",area:"2,12,922 SQ. FT."},{year:"2019",name:"AMI INFRA PINK CITY",location:"THANE - DISTRICT",area:"3,40,000 SQ. FT."},{year:"2023",name:"SENTOSA SERENE",location:"TATHAWADE",area:"88,197 SQ. FT."},{year:"2023",name:"SENTOSA PRIDE PH 2",location:"PUNAWALE",area:"1,22,473 SQ. FT."},{year:"2025",name:"SENTOSA EKAM",location:"PUNAWALE",area:"1,09,742 SQ. FT."},{year:"2026",name:"SENTOSA PRIDE PH 3",location:"PUNAWALE",area:"1,54,800 SQ. FT."},{year:"2026",name:"SENTOSA ELITE BIZ HUB",location:"WAKAD",area:"56,586 SQ. FT."},{year:"2026",name:"SENTOSA EDGE",location:"PUNAWALE",area:"48,000 SQ. FT."},{year:"2026",name:"SENTOSA ERA",location:"PRADHIKARAN MOSHI",area:"80,000 SQ. FT."}],a=Math.ceil(t.length/2),n=t.slice(0,a),o=t.slice(a);function r(l,c){return`
        <div class="timeline-row">
            <div class="timeline-line"></div>
            <div class="timeline-items">
                ${l.map((s,d)=>{const g=c+d===t.length-1;return`
                    <div class="timeline-item ${d%2===0?"top":"bottom"} ${g?"latest-project":""}">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-year">${s.year}</div>
                            <h4 class="timeline-project">${s.name}</h4>
                            <p class="timeline-detail">COMPLETED</p>
                            <p class="timeline-detail">${s.area}</p>
                            <p class="timeline-detail">${s.location}</p>
                            ${g?'<div class="latest-badge">LATEST</div>':""}
                        </div>
                    </div>
                `}).join("")}
            </div>
        </div>
      `}e.innerHTML=`
    <div class="container">
      <div class="legacy-header text-center">
        <h2 class="legacy-years">39</h2>
        <div class="legacy-title-wrapper">
            <span class="legacy-subtitle">YEARS OF REAL ESTATE<br>AND HOSPITALITY</span>
            <h3 class="legacy-script">Legacy</h3>
        </div>
        <div class="legacy-vision">
            BUILT ON VISION,<br>INTEGRITY<br>& INNOVATION
        </div>
      </div>

      <div class="timeline-wrapper">
        ${r(n,0)}
        ${r(o,a)}
      </div>
    </div>
  `;const i=document.createElement("style");return i.textContent=`
    .builder-legacy-section {
      padding: var(--spacing-section) 0;
      background-color: #FFFFFF;
      overflow: hidden;
      color: var(--color-navy);
    }

    .legacy-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 4rem;
      position: relative;
    }

    @media (min-width: 768px) {
        .legacy-header {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            text-align: left;
        }
    }

    .legacy-years {
      font-family: var(--font-heading);
      font-size: 8rem;
      font-weight: 800;
      line-height: 1;
      color: var(--color-navy);
      margin: 0;
    }

    .legacy-title-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .legacy-subtitle {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .legacy-script {
        font-family: 'Dancing Script', cursive;
        font-family: var(--font-heading); 
        font-style: italic;
        font-weight: 300;
        font-size: 4rem;
        color: var(--color-accent-red);
        line-height: 0.8;
        margin: 0;
        z-index: 1;
    }

    .legacy-vision {
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 1.4;
      border-left: 2px solid var(--color-gold);
      padding-left: 1.5rem;
      margin-left: 2rem;
    }

    /* Timeline Wrapper & Rows */
    .timeline-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20rem; /* Increased space to prevent overlap */
        padding-top: 5rem; /* Space for top items of first row */
        padding-bottom: 5rem;
    }

    .timeline-row {
      position: relative;
      /* padding: 2rem 0; */ /* Adjusted padding */
      width: 100%;
    }

    /* Original timeline container styles adapted */
    .timeline-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-gold);
      transform: translateY(-50%);
      z-index: 0;
    }

    .timeline-items {
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* removed min-width forcing horizontal scroll for rows, assuming they fit or wrap gracefully on very small screens? Actually, for mobile let's keep scroll if needed or stack vertical */
    }
    
    @media (max-width: 1024px) {
        .timeline-items {
            overflow-x: auto;
            min-width: 100%;
            padding-bottom: 20px; /* Scrollbar space */
        }
        .timeline-item {
            min-width: 200px;
        }
        .timeline-line {
            min-width: 1000px; /* Ensure line extends in scroll */
        }
    }

    .timeline-item {
      position: relative;
      flex: 1;
      text-align: center;
      padding: 0 10px;
      z-index: 1;
    }

    .timeline-marker {
      width: 20px;
      height: 20px;
      background-color: var(--color-gold);
      transform: rotate(45deg);
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -10px;
      z-index: 2;
      box-shadow: 0 0 0 4px #FFF;
      transition: all 0.3s ease;
    }

    .timeline-content {
      background: #FFF;
      padding: 1rem;
      border-radius: 4px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .timeline-item:hover .timeline-marker {
        background-color: var(--color-navy);
        transform: rotate(45deg) scale(1.2);
    }
    
    .timeline-item:hover .timeline-content {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    /* Top Items */
    .timeline-item.top .timeline-content {
      margin-bottom: 2rem; 
      transform: translateY(-100%);
      top: -20px;
    }
    
    /* Bottom Items */
    .timeline-item.bottom .timeline-content {
      margin-top: 50px; 
    }

    .timeline-year {
      background-color: var(--color-navy);
      color: #FFF;
      display: inline-block;
      padding: 4px 12px;
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .timeline-project {
      color: var(--color-accent-red);
      font-weight: 800;
      font-size: 1rem;
      text-transform: uppercase;
      margin: 0.5rem 0;
    }

    .timeline-detail {
        font-size: 0.75rem;
        color: var(--color-text-secondary);
        margin: 2px 0;
        font-weight: 500;
        text-transform: uppercase;
    }

    /* Latest Project Highlight */
    .latest-project .timeline-marker {
        background-color: var(--color-accent-red);
        width: 30px;
        height: 30px;
        margin-top: -15px;
        box-shadow: 0 0 0 6px rgba(198, 40, 40, 0.2);
        animation: pulse 2s infinite;
    }

    .latest-project .timeline-content {
        border: 2px solid var(--color-accent-red);
        background: #FFF5F5;
        transform: scale(1.05) !important; /* Force scale */
    }
    
    .timeline-item.top.latest-project .timeline-content {
        transform: translateY(-105%) scale(1.05) !important;
    }

    .latest-badge {
        background-color: var(--color-accent-red);
        color: white;
        font-size: 0.7rem;
        font-weight: bold;
        padding: 4px 8px;
        border-radius: 4px;
        position: absolute;
        top: -15px;
        right: 50%;
        transform: translateX(50%);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(198, 40, 40, 0); }
        100% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0); }
    }

    @media (max-width: 768px) {
        .legacy-header {
            flex-direction: column;
            text-align: center;
        }
        .legacy-years { font-size: 5rem; }
        .legacy-vision { 
            border-left: none; 
            border-top: 2px solid var(--color-gold);
            margin-left: 0;
            margin-top: 1rem;
            padding-top: 1rem;
        }
        
        .timeline-wrapper {
            gap: 2rem;
        }
        
        /* Adjust spacing for mobile stack if needed, or keep scroll */
        .timeline-items {
             padding-bottom: 250px; /* Extra space for bottom items overlapping next row */
        }
        
        /* Reduce vertical space if items are huge */
        .timeline-item.bottom .timeline-content {
             margin-top: 40px;
        }
    }
  `,e.appendChild(i),e}class m{static setTitle(t){document.title=t,this.setMeta("og:title",t),this.setMeta("twitter:title",t)}static setDescription(t){this.setMeta("description",t),this.setMeta("og:description",t),this.setMeta("twitter:description",t)}static setKeywords(t){this.setMeta("keywords",t)}static setImage(t){const a=t.startsWith("http")?t:window.location.origin+t;this.setMeta("og:image",a),this.setMeta("twitter:image",a)}static setUrl(t){this.setMeta("og:url",t);let a=document.querySelector("link[rel='canonical']");a||(a=document.createElement("link"),a.rel="canonical",document.head.appendChild(a)),a.href=t}static setSchema(t){let a=document.getElementById("json-ld-schema");a||(a=document.createElement("script"),a.id="json-ld-schema",a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)}static setMeta(t,a){let n=document.querySelector(`meta[name="${t}"]`);if(n||(n=document.querySelector(`meta[property="${t}"]`)),n)n.setAttribute("content",a);else{const o=document.createElement("meta");t.startsWith("og:")||t.startsWith("twitter:")?o.setAttribute("property",t):o.setAttribute("name",t),o.setAttribute("content",a),document.head.appendChild(o)}}static reset(){this.setTitle("Harico Estates | Premium 2 & 3 BHK Flats in Punawale | By Sentosa Venture"),this.setDescription("Discover Harico Estates by Sentosa Venture. Offering premium 2 & 3 BHK flats in Punawale and luxury commercial spaces. Explore the most luxury projects in Punawale today."),this.setKeywords("Harico Edge, Sentosa Edge Punawale, 2 BHK with 2 Balconies Punawale, 3 BHK with Walk-in Wardrobe, RERA PM1260002501839, Premium Properties in Punawale, Luxury Projects in Punawale, Real Estate Pune, 2.5 Acre Project Punawale"),this.setImage("/harico_logo.png"),this.setUrl(window.location.origin),this.setSchema({"@context":"https://schema.org","@type":"RealEstateAgent",name:"Harico Estates",url:window.location.origin,logo:`${window.location.origin}/harico_logo.png`,description:"Premium Real Estate Developer in Punawale and Kiwale, Pune.",address:{"@type":"PostalAddress",addressLocality:"Pune",addressRegion:"Maharashtra",addressCountry:"IN"}})}}class ${routes=[];constructor(){window.addEventListener("hashchange",this.handleHashChange.bind(this)),window.addEventListener("load",this.handleHashChange.bind(this))}add(t,a){this.routes.push({path:t,handler:a})}handleHashChange(){const t=window.location.hash.slice(1),[a,n]=t.split("?"),o=a.split("/").filter(Boolean),r="/"+(o[0]||""),i=o[1],l=this.routes.find(c=>c.path===r)||this.routes.find(c=>c.path==="/");if(l){const c=new URLSearchParams(n);if(l.handler(c,i),o[0]==="project"&&i){const s=Object.values(x).find(d=>d.slug===i);s&&s.seo?(m.setTitle(s.seo.title),m.setDescription(s.seo.description),m.setKeywords(s.seo.keywords),m.setImage(s.image),m.setUrl(window.location.href),m.setSchema({"@context":"https://schema.org","@type":"ApartmentComplex",name:s.title,description:s.seo.description,url:window.location.href,image:s.image.startsWith("http")?s.image:window.location.origin+s.image,address:{"@type":"PostalAddress",addressLocality:s.location.split(",")[0].trim(),addressRegion:"Maharashtra",addressCountry:"IN"},amenityFeature:s.amenities.map(d=>({"@type":"LocationFeatureSpecification",name:typeof d=="string"?d:d.items.join(", ")}))})):s&&(m.setTitle(`${s.title} | Harico Estates`),m.setDescription(s.description.slice(0,160)),m.setImage(s.image),m.setUrl(window.location.href))}else m.reset();setTimeout(()=>{const s=o[0];if(i)window.scrollTo(0,0);else if(s&&s!=="project"){const d=document.getElementById(s);if(d){const g=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:g,behavior:"smooth"})}}else window.scrollTo(0,0)},50)}}navigate(t,a){let n=t.startsWith("/")?t.slice(1):t;if(a){const o=new URLSearchParams(a);n+=`?${o.toString()}`}window.location.hash=n}}const C=new $,y=document.querySelector("#app"),O=A(),Y=q(),W=H();y.appendChild(O);const f=document.createElement("main");y.appendChild(f);y.appendChild(Y);y.appendChild(W);C.add("/",()=>{f.innerHTML="",document.title="Harico Estates | Premium Real Estate in Punawale",f.appendChild(T()),f.appendChild(F()),f.appendChild(R()),f.appendChild(N())});C.add("/project",(e,t)=>{f.innerHTML="";let a=null;if(t&&(a=Object.values(x).find(n=>n.slug===t)),!a&&e?.get("id")){const n=e.get("id");a=x[n]}a?(document.title=`${a.title} | ${a.location} | Harico Estates`,f.appendChild(K(a))):C.navigate("/")});console.log("Harico Estates App Initialized with Router");
