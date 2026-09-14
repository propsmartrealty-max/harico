(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function we(){const e=document.createElement("header");e.className="header-pill-wrapper",window.addEventListener("scroll",()=>{window.scrollY>25?e.classList.add("scrolled"):e.classList.remove("scrolled");const t=["home","builder-legacy","projects","project-comparison","specifications","location-hub","amenities","emi-calculator","faq","contact"];let i="";t.forEach(o=>{const r=document.getElementById(o);if(r){const s=r.offsetTop;window.scrollY>=s-160&&(i=o)}}),document.querySelectorAll(".pill-nav-link").forEach(o=>{o.classList.remove("active");const r=o.getAttribute("data-target");(r===i||i==="builder-legacy"&&r==="home")&&o.classList.add("active")})}),e.innerHTML=`
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
          <li><a href="/articles" class="pill-nav-link nav-link-internal" data-target="articles">Articles</a></li>
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
        <li><a href="/articles" class="mobile-drawer-link" data-target="articles">Articles & Guides</a></li>
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
  `;const a=document.createElement("style");return a.textContent=`
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
  `,e.appendChild(a),setTimeout(()=>{const t=e.querySelector(".pill-mobile-toggle"),i=e.querySelector(".drawer-close-btn"),o=e.querySelector(".pill-mobile-drawer");t?.addEventListener("click",()=>{o?.classList.add("open"),document.body.classList.add("menu-open")}),i?.addEventListener("click",()=>{o?.classList.remove("open"),document.body.classList.remove("menu-open")}),e.querySelectorAll(".mobile-drawer-link").forEach(r=>{r.addEventListener("click",()=>{o?.classList.remove("open"),document.body.classList.remove("menu-open")})})},0),e}class B{static setTitle(a){document.title=a,this.setMeta("og:title",a),this.setMeta("twitter:title",a)}static setDescription(a){this.setMeta("description",a),this.setMeta("og:description",a),this.setMeta("twitter:description",a)}static setKeywords(a){this.setMeta("keywords",a)}static setImage(a){const t=a.startsWith("http")?a:window.location.origin+a;this.setMeta("og:image",t),this.setMeta("twitter:image",t)}static setUrl(a){this.setMeta("og:url",a);let t=document.querySelector("link[rel='canonical']");t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=a}static setSchema(a){let t=document.getElementById("json-ld-schema");t||(t=document.createElement("script"),t.id="json-ld-schema",t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(a)}static setMeta(a,t){let i=document.querySelector(`meta[name="${a}"]`);if(i||(i=document.querySelector(`meta[property="${a}"]`)),i)i.setAttribute("content",t);else{const o=document.createElement("meta");a.startsWith("og:")||a.startsWith("twitter:")?o.setAttribute("property",a):o.setAttribute("name",a),o.setAttribute("content",t),document.head.appendChild(o)}}static reset(){this.setTitle("Harico Estates | Premium 2 & 3 BHK Flats in Punawale & Kiwale"),this.setDescription("Discover luxury 2 & 3 BHK homes in Punawale & Kiwale by Harico Estates (Sentosa Group). Experience premium living with world-class amenities near Wakad & Hinjewadi."),this.setKeywords("Punawale Real Estate, Kiwale Flats, 2 BHK near Wakad, 3 BHK Punawale, Harico Estates, Sentosa Developers Pune, New Projects Punawale"),this.setImage("/harico_logo.png"),this.setUrl(window.location.origin),this.setSchema({"@context":"https://schema.org","@type":"RealEstateAgent",name:"Harico Estates",url:window.location.origin,logo:`${window.location.origin}/harico_logo.png`,description:"Premium Real Estate Developer in Punawale and Kiwale, Pune.",address:{"@type":"PostalAddress",addressLocality:"Pune",addressRegion:"Maharashtra",addressCountry:"IN"}})}}const I=["Harico Estates","Harico Estates Pune","Harico Estates Punawale","Harico Estates Kiwale","Harico Estates Ravet","Harico Estates PCMC","Harico Group","Harico Group Pune","Harico Ventures","Harico Ventures Pune","Harico Builders Pune","Harico Developers Pune","Harico Realty Pune","Harico Estates official website","Harico Estates contact number","Harico Estates phone 7744009295","Harico Estates head office","Harico Estates sales gallery","Harico Estates site office Punawale","Harico Estates site office Kiwale","Harico Estates reviews","Harico Estates price list","Harico Estates ongoing projects","Harico Estates upcoming projects","Harico Estates brochure download","Harico Estates customer care","Harico Estates Sentosa Developers","Harico Estates by Sentosa Group","Harico Estates owner","Harico Estates luxury flats Pune","Harico Estates 2 BHK flats","Harico Estates 3 BHK flats","Harico Estates RERA registered","हरिको इस्टेट्स","हॅरिको इस्टेट्स","हरिको ग्रुप पुणे","हरिको डेव्हलपर्स"],$=["Sentosa Developers","Sentosa Developers Pune","Sentosa Group","Sentosa Group Pune","Sentosa Real Estate","Sentosa Real Estate Pune","Sentosa Builders Pune","Sentosa Construction Pune","Sentosa Developers 39 years legacy","Sentosa Developers since 1987","Sentosa Water Park builder","Sentosa Water Park developers","Sentosa Resorts Pune real estate","Sentosa Hospitality and Real Estate","Sentosa Developers contact number","Sentosa Developers phone 7744009295","Sentosa Developers office Pune","Sentosa Developers official website","Sentosa Developers reviews","Sentosa Developers Punawale","Sentosa Developers Kiwale","Sentosa Developers Wakad","Sentosa Developers Tathawade","Sentosa Developers Moshi","Sentosa Developers projects in Pune","Sentosa completed projects","Sentosa ongoing projects","Sentosa upcoming projects","Sentosa Harico joint venture","Sentosa Harico Estates","सेंटोसा डेव्हलपर्स","सेंटोसा ग्रुप पुणे","सेंटोसा वॉटर पार्क बिल्डर","सेंटोसा प्रोजेक्ट्स पुणे"],g={coreBrand:["Harico Diwaam","Harico Divaam","Harico Diwaam Kiwale","Harico Divaam Kiwale","Harico Diwaam Pune","Harico Divaam Pune","Harico Diwaam Kiwale Pune","Harico Diwaam Ravet","Harico Divaam Ravet","Harico Diwaam Kiwale Ravet","Harico Diwaam project","Harico Divaam project","Harico Diwaam residential project","Harico Diwaam residential project Kiwale","Harico Diwaam apartments","Harico Diwaam flats","Harico Diwaam homes","Harico Diwaam residences","Harico Diwaam property","Harico Diwaam real estate","Harico Diwaam housing project","Harico Diwaam luxury project","Harico Diwaam premium project","Harico Diwaam residential property","Harico Diwaam new project","Harico Diwaam new launch","Harico Diwaam latest project","Harico Diwaam upcoming project","Harico Diwaam landmark project"],highIntentBuy:["Harico Diwaam flats for sale","Harico Diwaam apartments for sale","Harico Diwaam homes for sale","Harico Diwaam property for sale","Harico Diwaam flats Kiwale for sale","Harico Diwaam apartments Kiwale for sale","Harico Diwaam property Kiwale for sale","Harico Diwaam new flats for sale","Harico Diwaam new apartments for sale","Harico Diwaam premium flats for sale","Harico Diwaam luxury flats for sale","Harico Diwaam residential flats for sale","Harico Diwaam 2 BHK for sale","Harico Diwaam 3 BHK for sale","buy flat in Harico Diwaam","buy apartment in Harico Diwaam","buy home in Harico Diwaam","buy property in Harico Diwaam","buy 2 BHK Harico Diwaam","buy 3 BHK Harico Diwaam","book Harico Diwaam","Harico Diwaam booking","Harico Diwaam online booking","Harico Diwaam site visit","Harico Diwaam availability","Harico Diwaam latest availability"],twoBhkEcosystem:["Harico Diwaam 2 BHK","Harico Divaam 2 BHK","Harico Diwaam 2 BHK Kiwale","Harico Diwaam 2 BHK Pune","Harico Diwaam 2 BHK flats","Harico Diwaam 2 BHK apartments","Harico Diwaam 2 BHK homes","Harico Diwaam 2 BHK residence","Harico Diwaam 2 BHK property","Harico Diwaam 2 BHK for sale","Harico Diwaam 2 BHK price","Harico Diwaam 2 BHK cost","Harico Diwaam 2 BHK price list","Harico Diwaam 2 BHK starting price","Harico Diwaam 2 BHK current price","Harico Diwaam 2 BHK all inclusive price","Harico Diwaam 2 BHK cost sheet","Harico Diwaam 2 BHK EMI","Harico Diwaam 2 BHK booking amount","Harico Diwaam 2 BHK carpet area","Harico Diwaam 724 sq ft","Harico Diwaam 724 sqft","Harico Diwaam 760 sq ft","Harico Diwaam 760 sqft","Harico Diwaam 848 sq ft","Harico Diwaam 848 sqft","Harico Diwaam 2 BHK 724 sqft","Harico Diwaam 2 BHK 760 sqft","Harico Diwaam 2 BHK 848 sqft","Harico Diwaam 2 BHK Smart","Harico Diwaam 2 BHK Smart price","Harico Diwaam 2 BHK Smart carpet area","Harico Diwaam 2 BHK Smart floor plan","Harico Diwaam 724 sq ft 2 BHK","Harico Diwaam 2 BHK Comfort","Harico Diwaam 2 BHK Comfort price","Harico Diwaam 2 BHK Comfort floor plan","Harico Diwaam 760 sq ft 2 BHK","Harico Diwaam 2 BHK Grand","Harico Diwaam 2 BHK Grand price","Harico Diwaam 2 BHK Grand floor plan","Harico Diwaam 848 sq ft 2 BHK"],threeBhkEcosystem:["Harico Diwaam 3 BHK","Harico Divaam 3 BHK","Harico Diwaam 3 BHK Kiwale","Harico Diwaam 3 BHK Pune","Harico Diwaam 3 BHK flats","Harico Diwaam 3 BHK apartments","Harico Diwaam 3 BHK homes","Harico Diwaam 3 BHK residences","Harico Diwaam 3 BHK property","Harico Diwaam 3 BHK for sale","Harico Diwaam 3 BHK price","Harico Diwaam 3 BHK cost","Harico Diwaam 3 BHK price list","Harico Diwaam 3 BHK starting price","Harico Diwaam 3 BHK current price","Harico Diwaam 3 BHK all inclusive price","Harico Diwaam 3 BHK cost sheet","Harico Diwaam 3 BHK EMI","Harico Diwaam 3 BHK booking amount","Harico Diwaam 3 BHK carpet area","Harico Diwaam 920 sq ft","Harico Diwaam 920 sqft","Harico Diwaam 983 sq ft","Harico Diwaam 983 sqft","Harico Diwaam 1108 sq ft","Harico Diwaam 1108 sqft","Harico Diwaam 3 BHK 920 sqft","Harico Diwaam 3 BHK 983 sqft","Harico Diwaam 3 BHK 1108 sqft","Harico Diwaam 3 BHK Smart","Harico Diwaam 3 BHK Smart price","Harico Diwaam 3 BHK Smart floor plan","Harico Diwaam 920 sq ft 3 BHK","Harico Diwaam 3 BHK Comfort","Harico Diwaam 3 BHK Comfort price","Harico Diwaam 3 BHK Comfort floor plan","Harico Diwaam 983 sq ft 3 BHK","Harico Diwaam 3 BHK Grand","Harico Diwaam 3 BHK Grand price","Harico Diwaam 3 BHK Grand floor plan","Harico Diwaam 1108 sq ft 3 BHK"],priceKeywords:["Harico Diwaam price","Harico Divaam price","Harico Diwaam price in Kiwale","Harico Diwaam Pune price","Harico Diwaam latest price","Harico Diwaam current price","Harico Diwaam starting price","Harico Diwaam price list","Harico Diwaam apartment price","Harico Diwaam flat price","Harico Diwaam property price","Harico Diwaam price per sq ft","Harico Diwaam rate per sq ft","Harico Diwaam 2 BHK price","Harico Diwaam 3 BHK price","Harico Diwaam price 2026","Harico Diwaam latest price 2026","Harico Diwaam cost","Harico Diwaam total cost","Harico Diwaam all inclusive cost","Harico Diwaam price breakup","Harico Diwaam payment plan","Harico Diwaam booking amount","Harico Diwaam down payment","Harico Diwaam EMI","Harico Diwaam home loan","Harico Diwaam starts 70 lakhs","Harico Diwaam 3 BHK starts 89.90 lakhs"],carpetAreaKeywords:["Harico Diwaam carpet area","Harico Diwaam apartment size","Harico Diwaam flat size","Harico Diwaam area","Harico Diwaam 724 carpet","Harico Diwaam 760 carpet","Harico Diwaam 848 carpet","Harico Diwaam 920 carpet","Harico Diwaam 983 carpet","Harico Diwaam 1108 carpet","Harico Diwaam 2 BHK carpet area","Harico Diwaam 3 BHK carpet area","Harico Diwaam largest 2 BHK","Harico Diwaam largest 3 BHK","Harico Diwaam spacious 2 BHK","Harico Diwaam spacious 3 BHK"],floorPlanKeywords:["Harico Diwaam floor plan","Harico Divaam floor plan","Harico Diwaam 2 BHK floor plan","Harico Diwaam 3 BHK floor plan","Harico Diwaam apartment floor plan","Harico Diwaam flat floor plan","Harico Diwaam layout","Harico Diwaam apartment layout","Harico Diwaam master plan","Harico Diwaam site plan","Harico Diwaam tower plan","Harico Diwaam 724 floor plan","Harico Diwaam 760 floor plan","Harico Diwaam 848 floor plan","Harico Diwaam 920 floor plan","Harico Diwaam 983 floor plan","Harico Diwaam 1108 floor plan","Harico Diwaam 2 BHK layout","Harico Diwaam 3 BHK layout","Harico Diwaam master layout"],towerKeywords:["Harico Diwaam master plan","Harico Diwaam master layout","Harico Diwaam tower","Harico Diwaam towers","Harico Diwaam 5 towers","Harico Diwaam five towers","Harico Diwaam sky towers","Harico Diwaam iconic towers","Harico Diwaam 24 storey","Harico Diwaam 24 storey towers","Harico Diwaam tallest tower","Harico Diwaam high rise","Harico Diwaam high rise towers","Harico Diwaam landmark tower","Harico Diwaam building","Harico Diwaam tower height","Harico Diwaam floor count","Harico Diwaam tower plan","5 acre project Kiwale"],reraKeywords:["Harico Diwaam RERA","Harico Divaam RERA","Harico Diwaam MahaRERA","Harico Diwaam RERA number","Harico Diwaam MahaRERA number","Harico Diwaam RERA registration","Harico Diwaam RERA status","Harico Diwaam RERA details","Harico Diwaam RERA certificate","Harico Diwaam RERA approved","Harico Diwaam registered project","Harico Diwaam RERA Kiwale","Harico Diwaam RERA Pune","Harico Diwaam RERA PR1260002502389","PR1260002502389","PR1260002502389 Harico","PR1260002502389 Kiwale","PR1260002502389 Pune","Harico Diwaam MahaRERA PR1260002502389","Harico Edge RERA P52100031773","Harico Pride RERA P52100018471"],amenitiesKeywords:["Harico Diwaam amenities","Harico Diwaam 100+ amenities","Harico Diwaam luxury amenities","Harico Diwaam premium amenities","Harico Diwaam resort amenities","Harico Diwaam lifestyle amenities","Harico Diwaam clubhouse","Harico Diwaam swimming pool","Harico Diwaam gym","Harico Diwaam fitness centre","Harico Diwaam gymnasium","Harico Diwaam yoga","Harico Diwaam meditation","Harico Diwaam jogging track","Harico Diwaam walking track","Harico Diwaam kids play area","Harico Diwaam children play area","Harico Diwaam indoor games","Harico Diwaam outdoor games","Harico Diwaam sports amenities","Harico Diwaam multipurpose hall","Harico Diwaam party lawn","Harico Diwaam landscaped garden","Harico Diwaam gardens","Harico Diwaam green area","Harico Diwaam recreation","Harico Diwaam community amenities","Harico Diwaam senior citizen area","Harico Diwaam sky amenities","Harico Diwaam sky deck","Harico Diwaam observation deck","Harico Diwaam sky observation deck"],skyTowerKeywords:["Harico Diwaam sky tower","Harico Diwaam sky towers","Harico Diwaam sky deck","Harico Diwaam sky observation deck","Harico Diwaam observation deck","Harico Diwaam rooftop amenities","Harico Diwaam sky amenities","Harico Diwaam rooftop lifestyle","Harico Diwaam high rise lifestyle","Harico Diwaam 24 storey luxury","Harico Diwaam tower amenities","Harico Diwaam panoramic views","Harico Diwaam city views","Harico Diwaam skyline views","Harico Diwaam elevated lifestyle"],locationKeywords:["Harico Diwaam Kiwale","Harico Diwaam Kiwale Pune","Harico Diwaam Kiwale Road","Harico Diwaam Kiwale location","Harico Diwaam Kiwale property","Harico Diwaam Kiwale apartments","Harico Diwaam Kiwale flats","Harico Diwaam Kiwale residential project","Harico Diwaam Kiwale luxury flats","Harico Diwaam Kiwale premium apartments","Harico Diwaam Kiwale 2 BHK","Harico Diwaam Kiwale 3 BHK","Harico Diwaam Ravet","Harico Diwaam Ravet Kiwale","Harico Diwaam near Ravet","Harico Diwaam Ravet apartments","Harico Diwaam Ravet flats","Harico Diwaam Ravet property","Harico Diwaam Ravet residential project","Harico Diwaam Ravet 2 BHK","Harico Diwaam Ravet 3 BHK","Harico Diwaam Kiwale Ravet","Harico Diwaam Kiwale-Ravet","Harico Diwaam Kiwale Ravet Pune","Harico Diwaam Kiwale Ravet project","Harico Diwaam Kiwale Ravet flats","Harico Diwaam Kiwale Ravet apartments","Harico Diwaam Kiwale Ravet 2 BHK","Harico Diwaam Kiwale Ravet 3 BHK"],sentosaWaterParkKeywords:["Harico Diwaam opposite Sentosa Water Park","Harico Diwaam near Sentosa Water Park","Harico Diwaam Sentosa Water Park","Harico Diwaam opposite Sentosa","Harico Diwaam near Sentosa Resort","flats opposite Sentosa Water Park","apartments opposite Sentosa Water Park","homes opposite Sentosa Water Park","luxury flats near Sentosa Water Park","2 BHK near Sentosa Water Park","3 BHK near Sentosa Water Park","flats near Sentosa Kiwale","apartments near Sentosa Kiwale","property near Sentosa Water Park","residential project opposite Sentosa Water Park"],expresswayKeywords:["Harico Diwaam near Mumbai Pune Expressway","Harico Diwaam Mumbai Pune Expressway","Harico Diwaam Pune Mumbai Expressway","Harico Diwaam Expressway","Harico Diwaam Expressway corridor","Harico Diwaam near Expressway","flats near Mumbai Pune Expressway Kiwale","apartments near Mumbai Pune Expressway Kiwale","2 BHK near Mumbai Pune Expressway","3 BHK near Mumbai Pune Expressway","luxury flats near Mumbai Pune Expressway","residential projects near Mumbai Pune Expressway","property near Mumbai Pune Expressway","investment property near Mumbai Pune Expressway"],transitKeywords:["Harico Diwaam Mukai Chowk","Harico Diwaam near Mukai Chowk","Harico Diwaam Mukai Chowk Kiwale","Harico Diwaam 2 minutes from Mukai Chowk","flats near Mukai Chowk","apartments near Mukai Chowk","2 BHK near Mukai Chowk","3 BHK near Mukai Chowk","luxury flats near Mukai Chowk","property near Mukai Chowk","Harico Diwaam near Akurdi Railway Station","Harico Diwaam Akurdi Railway Station","Harico Diwaam 5 minutes from Akurdi station","flats near Akurdi Railway Station","apartments near Akurdi Railway Station","2 BHK near Akurdi Railway Station","3 BHK near Akurdi Railway Station","property near Akurdi Railway Station"],subMarketKeywords:["Harico Diwaam near Hinjewadi","Harico Diwaam Hinjewadi","Harico Diwaam near Hinjawadi IT Park","Harico Diwaam near Rajiv Gandhi Infotech Park","flats near Hinjewadi from Kiwale","2 BHK near Hinjewadi","3 BHK near Hinjewadi","Harico Diwaam near Wakad","Harico Diwaam Wakad","flats near Wakad","2 BHK near Wakad","3 BHK near Wakad","Harico Diwaam near Punawale","Harico Diwaam Punawale","Harico Diwaam near Tathawade","Harico Diwaam Tathawade"],investmentKeywords:["Harico Diwaam investment","Harico Diwaam property investment","Harico Diwaam real estate investment","Harico Diwaam investment opportunity","Harico Diwaam investment potential","Harico Diwaam ROI","Harico Diwaam rental yield","Harico Diwaam rental income","Harico Diwaam capital appreciation","Harico Diwaam property appreciation","Harico Diwaam investment Kiwale","Kiwale real estate investment","Kiwale property investment","best investment property Kiwale","best flats for investment Kiwale","best 2 BHK investment Kiwale","best 3 BHK investment Kiwale","Kiwale investment near Expressway","Kiwale property near Hinjewadi investment"],possessionKeywords:["Harico Diwaam possession","Harico Diwaam possession date","Harico Diwaam expected possession","Harico Diwaam possession December 2030","Harico Diwaam construction status","Harico Diwaam construction update","Harico Diwaam construction progress","Harico Diwaam latest construction update","Harico Diwaam project status","Harico Diwaam completion date","Harico Diwaam handover date","Harico Diwaam under construction","Harico Diwaam Mivan construction","Harico Edge possession June 2030","Harico Pride possession June 2027"],reviewKeywords:["Harico Diwaam reviews","Harico Divaam reviews","Harico Diwaam Kiwale reviews","Harico Diwaam Pune reviews","Harico Diwaam customer reviews","Harico Diwaam buyer reviews","Harico Diwaam owner reviews","Harico Diwaam Google reviews","Harico Diwaam ratings","Harico Diwaam experience","Harico Diwaam honest review","Harico Diwaam pros and cons","Harico Diwaam advantages","Is Harico Diwaam worth buying","Is Harico Diwaam a good project","Should I buy Harico Diwaam","Harico Diwaam investment review"],priceBandKeywords:["Harico Diwaam flats under 80 lakhs","Harico Diwaam 2 BHK under 80 lakhs","Harico Diwaam 2 BHK around 75 lakhs","2 BHK Kiwale under 80 lakhs","luxury 2 BHK Kiwale under 80 lakhs","2 BHK near Expressway under 80 lakhs","2 BHK near Sentosa Water Park under 80 lakhs","Harico Diwaam 2 BHK 80 lakh","Harico Diwaam 3 BHK under 90 lakhs","Harico Diwaam 3 BHK around 90 lakhs","3 BHK Kiwale under 90 lakhs","3 BHK near Expressway under 90 lakhs","Harico Diwaam 3 BHK under 1 crore","Harico Diwaam 3 BHK around 95 lakhs","3 BHK Kiwale under 1 crore","luxury 3 BHK Kiwale under 1 crore","Harico Diwaam 3 BHK 1 crore","Harico Diwaam 3 BHK 1.05 crore","Harico Diwaam 3 BHK Grand","premium 3 BHK Kiwale above 1 crore"]},Q=[...g.coreBrand,...g.highIntentBuy,...g.twoBhkEcosystem,...g.threeBhkEcosystem,...g.priceKeywords,...g.carpetAreaKeywords,...g.floorPlanKeywords,...g.towerKeywords,...g.reraKeywords,...g.amenitiesKeywords,...g.skyTowerKeywords,...g.locationKeywords,...g.sentosaWaterParkKeywords,...g.expresswayKeywords,...g.transitKeywords,...g.subMarketKeywords,...g.investmentKeywords,...g.possessionKeywords,...g.reviewKeywords,...g.priceBandKeywords,"हरिको दिवाम","हॅरिको दिवाम","हरिको दिवाम किवाळे","हरिको दिवाम नवीन लाँच","हरिको दिवाम २ बीएचके","हरिको दिवाम ३ बीएचके","हरिको दिवाम रेरा PR1260002502389","हरिको दिवाम पझेशन डिसेंबर 2030"],W=["Sentosa Punawale","sentosa punawale","Sentosa Punwale","sentosa punwale","Sentosa Developers Punawale","sentosa developers punawale","Sentosa Developers Punwale","sentosa developers punwale","Sentosa Edge Punawale","sentosa edge punawale","Sentosa Pride Punawale","sentosa pride punawale","Sentosa Ekam Punawale","sentosa ekam punawale","Sentosa Pride Phase 1 2 3 Punawale","Sentosa projects in Punawale","Sentosa new projects Punawale","Sentosa upcoming project Punawale","Sentosa Punawale flats","Sentosa Punawale 2 BHK","Sentosa Punawale 3 BHK","Sentosa Punawale price","Sentosa Punawale floor plan","Sentosa Punawale brochure","Sentosa Punawale RERA","Sentosa Punawale possession","Sentosa Punawale contact 7744009295","Sentosa Developers Punawale site office","Sentosa Punawale reviews","flats in Punawale by Sentosa Developers","Sentosa Group Punawale","Sentosa Harico Punawale","Sentosa Edge price Punawale","Sentosa Pride price Punawale","Sentosa Ekam price Punawale","सेंटोसा पुनावळे","सेंटोसा डेव्हलपर्स पुनावळे"],J=["Harico Kiwale","harico kiwale","Harico Estates Kiwale","harico estates kiwale","Harico Diwaam Kiwale","harico diwaam kiwale","Harico Divaam Kiwale","harico divaam kiwale","Harico projects in Kiwale","Harico new launch Kiwale","harico new launch kiwale","Harico Diwaam Kiwale new launch","Harico Divaam Kiwale new launch","Harico upcoming project Kiwale","Harico Kiwale flats","Harico Kiwale 2 BHK","Harico Kiwale 3 BHK","Harico Kiwale price","Harico Kiwale starting 70 lakhs","Harico Kiwale 3 BHK starting 89.90 lakhs","Harico Kiwale 24 storeys","Harico Kiwale opposite Sentosa Water Park","Harico Kiwale Mukai Chowk","Harico Kiwale Expressway","Harico Kiwale sales office","Harico Kiwale contact 7744009295","Harico Kiwale RERA PR1260002502389","Harico Kiwale brochure pdf","Harico Kiwale sample flat","Harico Kiwale possession December 2030","Harico Diwaam possession Dec 2030","flats in Kiwale Harico Estates","luxury flats in Kiwale by Harico","tallest tower in Kiwale Harico","Harico Kiwale Ravet","Harico Kiwale PCMC","हरिको किवाळे","हॅरिको किवाळे","हरिको इस्टेट्स किवाळे","हरिको दिवाम किवाळे नवीन लाँच"],V=["Harico Punawale","harico punawale","Harico Estates Punawale","harico estates punawale","Harico Edge Punawale","harico edge punawale","Harico Pride Punawale","harico pride punawale","Harico projects in Punawale","Harico new launch Punawale","harico new launch punawale","Harico Edge new launch Punawale","Harico upcoming project Punawale","Harico Punawale flats","Harico Punawale 2 BHK","Harico Punawale 3 BHK","Harico Punawale price","Harico Punawale price starting 74 lakhs","Harico Edge possession June 2030","Harico Punawale possession June 2030","Harico Punawale Bhumkar Chowk","Harico Punawale near Expressway","Harico Punawale near Akshara School","Harico Punawale near Bhiku Kale School","Harico Punawale floor plan","Harico Punawale brochure","Harico Punawale RERA P52100031773","Harico Punawale RERA P52100018471","Harico Punawale contact 7744009295","Harico Punawale sales office","Harico Punawale sample flat","Harico Punawale reviews","flats in Punawale Harico Estates","luxury 2 BHK in Punawale Harico","luxury 3 BHK in Punawale Harico","Harico Punawale PCMC","हरिको पुनावळे","हॅरिको पुनावळे","हरिको इस्टेट्स पुनावळे","हरिको एज पुनावळे जून 2030"],E={edge:["Harico Edge","Harico Edge Punawale","Harico Edge Pune","Harico Edge PCMC","Harico Estates Punawale","Harico Estates Edge","Sentosa Harico Edge","2 BHK Harico Edge","3 BHK Harico Edge","2 BHK flats in Harico Edge","3 BHK flats in Harico Edge","2 BHK flats in Harico Edge Punawale","3 BHK flats in Harico Edge Punawale","Harico Edge price","Harico Edge price list","Harico Edge cost sheet","Harico Edge floor plan","Harico Edge 2 BHK floor plan","Harico Edge 3 BHK floor plan","Harico Edge master layout","Harico Edge brochure","Harico Edge brochure pdf","Harico Edge RERA","Harico Edge RERA number","Harico Edge RERA P52100031773","Harico Edge possession","Harico Edge possession date","Harico Edge sample flat","Harico Edge sample flat video","Harico Edge reviews","Harico Edge contact number","Harico Edge 7744009295","Harico Edge sales office","Harico Edge site address","Harico Edge location","Harico Edge Google Maps","Harico Edge construction status","Harico Edge Mivan construction","Harico Edge amenities","premium flats in Punawale","2 BHK flats in Punawale","3 BHK flats in Punawale","luxury flats Punawale","new flats in Punawale","flats near Bhumkar Chowk","flats near Hinjewadi","flats near Hinjewadi IT Park","flats near Mumbai Pune Expressway Punawale","flats near Akshara International School Punawale","Punawale luxury 2 BHK flats","Punawale luxury 3 BHK flats","हरिको एज पुनावळे","हॅरिको एज","हरिको एज"],pride:["Harico Pride","Harico Pride Punawale","Harico Estates Harico Pride","Harico Estates Pride","Sentosa Harico Pride","Harico Pride 2 BHK","Harico Pride 3 BHK","2 BHK flats in Harico Pride","3 BHK flats in Harico Pride","premium homes Punawale","Harico Pride price","Harico Pride floor plan","Harico Pride brochure","Harico Pride RERA","Harico Pride RERA number","Harico Pride RERA P52100018471","Harico Pride possession","Harico Pride contact number","Harico Pride 7744009295","Harico Pride site address","flats near Bhiku Kale School Punawale","हरिको प्राईड पुनावळे","हॅरिको प्राईड"],divaam:["Harico Divaam","Harico Diwaam","Harico Divam","Harico Diwam","Harico Divaam Kiwale","Harico Diwaam Kiwale","Harico Divaam Pune","Harico Diwaam Pune","Harico Divaam PCMC","Harico Diwaam PCMC","Harico Divaam Ravet","Harico Diwaam Ravet","Harico Divaam Mukai Chowk","Harico Diwaam Mukai Chowk","Harico Divaam Sentosa","Harico Diwaam Sentosa","Harico Divaam Sentosa Water Park","Harico Diwaam Sentosa Water Park","Sentosa Harico Divaam","Sentosa Harico Diwaam","Sentosa Divaam","Sentosa Diwaam","Harico Estates Kiwale","Harico Estates Divaam","Harico Estates Diwaam","Harico Divaam price","Harico Diwaam price","Harico Divaam cost sheet","Harico Diwaam cost sheet","Harico Divaam floor plan","Harico Diwaam floor plan","Harico Divaam 2 BHK floor plan","Harico Diwaam 2 BHK floor plan","Harico Divaam 3 BHK floor plan","Harico Diwaam 3 BHK floor plan","Harico Divaam master layout","Harico Diwaam master layout","Harico Divaam brochure","Harico Diwaam brochure","Harico Divaam brochure pdf","Harico Diwaam brochure pdf","Harico Divaam RERA","Harico Diwaam RERA","Harico Divaam RERA number","Harico Diwaam RERA number","Harico Divaam RERA PR1260002502389","Harico Diwaam RERA PR1260002502389","Harico Divaam possession","Harico Diwaam possession","Harico Divaam possession date","Harico Diwaam possession date","Harico Divaam sample flat","Harico Diwaam sample flat","Harico Divaam sample flat video","Harico Diwaam sample flat video","Harico Divaam reviews","Harico Diwaam reviews","Harico Divaam contact number","Harico Diwaam contact number","Harico Divaam 7744009295","Harico Diwaam 7744009295","Harico Divaam sales office","Harico Diwaam sales office","Harico Divaam site address","Harico Diwaam site address","Harico Divaam location","Harico Diwaam location","Harico Divaam Google Maps","Harico Diwaam Google Maps","Harico Divaam 2 BHK","Harico Diwaam 2 BHK","Harico Divaam 2 BHK price","Harico Diwaam 2 BHK price","Harico Divaam 3 BHK","Harico Diwaam 3 BHK","Harico Divaam 3 BHK price","Harico Diwaam 3 BHK price","2 BHK flats in Harico Divaam Kiwale","2 BHK flats in Harico Diwaam Kiwale","3 BHK flats in Harico Divaam Kiwale","3 BHK flats in Harico Diwaam Kiwale","Harico Divaam 24 storeys","Harico Diwaam 24 storeys","Harico Divaam tallest tower Kiwale","Harico Diwaam tallest tower Kiwale","2 BHK flats Kiwale","3 BHK flats Kiwale","premium flats Kiwale","luxury flats Kiwale","new launch Kiwale","upcoming projects Kiwale","flats near Sentosa Water Park","flats opposite Sentosa Water Park","flats near Mukai Chowk Kiwale","flats near Mumbai Pune Expressway Kiwale","flats near Hinjewadi Kiwale","flats near Ravet","Kiwale investment property","हरिको दिवाम किवाळे","हॅरिको दिवाम","हरिको दिवाम","हरिको दिवाम सेंटोसा"]},K={edge:["Sentosa Edge","Sentosa Edge Punawale","Sentosa Developers Punawale","Sentosa Edge Pune","Sentosa Edge 2 BHK","Sentosa Edge 3 BHK","flats in Punawale","premium flats Punawale","luxury apartments Punawale","new project Punawale","Sentosa Edge price","Sentosa Edge floor plan","Sentosa Edge brochure","Sentosa Edge RERA","Sentosa Edge possession","flats near Hinjewadi IT Park","flats near Mumbai Pune Expressway"],pride:["Sentosa Pride","Sentosa Pride Punawale","Sentosa Pride Phase 1","Sentosa Pride Phase 2","Sentosa Pride Phase 3","Sentosa Pride 2 BHK","Sentosa Pride 3 BHK","Sentosa Pride price","Sentosa Pride floor plan","Sentosa Pride brochure","Sentosa Pride RERA","Sentosa Pride possession","flats near Bhumkar Chowk","flats near Hinjewadi"],divaam:["Sentosa Divaam","Sentosa Diwaam","Sentosa Harico Divaam","Sentosa Harico Diwaam","Sentosa Developers Kiwale","Sentosa Kiwale project","Sentosa Codename Divine","Sentosa Divaam 2 BHK","Sentosa Divaam 3 BHK","Sentosa Diwaam 2 BHK","Sentosa Diwaam 3 BHK","Sentosa Divaam price","Sentosa Diwaam price","Sentosa Divaam RERA PR1260002502389"],ekam:["Sentosa Ekam","Sentosa Ekam Punawale","Sentosa Ekam 2 BHK","Sentosa Ekam 3 BHK","Sentosa Ekam price","Sentosa Ekam floor plan","Sentosa Ekam brochure","Sentosa Ekam RERA","Sentosa Ekam possession","new flats Punawale","premium homes Punawale"]},R={core:["Punawale real estate","Punawale property","Punawale properties","Punawale flats","flats in Punawale","apartments in Punawale","new projects in Punawale","new launch projects Punawale","upcoming projects Punawale","under construction projects Punawale","ready possession flats Punawale","premium flats Punawale","luxury flats Punawale","affordable luxury flats Punawale","residential projects Punawale","1 BHK Punawale","2 BHK Punawale","2 BHK flats in Punawale","3 BHK Punawale","3 BHK flats in Punawale","4 BHK Punawale","gated community Punawale","Punawale property investment","Punawale real estate investment","Punawale property rates","Punawale property price","Punawale price per sq ft","best real estate projects Punawale"],locationAndUsp:["flats near Hinjewadi","flats near Hinjewadi IT Park Phase 1","flats near Hinjewadi IT Park Phase 2","flats near Bhumkar Chowk","flats near Mumbai Pune Expressway","flats near Wakad","flats near Tathawade","flats near Ravet","flats near Kiwale","flats near Akshara International School Punawale","flats near Bhiku Vallabh Kale School Punawale","flats near JSPM Imperial College Punawale","properties near Pimpri Chinchwad","Pune West real estate","West Pune property","Punawale to Hinjewadi commute","Punawale to Wakad connectivity","Punawale ring road","Punawale metro connectivity"],highIntent:["Harico Edge Punawale","Harico Pride Punawale","Sentosa Edge Punawale","Sentosa Pride Punawale","Sentosa Ekam Punawale","Harico Estates Punawale","Sentosa Developers Punawale","2 BHK under 70 lakh Punawale","2 BHK under 75 lakh Punawale","2 BHK under 80 lakh Punawale","3 BHK under 90 lakh Punawale","3 BHK under 1 crore Punawale","3 BHK under 1.15 crore Punawale","2 BHK with dual balconies Punawale","flats for sale Punawale","best flats Punawale","Mivan construction flats Punawale","buy flat in Punawale developer direct","पुनावळे फ्लॅट्स","पुनावळे नवीन प्रोजेक्ट्स","२ बीएचके फ्लॅट पुनावळे","३ बीएचके फ्लॅट पुनावळे"]},Y={core:["Kiwale real estate","Kiwale property","Kiwale flats","flats in Kiwale","apartments in Kiwale","new projects Kiwale","upcoming projects Kiwale","new launch Kiwale","under construction projects Kiwale","ready possession flats Kiwale","1 BHK Kiwale","2 BHK Kiwale","2 BHK flats in Kiwale","3 BHK Kiwale","3 BHK flats in Kiwale","premium flats Kiwale","luxury flats Kiwale","high rise apartments Kiwale","affordable flats Kiwale","Kiwale property investment","Kiwale property rates","Kiwale price per sq ft","Kiwale Ravet corridor real estate"],highIntent:["Harico Divaam Kiwale","Harico Diwaam Kiwale","Harico Divaam Ravet","Harico Diwaam Ravet","Sentosa Harico Divaam","Sentosa Harico Diwaam","Sentosa Divaam Kiwale","Sentosa Diwaam Kiwale","Harico Estates Kiwale","Sentosa Developers Kiwale","2 BHK flats Kiwale","3 BHK flats Kiwale","new launch flats Kiwale","flats opposite Sentosa Water Park","flats near Sentosa Water Park","flats near Mukai Chowk Kiwale","flats near Mumbai Pune Expressway Kiwale","flats near Symbiosis University Kiwale","flats near MCA Stadium Gahunje","flats near Ravet BRTS terminal","flats near Dehu Road","tallest 24 storey towers Kiwale Ravet","5 iconic sky towers Kiwale","2 BHK under 70 lakh Kiwale","2 BHK under 75 lakh Kiwale","2 BHK under 80 lakh Kiwale","3 BHK under 90 lakh Kiwale","3 BHK under 1 crore Kiwale","3 BHK under 1.10 crore Kiwale","Kiwale investment property","किवाळे फ्लॅट्स","किवाळे सेंटोसा प्रोजेक्ट्स","२ बीएचके फ्लॅट किवाळे","३ बीएचके फ्लॅट किवाळे"]},X={core:["Tathawade real estate","Tathawade property","Tathawade flats","flats in Tathawade","apartments in Tathawade","new projects Tathawade","upcoming projects Tathawade","new launch Tathawade","residential projects Tathawade","1 BHK Tathawade","2 BHK Tathawade","3 BHK Tathawade","4 BHK Tathawade","premium flats Tathawade","luxury flats Tathawade","affordable flats Tathawade","Tathawade investment","Tathawade property investment","Tathawade property rates","Tathawade price per sq ft"],location:["flats near Hinjewadi","flats near Wakad","flats near Punawale","flats near Ravet","flats near Bhumkar Chowk","flats near Mumbai Pune Highway","flats near Pune Bangalore Highway","Tathawade Hinjewadi","Tathawade Wakad","Tathawade IT Park","Tathawade investment property"],projectSpecific:["Sentosa Serene Tathawade","Sentosa Developers Tathawade","Sentosa Tathawade","Sentosa Serene","2 BHK flats Tathawade","3 BHK flats Tathawade"]},C={brand:["Harico Estates","Harico Estates Pune","Harico Estates Punawale","Harico Estates Kiwale","Harico Estates contact 7744009295","Sentosa Developers","Sentosa Developers Pune","Sentosa projects Pune","Sentosa Harico","Sentosa Group Real Estate","Harico Group Pune"],project:["Harico Edge","Harico Edge Punawale","Harico Divaam","Harico Diwaam","Harico Divaam Kiwale","Harico Diwaam Kiwale","Harico Pride","Harico Pride Punawale","Sentosa Edge","Sentosa Pride","Sentosa Ekam","Sentosa Divaam","Sentosa Diwaam","Sentosa Harico Divaam","Sentosa Harico Diwaam","Sentosa Serene"],locationProperty:["flats in Punawale","2 BHK flats Punawale","3 BHK flats Punawale","flats in Kiwale","2 BHK flats Kiwale","3 BHK flats Kiwale","flats in Ravet","2 BHK flats in Ravet","3 BHK flats in Ravet","flats in Tathawade","2 BHK flats Tathawade","3 BHK flats Tathawade","flats near Sentosa Water Park","flats near Bhumkar Chowk","flats near Mukai Chowk"],highPurchaseIntent:["Harico Edge price list","Harico Edge floor plan 2 BHK 3 BHK","Harico Edge brochure download","Harico Edge site visit booking","Harico Divaam price list","Harico Diwaam price list","Harico Divaam floor plan","Harico Diwaam floor plan","Harico Divaam brochure pdf","Harico Diwaam brochure pdf","Harico Divaam sample flat","Harico Diwaam sample flat","Harico Divaam site visit booking","Harico Diwaam site visit booking","flats for sale Punawale","flats for sale Kiwale","flats for sale Tathawade","new launch Punawale","new launch Kiwale","new launch Tathawade","best flats Punawale","best projects Punawale","best projects Kiwale","best projects Tathawade","property investment Punawale","property investment Kiwale","property investment Tathawade","property price Punawale","property price Kiwale","property price Tathawade","2 BHK under 70 lakh Punawale","2 BHK under 70 lakh Kiwale","2 BHK under 75 lakh Punawale","2 BHK under 75 lakh Kiwale","3 BHK under 1 crore Punawale","3 BHK under 1 crore Kiwale"]},fe=["Harico Edge Punawale","Harico Divaam Kiwale","Harico Diwaam Kiwale","Harico Pride Punawale","Sentosa Edge Punawale","Sentosa Pride Punawale","Sentosa Ekam Punawale","Sentosa Divaam Kiwale","Sentosa Diwaam Kiwale","Sentosa Serene Tathawade","Sentosa Elite Wakad","Sentosa Palm Wakad","Sentosa Elysium Wakad","Sentosa Pearl Wakad","Sentosa Era Moshi","Sentosa Residency Hadapsar","Gulraj Residency Kondhwa","Satyam Complex Thane","Shivdham Complex Thane","Samarpam Complex Thane","Royal Palms Thane","Regency Plaza Thane","Ami Infra Pink City"],ie=["Punawale","Kiwale","Ravet","Tathawade","Wakad","Hinjewadi","Hinjewadi Phase 1","Hinjewadi Phase 2","Hinjewadi Phase 3","Bhumkar Chowk","Mukai Chowk","Dange Chowk","PCMC","Pimpri Chinchwad","West Pune","Mumbai-Pune Expressway","Moshi Pradhikaran"],Z=(e,a=400)=>{let t=[];switch(e){case"harico-diwaam":case"harico-divaam":case"diwaam":case"divaam":case"harico-new-launch":case"new-launch":t=[...Q,...J,...E.divaam,...K.divaam,...Y.core,...Y.highIntent,...C.highPurchaseIntent.filter(i=>i.includes("Divaam")||i.includes("Diwaam")||i.includes("Kiwale")),...I.slice(0,10),...$.slice(0,10)];break;case"sentosa-punawale":t=[...W,...K.edge,...K.pride,...K.ekam,...R.highIntent];break;case"harico-kiwale":case"kiwale":t=[...J,...Q,...Y.highIntent,...Y.core,...E.divaam,...K.divaam,...I.slice(0,8),...$.slice(0,8),...C.highPurchaseIntent.filter(i=>i.includes("Kiwale")||i.includes("Diwaam")||i.includes("Divaam"))];break;case"harico-punawale":case"punawale":t=[...V,...W,...R.highIntent,...R.core,...R.locationAndUsp,...E.edge,...E.pride,...K.ekam,...I.slice(0,8),...$.slice(0,8),...C.highPurchaseIntent.filter(i=>i.includes("Punawale"))];break;case"harico-brand":t=[...I,...V.slice(0,10),...J.slice(0,10),...Q.slice(0,10),...C.brand,...E.edge.slice(0,10),...E.divaam.slice(0,10),...E.pride.slice(0,10)];break;case"sentosa-brand":t=[...$,...W,...C.brand,...K.edge,...K.divaam,...K.pride,...K.ekam];break;case"edge":case"harico-edge":t=[...V,...W.slice(0,10),...E.edge,...K.edge,...R.highIntent,...R.core.slice(0,15),...I.slice(0,10),...$.slice(0,10),...C.highPurchaseIntent.filter(i=>i.includes("Punawale")||i.includes("Edge"))];break;case"pride":case"harico-pride":t=[...V,...W.slice(0,10),...E.pride,...K.pride,...R.highIntent,...R.core.slice(0,15),...I.slice(0,10),...$.slice(0,10),...C.highPurchaseIntent.filter(i=>i.includes("Punawale")||i.includes("Pride"))];break;case"tathawade":t=[...X.core,...X.location,...X.projectSpecific,...C.highPurchaseIntent.filter(i=>i.includes("Tathawade"))];break;default:t=[...Q.slice(0,15),...W.slice(0,10),...J.slice(0,10),...V.slice(0,10),...I,...$,...C.brand,...C.project,...C.locationProperty,...C.highPurchaseIntent,...E.edge.slice(0,10),...E.divaam.slice(0,10),...E.pride.slice(0,10),...R.highIntent.slice(0,10),...Y.highIntent.slice(0,10),"पुनावळे मधील २ आणि ३ बीएचके फ्लॅट्स","किवाळे सेंटोसा प्रोजेक्ट्स","तथावडे फ्लॅट विक्रीसाठी","हिंजवडी जवळ घरे"];break}return Array.from(new Set(t)).slice(0,a).join(", ")},A={1:{id:"1",slug:"harico-edge",title:"HARICO EDGE",location:"Punawale, Pune",status:"Ongoing",type:"2 & 3 BHK Ultra-Premium Homes",price:"₹74 Lacs Onwards",startingPriceNumeric:74,possession:"June 2030",landParcel:"2.5 Acres Luxury Enclave",towers:"3 Grand High-Rise Towers",floors:"22 Storeys of Iconic Architecture",unitsTotal:"280+ Exclusive Residences",image:"/assets/harico-edge-hero.png",tagline:"A Glimpse Into Excellence | The Edge Of Timeless Modern Sophistication | Possession June 2030",description:"Harico Edge (formerly Sentosa Edge) represents the pinnacle of modern architectural luxury in Punawale, West Pune’s fastest-growing residential corridor. Set across a 2.5-acre lush land parcel with possession scheduled for June 2030, each residence offers 2 expansive balconies, zero-wastage smart layouts, dedicated walk-in wardrobe provisions, and panoramic views of the Western Ghats. Crafted with Mivan monolithic concrete technology, Harico Edge delivers unmatched structural longevity, acoustic privacy, and 50+ handpicked lifestyle amenities.",highlights:["Target Possession: June 2030 with Structured MahaRERA Milestones","2.5-Acre Gated Community with 70% Open & Green Spaces","Zero Space Wastage Floor Layouts with Dual Private Balconies","Walk-in Wardrobe Spaces in all 3 BHK Master Bedrooms","Vastu-Compliant East-West Facing Living Entrances","Advanced Multi-Tier Security with RFID Vehicle Access & CCTV","EV Charging Infrastructure for Every Parking Tier","Solar Net-Metering for Common Area Energy Optimization"],bankPartners:["State Bank of India","HDFC Bank","ICICI Bank","Axis Bank","Bank of Baroda","Kotak Mahindra Bank"],amenities:["Swimming Pool with Infinity Edge","Kids Splash Pool","Grand Clubhouse (10,000 sq.ft)","Party Lawn with Banquet Deck","Temple & Flag Hoisting Plaza","Cabana & Gazebo Sitouts","Sun Bathing & Pool Deck","Rooftop Stargazing Observatory","Yoga & Zumba Studio","Equipped Gymnasium & Crossfit Zone","Jogging & Acupressure Track","Grand Designer Entrance Gate","Intercom & Video Door Phone","EV Charging Stations","100% DG Power Backup for Common Areas","Multipurpose Community Hall","Private Mini Theatre (30-Seater)","Barbeque Counter & Pergola","Day Care & Creche Center","Library & Co-working Lounge","Snooker & Indoor Games Arena"],specifications:[{category:"Structure & Masonry",icon:"fa-building",items:["Earthquake Resistant RCC Framed Structure designed for Zone III seismic compliance","Alu-form / Mivan monolithic concrete construction ensuring crack-free smooth surfaces","Eco-friendly AAC block masonry with gypsum finish on internal walls"]},{category:"Flooring & Finishes",icon:"fa-layer-group",items:["800mm x 1600mm Double Charged Glazed Vitrified Tiles in Living, Dining & Bedrooms","Anti-skid premium matte ceramic tiles in Balconies, Dry Balcony & Bathrooms","Laminated wooden flooring provision in Master Bedroom suite (3 BHK units)","Premium weather-shield exterior acrylic paint and low-VOC royal luster interior paint"]},{category:"Kitchen & Utility",icon:"fa-kitchen-set",items:["Premium Granite / Quartz platform with heavy-gauge stainless steel sink (Franke/Nirali)","Full-height designer ceramic dado tiles above kitchen platform","Dedicated dry balcony with washing machine inlet/outlet points and power socket","Provision for water purifier (RO) and exhaust chimney ducting"]},{category:"Bathrooms & Sanitary",icon:"fa-bath",items:["CP and Sanitary fittings from luxury brands: Kohler / Jaquar / Grohe","Concealed plumbing with premium CPVC / UPVC anti-corrosion pipelines","Wall-hung EWC with concealed dual-flush cisterns","Solar water heating connection in Master Bathroom & geyser provision in all bathrooms"]},{category:"Electrical & Smart Home",icon:"fa-bolt",items:["Concealed copper wiring with Polycab / Havells fire-retardant cables","Modular electrical switches by Schneider Electric / Legrand","AC electrical points in Living Room and all Bedrooms","Smart video door phone (VDP) with mobile app integration and digital main door lock"]},{category:"Doors, Windows & Elevators",icon:"fa-door-open",items:["Grand 8-ft decorative laminated main door with biometric digital lock (Yale/Godrej)","Heavy-gauge powder-coated aluminum sliding windows with mosquito mesh and granite sills","High-speed automatic elevators (Schindler / Otis / Mitsubishi) with ARD emergency backup"]}],reraNumber:"P52100031773",reraQRCodeUrl:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100031773",connectivity:[{title:"Mumbai-Pune Expressway / NH-48",time:"02 Min",distance:"1.2 km",category:"Highways & Transit"},{title:"Bhumkar Chowk & Wakad Flyover",time:"07 Min",distance:"3.5 km",category:"Highways & Transit"},{title:"Hinjewadi IT Park (Phase 1)",time:"12 Min",distance:"6.8 km",category:"IT & Employment"},{title:"Phoenix Mall of the Millennium (Wakad)",time:"10 Min",distance:"4.8 km",category:"Retail & Shopping"},{title:"Akshara International School",time:"04 Min",distance:"1.8 km",category:"Education"},{title:"JSPM & Indira Institute of Management",time:"05 Min",distance:"2.4 km",category:"Education"},{title:"Lifepoint Multispecialty Hospital",time:"09 Min",distance:"4.2 km",category:"Healthcare"},{title:"Aditya Birla Memorial Hospital",time:"12 Min",distance:"5.9 km",category:"Healthcare"},{title:"Decathlon Sports & Balaji Temple",time:"05 Min",distance:"2.1 km",category:"Lifestyle & Recreation"}],configurations:[{type:"2 BHK Smart",carpet:"741 sq.ft",price:"₹ 74.00 Lacs*",bedrooms:2},{type:"2 BHK Premium",carpet:"781 sq.ft",price:"₹ 80.00 Lacs*",bedrooms:2},{type:"2 BHK Grande",carpet:"826 sq.ft",price:"₹ 84.00 Lacs*",bedrooms:2},{type:"3 BHK Comfort",carpet:"942 sq.ft",price:"₹ 89.00 Lacs*",bedrooms:3},{type:"3 BHK Luxury",carpet:"1048 sq.ft",price:"₹ 98.00 Lacs*",bedrooms:3},{type:"3 BHK Grande",carpet:"1114 sq.ft",price:"₹ 1.12 Cr*",bedrooms:3},{type:"3 BHK Royale",carpet:"1148 sq.ft",price:"₹ 1.18 Cr*",bedrooms:3}],seo:{title:"Harico Edge Punawale | Sentosa Developers | 2 & 3 BHK Luxury Residences",description:"Harico Edge in Punawale by Sentosa Developers. Ultra-premium 2 & 3 BHK flats starting ₹74 Lacs* near Bhumkar Chowk, 2 mins to Expressway & 12 mins to Hinjewadi. Possession June 2030. MahaRERA P52100031773. Call +91 7744009295.",keywords:Z("edge")}},2:{id:"2",slug:"harico-divaam",title:"HARICO DIWAAM",location:"Kiwale, Pune",status:"Upcoming",type:"2 & 3 BHK Ultra-Luxury High-Rise Residences",price:"Starts ₹70.00 Lacs*",startingPriceNumeric:70,possession:"December 2030",landParcel:"5.0 Acres Megastructure",towers:"5 Iconic Sky Towers",floors:"24 Storeys (Tallest Towers in Kiwale-Ravet)",unitsTotal:"500+ Luxury Residences",image:"/assets/harico-divaam-hero.jpg",tagline:"🚨 Flagship Mega Launch | Tallest 24-Storey Landmark Opposite Sentosa Water Park | Starts ₹70L* (3 BHK from ₹89.90L*) | Possession Dec 2030",description:"Harico Diwaam by Sentosa Developers is the premier flagship mega new launch of Kiwale-Ravet, standing tall as the highest 24-storey residential landmark in the micro-market. Spanning an expansive 5-acre master development directly opposite Sentosa Water Park with possession scheduled for December 2030, Harico Diwaam offers luxury 2 BHK residences from ₹70 Lacs* and spacious 3 BHK residences from ₹89.90 Lacs* onwards with over 100+ resort-grade lifestyle amenities organized into dedicated wellness, recreational, and lifestyle zones (MahaRERA: PR1260002502389).",highlights:["🔥 Major New Launch: Tallest 24-Storey High-Rise Towers in Kiwale-Ravet","Target Possession: December 2030 with MahaRERA PR1260002502389 Backing","5-Acre Integrated Master Community with 100+ Lifestyle Amenities","Direct Access: 2 Minutes from Mumbai-Pune Expressway & Mukai Chowk","12 Fully Serviced Guest Suites for Resident Visitors","Podcasting & Content Creator Studio + Executive Co-working Lounges","Exclusive Sky Observation Deck & Sky Gymnasium at 24th Floor","Private 40-Seater Mini Theatre & Party Hall with DJ Setup"],bankPartners:["State Bank of India","HDFC Bank","ICICI Bank","Punjab National Bank","Axis Bank"],amenities:[{category:"Water & Wellness",items:["Resort-inspired Grand Swimming Pool","Children's Splash Fun Pool","Poolside Sunken Cabana Deck","Cabana-style Private Pergolas","BBQ & Poolside Celebration Deck","Sacred Temple Pavilion & Bell Tower","Meditation, Pranayama & Yoga Lawns","Zen Tranquillity Rock Garden","Acupressure Reflexology Walkway","Sensory & Aromatherapy Floral Garden","Sky-Level Panoramic Gymnasium","Indoor Aerobics & Yoga Studio"]},{category:"Sports & Entertainment",items:["Children's Adventure Play Zone with Rubberized Flooring","Creative Sandcastle Pit","Multi-Purpose Badminton & Basketball Sports Court","Professional Box Cricket Turf with Floodlights","Jogging & Nordic Walking Track","Dedicated Pet Exercise Park & Agility Zone","Open-Air Roman Amphitheatre","Acoustic Party Banquet Hall with Sound System","Private 40-Seater Dolby Atmos Mini Theatre","Indoor Games Arcade (Table Tennis, Foosball, Carrom)","Music, Dance & Creative Hobby Studio"]},{category:"Premium Lifestyle & Business",items:["12 Luxury Furnished Guest Suites for Visitors","Salon & Wellness Spa Corner","Exclusive Residents' Rooftop Sky Lounge","Air-Conditioned Co-Working Hub with High-Speed WiFi","Podcast & Digital Content Creator Studio","24th Floor Sky Observation Deck","Fast EV Charging Stations for Cars & Two-Wheelers","Grand Double-Height Entrance Lobbies with Concierge Desk"]}],specifications:[{category:"Structure & Architecture",icon:"fa-building",items:["Seismic Zone III Compliant Earthquake Resistant RCC Shear Wall System (Mivan Technology)","High-grade M35/M40 concrete designed for maximum thermal and structural durability","Aerated autoclaved blockwork with double-coat sand faced external plaster"]},{category:"Flooring & Surfaces",icon:"fa-layer-group",items:["Large format 1200mm x 1800mm High Gloss Nano Vitrified Tiles in Living, Dining & Kitchen","Wooden texture anti-skid vitrified tiles in all attached Balconies and Sitouts","Designer full-height vitrified wall tiles in Bathrooms with anti-fungal epoxy grouting","Luster finish Asian Paints Royale internally & Weatherproof Ultima Protek externally"]},{category:"Kitchen & Gourmet Area",icon:"fa-kitchen-set",items:["Parallel / L-shaped Quartz Countertop with Franke Stainless Steel Sink & Swivel Faucet","Provision for piped gas connection (MNGL network ready)","Designer glazed wall tiles up to lintel height","Separate Utility Balcony with water, drainage and 15A electrical points"]},{category:"Luxury Sanitary & Plumbing",icon:"fa-bath",items:["Luxury series CP & Sanitary ware by Kohler / Toto / Grohe","Thermostatic diverters with overhead rain shower in master bathroom","Solar water heating provision in all master bathrooms","False ceiling with moisture-resistant gypsum in all bathrooms"]},{category:"Smart Home & Electrical",icon:"fa-bolt",items:["Smart Touch Switches with Alexa / Google Home automation compatibility","Fire-resistant low-smoke (FRLS) concealed wiring by Finolex / Polycab","Legrand / Schneider Arteor designer modular switchboards","Biometric digital door lock (Fingerprint, Passcode, RFID Card, Mechanical Key)"]},{category:"Doors, Windows & Security",icon:"fa-shield-halved",items:["8.5-ft Grand Veneer-finished main door with Italian-styled designer hardware","Soundproof DGU (Double Glazed) UPVC sliding French windows in living room","3-Tier Security: 24x7 Security Guards, RFID Boom Barriers, and 360-degree HD CCTV Surveillance"]}],connectivity:[{title:"Mumbai-Pune Expressway & Mukai Chowk",time:"02 Min",distance:"0.8 km",category:"Highways & Transit"},{title:"Sentosa Water Park & Resort",time:"01 Min",distance:"Opposite",category:"Lifestyle & Recreation"},{title:"MCA International Cricket Stadium (Gahunje)",time:"06 Min",distance:"3.5 km",category:"Lifestyle & Recreation"},{title:"Ravet & Akurdi Railway Station",time:"07 Min",distance:"4.0 km",category:"Highways & Transit"},{title:"Symbiosis Skills & Professional University",time:"04 Min",distance:"1.9 km",category:"Education"},{title:"D.Y. Patil University Campus (Akurdi)",time:"10 Min",distance:"5.2 km",category:"Education"},{title:"Hinjewadi Rajiv Gandhi IT Park",time:"18 Min",distance:"10.5 km",category:"IT & Employment"},{title:"Phoenix Mall of the Millennium",time:"12 Min",distance:"6.5 km",category:"Retail & Shopping"},{title:"Ojas Multispecialty Hospital Ravet",time:"06 Min",distance:"3.1 km",category:"Healthcare"}],configurations:[{type:"2 BHK Smart",carpet:"724 sq.ft",price:"₹ 70.00 Lacs* Onwards",bedrooms:2},{type:"2 BHK Comfort",carpet:"760 sq.ft",price:"₹ 74.00 - 76.00 Lacs*",bedrooms:2},{type:"2 BHK Prime",carpet:"791 sq.ft",price:"₹ 77.00 - 79.00 Lacs*",bedrooms:2},{type:"2 BHK Grand",carpet:"848 sq.ft",price:"₹ 80.00 - 82.00 Lacs*",bedrooms:2},{type:"3 BHK Smart",carpet:"920 sq.ft",price:"₹ 89.90 Lacs* Onwards",bedrooms:3},{type:"3 BHK Comfort",carpet:"983 sq.ft",price:"₹ 93.00 - 95.00 Lacs*",bedrooms:3},{type:"3 BHK Prime",carpet:"1051 sq.ft",price:"₹ 99.00 - 1.02 Cr*",bedrooms:3},{type:"3 BHK Grand",carpet:"1108 sq.ft",price:"₹ 1.05 - 1.08 Cr*",bedrooms:3}],masterLayout:"/assets/harico-divaam-master-layout.png",reraNumber:"PR1260002502389",reraQRCodeUrl:"/assets/harico-divaam-rera-qr.png",floorPlans:[{title:"2 BHK Smart",image:"/assets/harico-divaam-2bhk-smart.png",carpet:"724 sq.ft"},{title:"2 BHK Comfort",image:"/assets/harico-divaam-2bhk-comfort-v3.png",carpet:"760 sq.ft"},{title:"2 BHK Prime",image:"/assets/harico-divaam-2bhk-prime-v3.png",carpet:"791 sq.ft"},{title:"2 BHK Grand",image:"/assets/harico-divaam-2bhk-grand.png",carpet:"848 sq.ft"},{title:"3 BHK Smart",image:"/assets/harico-divaam-3bhk-smart-v3.png",carpet:"920 sq.ft"},{title:"3 BHK Comfort",image:"/assets/harico-divaam-3bhk-comfort.png",carpet:"983 sq.ft"},{title:"3 BHK Grand",image:"/assets/harico-divaam-3bhk-grand-v3.png",carpet:"1108 sq.ft"}],seo:{title:"Harico Diwaam Kiwale | 2 & 3 BHK Sky Towers by Sentosa Developers",description:"Harico Diwaam in Kiwale Ravet by Sentosa Developers: 24-storey luxury sky towers opposite Sentosa Water Park starting ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs* onwards). Possession Dec 2030. 100+ Amenities, 5 Iconic Sky Towers. MahaRERA PR1260002502389. Call +91 7744009295.",keywords:Z("harico-diwaam")}},3:{id:"3",slug:"harico-pride",title:"HARICO PRIDE",location:"Punawale, Pune",status:"Ongoing",type:"Spacious 2 & 3 BHK Luxury Residences",price:"Price on Request",startingPriceNumeric:78,possession:"June 2027",landParcel:"3.0 Acres Master Development",towers:"4 Grand Elevation Towers",floors:"18 Storeys",unitsTotal:"320+ Families",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",tagline:"Premium in Every Inch and Intention | Uncompromised Space & Elegance",description:"Harico Pride in Punawale is curated for families who demand generous space, pristine natural light, and unmatched urban connectivity. Located adjacent to Bhiku Vallabh Kale School, Harico Pride features the largest carpet areas in its segment, featuring panoramic 3-side open residences, lush landscaped podiums, rooftop wellness decks, and dedicated senior citizen recreational havens.",highlights:["Biggest Usable Carpet Areas in the Punawale Micro-Market","3-Side Open Living Orientations for Maximum Cross-Ventilation","Adjacent to Top Educational Institutions and Highway Feeder Roads","Grand Multi-Tier Clubhouse with Rooftop Infinity Pool and Sky Deck","Dedicated Children’s Activity Zone & Senior Citizen Serenity Park","100% Vastu-Aligned Layouts with Private Entry Vestibules"],bankPartners:["State Bank of India","HDFC Bank","ICICI Bank","Bank of Maharashtra","Axis Bank"],amenities:["Rooftop Infinity Swimming Pool","Grand Clubhouse & Gymnasium","Children's Play Lawn with Climbing Walls","Party Lawn with BBQ Pavilion","Landscape Meditation Gardens","Yoga & Aerobics Deck","Senior Citizen Sitout & Gazebo","High-Speed Elevators with Power Backup","Reflexology Pathways","Solar Street Lighting & Rainwater Harvesting System","24x7 Multi-Tier Security with CCTV Surveillance"],specifications:[{category:"Structure & Walls",icon:"fa-building",items:["Robust Earthquake Resistant RCC Frame Structure designed per IS codes","External 6-inch solid block walls with waterproof protective coating","Internal 4-inch AAC light-weight blocks with smooth gypsum wall plaster"]},{category:"Flooring & Finishes",icon:"fa-layer-group",items:["800x800 mm double charged vitrified tiles in all rooms","Anti-skid ceramic tiles in dry balconies and bathrooms","Granite kitchen platform with SS sink and glazed tile dado"]},{category:"Sanitary & Electrical",icon:"fa-bath",items:["Concealed plumbing with Jaquar / Cera equivalent sanitary fittings","Concealed copper wiring with Anchor / Roma modular switches","TV and Telephone points in Living Room and Master Bedroom","Provision for Inverter backup wiring in all rooms"]}],connectivity:[{title:"Mumbai-Pune Expressway / NH-48",time:"04 Min",distance:"2.0 km",category:"Highways & Transit"},{title:"Bhiku Vallabh Kale School",time:"01 Min",distance:"0.2 km",category:"Education"},{title:"Aditya Birla Memorial Hospital",time:"09 Min",distance:"4.5 km",category:"Healthcare"},{title:"Phoenix Mall of the Millennium",time:"10 Min",distance:"4.9 km",category:"Retail & Shopping"},{title:"Hinjewadi Phase 1 IT Park",time:"14 Min",distance:"7.5 km",category:"IT & Employment"}],configurations:[{type:"2 BHK Premium",carpet:"765 sq.ft",price:"Price on Request",bedrooms:2},{type:"2 BHK Grande",carpet:"830 sq.ft",price:"Price on Request",bedrooms:2},{type:"3 BHK Luxury",carpet:"1060 sq.ft",price:"Price on Request",bedrooms:3},{type:"3 BHK Royale",carpet:"1180 sq.ft",price:"Price on Request",bedrooms:3}],reraId:"P52100018471",reraNumber:"P52100018471",reraQRCodeUrl:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100018471",seo:{title:"Harico Pride Punawale | Sentosa Developers | 2 & 3 BHK Ready & Near-Possession Flats",description:"Harico Pride in Punawale by Sentosa Developers near Bhiku Vallabh Kale School. Largest carpet layouts, rooftop pool & 2 mins to Expressway. MahaRERA P52100018471. Call +91 7744009295.",keywords:Z("pride")}}};class be{routes=[];constructor(){const a=window.location.hash;if(a){console.log("[Router] Hash detected:",a);let t=a.substring(1);t&&(t.startsWith("/")||(t="/"+t),console.log("[Router] Cleaning hash to:",t),window.history.replaceState({},"",t))}window.addEventListener("popstate",this.handleLocationChange.bind(this)),window.addEventListener("load",this.handleLocationChange.bind(this)),document.addEventListener("click",t=>{const i=t.target.closest("a");if(i&&i.href.startsWith(window.location.origin)&&!i.hasAttribute("download")&&i.target!=="_blank"){t.preventDefault();const o=i.getAttribute("href");o&&this.navigate(o)}})}add(a,t){this.routes.push({path:a,handler:t})}handleLocationChange(){const a=window.location.pathname,t=window.location.search,i=a.replace(/\/$/,"")||"/",o=i.split("/").filter(Boolean),r=new URLSearchParams(t);let s=this.routes.find(n=>n.path===i),l;if(!s&&o.length>=1&&o[0]==="project"?(s=this.routes.find(n=>n.path==="/project"),l=o[1]):!s&&o.length>=1&&o[0]==="articles"&&(o.length===1?s=this.routes.find(n=>n.path==="/articles"):(s=this.routes.find(n=>n.path==="/articles/detail"),l=o[1])),!s&&o.length>0&&(s=this.routes.find(n=>n.path===`/${o[0]}`)),s||(s=this.routes.find(n=>n.path==="/")),s){if(s.handler(r,l),l){const n=Object.values(A).find(d=>d.slug===l);n&&n.seo?(B.setTitle(n.seo.title),B.setDescription(n.seo.description),B.setKeywords(n.seo.keywords),B.setImage(n.image),B.setUrl(window.location.href)):n&&(B.setTitle(`${n.title} | Harico Estates`),B.setDescription(n.description.slice(0,160)),B.setImage(n.image),B.setUrl(window.location.href))}setTimeout(()=>{const n=window.location.hash.replace("#","");if(n){const d=document.getElementById(n);if(d){const p=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"});return}}window.scrollTo(0,0)},50)}}navigate(a){window.history.pushState({},"",a),this.handleLocationChange()}}const h=new be;function ve(){const e=document.createElement("section");e.id="home",e.className="hero-section-refined",e.innerHTML=`
    <div class="hero-bg-overlay"></div>
    <div class="hero-glow-orb"></div>
    
    <div class="container hero-container-refined flex flex-col justify-center items-center text-center">
      
      <!-- Luxury Pre-heading Capsule -->
      <div class="hero-pre-badge fade-in-up">
        <span class="badge-sparkle">✦</span>
        <span>A 39-Year Legacy of Luxury by Sentosa Developers</span>
        <span class="badge-sparkle">✦</span>
      </div>

      <!-- Mega Launch Alert Capsule -->
      <a href="/project/harico-divaam" class="hero-launch-banner-pill fade-in-up">
        <span class="launch-live-dot"></span>
        <span class="launch-text-bold">🚨 MEGA NEW LAUNCH:</span>
        <span class="launch-text-sub">Harico Diwaam Kiwale (Tallest 24-Storey Towers | Dec 2030)</span>
        <i class="fa-solid fa-arrow-right-long text-gold ml-2"></i>
      </a>

      <!-- Refined Hero Headline -->
      <h1 class="hero-title-refined fade-in-up delay-1">
        Harico Diwaam & Harico Edge <br />
        <span class="text-gold-gradient">Luxury 2 & 3 BHK Flats in Punawale & Kiwale</span>
      </h1>
      
      <!-- Refined Subtitle -->
      <p class="hero-subtitle-refined fade-in-up delay-1">
        Spacious 2 & 3 BHK luxury residences in Punawale & Kiwale featuring dual private balconies, 100+ curated amenities, and seamless 2-minute connectivity to the Mumbai-Pune Expressway. Possessions: Harico Edge (June 2030) & Harico Diwaam (Dec 2030).
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
              <option value="kiwale">Kiwale, Pune (Harico Diwaam 24-Storey)</option>
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
              <option value="all">All Budgets (₹70L - ₹1.20Cr)</option>
              <option value="under75">₹70.00 Lacs - ₹75 Lacs</option>
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
  `;const a=document.createElement("style");return a.textContent=`
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

    /* Mega Launch Banner Pill */
    .hero-launch-banner-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(10, 25, 47, 0.9) 100%);
      border: 1.5px solid var(--color-gold);
      padding: 9px 24px;
      border-radius: 9999px;
      margin-bottom: 22px;
      color: #FFFFFF;
      text-decoration: none;
      font-size: 0.92rem;
      box-shadow: 0 0 25px rgba(212, 175, 55, 0.35);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .hero-launch-banner-pill:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 0 35px rgba(212, 175, 55, 0.6);
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.35) 0%, rgba(10, 25, 47, 0.95) 100%);
    }

    .launch-live-dot {
      width: 10px;
      height: 10px;
      background: #EF4444;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 10px #EF4444;
      animation: pulse-live 1.5s infinite;
    }

    @keyframes pulse-live {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
      70% { transform: scale(1.15); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
    }

    .launch-text-bold {
      font-weight: 800;
      color: var(--color-gold);
      letter-spacing: 0.5px;
    }

    .launch-text-sub {
      color: #F8FAFC;
      font-weight: 600;
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
  `,e.appendChild(a),setTimeout(()=>{const t=e.querySelector("#btn-hero-search"),i=e.querySelector("#finder-location");t?.addEventListener("click",()=>{const r=i?.value;r==="kiwale"?h.navigate("/project/harico-divaam"):r==="punawale"?h.navigate("/project/harico-edge"):h.navigate("/projects")}),e.querySelector(".hero-enquire-btn")?.addEventListener("click",()=>{window.showEnquireModal&&window.showEnquireModal("VIP Site Tour Request (Refined Hero)")})},0),e}function xe(){const e=document.createElement("section");e.id="builder-legacy",e.className="section builder-legacy-section lux-reveal";const a=[{year:"2026",name:"Sentosa Edge",location:"Punawale, Pune",area:"48,000 SQ. FT.",type:"Luxury High-Rise",highlight:!0},{year:"2026",name:"Sentosa Era",location:"Pradhikaran Moshi",area:"80,000 SQ. FT.",type:"Residential Landmark",highlight:!0},{year:"2026",name:"Sentosa Pride Ph 3",location:"Punawale, Pune",area:"1,54,800 SQ. FT.",type:"Gated Community"},{year:"2026",name:"Sentosa Elite Biz Hub",location:"Wakad, Pune",area:"56,586 SQ. FT.",type:"Commercial Landmark"},{year:"2025",name:"Sentosa Ekam",location:"Punawale, Pune",area:"1,09,742 SQ. FT.",type:"Premium Residences"},{year:"2023",name:"Sentosa Serene",location:"Tathawade, Pune",area:"88,197 SQ. FT.",type:"Residential Tower"},{year:"2023",name:"Sentosa Pride Ph 2",location:"Punawale, Pune",area:"1,22,473 SQ. FT.",type:"Luxury Homes"},{year:"2019",name:"Ami Infra Pink City",location:"Thane District",area:"3,40,000 SQ. FT.",type:"Township Project"},{year:"2018",name:"Regency Plaza",location:"Thane District",area:"2,12,922 SQ. FT.",type:"Residential Complex"},{year:"2017",name:"Sentosa Pride Ph 1",location:"Punawale, Pune",area:"1,75,303 SQ. FT.",type:"Residential Landmark"},{year:"2017",name:"Sentosa Palm",location:"Wakad, Pune",area:"22,023 SQ. FT.",type:"Boutique Residences"},{year:"2016",name:"Royal Palms",location:"Thane District",area:"2,10,000 SQ. FT.",type:"Luxury Apartments"},{year:"2014",name:"Sentosa Pearl",location:"Wakad, Pune",area:"61,486 SQ. FT.",type:"Residential Tower"},{year:"2012",name:"Sentosa Elysium",location:"Wakad, Pune",area:"45,692 SQ. FT.",type:"Gated Community"},{year:"2011",name:"Sentosa Paradise",location:"Wakad, Pune",area:"48,000 SQ. FT.",type:"Luxury Homes"},{year:"2009",name:"Sentosa Residency",location:"Hadapsar, Pune",area:"32,000 SQ. FT.",type:"Residential Building"},{year:"1997",name:"Gulraj Residency",location:"Kondhwa, Pune",area:"60,000 SQ. FT.",type:"Apartments"},{year:"1992",name:"Samarpam Complex",location:"Thane District",area:"40,000 SQ. FT.",type:"Residential"},{year:"1990",name:"Shivdham Complex",location:"Thane District",area:"2,52,500 SQ. FT.",type:"Township Complex"},{year:"1987",name:"Satyam Complex",location:"Thane District",area:"48,000 SQ. FT.",type:"Inaugural Milestone"}];e.innerHTML=`
    <div class="container">
      
      <!-- Refined Legacy Header Strip -->
      <div class="legacy-refined-header">
        <div class="legacy-stat-group">
          <span class="legacy-big-num" data-counter-target="39" data-counter-suffix="+">39+</span>
          <div class="legacy-header-text">
            <span class="legacy-kicker">Established 1987</span>
            <h2 class="legacy-main-title">Years of Real Estate & Hospitality Legacy</h2>
            <p class="legacy-sub-desc">Built on vision, uncompromising civil engineering, and 20+ delivered landmark developments across Pune and Maharashtra.</p>
          </div>
        </div>
        
        <div class="legacy-trust-quote-box">
          <i class="fa-solid fa-medal text-gold text-2xl mb-xs"></i>
          <p class="quote-txt">"Transforming Pune's skyline with iconic architecture and timeless quality for over three decades."</p>
          <span class="quote-author">— Sentosa Developers Leadership</span>
        </div>
      </div>

      <!-- Decade Filter Pills -->
      <div class="legacy-filter-bar mt-xl text-center">
        <button class="legacy-filter-btn active" data-era="all">All 20+ Landmarks</button>
        <button class="legacy-filter-btn" data-era="2020s">2020 — 2026 (High-Rise Era)</button>
        <button class="legacy-filter-btn" data-era="2010s">2010 — 2019 (Wakad Expansion)</button>
        <button class="legacy-filter-btn" data-era="classic">1987 — 2009 (Foundations)</button>
      </div>

      <!-- Modern Milestone Grid -->
      <div class="legacy-milestone-grid mt-lg">
        ${a.map(i=>`
            <div class="milestone-card-refined ${parseInt(i.year)>=2020?"era-2020s":parseInt(i.year)>=2010?"era-2010s":"era-classic"} ${i.highlight?"milestone-highlight":""}">
              <div class="milestone-top-row">
                <span class="milestone-year-badge">${i.year}</span>
                <span class="milestone-status-badge"><i class="fa-solid fa-check text-success mr-1"></i> Delivered</span>
              </div>
              <h4 class="milestone-project-name">${i.name}</h4>
              <div class="milestone-details-grid">
                <div class="m-detail-item">
                  <span class="m-detail-lbl">Location</span>
                  <span class="m-detail-val">${i.location}</span>
                </div>
                <div class="m-detail-item">
                  <span class="m-detail-lbl">Scale</span>
                  <span class="m-detail-val">${i.area}</span>
                </div>
              </div>
              <div class="milestone-footer-type">
                <span>${i.type}</span>
              </div>
            </div>
          `).join("")}
      </div>

    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .builder-legacy-section {
      padding: 90px 0;
      background: #FFFFFF;
      position: relative;
    }

    .legacy-refined-header {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 40px;
      align-items: center;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    }

    .legacy-stat-group {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .legacy-big-num {
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      font-weight: 800;
      line-height: 1;
      font-family: var(--font-heading);
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      flex-shrink: 0;
    }

    .legacy-header-text {
      display: flex;
      flex-direction: column;
    }

    .legacy-kicker {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-gold);
      margin-bottom: 4px;
    }

    .legacy-main-title {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 0 0 8px;
      line-height: 1.25;
      font-family: var(--font-heading);
    }

    .legacy-sub-desc {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin: 0;
      line-height: 1.6;
    }

    .legacy-trust-quote-box {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-left: 4px solid var(--color-gold);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .quote-txt {
      font-size: 0.88rem;
      font-style: italic;
      color: var(--color-navy);
      margin: 0 0 10px;
      line-height: 1.5;
    }

    .quote-author {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Era Filter Bar */
    .legacy-filter-bar {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .legacy-filter-btn {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      padding: 8px 18px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: var(--font-heading);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .legacy-filter-btn:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }

    .legacy-filter-btn.active {
      background: var(--color-navy);
      color: #FFFFFF;
      border-color: var(--color-navy);
      box-shadow: 0 4px 12px rgba(10, 25, 47, 0.25);
    }

    /* Milestone Grid */
    .legacy-milestone-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .milestone-card-refined {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .milestone-card-refined:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(10, 25, 47, 0.1);
      border-color: var(--color-gold);
    }

    .milestone-highlight {
      border-color: rgba(212, 175, 55, 0.6);
      background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 100%);
    }

    .milestone-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .milestone-year-badge {
      background: var(--color-navy);
      color: var(--color-gold);
      font-size: 0.85rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      font-family: var(--font-heading);
    }

    .milestone-status-badge {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-navy);
      background: #F1F5F9;
      padding: 3px 8px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .milestone-project-name {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 0;
      font-family: var(--font-heading);
      letter-spacing: -0.01em;
    }

    .milestone-details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      background: #F8FAFC;
      padding: 10px;
      border-radius: 8px;
    }

    .m-detail-item {
      display: flex;
      flex-direction: column;
    }

    .m-detail-lbl {
      font-size: 0.65rem;
      font-weight: 600;
      color: var(--color-text-light);
      text-transform: uppercase;
    }

    .m-detail-val {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--color-navy);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .milestone-footer-type {
      font-size: 0.72rem;
      color: var(--color-text-secondary);
      font-weight: 600;
      border-top: 1px solid #F1F5F9;
      padding-top: 8px;
      margin-top: auto;
    }

    @media (max-width: 900px) {
      .legacy-refined-header {
        grid-template-columns: 1fr;
        padding: 25px;
      }
      .legacy-stat-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  `,e.appendChild(t),setTimeout(()=>{const i=e.querySelectorAll(".legacy-filter-btn"),o=e.querySelectorAll(".milestone-card-refined");i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(l=>l.classList.remove("active")),r.classList.add("active");const s=r.getAttribute("data-era");o.forEach(l=>{s==="all"||l.classList.contains(`era-${s}`)?l.style.display="flex":l.style.display="none"})})})},0),e}function se(e){const a=document.createElement("article");a.className="project-card-3d card-3d-tilt";const t=e.slug||e.id;return a.onclick=i=>{const o=i.target;o.closest("button")||o.closest("a")||o.closest(".card-rera-interactive")||h.navigate(`/project/${t}`)},a.innerHTML=`
    <!-- 3D Holographic Glare Sheen -->
    <div class="card-glare-overlay"></div>

    <!-- Media Header -->
    <div class="card-media-wrapper">
      <img src="${e.image}" alt="${e.title}" class="card-hero-img" loading="lazy">
      <div class="card-media-gradient"></div>
      
      <!-- Top Floating Badges -->
      <div class="card-top-badges flex justify-between items-center w-full">
        <div class="flex items-center gap-xs">
          <div class="status-badge-capsule ${e.status.toLowerCase()}">
            <span class="status-radar-dot ${e.status==="Ongoing"?"radar-pulse-ongoing":""}"></span>
            <span class="status-text">${e.status}</span>
          </div>
          ${e.slug==="harico-divaam"?`
            <div class="launch-flagship-pill">
              <i class="fa-solid fa-crown text-gold mr-1"></i> Mega Launch
            </div>
          `:""}
        </div>

        ${e.possession?`
          <div class="possession-capsule">
            <i class="fa-solid fa-clock-rotate-left mr-1 text-gold"></i>
            <span>${e.possession}</span>
          </div>
        `:""}
      </div>

      <!-- Hover Action Overlay -->
      <div class="card-hover-overlay">
        <button class="btn-card-preview btn-explore-trigger" data-slug="${t}">
          <i class="fa-solid fa-eye mr-2"></i> View Project
        </button>
      </div>
    </div>
    
    <!-- Body Content Section -->
    <div class="card-body-content">
      
      <!-- Title, Location & Price -->
      <div class="card-main-header">
        <div class="flex justify-between items-start gap-sm mb-xs">
          <h3 class="card-project-title">${e.title}</h3>
          <div class="card-price-tag">
            <span class="price-val">${e.price||"Price on Request"}</span>
          </div>
        </div>
        <p class="card-project-loc">
          <i class="fa-solid fa-location-dot text-gold mr-1"></i>
          ${e.location}
        </p>
      </div>

      <!-- Key Specs Grid -->
      <div class="card-specs-matrix">
        <div class="spec-chip spec-chip-full">
          <span class="spec-chip-icon"><i class="fa-solid fa-bed"></i></span>
          <div class="spec-chip-text">
            <span class="spec-chip-lbl">Configuration</span>
            <span class="spec-chip-val">${e.type}</span>
          </div>
        </div>

        ${e.landParcel?`
          <div class="spec-chip">
            <span class="spec-chip-icon"><i class="fa-solid fa-vector-square"></i></span>
            <div class="spec-chip-text">
              <span class="spec-chip-lbl">Land Parcel</span>
              <span class="spec-chip-val">${e.landParcel}</span>
            </div>
          </div>
        `:""}

        ${e.floors?`
          <div class="spec-chip">
            <span class="spec-chip-icon"><i class="fa-solid fa-layer-group"></i></span>
            <div class="spec-chip-text">
              <span class="spec-chip-lbl">Elevation</span>
              <span class="spec-chip-val">${e.floors}</span>
            </div>
          </div>
        `:""}
      </div>

      <!-- MahaRERA Verified Strip with QR Hover -->
      ${e.reraNumber?`
        <div class="card-rera-interactive" title="Click to inspect MahaRERA QR">
          <div class="rera-info-group">
            <span class="rera-pill-lbl"><i class="fa-solid fa-shield-halved text-success mr-1"></i> MahaRERA Verified</span>
            <span class="rera-number-txt">${e.reraNumber}</span>
          </div>
          ${e.reraQRCodeUrl?`
            <div class="rera-qr-wrapper">
              <img src="${e.reraQRCodeUrl}" alt="MahaRERA QR" class="rera-qr-thumb">
              <div class="qr-zoom-tooltip">
                <img src="${e.reraQRCodeUrl}" alt="MahaRERA QR Zoom" class="qr-zoom-img">
                <span>Scan for MahaRERA Certificate</span>
              </div>
            </div>
          `:""}
        </div>
      `:""}

      <!-- Bottom Interactive Action CTAs -->
      <div class="card-bottom-actions flex gap-sm items-center mt-auto pt-sm">
        <button class="btn-card-primary btn-explore-action btn-magnetic" data-slug="${t}">
          <span>Explore Details</span>
          <span class="btn-arrow-slide"><i class="fa-solid fa-arrow-right"></i></span>
        </button>

        <button class="btn-card-whatsapp" onclick="event.stopPropagation(); if(window.showEnquireModal) window.showEnquireModal('${e.title}');" title="Instant WhatsApp Enquiry">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

    </div>
  `,setTimeout(()=>{a.querySelectorAll(".btn-explore-trigger, .btn-explore-action").forEach(o=>{o.addEventListener("click",r=>{r.stopPropagation();const s=o.getAttribute("data-slug");s&&h.navigate(`/project/${s}`)})})},0),a}const ye=`
  .project-card-3d {
    background: #FFFFFF;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 15px 35px -5px rgba(10, 25, 47, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(226, 232, 240, 0.9);
    position: relative;
    transform-style: preserve-3d;
    will-change: transform, box-shadow;
  }

  .project-card-3d:hover {
    box-shadow: 0 30px 60px -10px rgba(10, 25, 47, 0.18), 0 15px 30px -10px rgba(212, 175, 55, 0.12);
    border-color: rgba(212, 175, 55, 0.6);
  }

  .card-glare-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px;
  }

  .card-media-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #0A192F;
  }

  .card-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-card-3d:hover .card-hero-img {
    transform: scale(1.08);
  }

  .card-media-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 25, 47, 0.4) 0%, transparent 45%, rgba(10, 25, 47, 0.75) 100%);
    pointer-events: none;
  }

  .card-top-badges {
    position: absolute;
    top: 14px;
    left: 0;
    padding: 0 14px;
    z-index: 5;
  }

  .status-badge-capsule {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    background: rgba(10, 25, 47, 0.88);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  .status-radar-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-gold);
    display: inline-block;
  }

  .status-badge-capsule.ongoing .status-radar-dot { background-color: var(--color-gold); }
  .status-badge-capsule.upcoming .status-radar-dot { background-color: #38BDF8; }
  .status-badge-capsule.completed .status-radar-dot { background-color: #4ADE80; }

  .possession-capsule {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--color-navy);
    border: 1px solid rgba(212, 175, 55, 0.3);
  }

  .launch-flagship-pill {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(170, 128, 16, 0.95) 100%);
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0A192F;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    box-shadow: 0 0 12px rgba(212, 175, 55, 0.6);
  }

  .card-hover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 25, 47, 0.45);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 6;
  }

  .project-card-3d:hover .card-hover-overlay {
    opacity: 1;
  }

  .btn-card-preview {
    background: #FFFFFF;
    color: var(--color-navy);
    padding: 10px 22px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(12px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-card-3d:hover .btn-card-preview {
    transform: translateY(0);
  }

  .btn-card-preview:hover {
    background: var(--color-gold);
    color: #FFFFFF;
  }

  .card-body-content {
    padding: 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
  }

  .card-project-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--color-navy);
    margin: 0;
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .card-project-loc {
    font-size: 0.84rem;
    color: var(--color-text-secondary);
    margin: 0;
    font-weight: 500;
  }

  .card-price-tag {
    background: rgba(212, 175, 55, 0.12);
    border: 1px solid rgba(212, 175, 55, 0.4);
    padding: 5px 12px;
    border-radius: 6px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price-val {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--color-navy);
    font-family: var(--font-heading);
  }

  .card-specs-matrix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    background: #F8FAFC;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
  }

  .spec-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .spec-chip.spec-chip-full {
    grid-column: span 2;
    border-bottom: 1px dashed #E2E8F0;
    padding-bottom: 6px;
  }

  .spec-chip-icon {
    color: var(--color-gold);
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .spec-chip-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .spec-chip-lbl {
    font-size: 0.65rem;
    color: var(--color-text-light);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .spec-chip-val {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--color-navy);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-rera-interactive {
    background: #FAFBFC;
    border: 1px solid #E2E8F0;
    border-left: 3px solid var(--color-gold);
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition: all 0.25s ease;
  }

  .card-rera-interactive:hover {
    background: #FFFFFF;
    border-color: var(--color-gold);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.15);
  }

  .rera-info-group {
    display: flex;
    flex-direction: column;
  }

  .rera-pill-lbl {
    font-size: 0.68rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-text-secondary);
    letter-spacing: 0.5px;
  }

  .rera-number-txt {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-navy);
    font-family: var(--font-heading);
  }

  .rera-qr-wrapper {
    position: relative;
  }

  .rera-qr-thumb {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    padding: 2px;
    cursor: zoom-in;
    transition: transform 0.25s ease;
  }

  .qr-zoom-tooltip {
    position: absolute;
    bottom: 42px;
    right: 0;
    background: #FFFFFF;
    border: 2px solid var(--color-gold);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 140px;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.85) translateY(10px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 20;
  }

  .qr-zoom-tooltip .qr-zoom-img {
    width: 110px;
    height: 110px;
    object-fit: contain;
  }

  .qr-zoom-tooltip span {
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--color-navy);
    text-align: center;
  }

  .card-rera-interactive:hover .qr-zoom-tooltip {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1) translateY(0);
  }

  .btn-card-primary {
    flex-grow: 1;
    background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
    color: #FFFFFF;
    border: 1px solid rgba(212, 175, 55, 0.4);
    padding: 11px 18px;
    border-radius: 9999px;
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .btn-card-primary:hover {
    background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    border-color: var(--color-gold);
  }

  .btn-arrow-slide {
    transition: transform 0.25s ease;
  }

  .btn-card-primary:hover .btn-arrow-slide {
    transform: translateX(4px);
  }

  .btn-card-whatsapp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #25D366;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
    transition: transform 0.2s ease, background-color 0.2s ease;
    flex-shrink: 0;
  }

  .btn-card-whatsapp:hover {
    transform: scale(1.1);
    background: #20BA56;
  }
`;class z{static instance;observer=null;isTouchDevice=!1;cursorGlow=null;targetMouseX=0;targetMouseY=0;currentMouseX=0;currentMouseY=0;isCursorGlowActive=!1;constructor(){this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0}static getInstance(){return z.instance||(z.instance=new z),z.instance}init(){this.setupScrollObserver(),this.initCounters(),this.isTouchDevice||(this.init3DTilt(),this.initMagneticButtons(),this.initCursorGlow(),this.initScrollParallax())}initCursorGlow(){if(this.cursorGlow||this.isTouchDevice)return;this.cursorGlow=document.createElement("div"),this.cursorGlow.id="cursor-glow-spotlight",this.cursorGlow.className="cursor-glow-spotlight",document.body.appendChild(this.cursorGlow),window.addEventListener("mousemove",t=>{this.targetMouseX=t.clientX,this.targetMouseY=t.clientY,!this.isCursorGlowActive&&this.cursorGlow&&(this.cursorGlow.style.opacity="1",this.isCursorGlowActive=!0)}),document.addEventListener("mouseleave",()=>{this.cursorGlow&&(this.cursorGlow.style.opacity="0",this.isCursorGlowActive=!1)});const a=()=>{this.isCursorGlowActive&&this.cursorGlow&&(this.currentMouseX+=(this.targetMouseX-this.currentMouseX)*.12,this.currentMouseY+=(this.targetMouseY-this.currentMouseY)*.12,this.cursorGlow.style.transform=`translate3d(${this.currentMouseX-200}px, ${this.currentMouseY-200}px, 0)`),requestAnimationFrame(a)};requestAnimationFrame(a)}setupScrollObserver(){this.observer&&this.observer.disconnect();const a={root:null,rootMargin:"0px 0px -50px 0px",threshold:.1};this.observer=new IntersectionObserver(t=>{t.forEach(i=>{if(i.isIntersecting){const o=i.target;o.classList.add("lux-in-view"),o.querySelectorAll("[data-counter-target]").forEach(s=>this.animateCounter(s)),this.observer?.unobserve(o)}})},a),document.querySelectorAll(".lux-reveal, .lux-stagger, .section, .milestone-card-refined, .project-card-3d").forEach(t=>{this.observer?.observe(t)})}initCounters(){document.querySelectorAll("[data-counter-target]").forEach(a=>{const t=a.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>=0&&this.animateCounter(a)})}animateCounter(a){if(a.dataset.counterAnimated==="true")return;a.dataset.counterAnimated="true";const t=a.dataset.counterTarget||"0",i=parseFloat(t.replace(/[^0-9.]/g,"")),o=a.dataset.counterPrefix||"",r=a.dataset.counterSuffix||"",s=2200,l=performance.now(),n=d=>{const u=d-l,p=Math.min(u/s,1),w=p===1?1:1-Math.pow(2,-10*p),b=Math.floor(w*i);a.textContent=`${o}${b.toLocaleString("en-IN")}${r}`,p<1?requestAnimationFrame(n):a.textContent=`${o}${i.toLocaleString("en-IN")}${r}`};requestAnimationFrame(n)}init3DTilt(){document.querySelectorAll(".card-3d-tilt, .milestone-card-refined").forEach(t=>{let i;const o=()=>{i=t.getBoundingClientRect(),t.style.transition="transform 0.12s ease-out, box-shadow 0.3s ease"},r=l=>{i||(i=t.getBoundingClientRect());const n=l.clientX-i.left,d=l.clientY-i.top,u=n/i.width*100,p=d/i.height*100,w=n/i.width-.5,b=d/i.height-.5,S=w*14,T=-b*14;t.style.transform=`perspective(1000px) rotateX(${T.toFixed(2)}deg) rotateY(${S.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;const v=t.querySelector(".card-glare-overlay");v&&(v.style.opacity="1",v.style.background=`radial-gradient(circle 280px at ${u}% ${p}%, rgba(255, 255, 255, 0.3), rgba(212, 175, 55, 0.16) 40%, transparent 80%)`)},s=()=>{t.style.transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease",t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";const l=t.querySelector(".card-glare-overlay");l&&(l.style.opacity="0")};t.removeEventListener("mouseenter",o),t.removeEventListener("mousemove",r),t.removeEventListener("mouseleave",s),t.addEventListener("mouseenter",o),t.addEventListener("mousemove",r),t.addEventListener("mouseleave",s)})}initMagneticButtons(){document.querySelectorAll(".btn-magnetic, .btn-primary, .btn-whatsapp").forEach(t=>{t.addEventListener("mousemove",i=>{const o=t.getBoundingClientRect(),r=i.clientX-o.left-o.width/2,s=i.clientY-o.top-o.height/2;t.style.transform=`translate(${r*.2}px, ${s*.2}px)`}),t.addEventListener("mouseleave",()=>{t.style.transform="translate(0px, 0px)"})})}initScrollParallax(){window.addEventListener("scroll",()=>{const a=window.scrollY,t=document.querySelector(".hero-bg-media");t&&a<window.innerHeight&&(t.style.transform=`translate3d(0, ${(a*.3).toFixed(1)}px, 0)`)},{passive:!0})}}const x=z.getInstance(),oe=Object.values(A);function ne(){const e=document.createElement("section");e.id="projects",e.className="section projects-section lux-reveal",e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Handpicked Masterpieces</span>
        <h2 class="section-title fade-in-up delay-1">Featured Luxury Portfolio</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Explore iconic residential landmarks across Punawale & Kiwale, engineered with Mivan monolithic concrete and 100% MahaRERA regulatory compliance.
        </p>
      </div>

      <!-- Modern Luxury Filter Tabs -->
      <div class="luxury-tabs-wrapper fade-in-up delay-2 mb-xl text-center">
        <button class="lux-filter-tab active" data-filter="all">
          <span>All Landmarks</span>
          <span class="tab-count-badge">${oe.length}</span>
        </button>
        <button class="lux-filter-tab" data-filter="punawale">
          <span>Punawale</span>
          <span class="tab-count-badge">2</span>
        </button>
        <button class="lux-filter-tab" data-filter="kiwale">
          <span>Kiwale</span>
          <span class="tab-count-badge">1</span>
        </button>
        <button class="lux-filter-tab" data-filter="ongoing">
          <span>Ongoing</span>
          <span class="tab-count-badge">2</span>
        </button>
      </div>
      
      <div class="grid projects-grid-modern">
        <!-- Projects injected here -->
      </div>
    </div>
  `;const a=e.querySelector(".projects-grid-modern"),t=e.querySelectorAll(".lux-filter-tab");function i(r){a.innerHTML="";const s=oe.filter(l=>r==="all"?!0:r==="ongoing"?l.status==="Ongoing":r==="punawale"?l.location.toLowerCase().includes("punawale"):r==="kiwale"?l.location.toLowerCase().includes("kiwale"):!0);if(s.length===0){a.innerHTML='<div class="text-center col-span-full py-xl text-muted">No projects found matching this filter.</div>';return}s.forEach((l,n)=>{const d=se(l);d.style.opacity="0",d.style.transform="translateY(25px)",d.style.transition=`opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${n*.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${n*.1}s`,a.appendChild(d),requestAnimationFrame(()=>{d.style.opacity="1",d.style.transform="translateY(0)"})}),setTimeout(()=>{x.init3DTilt()},50)}i("all"),t.forEach(r=>{r.addEventListener("click",()=>{t.forEach(l=>l.classList.remove("active")),r.classList.add("active");const s=r.getAttribute("data-filter")||"all";i(s)})});const o=document.createElement("style");return o.textContent=`
    ${ye}
    
    .projects-section {
      background-color: #F8FAFC;
      padding: 100px 0;
      position: relative;
    }

    .luxury-tabs-wrapper {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .lux-filter-tab {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      padding: 10px 22px;
      border-radius: 9999px;
      font-family: var(--font-heading);
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      text-transform: uppercase;
      font-size: 0.82rem;
      letter-spacing: 0.8px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    }

    .lux-filter-tab:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
      transform: translateY(-2px);
    }

    .lux-filter-tab.active {
      background: var(--color-navy);
      border-color: var(--color-navy);
      color: #FFFFFF;
      box-shadow: 0 6px 20px rgba(10, 25, 47, 0.2);
    }

    .tab-count-badge {
      background: rgba(212, 175, 55, 0.18);
      color: var(--color-gold);
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 9999px;
      font-weight: 800;
    }

    .lux-filter-tab.active .tab-count-badge {
      background: var(--color-gold);
      color: var(--color-navy);
    }

    .projects-grid-modern {
      display: grid;
      gap: 35px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      padding: 0 10px;
    }

    @media (max-width: 768px) {
      .projects-grid-modern {
        grid-template-columns: 1fr;
      }
    }
  `,e.appendChild(o),e}function le(){const e=document.createElement("section");e.id="project-comparison",e.className="section project-comparison-section";const a=A[1],t=A[2],i=A[3];e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Project Selection Matrix</span>
        <h2 class="section-title fade-in-up delay-1">Compare Harico Landmarks</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Find the perfect residence aligned with your lifestyle, budget, and location preferences in Punawale & Kiwale.
        </p>
      </div>

      <div class="comparison-table-wrapper">
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-col-head">Project Attributes</th>
                <th class="project-head">
                  <div class="project-head-card">
                    <span class="badge-status ${a.status.toLowerCase()}">${a.status}</span>
                    <h3 class="comp-title">${a.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${a.location}</p>
                    <span class="comp-price">${a.price}</span>
                  </div>
                </th>
                <th class="project-head highlight-col">
                  <div class="project-head-card">
                    <span class="badge-status ${t.status.toLowerCase()}">${t.status}</span>
                    <h3 class="comp-title">${t.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${t.location}</p>
                    <span class="comp-price">${t.price}</span>
                  </div>
                </th>
                <th class="project-head">
                  <div class="project-head-card">
                    <span class="badge-status ${i.status.toLowerCase()}">${i.status}</span>
                    <h3 class="comp-title">${i.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${i.location}</p>
                    <span class="comp-price">${i.price}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-vector-square mr-2 text-gold"></i> Land Parcel & Scale</td>
                <td>${a.landParcel||"2.5 Acres"}</td>
                <td class="highlight-cell">${t.landParcel||"5.0 Acres"}</td>
                <td>${i.landParcel||"3.0 Acres"}</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-building mr-2 text-gold"></i> Towers & Storeys</td>
                <td>3 Towers | 22 Floors</td>
                <td class="highlight-cell">5 Towers | 24 Floors (Tallest in Region)</td>
                <td>4 Towers | 18 Floors</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-bed mr-2 text-gold"></i> Configurations</td>
                <td>2 & 3 BHK (741 - 1148 sq.ft)</td>
                <td class="highlight-cell">2 & 3 BHK (724 - 1108 sq.ft)</td>
                <td>2 & 3 BHK (765 - 1180 sq.ft)</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-calendar-check mr-2 text-gold"></i> Target Possession</td>
                <td>${a.possession||"June 2030"}</td>
                <td class="highlight-cell">${t.possession||"December 2030"} (Major Launch)</td>
                <td>${i.possession||"June 2027"}</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-shield-halved mr-2 text-gold"></i> MahaRERA Status</td>
                <td>
                  <span class="font-bold text-navy">P52100031773</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
                <td class="highlight-cell">
                  <span class="font-bold text-navy">PR1260002502389</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
                <td>
                  <span class="font-bold text-navy">P52100018471</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-gem mr-2 text-gold"></i> Lifestyle Amenities</td>
                <td>50+ Curated Amenities</td>
                <td class="highlight-cell">100+ Resort-Grade Amenities</td>
                <td>35+ Essential Amenities</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-car mr-2 text-gold"></i> Expressway Proximity</td>
                <td>2 Mins (Direct Feeder)</td>
                <td class="highlight-cell">2 Mins (Opp. Sentosa Resort)</td>
                <td>4 Mins (Near Bhiku Kale School)</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-certificate mr-2 text-gold"></i> Construction Tech</td>
                <td>Mivan Monolithic Concrete</td>
                <td class="highlight-cell">Mivan RCC Shear Wall</td>
                <td>Robust RCC Framed IS Code</td>
              </tr>
              <tr>
                <td class="feature-name">Action</td>
                <td>
                  <button class="btn btn-sm btn-outline comp-nav-btn" data-slug="${a.slug}">View ${a.title}</button>
                </td>
                <td class="highlight-cell">
                  <button class="btn btn-sm btn-primary comp-nav-btn" data-slug="${t.slug}">View ${t.title}</button>
                </td>
                <td>
                  <button class="btn btn-sm btn-outline comp-nav-btn" data-slug="${i.slug}">View ${i.title}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;const o=document.createElement("style");return o.textContent=`
    .project-comparison-section {
      background: #FFFFFF;
      padding: 90px 0;
    }
    
    .comparison-table-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(10, 25, 47, 0.08);
      border: 1px solid #E2E8F0;
    }
    
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      background: #FFFFFF;
    }
    
    .comparison-table th, .comparison-table td {
      padding: 18px 20px;
      border-bottom: 1px solid #F1F5F9;
      vertical-align: middle;
      font-size: 0.95rem;
    }
    
    .feature-col-head {
      background: var(--color-navy);
      color: var(--color-gold);
      font-family: var(--font-heading);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.85rem;
      width: 25%;
      text-align: left;
      padding-left: 25px !important;
    }
    
    .project-head {
      background: var(--color-navy);
      color: #FFFFFF;
      width: 25%;
      padding: 24px 15px !important;
    }
    
    .project-head.highlight-col {
      background: #172A45;
      border-top: 4px solid var(--color-gold);
    }
    
    .highlight-cell {
      background: #F8FAFC;
      font-weight: 600;
      color: var(--color-navy);
    }
    
    .comp-title {
      font-size: 1.25rem;
      color: #FFFFFF;
      font-family: var(--font-heading);
      margin: 8px 0 4px;
      letter-spacing: 0.5px;
    }
    
    .comp-loc {
      font-size: 0.8rem;
      color: var(--color-gold);
      margin-bottom: 8px;
    }
    
    .comp-price {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #FFFFFF;
    }
    
    .feature-name {
      text-align: left;
      font-weight: 700;
      color: var(--color-navy);
      padding-left: 25px !important;
      background: #FAFBFC;
    }
    
    .badge-verified {
      display: inline-block;
      font-size: 0.7rem;
      background: #ECFDF5;
      color: #059669;
      padding: 2px 8px;
      border-radius: 12px;
      font-weight: 700;
      margin-left: 4px;
    }
    
    .comp-nav-btn {
      width: 100%;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
    }

    @media (max-width: 900px) {
      .table-responsive {
        overflow-x: auto;
      }
      .comparison-table {
        min-width: 750px;
      }
    }
  `,e.appendChild(o),setTimeout(()=>{e.querySelectorAll(".comp-nav-btn").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-slug");s&&h.navigate("/project/"+s)})})},0),e}function ee(e){const a=document.createElement("div");a.className="specifications-section section",a.id="specifications";const t=[{category:"Structure & Civil",icon:"fa-building",items:["Earthquake resistant RCC framed shear-wall structure compliant with IS 1893 & IS 13920 codes","Mivan / Aluminium formwork construction for monolithic concrete strength, superior finish, and crack prevention","AAC (Autoclaved Aerated Concrete) block masonry offering superior thermal and acoustic insulation","Sand-faced double-coat external plaster with silicone water-repellent protective paint shield"]},{category:"Flooring & Wall Finishes",icon:"fa-layer-group",items:["Large format 800x1600mm / 1200x1800mm High Gloss Glazed Vitrified Tiles in living, dining, and bedrooms","Anti-skid matte vitrified tiles in all attached balconies, sitouts, and utility dry terraces","Full-height designer ceramic wall tiles in all bathrooms with anti-fungal epoxy grouting","Internal walls finished with gypsum plaster and Asian Paints Royale low-VOC luxury paint finish"]},{category:"Kitchen & Gourmet Utility",icon:"fa-kitchen-set",items:["Premium natural Granite / Quartz platform with heavy-duty stainless steel Franke/Nirali sink","Designer ceramic wall dado tiles up to lintel height above countertop","Dedicated dry balcony with washing machine power and plumbing inlet/outlet points","Piped gas connection provision (MNGL network compatible) and exhaust chimney electrical provision"]},{category:"Sanitaryware & Bath Fixtures",icon:"fa-bath",items:["Luxury series CP and sanitary fixtures from Kohler / Jaquar / Grohe / Toto","Wall-hung European Water Closets (EWC) with concealed dual-flush tanks for water conservation","Single lever hot and cold water diverters with overhead rainfall shower in master bath","Solar water heating provision in master bathroom and instantaneous geyser provision across all bathrooms"]},{category:"Electrical & Smart Automation",icon:"fa-bolt",items:["Concealed copper wiring with flame-retardant low-smoke (FRLS) Polycab / Havells cables","Schneider Electric / Legrand Arteor designer modular switches and shock-proof MCB protection","High-speed fiber-optic broadband and DTH TV cabling points in living room and master bedroom","Smart biometric digital door lock (Fingerprint, Passcode, RFID Card, Key) with video door phone"]},{category:"Doors, Windows & Elevators",icon:"fa-door-open",items:["8-ft high grand designer flush main door with veneer/laminate finish and premium brass hardware","Powder-coated heavy-gauge aluminium sliding windows with mosquito mesh and granite window sills","High-speed automatic elevators (Schindler / Otis / Kone) with Automatic Rescue Device (ARD) and power backup"]}],i=e&&e.length>0?e:t;a.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Uncompromising Craftsmanship</span>
        <h2 class="section-title fade-in-up delay-1">Technical & Material Specifications</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Every inch engineered with branded fixtures, earthquake-resistant structural safety, and high-durability luxury finishes.
        </p>
      </div>

      <!-- Specification Tabs Header -->
      <div class="spec-tabs-header flex justify-center flex-wrap gap-xs mb-lg">
        ${i.map((r,s)=>`
          <button class="spec-tab-btn ${s===0?"active":""}" data-index="${s}">
            <i class="fa-solid ${r.icon} mr-2"></i> ${r.category}
          </button>
        `).join("")}
      </div>

      <!-- Specification Tabs Content Container -->
      <div class="spec-content-card">
        ${i.map((r,s)=>`
          <div class="spec-pane ${s===0?"active":""}" id="spec-pane-${s}">
            <div class="spec-pane-header flex items-center gap-md mb-md pb-sm border-bottom">
              <div class="spec-icon-circle">
                <i class="fa-solid ${r.icon}"></i>
              </div>
              <div>
                <h3 class="spec-category-title">${r.category}</h3>
                <span class="text-xs text-gold uppercase font-bold tracking-wider">Certified Benchmark Standards</span>
              </div>
            </div>
            <ul class="spec-items-list">
              ${r.items.map(l=>`
                <li class="spec-item flex items-start gap-md">
                  <div class="spec-check-icon">
                    <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <p class="spec-text">${l}</p>
                </li>
              `).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </div>
  `;const o=document.createElement("style");return o.textContent=`
    .specifications-section {
      background-color: #F8FAFC;
      padding: 90px 0;
    }
    
    .spec-tabs-header {
      gap: 10px;
    }
    
    .spec-tab-btn {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      color: var(--color-navy);
      padding: 12px 20px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: var(--font-heading);
    }
    
    .spec-tab-btn:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }
    
    .spec-tab-btn.active {
      background: var(--color-navy);
      color: var(--color-gold);
      border-color: var(--color-navy);
      box-shadow: 0 4px 15px rgba(10, 25, 47, 0.15);
    }
    
    .spec-content-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: 0 10px 30px rgba(10, 25, 47, 0.05);
      border: 1px solid rgba(212, 175, 55, 0.2);
      min-height: 280px;
    }
    
    .spec-pane {
      display: none;
    }
    
    .spec-pane.active {
      display: block;
      animation: fadeInSpec 0.4s ease forwards;
    }
    
    @keyframes fadeInSpec {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .spec-icon-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(212, 175, 55, 0.15);
      color: var(--color-gold);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }
    
    .spec-category-title {
      font-size: 1.4rem;
      color: var(--color-navy);
      font-family: var(--font-heading);
      margin: 0;
    }
    
    .border-bottom {
      border-bottom: 1px solid #F1F5F9;
    }
    
    .spec-items-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .spec-item {
      background: #FAFBFC;
      padding: 16px;
      border-radius: 8px;
      border-left: 3px solid var(--color-gold);
    }
    
    .spec-check-icon {
      color: var(--color-success);
      font-size: 1.1rem;
      margin-top: 2px;
    }
    
    .spec-text {
      color: var(--color-text-main);
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 900px) {
      .spec-items-list {
        grid-template-columns: 1fr;
      }
      .spec-content-card {
        padding: 25px 15px;
      }
    }
  `,a.appendChild(o),setTimeout(()=>{const r=a.querySelectorAll(".spec-tab-btn"),s=a.querySelectorAll(".spec-pane");r.forEach(l=>{l.addEventListener("click",()=>{r.forEach(u=>u.classList.remove("active")),s.forEach(u=>u.classList.remove("active")),l.classList.add("active");const n=l.getAttribute("data-index"),d=a.querySelector("#spec-pane-"+n);d&&d.classList.add("active")})})},0),a}function ce(){const e=document.createElement("section");e.id="location-hub",e.className="section location-hub-section";const a=[{category:"IT Parks & Employment Centers",icon:"fa-briefcase",color:"#3B82F6",items:[{name:"Hinjewadi Rajiv Gandhi IT Park (Phase 1)",time:"12 - 15 Mins",distance:"6.8 km"},{name:"Hinjewadi IT Park (Phase 2 & 3 - Quadron/Embassy)",time:"18 - 20 Mins",distance:"10.5 km"},{name:"Talawade IT Park & MIDC Pimpri",time:"20 Mins",distance:"12.0 km"},{name:"Bhumkar Chowk Commercial Tech Zone",time:"07 Mins",distance:"3.5 km"}]},{category:"Highways, Transit & Metro",icon:"fa-road",color:"#F59E0B",items:[{name:"Mumbai-Pune Expressway (NH-48 Feeder)",time:"02 Mins",distance:"1.2 km"},{name:"Mukai Chowk & Ravet Flyover",time:"04 Mins",distance:"2.0 km"},{name:"Akurdi & Dehu Road Railway Stations",time:"10 Mins",distance:"4.5 km"},{name:"Upcoming Hinjewadi - Shivajinagar Metro Line",time:"10 Mins",distance:"4.0 km"}]},{category:"Top Schools & Global Universities",icon:"fa-graduation-cap",color:"#10B981",items:[{name:"Akshara International School & Junior College",time:"03 Mins",distance:"1.5 km"},{name:"JSPM Imperial College of Engineering",time:"04 Mins",distance:"2.0 km"},{name:"Indira Institute of Management (Wakad)",time:"08 Mins",distance:"3.8 km"},{name:"Symbiosis Skills & Professional University",time:"06 Mins",distance:"2.8 km"}]},{category:"Healthcare & Retail Lifestyle",icon:"fa-hospital-user",color:"#EF4444",items:[{name:"Phoenix Mall of the Millennium (Wakad)",time:"10 Mins",distance:"4.8 km"},{name:"Lifepoint Multispecialty Hospital",time:"09 Mins",distance:"4.2 km"},{name:"Aditya Birla Memorial Hospital (Chinchwad)",time:"12 Mins",distance:"5.9 km"},{name:"Sentosa Water Park & Multi-Cuisine Resort",time:"02 Mins",distance:"Opposite"}]}];e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Strategic West Pune Growth Hub</span>
        <h2 class="section-title fade-in-up delay-1">Punawale & Kiwale Connectivity Matrix</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Positioned seamlessly at the crossroads of Hinjewadi IT Park, the Mumbai-Pune Expressway, and premier social infrastructure.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="location-category-pills flex justify-center flex-wrap gap-xs mb-lg">
        <button class="loc-filter-btn active" data-cat="all">All Landmarks</button>
        <button class="loc-filter-btn" data-cat="it">IT & Employment</button>
        <button class="loc-filter-btn" data-cat="transit">Highways & Transit</button>
        <button class="loc-filter-btn" data-cat="education">Schools & Universities</button>
        <button class="loc-filter-btn" data-cat="lifestyle">Retail & Hospitals</button>
      </div>

      <!-- Hubs Grid -->
      <div class="grid grid-cols-2 location-grid gap-lg">
        ${a.map((i,o)=>`
          <div class="location-card" data-category-idx="${o}">
            <div class="location-card-header flex items-center justify-between mb-md pb-xs border-bottom">
              <div class="flex items-center gap-sm">
                <div class="loc-icon-badge" style="background-color: ${i.color}15; color: ${i.color};">
                  <i class="fa-solid ${i.icon}"></i>
                </div>
                <h3 class="loc-card-title">${i.category}</h3>
              </div>
            </div>

            <div class="landmark-items-list flex flex-col gap-sm">
              ${i.items.map(r=>`
                <div class="landmark-item flex justify-between items-center p-sm rounded-md bg-light-subtle">
                  <div class="landmark-info">
                    <span class="landmark-name font-semibold text-navy text-sm block">${r.name}</span>
                    <span class="landmark-dist text-xs text-muted"><i class="fa-solid fa-route text-gold mr-1"></i> ${r.distance}</span>
                  </div>
                  <div class="landmark-badge-time text-xs font-bold bg-navy text-gold px-sm py-xs rounded-full">
                    ${r.time}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Location ROI Highlight Strip -->
      <div class="punawale-roi-strip mt-xl p-lg rounded-lg bg-navy text-white text-center flex flex-wrap justify-between items-center gap-md">
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-gold block">18.5%</span>
          <span class="text-xs uppercase tracking-wider text-light">3-Year Capital Appreciation</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-white block">5,00,000+</span>
          <span class="text-xs uppercase tracking-wider text-light">IT Workforce in Hinjewadi Catchment</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-gold block">₹25k - ₹35k</span>
          <span class="text-xs uppercase tracking-wider text-light">Average Monthly 2/3 BHK Rental Yield</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <a href="https://wa.me/917744009295?text=Hi,%20I%20want%20the%20detailed%20Punawale%20and%20Kiwale%20Location%20Investment%20Report." target="_blank" class="btn btn-primary btn-sm">
            Download Location Report
          </a>
        </div>
      </div>

    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .location-hub-section {
      background-color: #FFFFFF;
      padding: 90px 0;
    }
    
    .loc-filter-btn {
      background: #F1F5F9;
      border: 1px solid #E2E8F0;
      color: var(--color-navy);
      padding: 10px 20px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: var(--font-heading);
    }
    
    .loc-filter-btn:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }
    
    .loc-filter-btn.active {
      background: var(--color-gold);
      color: #FFFFFF;
      border-color: var(--color-gold);
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
    }
    
    .location-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 25px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .location-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(10, 25, 47, 0.08);
      border-color: rgba(212, 175, 55, 0.4);
    }
    
    .loc-icon-badge {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    .loc-card-title {
      font-size: 1.15rem;
      color: var(--color-navy);
      font-family: var(--font-heading);
      margin: 0;
    }
    
    .landmark-item {
      background: #F8FAFC;
      border: 1px solid #F1F5F9;
      transition: background 0.2s ease;
    }
    
    .landmark-item:hover {
      background: #F1F5F9;
    }
    
    .landmark-badge-time {
      white-space: nowrap;
      border: 1px solid rgba(212, 175, 55, 0.4);
    }
    
    .punawale-roi-strip {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      box-shadow: 0 10px 30px rgba(10, 25, 47, 0.2);
    }
    
    .roi-divider {
      width: 1px;
      height: 50px;
      background: rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 900px) {
      .location-grid {
        grid-template-columns: 1fr;
      }
      .punawale-roi-strip {
        flex-direction: column;
        text-align: center;
      }
      .roi-divider {
        display: none;
      }
    }
  `,e.appendChild(t),setTimeout(()=>{const i=e.querySelectorAll(".loc-filter-btn"),o=e.querySelectorAll(".location-card");i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(l=>l.classList.remove("active")),r.classList.add("active");const s=r.getAttribute("data-cat");o.forEach((l,n)=>{s==="all"||s==="it"&&n===0||s==="transit"&&n===1||s==="education"&&n===2||s==="lifestyle"&&n===3?l.style.display="block":l.style.display="none"})})})},0),e}function de(){const e=document.createElement("div");e.id="amenities",e.className="amenities-section section";const a={pool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20c1.333-1.667 3-1.667 4.333 0S9.667 21.667 11 20s3-1.667 4.333 0S18.667 21.667 20 20"/><path d="M2 16c1.333-1.667 3-1.667 4.333 0S9.667 17.667 11 16s3-1.667 4.333 0S18.667 17.667 20 16"/><path d="M12 9a4 4 0 1 1 4 4"/></svg>',gym:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l-2 2 3.5 3.5L9 10 4 8z"/><path d="M20 8l2 2-3.5 3.5L15 10l5-2z"/><path d="M9 10l1.3 7h3.4L15 10"/><path d="M4 8l-2 2 3.5 3.5L9 10 4 8zM20 8l2 2-3.5 3.5L15 10l5-2z"/><circle cx="12" cy="5" r="3"/></svg>',clubhouse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M10 8h4"/><path d="M12 8v8"/><path d="M8.5 14h7"/></svg>',track:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6a4.5 4.5 0 0 1 4.24 2.74L13 8l-2 2-1-1.5L8 10l4 5 5-2 1 2.5L20 13"/><path d="M16 16v4h4v-4"/></svg>',garden:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 8a7 7 0 1 0-7 7"/><path d="M10.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/><path d="M12 22a8 8 0 0 1-8-8"/></svg>',sitout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9h3v10h-3z"/><path d="M22 6h-3v3h3z"/><path d="M5 9H2v10h3z"/><path d="M2 6h3v3H2z"/><path d="M6 19v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6"/></svg>',hall:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>'},t=[{title:"Swimming Pool",icon:a.pool},{title:"Gymnasium",icon:a.gym},{title:"Club House",icon:a.clubhouse},{title:"Children Play Area",icon:a.play},{title:"Jogging Track",icon:a.track},{title:"Landscaped Garden",icon:a.garden},{title:"Senior Citizen Area",icon:a.sitout},{title:"Multipurpose Hall",icon:a.hall}];e.innerHTML=`
    <div class="container">
      <div class="text-center mb-lg" style="margin-bottom: 3rem;">
        <h3 class="section-heading-center">Leisure Crafted For You</h3>
        <p class="section-subtitle">World-class amenities for a premium lifestyle</p>
      </div>
      
      <div class="amenities-grid-custom">
        <!-- Injected Below -->
      </div>
    </div>
  `;const i=e.querySelector(".amenities-grid-custom");t.forEach(r=>{const s=document.createElement("div");s.className="amenity-box",s.innerHTML=`
      <div class="amenity-icon-wrapper">${r.icon}</div>
      <p class="amenity-title">${r.title}</p>
    `,i.appendChild(s)});const o=document.createElement("style");return o.textContent=`
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
  `,e.appendChild(o),e}function ae(){const e=document.createElement("section");e.id="emi-calculator",e.className="section emi-calculator-section",e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Financial Planning Tools</span>
        <h2 class="section-title fade-in-up delay-1">Home Loan EMI Calculator</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Plan your dream home with Harico Estates. Calculate your estimated monthly installments, interest breakdown, and explore approved bank loan options with lowest interest rates.
        </p>
      </div>

      <div class="emi-card-wrapper">
        <div class="grid grid-cols-2 emi-grid gap-xl items-center">
          
          <!-- Controls Column -->
          <div class="emi-controls-box">
            
            <!-- Loan Amount Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="loan-amount-range" class="slider-label">Loan Amount</label>
                <div class="slider-value-display">
                  ₹ <span id="loan-amount-text">60,00,000</span>
                </div>
              </div>
              <input type="range" id="loan-amount-range" min="2000000" max="20000000" step="100000" value="6000000" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>₹20 Lacs</span>
                <span>₹1 Crore</span>
                <span>₹2 Crores</span>
              </div>
            </div>

            <!-- Interest Rate Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="interest-rate-range" class="slider-label">Interest Rate (% p.a.)</label>
                <div class="slider-value-display">
                  <span id="interest-rate-text">8.50</span> %
                </div>
              </div>
              <input type="range" id="interest-rate-range" min="7.0" max="13.0" step="0.1" value="8.5" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>7.0%</span>
                <span>8.5% (Avg Bank Rate)</span>
                <span>13.0%</span>
              </div>
            </div>

            <!-- Loan Tenure Slider -->
            <div class="slider-group mb-lg">
              <div class="slider-header flex justify-between items-center mb-sm">
                <label for="loan-tenure-range" class="slider-label">Loan Tenure (Years)</label>
                <div class="slider-value-display">
                  <span id="loan-tenure-text">20</span> Years
                </div>
              </div>
              <input type="range" id="loan-tenure-range" min="5" max="30" step="1" value="20" class="custom-range" />
              <div class="range-limits flex justify-between text-xs text-muted mt-xs">
                <span>5 Yrs</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <!-- Bank Partners Strip -->
            <div class="bank-partners-strip mt-md p-md bg-light-subtle rounded-md">
              <span class="text-xs uppercase font-bold text-gold tracking-wide block mb-xs">Approved Financial Partners:</span>
              <div class="flex flex-wrap gap-xs text-xs font-semibold text-navy">
                <span class="bank-pill">SBI</span>
                <span class="bank-pill">HDFC</span>
                <span class="bank-pill">ICICI</span>
                <span class="bank-pill">Axis Bank</span>
                <span class="bank-pill">Bank of Baroda</span>
              </div>
            </div>

          </div>

          <!-- Results & Visualization Column -->
          <div class="emi-result-box">
            <div class="emi-display-card text-center p-xl">
              <span class="emi-display-label uppercase tracking-widest text-xs font-bold text-gold">Estimated Monthly EMI</span>
              <div class="emi-display-amount">
                ₹ <span id="monthly-emi-result">52,069</span><span class="per-month">/mo*</span>
              </div>
              
              <!-- Breakdown Stats -->
              <div class="breakdown-grid mt-lg pt-lg border-top-gold">
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Principal Amount</span>
                  <span class="text-base font-bold text-navy" id="breakdown-principal">₹ 60,00,000</span>
                </div>
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Total Interest Payable</span>
                  <span class="text-base font-bold text-accent-gold" id="breakdown-interest">₹ 64,96,467</span>
                </div>
                <div class="breakdown-item">
                  <span class="text-xs text-muted block">Total Payment (Principal + Interest)</span>
                  <span class="text-lg font-bold text-navy" id="breakdown-total">₹ 1,24,96,467</span>
                </div>
              </div>

              <!-- Visual Progress Proportion Bar -->
              <div class="proportion-bar-container mt-md">
                <div class="proportion-bar flex">
                  <div class="bar-principal" id="bar-principal" style="width: 48%;"></div>
                  <div class="bar-interest" id="bar-interest" style="width: 52%;"></div>
                </div>
                <div class="flex justify-between text-xs mt-xs">
                  <span class="flex items-center gap-xs"><span class="legend-dot bg-navy"></span> Principal: <b id="pct-principal">48%</b></span>
                  <span class="flex items-center gap-xs"><span class="legend-dot bg-gold"></span> Interest: <b id="pct-interest">52%</b></span>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="mt-lg">
                <a href="https://wa.me/917744009295?text=Hi,%20I%20used%20the%20Harico%20Estates%20EMI%20Calculator.%20Please%20help%20me%20with%20customized%20bank%20loan%20rates%20and%20offers." target="_blank" class="btn btn-primary w-full btn-loan-cta">
                  <i class="fa-brands fa-whatsapp mr-2"></i> Get Lowest Bank Loan Rates
                </a>
                <p class="text-xs text-muted mt-xs italic">*Calculations are indicative. Actual rates subject to bank approval.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `;const a=document.createElement("style");return a.textContent=`
    .emi-calculator-section {
      background: #FAFBFC;
      border-top: 1px solid #EFEFEF;
      border-bottom: 1px solid #EFEFEF;
      padding: 90px 0;
    }
    
    .emi-card-wrapper {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: 0 15px 40px rgba(10, 25, 47, 0.06);
      border: 1px solid rgba(212, 175, 55, 0.2);
    }
    
    .slider-label {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--color-navy);
    }
    
    .slider-value-display {
      background: rgba(212, 175, 55, 0.12);
      color: var(--color-navy);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 1rem;
      border: 1px solid rgba(212, 175, 55, 0.4);
      font-family: var(--font-heading);
    }
    
    .custom-range {
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: #E2E8F0;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
    }
    
    .custom-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--color-gold);
      border: 3px solid #FFF;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    
    .custom-range::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }
    
    .bank-pill {
      background: #FFFFFF;
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid #E2E8F0;
      color: var(--color-navy);
    }
    
    .emi-display-card {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      border-radius: var(--radius-md);
      color: #FFFFFF;
      box-shadow: 0 10px 30px rgba(10, 25, 47, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .emi-display-amount {
      font-size: clamp(2.2rem, 3.5vw, 3.2rem);
      font-weight: 800;
      color: #FFFFFF;
      font-family: var(--font-heading);
      margin: 10px 0;
      letter-spacing: -0.5px;
    }
    
    .per-month {
      font-size: 1.1rem;
      color: var(--color-gold);
      font-weight: 500;
    }
    
    .border-top-gold {
      border-top: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .breakdown-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .breakdown-grid .breakdown-item:last-child {
      grid-column: 1 / -1;
      background: rgba(255,255,255,0.05);
      padding: 10px;
      border-radius: 6px;
    }
    
    .text-accent-gold {
      color: var(--color-gold);
    }
    
    .proportion-bar {
      height: 10px;
      border-radius: 5px;
      overflow: hidden;
      background: #334155;
    }
    
    .bar-principal {
      background: #60A5FA;
      transition: width 0.3s ease;
    }
    
    .bar-interest {
      background: var(--color-gold);
      transition: width 0.3s ease;
    }
    
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    
    .legend-dot.bg-navy { background: #60A5FA; }
    .legend-dot.bg-gold { background: var(--color-gold); }
    
    .btn-loan-cta {
      background: var(--color-gold);
      color: var(--color-navy);
      font-weight: 700;
      padding: 14px 20px;
    }
    
    .btn-loan-cta:hover {
      background: var(--color-gold-hover);
      color: #FFFFFF;
    }

    @media (max-width: 900px) {
      .emi-card-wrapper {
        padding: 25px 15px;
      }
      .emi-grid {
        grid-template-columns: 1fr;
      }
    }
  `,e.appendChild(a),setTimeout(()=>{const t=e.querySelector("#loan-amount-range"),i=e.querySelector("#interest-rate-range"),o=e.querySelector("#loan-tenure-range"),r=e.querySelector("#loan-amount-text"),s=e.querySelector("#interest-rate-text"),l=e.querySelector("#loan-tenure-text"),n=e.querySelector("#monthly-emi-result"),d=e.querySelector("#breakdown-principal"),u=e.querySelector("#breakdown-interest"),p=e.querySelector("#breakdown-total"),w=e.querySelector("#bar-principal"),b=e.querySelector("#bar-interest"),S=e.querySelector("#pct-principal"),T=e.querySelector("#pct-interest");function v(D){return Math.round(D).toLocaleString("en-IN")}function f(){if(!t||!i||!o)return;const D=parseFloat(t.value),H=parseFloat(i.value)/12/100,F=parseFloat(o.value)*12,G=D*H*Math.pow(1+H,F)/(Math.pow(1+H,F)-1),N=G*F,O=N-D;r&&(r.textContent=v(D)),s&&(s.textContent=parseFloat(i.value).toFixed(2)),l&&(l.textContent=o.value),n&&(n.textContent=v(G)),d&&(d.textContent="₹ "+v(D)),u&&(u.textContent="₹ "+v(O)),p&&(p.textContent="₹ "+v(N));const q=Math.round(D/N*100),k=100-q;w&&(w.style.width=q+"%"),b&&(b.style.width=k+"%"),S&&(S.textContent=q+"%"),T&&(T.textContent=k+"%");const j=e.querySelector(".btn-loan-cta");if(j){const U=`Hi Harico Estates Financial Desk, I calculated an estimated EMI of ₹${v(G)}/month for a loan of ₹${v(D)} at ${parseFloat(i.value).toFixed(2)}% for ${o.value} years. Please share pre-approved bank loan options and interest subsidies.`;j.href=`https://wa.me/917744009295?text=${encodeURIComponent(U)}`}}t?.addEventListener("input",f),i?.addEventListener("input",f),o?.addEventListener("input",f),f()},0),e}function He(){const e=document.createElement("section");e.id="testimonials",e.className="section testimonials-section";const a=[{name:"Rajesh & Sneha Kulkarni",designation:"Senior Lead Architect, Infosys Hinjewadi",project:"Harico Edge Homebuyer",rating:5,avatar:"👨‍💼",quote:"We spent 6 months surveying projects in Wakad and Punawale. Harico Edge was an easy decision because of the zero-wastage carpet layout, 2 private balconies, and the fact that we reach Hinjewadi Phase 1 in just 12 minutes without getting stuck at Bhumkar Chowk!"},{name:"Amitabh Deshmukh",designation:"VP of Engineering, Global Tech Firm",project:"Harico Diwaam Investor",rating:5,avatar:"💼",quote:"Sentosa Developers’ 39-year track record gave me complete peace of mind. Harico Diwaam with 24 storeys and 100+ resort amenities is a landmark in Kiwale. The expressway connectivity and upcoming metro make it Pune’s most promising capital appreciation asset."},{name:"Pooja & Vikram Sharma",designation:"Principal Consultant & Doctor",project:"Harico Pride Resident Family",rating:5,avatar:"👩‍⚕️",quote:"The construction quality and transparency with MahaRERA documentation are exemplary. The carpet sizes are genuinely larger than competitor offerings in West Pune, and the rooftop pool and senior citizen sitouts are a delight for our parents."},{name:"Nitin & Aarti Gaikwad",designation:"Entrepreneurs & Wakad Residents",project:"Harico Edge Buyer",rating:5,avatar:"🏢",quote:"Mivan concrete finish, branded Kohler fittings, and genuine customer-first service during the entire booking and home loan sanction process through SBI. Proud to be part of the Harico Estates family!"}];e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Trusted by 5,000+ Homeowners</span>
        <h2 class="section-title fade-in-up delay-1">Stories of Delighted Homeowners</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Hear directly from families, IT professionals, and discerning investors who chose Harico Estates & Sentosa Group.
        </p>
      </div>

      <div class="testimonials-grid grid grid-cols-2 gap-lg">
        ${a.map(i=>`
          <div class="testimonial-card">
            <div class="test-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
            <div class="test-rating mb-sm">
              ${Array(i.rating).fill('<i class="fa-solid fa-star text-gold"></i>').join("")}
            </div>
            <p class="test-quote-text">"${i.quote}"</p>
            <div class="test-author-box flex items-center gap-md mt-md pt-sm border-top">
              <div class="test-avatar">${i.avatar}</div>
              <div>
                <h4 class="test-author-name">${i.name}</h4>
                <p class="test-author-desig">${i.designation}</p>
                <span class="test-project-tag">${i.project}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Trust Bar -->
      <div class="trust-metrics-strip mt-xl p-md rounded-md flex justify-center flex-wrap gap-xl text-center">
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="39" data-counter-suffix="+">39+</span>
          <span class="text-xs uppercase font-semibold text-navy">Years of Legacy</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="20" data-counter-suffix="+">20+</span>
          <span class="text-xs uppercase font-semibold text-navy">Landmarks Delivered</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="5000" data-counter-suffix="+">5,000+</span>
          <span class="text-xs uppercase font-semibold text-navy">Happy Families</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block">100%</span>
          <span class="text-xs uppercase font-semibold text-navy">MahaRERA Registered</span>
        </div>
      </div>

    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .testimonials-section {
      background-color: #F8FAFC;
      padding: 90px 0;
    }
    
    .testimonial-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(10, 25, 47, 0.08);
      border-color: rgba(212, 175, 55, 0.4);
    }
    
    .test-quote-icon {
      position: absolute;
      top: 20px;
      right: 25px;
      font-size: 2rem;
      color: rgba(212, 175, 55, 0.15);
    }
    
    .test-rating {
      font-size: 0.85rem;
    }
    
    .test-quote-text {
      color: var(--color-text-main);
      font-size: 0.95rem;
      line-height: 1.6;
      font-style: italic;
      min-height: 80px;
    }
    
    .test-avatar {
      font-size: 2.2rem;
      background: rgba(212, 175, 55, 0.1);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .test-author-name {
      font-size: 1.05rem;
      color: var(--color-navy);
      font-family: var(--font-heading);
      margin: 0;
    }
    
    .test-author-desig {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      margin: 2px 0;
    }
    
    .test-project-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .trust-metrics-strip {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.3);
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    }
    
    .metric-box {
      min-width: 140px;
    }

    @media (max-width: 900px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `,e.appendChild(t),e}const M=(e,a="dynamic-schema")=>{let t=document.getElementById(a);t||(t=document.createElement("script"),t.type="application/ld+json",t.id=a,document.head.appendChild(t)),t.textContent=JSON.stringify(e)},ke=()=>({"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://haricoestates.in/#organization",name:"Harico Estates by Sentosa Developers",alternateName:["Sentosa Developers","Sentosa Group Pune","Sentosa Group","Harico Group","Harico Ventures","Harico Builders Pune","Harico Realty","Sentosa Real Estate Pune","Harico Estates Punawale","Harico Estates Kiwale","Sentosa Water Park Builders"],url:"https://haricoestates.in",logo:"https://haricoestates.in/harico_logo.png",image:"https://haricoestates.in/harico_logo.png",description:"Premier real estate developer in West Pune & PCMC with a 39-year legacy (since 1987). Builders of Harico Edge (Punawale), Harico Divaam / Diwaam (Kiwale Ravet), Harico Pride (Punawale), Sentosa Ekam, Sentosa Serene, and Sentosa Paradise.",telephone:"+91-7744009295",email:"contact@haricoestates.in",priceRange:"₹70.00 Lacs - ₹1.50 Cr",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"148",bestRating:"5",worstRating:"1"},address:{"@type":"PostalAddress",streetAddress:"Harico Estates, Near Bhumkar Chowk, Mumbai-Pune Expressway",addressLocality:"Punawale, Pimpri-Chinchwad, Pune",addressRegion:"Maharashtra",postalCode:"411033",addressCountry:"IN"},geo:{"@type":"GeoCoordinates",latitude:"18.6366",longitude:"73.7483"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],opens:"09:30",closes:"19:30"}],parentOrganization:{"@type":"Organization",name:"Sentosa Developers & Hospitality Group",foundingDate:"1987",description:"39 Years of Legacy in Real Estate, Hospitality (Sentosa Water Park & Resorts), and Commercial Developments across Pune and Maharashtra."},areaServed:ie.map(e=>({"@type":"Place",name:e})),knowsAbout:[...fe,...ie,"MahaRERA Regulatory Compliance","Mivan Monolithic Concrete Technology","Luxury 2 & 3 BHK Apartments in PCMC","Real Estate Investment & Rental Yield in West Pune","Hinjewadi IT Park Residential Corridors"],hasOfferCatalog:{"@type":"OfferCatalog",name:"Harico Estates & Sentosa Real Estate Portfolio",itemListElement:[{"@type":"Offer",itemOffered:{"@type":"ApartmentComplex",name:"Harico Edge",description:"2 & 3 BHK Ultra-Premium Homes in Punawale, Pune",url:"https://haricoestates.in/project/harico-edge"},priceCurrency:"INR",price:"7400000",priceSpecification:{"@type":"PriceSpecification",price:"7400000",priceCurrency:"INR",minPrice:"7400000",maxPrice:"11800000"}},{"@type":"Offer",itemOffered:{"@type":"ApartmentComplex",name:"Harico Divaam",description:"2 & 3 BHK High-Rise 24-Storey Residences in Kiwale-Ravet, Pune",url:"https://haricoestates.in/project/harico-divaam"},priceCurrency:"INR",price:"7000000",priceSpecification:{"@type":"PriceSpecification",price:"7000000",priceCurrency:"INR",minPrice:"7000000",maxPrice:"10800000"}},{"@type":"Offer",itemOffered:{"@type":"ApartmentComplex",name:"Harico Pride",description:"Spacious 2 & 3 BHK Luxury Residences in Punawale, Pune",url:"https://haricoestates.in/project/harico-pride"},priceCurrency:"INR",price:"7800000"}]},sameAs:["https://www.facebook.com/haricoestates","https://www.instagram.com/haricoestates","https://maharera.mahaonline.gov.in","https://www.google.com/maps?q=harico+estates","https://www.google.com/maps?q=harico+divaam"]}),Pe=e=>{let a=[`Sentosa ${e.title}`,`${e.title} by Sentosa Group`];return e.slug==="harico-divaam"?a=["Harico Diwaam","Harico Divaam Kiwale","Harico Diwaam Kiwale","Sentosa Harico Divaam","Sentosa Harico Diwaam","Sentosa Divaam","Sentosa Diwaam","Harico Divam","Harico Diwam","Harico Estates Divaam","Harico Estates Diwaam","Codename Divine Kiwale"]:e.slug==="harico-edge"?a=["Harico Edge Punawale","Sentosa Harico Edge","Sentosa Edge","Sentosa Edge Punawale","Harico Edge Pune","Harico Estates Edge","Harico Edge by Sentosa"]:e.slug==="harico-pride"&&(a=["Harico Pride Punawale","Sentosa Harico Pride","Sentosa Pride","Harico Estates Pride"]),{"@context":"https://schema.org","@type":"ApartmentComplex","@id":`https://haricoestates.in/project/${e.slug}#complex`,name:e.title,alternateName:a,image:["https://haricoestates.in"+e.image,...(e.floorPlans||[]).map(t=>"https://haricoestates.in"+t.image)],description:e.description,url:`https://haricoestates.in/project/${e.slug}`,telephone:"+91-7744009295",keywords:e.seo?.keywords||"",address:{"@type":"PostalAddress",streetAddress:`${e.title}, ${e.location}`,addressLocality:e.location,addressRegion:"Maharashtra",addressCountry:"IN"},geo:{"@type":"GeoCoordinates",latitude:e.slug==="harico-divaam"?"18.6738":"18.6366",longitude:e.slug==="harico-divaam"?"73.7225":"73.7483"},hasMap:e.slug==="harico-divaam"?"https://www.google.com/maps?q=harico+divaam":"https://www.google.com/maps?q=harico+estates",amenityFeature:Array.isArray(e.amenities)?typeof e.amenities[0]=="string"?e.amenities.map(t=>({"@type":"LocationFeatureSpecification",name:t,value:!0})):e.amenities.flatMap(t=>t.items.map(i=>({"@type":"LocationFeatureSpecification",name:i,value:!0}))):[],numberOfAccommodationUnits:e.unitsTotal||"280+",floorSize:{"@type":"QuantitativeValue",unitCode:"FTK",minValue:"724",maxValue:"1180"},identifier:e.reraNumber||e.reraId,containedInPlace:{"@type":"Place",name:e.location},makesOffer:(e.configurations||[]).map(t=>({"@type":"Offer",name:`${t.type} at ${e.title}`,description:`${t.type} with ${t.carpet} carpet area at ${e.title}`,price:t.price,priceCurrency:"INR",availability:"https://schema.org/InStock",seller:{"@type":"RealEstateAgent",name:"Harico Estates by Sentosa Developers"}}))}},Se=e=>{let a=[];return e.slug==="harico-edge"?a=[{name:"What is the price of 2 BHK and 3 BHK flats at Harico Edge Punawale?",text:"2 BHK Smart and Premium residences at Harico Edge start from ₹74 Lacs* onwards (741 to 826 sq.ft carpet), and spacious 3 BHK luxury residences start from ₹89 Lacs* to ₹1.18 Cr* with dual balconies."},{name:"What is the MahaRERA registration number of Harico Edge?",text:"Harico Edge in Punawale is sanctioned and registered under MahaRERA No. P52100031773."},{name:"How far is Harico Edge from Hinjewadi IT Park and Phoenix Mall?",text:"Harico Edge is just 10 minutes from Phoenix Mall of the Millennium (Wakad), 2 minutes from Mumbai-Pune Expressway, and 15 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1."}]:e.slug==="harico-divaam"?a=[{name:"What is the starting price for 2 BHK and 3 BHK flats in Harico Divaam / Diwaam Kiwale?",text:"Harico Divaam (Harico Diwaam Kiwale) luxury residences start from ₹70.00 Lacs* onwards for 2 BHK (724 sq.ft carpet) and ₹89.90 Lacs* onwards for 3 BHK (920 sq.ft carpet), with flexible milestone payment plans and pre-approved home loans from SBI, HDFC, and ICICI."},{name:"What are the exact configurations and carpet areas in Harico Diwaam Kiwale?",text:"Harico Diwaam offers 2 BHK Smart (724 sq.ft), 2 BHK Comfort (760 sq.ft), 2 BHK Grand (848 sq.ft), 3 BHK Smart (920 sq.ft), 3 BHK Comfort (983 sq.ft), and 3 BHK Grand (1,108 sq.ft) usable carpet areas with dual private balconies."},{name:"How many floors, towers, and land acreage does Harico Diwaam have?",text:"Harico Diwaam is the tallest residential landmark in the Kiwale-Ravet corridor, featuring 5 iconic sky towers standing 24 storeys tall across an expansive 5.0-acre master development."},{name:"What is the MahaRERA registration number and target possession date for Harico Diwaam?",text:"Harico Divaam is officially approved and registered under MahaRERA No. PR1260002502389 with target possession scheduled for December 2030."},{name:"What amenities are available at Harico Diwaam Kiwale?",text:"Harico Diwaam features over 100+ resort-grade lifestyle amenities, including a 24th-floor Sky Observation Deck, infinity swimming pool, sky gymnasium, 40-seater Dolby Atmos mini-theatre, podcasting & creator studios, co-working lounges, and 12 luxury guest suites for visiting family."},{name:"Where is Harico Diwaam located and how far is it from Hinjewadi and Expressway?",text:"Harico Diwaam is located directly opposite Sentosa Water Park on the Mumbai-Pune Expressway corridor in Kiwale-Ravet. It is 2 minutes from Mukai Chowk BRTS, 5-7 minutes from Akurdi Railway Station, and 12-15 minutes from Hinjewadi Rajiv Gandhi Infotech Park."},{name:"What construction technology is being used at Harico Diwaam?",text:"Harico Diwaam is constructed using earthquake-resistant Mivan monolithic concrete technology, providing seismic Zone III compliance, superior acoustic insulation, and seamless crack-free finishes."},{name:"Who is the developer of Harico Diwaam Kiwale?",text:"Harico Diwaam is developed by Harico Estates in partnership with Sentosa Developers, a trusted real estate group with a 39-year legacy (since 1987), 20+ completed projects, and builders of Sentosa Water Park & Resorts."}]:a=[{name:"What are the key features of Harico Pride Punawale?",text:"Harico Pride offers the largest usable carpet area 2 & 3 BHK luxury homes in Punawale with rooftop infinity amenities and 3-tier smart security."},{name:"What is the MahaRERA registration for Harico Pride?",text:"Harico Pride is officially registered under MahaRERA No. P52100018471."}],{"@context":"https://schema.org","@type":"FAQPage","@id":`https://haricoestates.in/project/${e.slug}#faq`,mainEntity:a.map(t=>({"@type":"Question",name:t.name,acceptedAnswer:{"@type":"Answer",text:t.text}}))}},De=()=>({"@context":"https://schema.org","@type":"FAQPage","@id":"https://haricoestates.in/#faq",mainEntity:[{"@type":"Question",name:"What is the starting price for 2 BHK flats at Harico Edge Punawale?",acceptedAnswer:{"@type":"Answer",text:"Harico Edge in Punawale offers ultra-premium 2 BHK residences starting from ₹74 Lacs* and spacious 3 BHK residences starting from ₹89 Lacs* with dual balconies and 50+ amenities."}},{"@type":"Question",name:"What is the price and elevation of Harico Divaam in Kiwale Ravet?",acceptedAnswer:{"@type":"Answer",text:"Harico Divaam is the tallest residential landmark in the Kiwale-Ravet corridor, featuring 5 iconic 24-storey towers across 5 acres. 2 BHK luxury residences start from ₹70.00 Lacs* and 3 BHK from ₹89.90 Lacs* onwards directly opposite Sentosa Water Park."}},{"@type":"Question",name:"Are Harico Estates projects registered with MahaRERA?",acceptedAnswer:{"@type":"Answer",text:"Yes, 100% of Harico Estates projects are sanctioned and registered under MahaRERA: Harico Edge (P52100031773), Harico Divaam (PR1260002502389), and Harico Pride (P52100018471)."}},{"@type":"Question",name:"What is the connectivity of Harico projects to Hinjewadi IT Park and Expressway?",acceptedAnswer:{"@type":"Answer",text:"Harico projects enjoy unmatched connectivity: 2 minutes to the Mumbai-Pune Expressway & Mukai Chowk, 10 minutes to Phoenix Mall of the Millennium (Wakad), and 15-18 minutes to Hinjewadi Rajiv Gandhi Infotech Park Phase 1, 2 & 3."}},{"@type":"Question",name:"Who is the developer behind Harico Estates?",acceptedAnswer:{"@type":"Answer",text:"Harico Estates is backed by the prestigious 39-year legacy (since 1987) of Sentosa Developers, creators of Sentosa Water Park & Resorts and over 20+ delivered landmark projects across Pune."}}]}),_=(e,a,t,i)=>{const o=(s,l)=>{let n=document.querySelector(`meta[property="${s}"]`)||document.querySelector(`meta[name="${s}"]`);n||(n=document.createElement("meta"),s.startsWith("og:")?n.setAttribute("property",s):n.setAttribute("name",s),document.head.appendChild(n)),n.setAttribute("content",l)};o("description",a),o("og:title",e),o("og:description",a),o("og:image",t),o("og:url",i),o("og:type","website"),o("twitter:card","summary_large_image"),o("twitter:title",e),o("twitter:description",a),o("twitter:image",t);let r=document.querySelector('link[rel="canonical"]');r||(r=document.createElement("link"),r.setAttribute("rel","canonical"),document.head.appendChild(r)),r.setAttribute("href",i)},Ee=()=>({"@context":"https://schema.org","@type":"WebSite","@id":"https://haricoestates.in/#website",url:"https://haricoestates.in",name:"Harico Estates by Sentosa Developers",description:"Official portal for Harico Estates & Sentosa Developers. Luxury 2 & 3 BHK residences in Punawale and Kiwale, Pune.",publisher:{"@id":"https://haricoestates.in/#organization"},potentialAction:{"@type":"SearchAction",target:"https://haricoestates.in/projects?q={search_term_string}","query-input":"required name=search_term_string"}}),Ke=e=>({"@context":"https://schema.org","@type":"Article","@id":`https://haricoestates.in/articles/${e.slug}#article`,headline:e.title,description:e.metaDescription,image:e.image.startsWith("http")?e.image:`https://haricoestates.in${e.image}`,datePublished:`${e.publishDate}T09:00:00+05:30`,dateModified:"2026-03-14T12:00:00+05:30",author:{"@type":"Organization",name:"Harico Estates Research & Editorial Team",url:"https://haricoestates.in"},publisher:{"@type":"Organization",name:"Harico Estates by Sentosa Developers",logo:{"@type":"ImageObject",url:"https://haricoestates.in/harico_logo.png"}},mainEntityOfPage:{"@type":"WebPage","@id":`https://haricoestates.in/articles/${e.slug}`},articleSection:e.category,keywords:e.keywords}),Ce=e=>!e.faqs||e.faqs.length===0?null:{"@context":"https://schema.org","@type":"FAQPage","@id":`https://haricoestates.in/articles/${e.slug}#faq`,mainEntity:e.faqs.map(a=>({"@type":"Question",name:a.q,acceptedAnswer:{"@type":"Answer",text:a.a}}))},Fe=(e,a,t)=>{const i=[{"@type":"ListItem",position:1,name:"Home",item:"https://haricoestates.in"}];return e?(i.push({"@type":"ListItem",position:2,name:"Projects",item:"https://haricoestates.in/projects"}),i.push({"@type":"ListItem",position:3,name:e.title,item:`https://haricoestates.in/project/${e.slug}`})):a?i.push({"@type":"ListItem",position:2,name:a.h1||a.title,item:`https://haricoestates.in/${a.path}`}):t&&(i.push({"@type":"ListItem",position:2,name:"Articles & Guides",item:"https://haricoestates.in/articles"}),i.push({"@type":"ListItem",position:3,name:t.title,item:`https://haricoestates.in/articles/${t.slug}`})),{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:i}},y=(e,a,t)=>{if(M(ke(),"org-schema"),M(Ee(),"website-schema"),M(Fe(e,a,t),"breadcrumb-schema"),e){M(Pe(e),"project-schema"),M(Se(e),"project-faq-schema");const i=document.querySelector('meta[name="keywords"]');i&&e.seo?.keywords&&i.setAttribute("content",e.seo.keywords),_(`${e.title} | ${e.location} | Harico Estates`,e.description,"https://haricoestates.in"+e.image,"https://haricoestates.in/project/"+e.slug)}else if(a){const i=document.getElementById("project-schema");i&&i.remove();const o=document.getElementById("project-faq-schema");o&&o.remove();const r=document.querySelector('meta[name="keywords"]');r&&a.metaKeywords&&r.setAttribute("content",a.metaKeywords),_(a.title,a.description||a.subtitle,"https://haricoestates.in/assets/harico-divaam-hero.jpg",`https://haricoestates.in/${a.path}`)}else if(t){const i=document.getElementById("project-schema");i&&i.remove();const o=document.getElementById("project-faq-schema");o&&o.remove(),M(Ke(t),"article-schema");const r=Ce(t);r&&M(r,"article-faq-schema");const s=document.querySelector('meta[name="keywords"]');s&&t.keywords&&s.setAttribute("content",t.keywords),_(`${t.title} | Harico Estates Knowledge Hub`,t.metaDescription,t.image.startsWith("http")?t.image:`https://haricoestates.in${t.image}`,`https://haricoestates.in/articles/${t.slug}`)}else{const i=document.getElementById("project-schema");i&&i.remove();const o=document.getElementById("project-faq-schema");o&&o.remove(),M(De(),"faq-schema"),_("Harico Estates by Sentosa Developers | Harico Divaam & Harico Edge","Harico Estates & Sentosa Developers (39-Year Legacy). Ultra-luxury 2 & 3 BHK homes across Punawale, Kiwale, Ravet, Tathawade, and Hinjewadi corridor.","https://haricoestates.in/harico_logo.png","https://haricoestates.in/")}};function pe(){const e=document.createElement("section");e.id="faq",e.className="section faq-section";const a=[{question:"What is Harico Estates and what is its development heritage in Pune?",answer:"<b>Harico Estates</b> is the premier residential development entity of <b>Sentosa Developers</b>, a trusted real estate and hospitality conglomerate with a <b>39-year legacy (founded in 1987)</b> across Pune, PCMC, and Maharashtra. Backed by 20+ delivered landmark developments and the iconic Sentosa Water Park & Resorts, Harico Estates is known for 100% legal title compliance, earthquake-resistant Mivan monolithic engineering, and strategic highway-adjacent developments."},{question:"What is the starting price for 2 BHK and 3 BHK flats at Harico Diwaam Kiwale?",answer:"At <b>Harico Diwaam (Harico Divaam Kiwale)</b>, luxury 2 BHK apartments start from <b>₹70.00 Lacs* Onwards</b> (724 sq.ft usable carpet area) and 3 BHK apartments start from <b>₹89.90 Lacs* Onwards</b> (920 sq.ft usable carpet area). Larger 2 BHK Comfort (760 sq.ft), 2 BHK Grand (848 sq.ft), 3 BHK Comfort (983 sq.ft), and 3 BHK Grand (1,108 sq.ft) variants are also available with flexible construction-linked payment schedules."},{question:"What is the difference between Harico Diwaam and Harico Divaam?",answer:'<b>Harico Diwaam</b> and <b>Harico Divaam</b> refer to the exact same landmark residential development situated directly opposite Sentosa Water Park in Kiwale-Ravet. "Harico Divaam" is the official spelling filed under MahaRERA registration number <b>PR1260002502389</b>, while "Harico Diwaam" is the widely used phonetic brand spelling searched by homebuyers.'},{question:"How many towers, floors, and acres make up Harico Diwaam Kiwale?",answer:"Harico Diwaam is the tallest residential development in the Kiwale-Ravet micro-market, featuring <b>5 iconic sky towers rising 24 storeys tall</b> set within an expansive <b>5.0-acre master-planned land parcel</b>."},{question:"What is the MahaRERA registration number and possession date for Harico Diwaam?",answer:"Harico Diwaam (Harico Divaam) is approved and registered under MahaRERA registration number <b>PR1260002502389</b> with target completion and possession scheduled for <b>December 2030</b>."},{question:"What 100+ resort lifestyle amenities are provided at Harico Diwaam Kiwale?",answer:"Harico Diwaam features over 100+ curated amenities across 6 lifestyle zones, including a <b>24th-floor Rooftop Sky Observation Deck</b>, infinity edge swimming pool, sky gymnasium, 40-seater Dolby Atmos private mini-theatre, podcasting and YouTube creator studio, 12 fully furnished guest suites for visiting family, business co-working lounges, tennis and badminton courts, children’s splash pool, and 3-tier security."},{question:"Where is Harico Diwaam located and how far is it from Hinjewadi & Expressway?",answer:"Harico Diwaam is positioned <b>directly opposite Sentosa Water Park</b> on the Mumbai-Pune Expressway corridor in Kiwale-Ravet (PIN: 412101). It is situated just <b>2 minutes from Mukai Chowk BRTS</b>, <b>2 minutes from the Mumbai-Pune Expressway</b>, <b>5 minutes from Akurdi Railway Station</b>, and <b>12–15 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1</b>."},{question:"What residential projects are developed under Harico Kiwale?",answer:"Under the <b>Harico Kiwale</b> development umbrella, the flagship project is <b>Harico Diwaam (Harico Divaam Kiwale)</b>, featuring 24-storey high-rise luxury towers across 5 acres opposite Sentosa Water Park. Harico Kiwale represents the pinnacle of high-rise engineering in the Kiwale-Ravet growth belt."},{question:"What is Harico Edge Punawale and what is its starting price and possession date?",answer:"<b>Harico Edge</b> is a luxury 22-storey residential development in Punawale (PIN: 411033) spanning 2.5 acres near Bhumkar Chowk. 2 BHK residences start from <b>₹74.00 Lacs* Onwards</b> (741 sq.ft carpet) and 3 BHK residences start from <b>₹89.00 Lacs* Onwards</b> (942 sq.ft carpet up to 1,148 sq.ft). Target possession is scheduled for <b>June 2030</b> under MahaRERA registration number <b>P52100031773</b>."},{question:"What residential projects are developed under Harico Punawale?",answer:"The <b>Harico Punawale</b> corridor comprises two flagship developments by Sentosa Developers: <b>Harico Edge</b> (MahaRERA P52100031773, June 2030 possession) and <b>Harico Pride</b> (MahaRERA P52100018471, near-possession June 2027), along with delivered Sentosa landmarks such as Sentosa Ekam and Sentosa Pride Phases 1, 2 & 3."},{question:"What is Harico Pride Punawale and when is its possession?",answer:"<b>Harico Pride</b> is an expansive residential enclave located near Bhiku Vallabh Kale School in Punawale. It offers the largest usable carpet area 2 & 3 BHK residences in Punawale (765 to 1,180 sq.ft) with starting prices from <b>₹78.00 Lacs*</b>. Target possession is <b>June 2027</b> under MahaRERA registration number <b>P52100018471</b>."},{question:"What is Mivan monolithic concrete construction and why does Harico Estates use it?",answer:"Harico Estates standardizes <b>Mivan monolithic aluminium formwork concrete casting</b> across all projects. Unlike conventional brick construction that is prone to hairline cracks and moisture seepage, Mivan casts walls and slabs simultaneously in high-grade concrete, delivering superior earthquake resistance (IS Zone III compliant), jointless water-tight walls, smooth factory-quality wall finishes, and 4%–6% more usable carpet area."},{question:"Which nationalized and private banks have approved Harico projects for home loans?",answer:"All Harico Estates developments are pre-approved by leading financial institutions including <b>State Bank of India (SBI)</b>, <b>HDFC Bank</b>, <b>ICICI Bank</b>, <b>Axis Bank</b>, <b>Bank of Baroda</b>, and <b>Kotak Mahindra Bank</b>. Competitive interest rates starting from 8.35%* p.a. and fast-track sanctions are facilitated by our in-house finance desk."},{question:"What are the usable carpet areas available across Harico Estates projects?",answer:"Harico Estates offers 2 BHK configurations from <b>724 sq.ft to 848 sq.ft</b> and 3 BHK configurations from <b>920 sq.ft to 1,180 sq.ft</b>. Every layout features zero space wastage, dual private balconies, separate dry utility balconies, and dedicated master bedroom wardrobe niches."},{question:"What are the expected rental yields and capital appreciation in Punawale and Kiwale?",answer:"Punawale and Kiwale have demonstrated consistent <b>15%–18% capital appreciation</b> over the past 3 years due to high IT professional influx from Hinjewadi and Wakad. Gross rental yields range between <b>4.2% to 4.8%</b>, with 2 BHK monthly rentals averaging ₹22,000 to ₹28,000 and 3 BHK rentals reaching ₹32,000 to ₹40,000."},{question:"What is the booking token amount and procedure for a flat in Harico Estates?",answer:"You can reserve your preferred unit with a nominal booking token amount. The construction-linked payment plan is structured according to clear MahaRERA milestones across plinth casting, individual slab completions, internal plastering, and final handover."},{question:"Are all Harico Estates projects free from legal encumbrances and clear title approved?",answer:"Yes, 100% of Harico Estates developments have clear, marketable, and unencumbered legal titles vetted by top corporate legal counsels, with sanctioned building layouts and commencement certificates (CC) approved by PCMC and MahaRERA."},{question:"How do I schedule a priority VIP site visit and visit the sample flat?",answer:"You can schedule a priority VIP site visit by calling our direct sales desk at <b>+91 7744009295</b> or messaging on WhatsApp. Our site sales galleries are open all 7 days from 9:30 AM to 7:30 PM with fully furnished show apartments available for viewing."}],t={"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.map(o=>({"@type":"Question",name:o.question,acceptedAnswer:{"@type":"Answer",text:o.answer.replace(/<[^>]*>?/gm,"")}}))};M(t,"faq-schema"),e.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Homebuyer Knowledge Hub</span>
        <h2 class="section-title fade-in-up delay-1">Frequently Asked Questions</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Everything you need to know regarding MahaRERA compliance, bank home loans, construction standards, and possession timelines.
        </p>
      </div>

      <div class="faq-accordion-container max-w-900 mx-auto">
        ${a.map((o,r)=>`
          <div class="faq-item ${r===0?"active":""}">
            <button class="faq-question-btn flex justify-between items-center w-full" aria-expanded="${r===0?"true":"false"}">
              <span class="faq-q-text">${o.question}</span>
              <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer-pane" style="${r===0?"max-height: 250px;":"max-height: 0;"}">
              <p class="faq-a-text">${o.answer}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Assistance Footer -->
      <div class="faq-support-box text-center mt-xl p-lg rounded-lg bg-light-subtle max-w-700 mx-auto border">
        <h4 class="font-bold text-navy text-lg mb-xs">Still have questions regarding our projects?</h4>
        <p class="text-sm text-muted mb-md">Our certified project relationship managers are available 24x7 for personalized consultations.</p>
        <div class="flex justify-center gap-md flex-wrap">
          <a href="tel:+917744009295" class="btn btn-sm btn-outline">
            <i class="fa-solid fa-phone mr-2"></i> +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=Hi,%20I%20have%20questions%20regarding%20Harico%20Estates%20projects." target="_blank" class="btn btn-sm btn-primary">
            <i class="fa-brands fa-whatsapp mr-2"></i> Chat with Senior Advisor
          </a>
        </div>
      </div>

    </div>
  `;const i=document.createElement("style");return i.textContent=`
    .faq-section {
      background-color: #FFFFFF;
      padding: 90px 0;
    }
    
    .max-w-900 { max-width: 900px; }
    .max-w-700 { max-width: 700px; }
    
    .faq-accordion-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .faq-item {
      background: #FAFBFC;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .faq-item.active {
      border-color: var(--color-gold);
      background: #FFFFFF;
      box-shadow: 0 4px 20px rgba(10, 25, 47, 0.06);
    }
    
    .faq-question-btn {
      padding: 20px 25px;
      background: transparent;
      text-align: left;
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      border: none;
      transition: color 0.2s ease;
    }
    
    .faq-item.active .faq-question-btn {
      color: var(--color-gold-hover);
    }
    
    .faq-icon {
      color: var(--color-gold);
      transition: transform 0.3s ease;
      font-size: 0.9rem;
      margin-left: 15px;
    }
    
    .faq-item.active .faq-icon {
      transform: rotate(180deg);
    }
    
    .faq-answer-pane {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0 25px;
    }
    
    .faq-item.active .faq-answer-pane {
      padding-bottom: 20px;
    }
    
    .faq-a-text {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 768px) {
      .faq-question-btn {
        padding: 16px 18px;
        font-size: 0.95rem;
      }
      .faq-answer-pane {
        padding: 0 18px;
      }
    }
  `,e.appendChild(i),setTimeout(()=>{const o=e.querySelectorAll(".faq-item");o.forEach(r=>{const s=r.querySelector(".faq-question-btn"),l=r.querySelector(".faq-answer-pane");s?.addEventListener("click",()=>{const n=r.classList.contains("active");o.forEach(d=>{d.classList.remove("active");const u=d.querySelector(".faq-answer-pane");u&&(u.style.maxHeight="0")}),!n&&l&&(r.classList.add("active"),l.style.maxHeight=l.scrollHeight+30+"px")})})},0),e}async function me(e){const a="propsmartrealty@gmail.com",t=new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}),i=e.sourceUrl||window.location.href,o={_subject:`🚨 New Real Estate Lead: ${e.name} - ${e.project||"Harico Estates"}`,_replyto:e.email||"propsmartrealty@gmail.com",_template:"table",_captcha:"false","Lead Name":e.name,"Phone Number":e.phone,"Email Address":e.email||"Not Provided (Phone Preferred)","Target Project":e.project||"Harico Estates General Enquiry","Configuration / Requirement":e.requirement||"2 & 3 BHK Luxury Residences","Interest Type":e.interestType||"Direct Website Lead","Preferred Site Visit Slot":e.timeSlot||"Immediate / Flexible","Buyer Notes / Message":e.message||"Direct developer consultation requested","Landing Page URL":i,"Received At (IST)":`${t} IST`};try{fetch(`https://formsubmit.co/ajax/${a}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).catch(r=>console.warn("[LeadDispatcher] Email background dispatch:",r))}catch(r){console.warn("[LeadDispatcher] Failed sending email:",r)}try{fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,timestamp:t,recipient:a})}).catch(()=>{})}catch{}return{success:!0}}function P(){const e=document.createElement("section");e.id="contact",e.className="section contact-section lux-reveal",e.innerHTML=`
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
                  <option value="All Projects">All Projects / General Enquiry</option>
                  <option value="Harico Diwaam (Kiwale-Ravet)">Harico Diwaam (Kiwale - 24 Storeys)</option>
                  <option value="Harico Edge (Punawale)">Harico Edge (Punawale - Near Bhumkar Chowk)</option>
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
            <h4 class="text-gold font-bold text-lg mb-sm"><i class="fa-solid fa-headset mr-2"></i> Direct Sales Helpline</h4>
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
              <a href="https://www.google.com/maps?q=harico+estates" target="_blank" class="text-xs text-gold font-bold mt-xs inline-block">
                <i class="fa-solid fa-diamond-turn-right mr-1"></i> Get Driving Directions &rarr;
              </a>
            </div>

            <div class="office-loc-item">
              <p class="font-bold text-navy text-sm m-0">Harico Diwaam Sales Lounge</p>
              <p class="text-xs text-muted m-0">Opposite Sentosa Water Park, Mukai Chowk corridor, Kiwale-Ravet, PCMC 412101</p>
              <a href="https://www.google.com/maps?q=harico+divaam" target="_blank" class="text-xs text-gold font-bold mt-xs inline-block">
                <i class="fa-solid fa-diamond-turn-right mr-1"></i> Get Driving Directions &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;const a=document.createElement("style");return a.textContent=`
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
  `,e.appendChild(a),setTimeout(()=>{e.querySelector("#contact-hub-form")?.addEventListener("submit",i=>{i.preventDefault();const o=e.querySelector("#contact-name")?.value,r=e.querySelector("#contact-phone")?.value,s=e.querySelector("#contact-project")?.value,l=e.querySelector("#contact-slot")?.value,n=e.querySelector("#contact-msg")?.value;me({name:o,phone:r,project:s,timeSlot:l,message:n,interestType:"VIP Site Visit Booking"});let d=`*VIP Site Visit Booking Request* 🏛️

`;d+=`*Name:* ${o}
`,d+=`*Phone:* ${r}
`,d+=`*Selected Project:* ${s}
`,d+=`*Time Slot:* ${l}
`,n&&(d+=`*Requirements:* ${n}
`),d+=`
_Lead dispatched to propsmartrealty@gmail.com_`,window.open(`https://wa.me/917744009295?text=${encodeURIComponent(d)}`,"_blank"),i.target.reset()})},0),e}function Be(){const e=document.createElement("footer");e.className="footer-section",e.innerHTML=`
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo-wrapper">
             <img src="/harico_logo.png" alt="Harico Estates" class="footer-logo-img">
          </div>
          <p class="footer-desc">
            Redefining ultra-luxury real estate across Punawale & Kiwale. A proud venture backed by the 39-year legacy of Sentosa Developers.
          </p>
          <div class="social-links">
             <a href="https://facebook.com/haricoestates" target="_blank" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
             </a>
             <a href="https://instagram.com/haricoestates" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
             </a>
             <a href="https://wa.me/917744009295" target="_blank" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
             </a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4 class="footer-heading">Navigate</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Featured Projects</a></li>
            <li><a href="/project-comparison">Compare Landmarks</a></li>
            <li><a href="/specifications">Construction Specs</a></li>
            <li><a href="/location-hub">Location Matrix</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Buyer Tools</h4>
          <ul class="footer-links">
            <li><a href="/articles">Articles & Knowledge Hub</a></li>
            <li><a href="/emi-calculator">EMI Calculator</a></li>
            <li><a href="/amenities">Curated Amenities</a></li>
            <li><a href="/faq">FAQ Knowledge Base</a></li>
            <li><a href="/contact">VIP Site Visit</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Flagship Projects</h4>
          <ul class="footer-links">
            <li><a href="/project/harico-divaam">HARICO DIWAAM (Kiwale)</a></li>
            <li><a href="/project/harico-edge">HARICO EDGE (Punawale)</a></li>
            <li><a href="/project/harico-pride">HARICO PRIDE (Punawale)</a></li>
            <li><a href="/articles/harico-diwaam-kiwale-buyer-guide">Diwaam Buyer Guide</a></li>
            <li><a href="/articles/punawale-vs-kiwale-comparison">Punawale vs Kiwale</a></li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4 class="footer-heading">Contact Us</h4>
          <ul class="footer-contact">
            <li>
                <span class="icon">📍</span>
                <a href="https://www.google.com/maps?q=harico+estates" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;" class="hover-gold" title="Open Harico Estates on Google Maps">
                  <span>Punawale & Kiwale, Pune, Maharashtra 411033</span>
                </a>
            </li>
            <li>
                <span class="icon">📞</span>
                <a href="tel:+917744009295">+91 7744009295</a>
            </li>
            <li>
                <span class="icon">💬</span>
                <a href="https://wa.me/917744009295" target="_blank">WhatsApp Direct Assistance</a>
            </li>
            <li>
                <span class="icon">✉️</span>
                <a href="mailto:contact@haricoestates.in">contact@haricoestates.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Harico Estates & Sentosa Developers. All rights reserved.</p>
        <div class="legal-links">
           <a href="/privacy">Privacy Policy</a>
           <a href="/terms">Terms of Use</a>
           <a href="/faq">MahaRERA FAQs</a>
        </div>
      </div>

      <!-- MahaRERA Legal Disclaimer & QR Codes -->
      <div class="footer-rera" style="text-align: center; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 25px;">
         <div style="display: flex; justify-content: center; gap: 25px; margin-bottom: 15px; flex-wrap: wrap;">
             <div style="text-align: center;">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100031773" alt="Harico Edge QR" title="Harico Edge QR" style="width: 55px; height: 55px; border: 2px solid var(--color-gold); border-radius: 6px; background: white; padding: 3px;">
                 <div style="font-size: 0.65rem; color: var(--color-gold); margin-top: 4px; font-weight: bold;">Harico Edge</div>
                 <div style="font-size: 0.6rem; color: #CBD5E1;">P52100031773</div>
             </div>
             <div style="text-align: center;">
                 <img src="/assets/harico-divaam-rera-qr.png" alt="Harico Diwaam QR" title="Harico Diwaam QR" style="width: 55px; height: 55px; border: 2px solid var(--color-gold); border-radius: 6px; background: white; padding: 3px;">
                 <div style="font-size: 0.65rem; color: var(--color-gold); margin-top: 4px; font-weight: bold;">Harico Diwaam</div>
                 <div style="font-size: 0.6rem; color: #CBD5E1;">PR1260002502389</div>
             </div>
             <div style="text-align: center;">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100018471" alt="Harico Pride QR" title="Harico Pride QR" style="width: 55px; height: 55px; border: 2px solid var(--color-gold); border-radius: 6px; background: white; padding: 3px;">
                 <div style="font-size: 0.65rem; color: var(--color-gold); margin-top: 4px; font-weight: bold;">Harico Pride</div>
                 <div style="font-size: 0.6rem; color: #CBD5E1;">P52100018471</div>
             </div>
         </div>
         <p style="font-size: 0.75rem; color: rgba(255,255,255,0.7); max-width: 950px; margin: 0 auto; line-height: 1.6;">
            <strong>MahaRERA Registered Projects:</strong> Harico Edge (P52100031773) | Harico Diwaam (PR1260002502389) | Harico Pride (P52100018471). 
            Comprehensive project details, approved building layouts, and legal title certificates are available on the official MahaRERA portal (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style="color:var(--color-gold); text-decoration: underline;">maharera.mahaonline.gov.in</a>). 
            Harico Estates is a flagship real estate venture by Sentosa Developers.
         </p>
      </div>

      <!-- Popular Searches (Ultra-Advanced SEO & SGE Entity Mesh) -->
      <div class="popular-searches">
        <h5 class="seo-heading">Strategic Real Estate Entity Network • Punawale — Kiwale — Tathawade</h5>
        
        <p class="seo-text mt-xs">
            <strong>🔥 Punawale Real Estate Market:</strong> <a href="/location/punawale" class="seo-link">Punawale Real Estate</a> | <a href="/flats/2-bhk-flats-in-punawale" class="seo-link">2 BHK Flats in Punawale</a> | <a href="/flats/3-bhk-flats-in-punawale" class="seo-link">3 BHK Flats in Punawale</a> | Harico Edge Punawale | Harico Pride Punawale | Sentosa Edge | Sentosa Ekam | Sentosa Pride Phase 1, 2 & 3 | Flats near Bhumkar Chowk | Flats near Hinjewadi IT Park | Flats near Mumbai-Pune Expressway | Flats for sale Punawale | New Launch Punawale | Luxury Flats Punawale | 2 BHK under 75 lakh Punawale | 3 BHK under 1 crore Punawale.
        </p>

        <p class="seo-text mt-xs">
            <strong>🔥 Kiwale Real Estate Market:</strong> <a href="/location/kiwale" class="seo-link">Kiwale Real Estate</a> | <a href="/flats/2-bhk-flats-in-kiwale" class="seo-link">2 BHK Flats Kiwale</a> | <a href="/flats/3-bhk-flats-in-kiwale" class="seo-link">3 BHK Flats Kiwale</a> | <a href="/project/harico-divaam" class="seo-link">Harico Diwaam Kiwale</a> | Sentosa Harico Diwaam | Tallest 24-Storey Towers Kiwale | Flats opposite Sentosa Water Park | Flats near Mukai Chowk | Flats near Ravet | Flats near Dehu Road | Kiwale Property Investment | New Launch Flats Kiwale | 2 BHK under 75 lakh Kiwale | 3 BHK Luxury High-Rise Kiwale.
        </p>

        <p class="seo-text mt-xs">
            <strong>🔥 Tathawade Real Estate Market:</strong> <a href="/location/tathawade" class="seo-link">Tathawade Real Estate</a> | 2 BHK Flats Tathawade | 3 BHK Flats Tathawade | Sentosa Serene Tathawade | Sentosa Developers Tathawade | Flats near JSPM Tathawade | Flats near Indira College | Tathawade Hinjewadi IT Corridor | Flats for sale Tathawade | Property Investment Tathawade.
        </p>

        <p class="seo-text mt-xs">
            <strong>🔥 Sentosa Developers Legacy & Commercial Hubs:</strong> <a href="/developer/sentosa-developers-pune" class="seo-link">Sentosa Developers 39-Year Legacy</a> | Sentosa Elite Wakad (Commercial Spaces) | Sentosa Palm Wakad | Sentosa Elysium Wakad | Sentosa Pearl Wakad | Sentosa Era Moshi Pradhikaran | Sentosa Residency Hadapsar | Gulraj Residency Kondhwa | Satyam Complex | Shivdham Complex | Samarpam Complex | Royal Palms.
        </p>

        <p class="seo-text mt-xs">
            <span lang="mr">पुनावळे मधील नवीन २ आणि ३ बीएचके फ्लॅट्स | किवाळे सेंटोसा प्रोजेक्ट्स | तथावडे फ्लॅट विक्रीसाठी | हिंजवडी जवळ घरे | पिंपरी चिंचवड रिअल इस्टेट | हरिको इस्टेट्स पुणे</span>
        </p>
      </div>
    </div>
  `;const a=document.createElement("style");return a.textContent=`
    .footer-section {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: var(--spacing-3xl) 0 var(--spacing-lg);
      position: relative;
    }
    
    .footer-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.2fr 1.5fr;
      gap: 30px;
      margin-bottom: var(--spacing-2xl);
    }

    .footer-logo-wrapper {
        margin-bottom: var(--spacing-md);
        display: inline-block;
        width: fit-content;
    }

    .footer-logo-img {
       height: 50px;
       width: auto;
       display: block;
       filter: brightness(0) invert(1);
       opacity: 0.95;
    }
    
    .footer-desc {
      color: var(--color-text-light);
      line-height: 1.6;
      font-size: var(--font-size-sm);
      max-width: 320px;
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }
    
    .social-links a {
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.08);
        transition: all 0.25s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        font-size: 0.9rem;
    }
    
    .social-links a:hover {
        color: var(--color-navy);
        background: var(--color-gold);
        border-color: var(--color-gold);
        transform: translateY(-2px);
    }

    /* Headings */
    .footer-heading {
      color: var(--color-gold);
      font-size: 0.85rem;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 18px;
    }

    /* Links */
    .footer-links, .footer-contact {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .footer-links a {
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 0.88rem;
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
        gap: 10px;
        color: var(--color-text-light);
        font-size: var(--font-size-sm);
        line-height: 1.4;
    }

    .footer-contact .icon {
        color: var(--color-gold);
        font-size: 1rem;
        flex-shrink: 0;
    }

    .footer-contact a {
        color: var(--color-text-light);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .footer-contact a:hover {
        color: var(--color-gold);
    }

    /* Bottom */
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--spacing-lg);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: var(--font-size-xs);
      color: var(--color-text-light);
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }

    .legal-links {
      display: flex;
      gap: var(--spacing-lg);
    }

    .legal-links a {
      color: var(--color-text-light);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .legal-links a:hover {
      color: var(--color-white);
    }

    /* Popular Searches (SEO Entity Mesh) */
    .popular-searches {
        margin-top: var(--spacing-xl);
        padding-top: var(--spacing-lg);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .seo-heading {
        color: var(--color-text-light);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
        opacity: 0.8;
    }

    .seo-text {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.6;
        margin: 0;
    }

    .seo-text strong {
        color: rgba(255, 255, 255, 0.8);
    }

    .seo-link {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: color 0.2s ease;
    }

    .seo-link:hover {
        color: var(--color-gold);
    }

    .mt-xs {
        margin-top: 6px;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
      }
      .brand-col {
        grid-column: span 2;
      }
    }

    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }
      .brand-col {
        grid-column: span 1;
      }
      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }
      .legal-links {
        flex-wrap: wrap;
        gap: var(--spacing-md);
      }
    }
  `,e.appendChild(a),e}function ue(){const e=document.createElement("div");e.id="enquire-modal",e.className="modal-overlay hidden",e.innerHTML=`
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
            <button type="button" class="project-chip active" data-project="Harico Diwaam (Kiwale)">
              <span class="chip-title">Harico Diwaam</span>
              <span class="chip-meta">Kiwale-Ravet • Starts ₹70L*</span>
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
  `;const a=e.querySelector(".close-btn-adv"),t=e.querySelector("#advEnquireForm"),i=e.querySelectorAll(".project-chip"),o=e.querySelector("#advSubmitBtn"),r=o.querySelector(".btn-text"),s=o.querySelector(".btn-loader");let l="Harico Diwaam (Kiwale)";i.forEach(p=>{p.addEventListener("click",()=>{i.forEach(w=>w.classList.remove("active")),p.classList.add("active"),l=p.dataset.project||"Harico Estates"})});const n=()=>{e.classList.add("hidden")};a.addEventListener("click",n),e.addEventListener("click",p=>{p.target===e&&n()}),t.addEventListener("submit",p=>{p.preventDefault();const w=e.querySelector("#adv-name"),b=e.querySelector("#adv-phone"),S=e.querySelector("#adv-email"),T=e.querySelector("#adv-config"),v=e.querySelector("#adv-intent");r.classList.add("hidden"),s.classList.remove("hidden"),o.disabled=!0;const f={name:w.value.trim(),phone:b.value.trim(),email:S.value.trim(),project:l,requirement:T.value,interestType:v.value};me(f);const D="917744009295";let H=`*VIP Priority Enquiry — Harico Estates* 🏡

`;H+=`*Project:* ${f.project}
`,H+=`*Name:* ${f.name}
`,H+=`*Phone:* ${f.phone}
`,f.email&&(H+=`*Email:* ${f.email}
`),H+=`*Configuration:* ${f.requirement}
`,H+=`*Requirement:* ${f.interestType}
`,H+=`
_Please send the official brochure, cost sheet, and schedule our VIP site visit._`;const F=`https://wa.me/${D}?text=${encodeURIComponent(H)}`;setTimeout(()=>{window.open(F,"_blank"),n(),t.reset(),r.classList.remove("hidden"),s.classList.add("hidden"),o.disabled=!1},600)}),window.showEnquireModal=p=>{p&&i.forEach(w=>{const b=w.dataset.project||"";(b.toLowerCase().includes(p.toLowerCase())||p.toLowerCase().includes(b.toLowerCase()))&&(i.forEach(S=>S.classList.remove("active")),w.classList.add("active"),l=b)}),e.classList.remove("hidden")};let d=!1;document.addEventListener("mouseleave",p=>{p.clientY<=0&&!d&&e.classList.contains("hidden")&&!sessionStorage.getItem("exit_modal_shown")&&(d=!0,sessionStorage.setItem("exit_modal_shown","true"),window.showEnquireModal())});const u=document.createElement("style");return u.textContent=`
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
  `,e.appendChild(u),e}function Re(){const e=document.createElement("div");e.id="floorplan-lightbox",e.className="floorplan-lightbox-overlay hidden",e.innerHTML=`
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-dialog">
      <button class="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
      
      <div class="lightbox-header">
        <div class="lightbox-title-group">
          <span class="lightbox-tag">Architectural Layout</span>
          <h3 id="lightbox-plan-title" class="lightbox-title">Floor Plan Preview</h3>
          <p id="lightbox-plan-subtitle" class="lightbox-subtitle">Usable Carpet & Balcony Configuration</p>
        </div>
        <div class="lightbox-actions-top">
          <a id="lightbox-wa-btn" href="#" target="_blank" class="btn btn-whatsapp btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Request High-Res PDF
          </a>
        </div>
      </div>

      <div class="lightbox-image-viewport">
        <img id="lightbox-img" src="" alt="Floor Plan" class="lightbox-img">
      </div>

      <div class="lightbox-footer flex justify-between items-center">
        <span class="lightbox-disclaimer">*Dimensions are approximate and subject to MahaRERA approved architectural sanctions.</span>
        <button class="btn btn-primary btn-sm lightbox-enquire-btn">
          <i class="fa-solid fa-file-pdf mr-1"></i> Enquire for Cost Sheet
        </button>
      </div>
    </div>
  `;const a=document.createElement("style");a.textContent=`
    .floorplan-lightbox-overlay {
      position: fixed;
      inset: 0;
      z-index: 2100;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .floorplan-lightbox-overlay.hidden {
      display: none;
      opacity: 0;
    }

    .lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(10, 25, 47, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }

    .lightbox-dialog {
      position: relative;
      background: #FFFFFF;
      border-radius: 16px;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(212, 175, 55, 0.4);
      z-index: 2;
      overflow: hidden;
      animation: dialogScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes dialogScaleIn {
      from { transform: scale(0.92) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    .lightbox-close-btn {
      position: absolute;
      top: 14px;
      right: 18px;
      font-size: 2rem;
      background: none;
      border: none;
      color: var(--color-navy);
      cursor: pointer;
      line-height: 1;
      z-index: 10;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .lightbox-close-btn:hover {
      color: var(--color-gold);
      transform: scale(1.15);
    }

    .lightbox-header {
      padding: 20px 24px 15px;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F8FAFC;
    }

    .lightbox-tag {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--color-gold);
    }

    .lightbox-title {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 2px 0 0;
      font-family: var(--font-heading);
    }

    .lightbox-subtitle {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .lightbox-image-viewport {
      flex: 1;
      padding: 20px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      max-height: 60vh;
    }

    .lightbox-img {
      max-width: 100%;
      max-height: 55vh;
      object-fit: contain;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .lightbox-footer {
      padding: 15px 24px;
      background: #F8FAFC;
      border-top: 1px solid #E2E8F0;
      gap: 15px;
      flex-wrap: wrap;
    }

    .lightbox-disclaimer {
      font-size: 0.72rem;
      color: var(--color-text-light);
      max-width: 500px;
    }

    @media (max-width: 768px) {
      .lightbox-dialog {
        max-height: 95vh;
      }
      .lightbox-header {
        padding: 15px;
      }
      .lightbox-actions-top {
        display: none;
      }
    }
  `,e.appendChild(a),window.openFloorPlanLightbox=(r,s,l,n)=>{const d=e.querySelector("#lightbox-img"),u=e.querySelector("#lightbox-plan-title"),p=e.querySelector("#lightbox-plan-subtitle"),w=e.querySelector("#lightbox-wa-btn");d&&(d.src=r),u&&(u.textContent=s),p&&(p.textContent=l);const b=`Hi, I am interested in the *${s}* (${l}) at *${n}*. Please share the high-resolution architectural plan PDF and detailed cost sheet.`;w&&(w.href=`https://wa.me/917744009295?text=${encodeURIComponent(b)}`),e.classList.remove("hidden")};const t=e.querySelector(".lightbox-close-btn"),i=e.querySelector(".lightbox-backdrop"),o=e.querySelector(".lightbox-enquire-btn");return t?.addEventListener("click",()=>e.classList.add("hidden")),i?.addEventListener("click",()=>e.classList.add("hidden")),o?.addEventListener("click",()=>{e.classList.add("hidden");const r=e.querySelector("#lightbox-plan-title")?.textContent||"Floor Plan";window.showEnquireModal&&window.showEnquireModal(`Enquiry for ${r}`)}),e}function Me(){const e=document.createElement("button");e.id="back-to-top",e.className="back-to-top-btn hidden",e.setAttribute("aria-label","Back to top"),e.innerHTML=`
    <svg class="progress-ring" width="46" height="46" viewBox="0 0 46 46">
      <circle class="progress-ring-bg" stroke="rgba(212, 175, 55, 0.2)" stroke-width="3" fill="transparent" r="20" cx="23" cy="23"/>
      <circle class="progress-ring-circle" stroke="var(--color-gold)" stroke-width="3" fill="transparent" r="20" cx="23" cy="23"/>
    </svg>
    <i class="fa-solid fa-arrow-up arrow-icon"></i>
  `;const a=e.querySelector(".progress-ring-circle"),i=2*Math.PI*20;a&&(a.style.strokeDasharray=`${i} ${i}`,a.style.strokeDashoffset=`${i}`),window.addEventListener("scroll",()=>{const r=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight;if(r>350?e.classList.remove("hidden"):e.classList.add("hidden"),s>0&&a){const l=r/s,n=i-l*i;a.style.strokeDashoffset=`${n}`}}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const o=document.createElement("style");return o.textContent=`
    .back-to-top-btn {
      position: fixed;
      bottom: 25px;
      right: 25px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgba(10, 25, 47, 0.9);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: none;
      cursor: pointer;
      z-index: 1040;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 1;
      transform: translateY(0);
    }

    .back-to-top-btn.hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateY(15px);
    }

    .back-to-top-btn:hover {
      transform: translateY(-3px) scale(1.08);
      background: var(--color-navy);
      box-shadow: 0 12px 30px rgba(212, 175, 55, 0.4);
    }

    .progress-ring {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(-90deg);
    }

    .progress-ring-circle {
      transition: stroke-dashoffset 0.1s linear;
    }

    .arrow-icon {
      color: var(--color-gold);
      font-size: 0.95rem;
      z-index: 2;
      transition: transform 0.2s ease;
    }

    .back-to-top-btn:hover .arrow-icon {
      transform: translateY(-2px);
      color: #FFFFFF;
    }

    @media (max-width: 768px) {
      .back-to-top-btn {
        bottom: 75px; /* Above the mobile quick bar */
        right: 15px;
        width: 42px;
        height: 42px;
      }
      .progress-ring {
        width: 42px;
        height: 42px;
      }
    }
  `,e.appendChild(o),e}function Ae(){const e=document.createElement("aside");e.className="mobile-quick-action-bar",e.setAttribute("aria-label","Quick Contact"),e.innerHTML=`
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
  `;const a=document.createElement("style");return a.textContent=`
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
  `,e.appendChild(a),e}function Le(e){const a=document.createElement("div");a.className="quick-info-bar",a.innerHTML=`
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
  `;const t=document.createElement("style");return t.textContent=`
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
  `,a.appendChild(t),a}function Te(e){const a=document.createElement("div");a.className="config-section";const t=e.configurations||[];a.innerHTML=`
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
          ${t.length>0?t.map(o=>`
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
  `;const i=document.createElement("style");return i.textContent=`
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
  `,a.appendChild(i),a}function qe(e){const a=document.createElement("div");a.className="project-details-page";const t=document.createElement("div");t.className="pd-hero",t.style.backgroundImage=`url('${e.image}')`,t.innerHTML=`
    <div class="pd-hero-overlay"></div>
    <div class="container pd-hero-content" style="position: relative;">
      ${e.reraNumber?`
      <div class="hero-rera-badge">
        <div class="hero-rera-info">
          <span class="hero-rera-title">MahaRERA Verified</span>
          <span class="hero-rera-id"><i class="fa-solid fa-shield-halved" style="color: #25D366; margin-right:4px;"></i>${e.reraNumber}</span>
        </div>
        ${e.reraQRCodeUrl?`<img src="${e.reraQRCodeUrl}" alt="MahaRERA QR Code" class="hero-rera-qr">`:""}
      </div>
      `:""}
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/projects">Projects</a> &gt; <span class="current">${e.title}</span>
      </nav>
      <h1 class="pd-title">${e.title}</h1>
      <p class="pd-subtitle">${e.tagline||"The Edge Of Timeless Modern Sophistication"}</p>
      
      <div class="pd-hero-pills flex justify-center flex-wrap gap-xs mt-md">
        ${e.landParcel?`<span class="pd-pill"><i class="fa-solid fa-vector-square mr-1"></i> ${e.landParcel}</span>`:""}
        ${e.towers?`<span class="pd-pill"><i class="fa-solid fa-building mr-1"></i> ${e.towers}</span>`:""}
        ${e.floors?`<span class="pd-pill"><i class="fa-solid fa-layer-group mr-1"></i> ${e.floors}</span>`:""}
        ${e.possession?`<span class="pd-pill"><i class="fa-solid fa-calendar-check mr-1"></i> Possession: ${e.possession}</span>`:""}
      </div>

      <div class="mt-lg flex justify-center gap-md flex-wrap">
        <a href="https://wa.me/917744009295?text=Hi,%20I%20want%20to%20download%20the%20official%20brochure%20and%20pricing%20sheet%20for%20${encodeURIComponent(e.title)}." target="_blank" class="btn btn-primary">
          <i class="fa-solid fa-file-arrow-down mr-2"></i> Download Brochure & Cost Sheet
        </a>
        <button class="btn btn-secondary pd-visit-btn" style="border-color:white; color:white;">
          <i class="fa-solid fa-calendar-days mr-2"></i> Book VIP Site Visit
        </button>
      </div>
    </div>
  `;const i=Le(e),o=document.createElement("div");o.className="pd-content-wrapper section";const r=document.createElement("div");r.className="container";const s=document.createElement("div");s.className="about-section mb-xl",s.id="about";const l=(e.highlights||[]).map(m=>`
    <li class="flex items-start gap-sm mb-xs">
      <i class="fa-solid fa-check-circle text-gold mt-1"></i>
      <span class="text-sm font-semibold text-navy">${m}</span>
    </li>
  `).join("");s.innerHTML=`
    <div class="grid grid-cols-2 gap-xl items-start">
      <div>
        <h2 class="section-heading">About Project</h2>
        <p class="text-body mb-md">${e.description}</p>
        
        ${e.reraNumber?`
          <div class="mt-md p-md rounded-md bg-light border flex items-center gap-md" style="border-left: 4px solid var(--color-gold);">
            ${e.reraQRCodeUrl?`<img src="${e.reraQRCodeUrl}" alt="MahaRERA QR Code" style="width: 55px; height: 55px; border-radius: 4px; border: 1px solid #CBD5E1; background: white; padding: 2px;">`:""}
            <div>
              <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin: 0 0 2px;">MahaRERA Registered</p>
              <p style="font-weight: 700; color: var(--color-navy); margin: 0; font-size: 0.95rem;">
                <i class="fa-solid fa-shield-halved text-success mr-1"></i> ${e.reraNumber}
              </p>
            </div>
          </div>
        `:""}
      </div>

      <!-- Highlights Box -->
      ${e.highlights&&e.highlights.length>0?`
        <div class="project-highlights-box p-lg rounded-lg bg-light-subtle border">
          <h3 class="text-lg font-bold text-navy mb-md flex items-center gap-xs">
            <i class="fa-solid fa-star text-gold"></i> Project Key Highlights
          </h3>
          <ul class="highlights-list p-0 list-none">
            ${l}
          </ul>
        </div>
      `:""}
    </div>
  `;const n=Te(e);n.id="pricing";const d=document.createElement("div");d.className="bank-partners-section mt-xl p-lg rounded-lg bg-white border text-center";const u=e.bankPartners||["State Bank of India","HDFC Bank","ICICI Bank","Axis Bank","Bank of Baroda"];d.innerHTML=`
    <span class="text-xs uppercase font-bold text-gold tracking-widest block mb-xs">Home Loan Sanction Partners</span>
    <h3 class="text-xl font-bold text-navy mb-md">Pre-Approved for Zero-Hassle Financing</h3>
    <div class="flex justify-center flex-wrap gap-sm items-center">
      ${u.map(m=>`<span class="bank-badge font-semibold text-sm px-md py-xs rounded-full border bg-light-subtle text-navy"><i class="fa-solid fa-landmark mr-1 text-gold"></i> ${m}</span>`).join("")}
    </div>
    <p class="text-xs text-muted mt-sm">*Enjoy pre-approved lowest interest rates and flexible disbursement schedules.</p>
  `;const p=document.createElement("div");p.className="section bg-light",p.id="amenities";const w={"Swimming Pool":"fa-person-swimming","Swimming Pool with Infinity Edge":"fa-person-swimming","Resort-inspired Swimming Pool":"fa-water","Resort-inspired Grand Swimming Pool":"fa-water","Children's Splash Pool":"fa-child","Children's Splash Fun Pool":"fa-child","Kids Splash Pool":"fa-child","Kids Play Area":"fa-child-reaching","Children's Play Zone":"fa-child-reaching","Children's Adventure Play Zone with Rubberized Flooring":"fa-child-reaching","Children Play Area":"fa-child-reaching","Poolside Leisure Deck":"fa-umbrella-beach","Poolside Sunken Cabana Deck":"fa-umbrella-beach","Cabana-style Pergolas":"fa-tent","Cabana-style Private Pergolas":"fa-tent","Cabana & Gazebo Sitouts":"fa-tent","BBQ & Poolside Party Deck":"fa-fire-burner","BBQ & Poolside Celebration Deck":"fa-fire-burner","Barbeque Counter & Pergola":"fa-fire-burner","Sacred Temple Pavilion":"fa-om","Sacred Temple Pavilion & Bell Tower":"fa-om","Temple & Flag Hoisting Plaza":"fa-om","Temple & Flag Hoisting":"fa-om","Meditation & Yoga Lawns":"fa-seedling","Meditation, Pranayama & Yoga Lawns":"fa-seedling","Zen Tranquillity Garden":"fa-leaf","Zen Tranquillity Rock Garden":"fa-leaf","Reflexology Walkway":"fa-shoe-prints","Acupressure Reflexology Walkway":"fa-shoe-prints","Sensory & Aromatherapy Garden":"fa-wind","Sensory & Aromatherapy Floral Garden":"fa-wind","Sky-level Gym":"fa-dumbbell","Sky-Level Panoramic Gymnasium":"fa-dumbbell","Equipped Gymnasium & Crossfit Zone":"fa-dumbbell",Gymnasium:"fa-dumbbell","Gym & Jogging Track":"fa-dumbbell","Indoor Yoga Studio":"fa-person-yoga","Indoor Aerobics & Yoga Studio":"fa-person-yoga","Yoga & Zumba Studio":"fa-person-yoga","Yoga & Zumba Room":"fa-person-yoga","Yoga Deck":"fa-person-yoga","Creative Sand Play":"fa-bucket","Creative Sandcastle Pit":"fa-bucket","Multi-purpose Sports Court":"fa-basketball","Multi-Purpose Badminton & Basketball Sports Court":"fa-basketball","Professional Mini Cricket Turf":"fa-baseball-bat-ball","Professional Box Cricket Turf with Floodlights":"fa-baseball-bat-ball","Jogging & Walking Track":"fa-person-running","Jogging & Nordic Walking Track":"fa-person-running","Jogging & Acupressure Track":"fa-person-running","Dedicated Pet Park":"fa-dog","Dedicated Pet Exercise Park & Agility Zone":"fa-dog","Open-air Amphitheatre":"fa-masks-theater","Open-Air Roman Amphitheatre":"fa-masks-theater","Party Hall with DJ System":"fa-music","Acoustic Party Banquet Hall with Sound System":"fa-music","Party Lawn with Banquet Deck":"fa-music","Party Lawn":"fa-music","Party Lawn with BBQ Pavilion":"fa-music","Private Mini Theatre":"fa-film","Private Mini Theatre (30-Seater)":"fa-film","Private 40-Seater Dolby Atmos Mini Theatre":"fa-film","Mini Theater":"fa-film","Indoor Games Lounge":"fa-chess-board","Indoor Games Arcade (Table Tennis, Foosball, Carrom)":"fa-chess-board","Snooker & Indoor Games Arena":"fa-chess-board","Snooker Lounge":"fa-chess-board","Music/Dance/Hobby Studio":"fa-guitar","Music, Dance & Creative Hobby Studio":"fa-guitar","12 Premium Guest Suites":"fa-bed","12 Luxury Furnished Guest Suites for Visitors":"fa-bed","Luxury Salon & Beauty Parlour":"fa-scissors","Salon & Wellness Spa Corner":"fa-scissors","Exclusive Residents' Sky Lounge":"fa-martini-glass-citrus","Exclusive Residents' Rooftop Sky Lounge":"fa-martini-glass-citrus","Co-working Spaces":"fa-briefcase","Air-Conditioned Co-Working Hub with High-Speed WiFi":"fa-briefcase","Library & Co-working Lounge":"fa-briefcase",Library:"fa-book-open","Podcast & Content Creator Studio":"fa-microphone","Podcast & Digital Content Creator Studio":"fa-microphone","Sky Observation Deck":"fa-binoculars","24th Floor Sky Observation Deck":"fa-binoculars","Rooftop Stargazing Observatory":"fa-binoculars","Rooftop Amenities":"fa-city","EV Charging Points":"fa-charging-station","EV Charging Stations":"fa-charging-station","EV Charging Point":"fa-charging-station","Fast EV Charging Stations for Cars & Two-Wheelers":"fa-charging-station","Grand Clubhouse (10,000 sq.ft)":"fa-house-user",Clubhouse:"fa-house-user","Grand Clubhouse & Gymnasium":"fa-house-user","Landscaped Garden":"fa-tree","Landscape Meditation Gardens":"fa-tree","Senior Citizen Sitout":"fa-couch","Senior Citizen Sitout & Gazebo":"fa-couch","Sunset Point":"fa-cloud-sun","Grand Designer Entrance Gate":"fa-dungeon","Decorated Entrance Gate":"fa-dungeon","Intercom System & CCTV":"fa-video","Intercom & Video Door Phone":"fa-video","Solar Power Backup":"fa-solar-panel","100% DG Power Backup for Common Areas":"fa-bolt","Multipurpose Hall":"fa-people-roof","Multipurpose Community Hall":"fa-people-roof","Day Care & Creche Center":"fa-baby-carriage","Day Care Room":"fa-baby-carriage"},b=m=>`
    <div class="amenity-box">
        <div class="icon-circle">
            <i class="fa-solid ${w[m]||"fa-star"}"></i>
        </div>
        <span class="amenity-name">${m}</span>
    </div>
  `;let S="";e.amenities&&e.amenities.length>0&&typeof e.amenities[0]!="string"?S=e.amenities.map(m=>`
        <div class="amenities-category mb-lg">
            <h3 class="category-title text-center mb-md" style="font-family: var(--font-heading); color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px;">${m.category}</h3>
            <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                ${m.items.map(ge=>b(ge)).join("")}
            </div>
        </div>
      `).join(""):S=`
        <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px;">
            ${(e.amenities||[]).map(m=>b(m)).join("")}
        </div>
      `,p.innerHTML=`
    <div class="container">
        <div class="section-header text-center mb-xl">
            <span class="eyebrow">Luxury Lifestyle</span>
            <h2 class="section-title">World Class Curated Amenities</h2>
            <div class="title-separator mx-auto"></div>
        </div>
        ${S}
    </div>
  `;let v="";e.masterLayout&&(v+=`
        <div class="mb-xl">
            <h3 class="section-heading text-center mb-lg">Master Site Layout</h3>
            <div class="layout-image-container fade-in-up" onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${e.masterLayout}', 'Master Site Layout', '${e.title}', '${e.title}');" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); background: white; max-width: 900px; margin: 0 auto; border: 1px solid #E2E8F0; cursor: zoom-in; position: relative;" title="Click to view full-screen">
                <img src="${e.masterLayout}" alt="Master Layout" style="width: 100%; height: auto; display: block;">
                <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(10,25,47,0.85); color: white; padding: 6px 14px; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                  <i class="fa-solid fa-expand text-gold"></i> Click to Zoom Fullscreen
                </div>
            </div>
        </div>
    `),e.floorPlans&&e.floorPlans.length>0&&(v+=`
        <div class="mb-xl">
             <h3 class="section-heading text-center mb-lg">Architectural Floor Plans</h3>
             <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
                ${e.floorPlans.map(m=>`
                    <div class="plan-item fade-in-up" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0; display: flex; flex-direction: column;">
                        <div class="plan-img-wrapper" onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${m.image}', '${m.title.replace(/'/g,"\\'")}', '${m.carpet||""}', '${e.title.replace(/'/g,"\\'")}');" style="padding: 20px; background: #fff; flex-grow: 1; display: flex; align-items: center; justify-content: center; cursor: zoom-in; position: relative;" title="Click to Zoom Plan">
                            <img src="${m.image}" alt="${m.title}" style="width: 100%; max-height: 280px; object-fit: contain; display: block;">
                            <span style="position: absolute; top: 12px; right: 12px; background: rgba(10,25,47,0.75); color: var(--color-gold); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                        <div class="plan-info p-md text-center" style="border-top: 1px solid #F1F5F9; background: #FAFBFC;">
                            <h4 style="margin: 0 0 5px; color: var(--color-navy); font-family: var(--font-heading); font-size: 1.1rem;">${m.title}</h4>
                            ${m.carpet?`<span style="font-size: 0.85rem; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 10px;">Carpet Area: ${m.carpet}</span>`:""}
                            <div class="flex gap-xs">
                              <button onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${m.image}', '${m.title.replace(/'/g,"\\'")}', '${m.carpet||""}', '${e.title.replace(/'/g,"\\'")}');" class="btn btn-sm btn-secondary w-full" style="padding: 8px;">
                                <i class="fa-solid fa-expand mr-1"></i> Zoom
                              </button>
                              <a href="https://wa.me/917744009295?text=Hi,%20please%20send%20me%20the%20detailed%20high-res%20floorplan%20and%20dimensions%20for%20${encodeURIComponent(m.title)}%20at%20${encodeURIComponent(e.title)}." target="_blank" class="btn btn-sm btn-primary w-full" style="padding: 8px;">
                                <i class="fa-brands fa-whatsapp mr-1"></i> Cost Sheet
                              </a>
                            </div>
                        </div>
                    </div>
                `).join("")}
             </div>
        </div>
    `);const f=document.createElement("div");f.className="section container",f.id="floor-plans",f.innerHTML=v;const D=ee(e.specifications),H=ae(),F=document.createElement("div");F.className="section pd-location",F.id="location";const G=(e.connectivity||[]).map(m=>`
    <div class="connect-item" style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #F1F5F9;">
        <div>
          <span style="font-weight:600; color:var(--color-navy); display:block;">${m.title}</span>
          ${m.distance?`<span style="font-size:0.75rem; color:var(--color-text-secondary);"><i class="fa-solid fa-route text-gold mr-1"></i> ${m.distance}</span>`:""}
        </div>
        <span class="badge-time" style="background:var(--color-navy); color:var(--color-gold); font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:20px;">${m.time}</span>
    </div>
  `).join("");F.innerHTML=`
    <div class="container grid grid-cols-2 gap-lg items-center">
      <div class="location-info">
        <span class="eyebrow">Strategic Urban Advantage</span>
        <h3 class="section-heading mb-md">Seamless Connectivity</h3>
        <div class="connectivity-list" style="background:white; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.06); border:1px solid #E2E8F0; overflow:hidden;">
            ${G}
        </div>
      </div>
      <div class="location-map">
        <div style="border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1); border:1px solid #E2E8F0;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043232!2d73.79292636283737!3d18.52460355403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bc2e9d924155%3A0x6b77c57f7243c3d5!2sPunawale%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707010000000!5m2!1sen!2sin" width="100%" height="420" style="border:0; display:block;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  `;const N=ue(),O=document.createElement("div");O.className="section container",O.innerHTML=`
    <div class="p-xl rounded-lg bg-white border" style="box-shadow: 0 10px 30px rgba(0,0,0,0.04); border-left: 5px solid var(--color-gold);">
      <div class="flex justify-between items-center flex-wrap gap-md">
        <div>
          <span class="text-xs uppercase font-bold text-gold tracking-widest block mb-xs"><i class="fa-solid fa-shield-halved mr-1"></i> Government Approved & Sanctioned</span>
          <h3 class="text-2xl font-bold text-navy m-0">MahaRERA Registration & Legal Title Clearance</h3>
          <p class="text-sm text-muted mt-xs m-0">Project Registration Number: <strong class="text-navy font-bold">${e.reraNumber||e.reraId||"Approved"}</strong></p>
        </div>
        <div class="flex items-center gap-md">
          ${e.reraQRCodeUrl?`
            <img src="${e.reraQRCodeUrl}" alt="MahaRERA QR" style="width: 70px; height: 70px; border: 2px solid var(--color-gold); border-radius: 8px; padding: 3px; background: white;">
          `:""}
          <a href="https://maharera.mahaonline.gov.in" target="_blank" class="btn btn-secondary btn-sm">
            <i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Verify on MahaRERA Portal
          </a>
        </div>
      </div>
      <p class="text-xs text-muted mt-md pt-sm border-top m-0">
        *All sanctions, building commencement certificates (CC), architectural blueprints, and environmental clearances are 100% verified and accessible on the official Maharashtra Real Estate Regulatory Authority portal.
      </p>
    </div>
  `;const q=document.createElement("div");q.className="section bg-light",q.innerHTML=`
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow">Capital Appreciation & Rental Yield</span>
        <h2 class="section-title">Institutional Real Estate Investment Thesis</h2>
        <div class="title-separator mx-auto"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Positioned directly in West Pune's highest capital appreciation corridor with sustained rental demand from 350,000+ tech professionals.
        </p>
      </div>

      <div class="grid grid-3 gap-md">
        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">4.5% — 5.2%</span>
          <h4 class="text-navy font-bold text-base mb-xs">Projected Annual Rental Yield</h4>
          <p class="text-xs text-muted m-0">Driven by rapid hiring across Hinjewadi IT Park Phase 1-3, Talegaon auto corridor, and PCMC industrial hub.</p>
        </div>

        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">12% — 15%</span>
          <h4 class="text-navy font-bold text-base mb-xs">3-Year Capital Appreciation</h4>
          <p class="text-xs text-muted m-0">Fuelled by upcoming Pune Metro Line 3 extension, Ring Road expansion, and Mukai Chowk arterial grade-separators.</p>
        </div>

        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">100%</span>
          <h4 class="text-navy font-bold text-base mb-xs">Mivan Monolithic Concrete</h4>
          <p class="text-xs text-muted m-0">High-grade structural earthquake-resistant shear walls ensuring superior thermal comfort, acoustic insulation, and durability.</p>
        </div>
      </div>
    </div>
  `,a.appendChild(t),a.appendChild(i);const k=document.createElement("div");k.className="pd-sections-wrapper",r.appendChild(s),k.appendChild(r),k.appendChild(f);const j=document.createElement("div");j.className="section container",j.appendChild(n),j.appendChild(d),k.appendChild(j),k.appendChild(D),k.appendChild(p),k.appendChild(H),k.appendChild(F),k.appendChild(O),k.appendChild(q),a.appendChild(k),a.appendChild(N);const U=document.createElement("style");return U.textContent=`
    .pd-hero {
      height: 65vh;
      min-height: 520px;
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -90px;
      padding-top: 90px;
    }

    .pd-hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(10, 25, 47, 0.75) 0%, rgba(10, 25, 47, 0.9) 100%);
    }

    .pd-hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: var(--color-white);
      max-width: 900px;
    }

    .pd-pill {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.4);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #FFFFFF;
    }

    .breadcrumbs {
      font-size: 0.85rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.7);
    }
    .breadcrumbs a {
      color: var(--color-white);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    .breadcrumbs a:hover {
      color: var(--color-gold);
    }
    .breadcrumbs .current {
      color: var(--color-gold);
      font-weight: 600;
    }

    .pd-title {
      font-size: clamp(2.5rem, 5vw, 3.8rem);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      font-family: var(--font-heading);
    }

    .pd-subtitle {
      font-size: 1.15rem;
      font-weight: 300;
      color: #E2E8F0;
    }

    .text-body {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--color-text-secondary);
    }

    .project-highlights-box {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }

    .highlights-list li {
      padding: 8px 0;
      border-bottom: 1px solid #F1F5F9;
    }
    .highlights-list li:last-child {
      border-bottom: none;
    }

    .hero-rera-badge {
      position: absolute;
      top: -20px;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      border: 1px solid rgba(212, 175, 55, 0.5);
      border-left: 4px solid var(--color-gold);
      z-index: 10;
    }

    .hero-rera-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }

    .hero-rera-title {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-text-secondary);
      font-weight: 700;
    }

    .hero-rera-id {
      font-size: 0.95rem;
      color: var(--color-navy);
      font-weight: 800;
      margin-top: 2px;
      letter-spacing: 0.5px;
    }

    .hero-rera-qr {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 4px;
      border: 1px solid var(--color-border-light);
      padding: 2px;
      background: white;
    }

    @media (max-width: 900px) {
      .hero-rera-badge {
         position: static;
         margin: 0 auto 20px auto;
         width: fit-content;
      }
      .pd-hero {
        height: auto;
        padding: 120px 0 60px;
      }
    }
  `,a.appendChild(U),setTimeout(()=>{a.querySelector(".pd-visit-btn")?.addEventListener("click",()=>{window.showEnquireModal&&window.showEnquireModal(`VIP Site Visit for ${e.title}`)})},0),a}function je(){const e=document.createElement("div");e.className="legal-page-container container section fade-in-up",document.title="Privacy Policy | Harico Estates & Sentosa Developers";const a='<div class="legal-content"><h1 class="page-title" style="color: var(--color-navy); margin-bottom: 30px;">Privacy Policy</h1><p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Last Updated: '+new Date().toLocaleDateString()+'</p><h3>1. Information We Collect</h3><p>Sentosa Developers ("we," "our," or "us") operates the Harico Estates website. We collect personal information out of business necessity. This includes your name, email address, phone number, and any other details you provide when filling out contact forms or interacting with our digital assets.</p><h3>2. How We Use Your Information</h3><p>The information collected is used exclusively to provide you with property updates, sales offers, and customer service. We may send you promotional emails or SMS messages regarding new launches like Harico Edge, Harico Diwaam, and Harico Pride.</p><h3>3. Data Protection and MahaRERA Compliance</h3><p>We implement stringent security measures to maintain the safety of your personal data. We comply with all local privacy regulations and MahaRERA guidelines for consumer transparency.</p><h3>4. Cookies</h3><p>Our website utilizes cookies to enhance user experience, track site usage analytics, and optimize our advertising campaigns across Google and social media platforms.</p><h3>5. Contact Us</h3><p>If you have any questions regarding this Privacy Policy or our data processing practices, please contact us at: <br><strong>Harico Estates by Sentosa Group</strong><br>Punawale, Pune, MH, 411033<br>Phone: +91-7744009295</p></div>';return e.innerHTML=a,e}function Ie(){const e=document.createElement("div");e.className="legal-page-container container section fade-in-up",document.title="Terms of Use | Harico Estates & Sentosa Developers";const a='<div class="legal-content"><h1 class="page-title" style="color: var(--color-navy); margin-bottom: 30px;">Terms of Use & Disclaimer</h1><p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Last Updated: '+new Date().toLocaleDateString()+"</p><h3>1. Acceptance of Terms</h3><p>By accessing and using the Harico Estates website (haricoestates.in), you accept and agree to be bound by the terms and provisions of this agreement.</p><h3>2. Disclaimer of Information</h3><p>The contents of this website are for informational purposes only. The imagery, layouts, master plans, animations, and descriptions are artistic impressions and signify design intent. They do not constitute a legal offer, contract, or binding agreement.</p><h3>3. MahaRERA Registration</h3><p>All projects listed on this platform are registered with MahaRERA. The official details are physically verified and actively updated on the MahaRERA website. The numbers assigned are:<br>Harico Edge: <strong>P52100031773</strong><br>Harico Diwaam: <strong>PR1260002502389</strong><br>Harico Pride: <strong>P52100018471</strong></p><h3>4. Pricing</h3><p>Prices indicated are illustrative and subject to change without prior notice. Statutory charges, registration, GST, and maintenance deposits are typically excluded from the base prices unless strictly specified.</p><h3>5. Copyright & Trademarks</h3><p>All materials contained on this site, including text, graphics, logos, and images are the property of Sentosa Developers and are protected by Indian and International intellectual property laws.</p></div>";e.innerHTML=a;const t=document.createElement("style");return t.textContent=".legal-content h3 { color: var(--color-gold); margin-top: 30px; margin-bottom: 15px; font-size: 1.4rem; font-family: var(--font-heading); } .legal-content p { color: var(--color-text-secondary); line-height: 1.8; margin-bottom: 20px; font-size: 1.05rem; }",e.appendChild(t),e}function he(){const e=document.createElement("section");e.className="section not-found-section flex items-center justify-center text-center",e.innerHTML=`
    <div class="container py-3xl">
      <span class="text-gold uppercase font-bold tracking-widest text-sm block mb-sm">Error 404</span>
      <h1 class="text-5xl font-extrabold text-navy mb-md">Page Not Found</h1>
      <div class="title-separator mx-auto mb-md"></div>
      <p class="text-muted max-w-600 mx-auto mb-xl">
        The luxury residence or page you are looking for might have been moved or is currently unavailable. Explore our master collection or speak directly with our concierge.
      </p>

      <div class="flex justify-center gap-md flex-wrap">
        <a href="/" class="btn btn-primary">
          <i class="fa-solid fa-house mr-2"></i> Return to Home
        </a>
        <a href="/projects" class="btn btn-secondary">
          <i class="fa-solid fa-building mr-2"></i> View All Projects
        </a>
        <a href="https://wa.me/917744009295" target="_blank" class="btn btn-whatsapp">
          <i class="fa-brands fa-whatsapp mr-2"></i> Chat with Concierge
        </a>
      </div>
    </div>
  `;const a=document.createElement("style");return a.textContent=`
    .not-found-section {
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F8FAFC;
    }
  `,e.appendChild(a),e}function $e(e){const a=document.createElement("section");a.className="section programmatic-hub-section lux-reveal";const t=Object.values(A);let i=t;e.targetLocation&&(i=t.filter(s=>s.location.toLowerCase().includes(e.targetLocation.toLowerCase()))),i.length===0&&(i=t),a.innerHTML=`
    <div class="container py-xl">
      
      <!-- Programmatic Hero Strip -->
      <div class="prog-hero-banner text-center mb-2xl">
        <span class="eyebrow">${e.eyebrow}</span>
        <h1 class="prog-main-title">${e.title}</h1>
        <div class="title-separator mx-auto"></div>
        <p class="prog-subtitle max-w-750 mx-auto">${e.subtitle}</p>
        
        <!-- Trust Badges -->
        <div class="prog-badges-bar flex justify-center gap-sm mt-md flex-wrap">
          <span class="prog-badge"><i class="fa-solid fa-shield-halved text-gold mr-1"></i> 100% MahaRERA Sanctioned</span>
          <span class="prog-badge"><i class="fa-solid fa-building-shield text-gold mr-1"></i> 39-Year Sentosa Legacy</span>
          <span class="prog-badge"><i class="fa-solid fa-road text-gold mr-1"></i> 2 Mins to Expressway</span>
          <span class="prog-badge"><i class="fa-solid fa-percent text-gold mr-1"></i> Zero Brokerage Developer Direct</span>
        </div>
      </div>

      <!-- Highlights Grid -->
      <div class="prog-highlights-box p-xl rounded-lg bg-white border mb-2xl">
        <h3 class="text-xl font-bold text-navy mb-md"><i class="fa-solid fa-circle-check text-gold mr-2"></i> Key Market Highlights & Amenities</h3>
        <div class="prog-highlights-grid">
          ${e.highlights.map(s=>`
            <div class="prog-high-item flex items-center gap-sm">
              <i class="fa-solid fa-check text-success"></i>
              <span class="text-sm font-semibold text-navy">${s}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Matching Featured Developments -->
      <div class="prog-projects-wrapper mb-2xl">
        <div class="flex justify-between items-center mb-lg flex-wrap gap-sm">
          <div>
            <h2 class="text-2xl font-bold text-navy m-0">Featured Sanctioned Landmarks</h2>
            <p class="text-xs text-muted m-0">Explore verified floor plans, pricing sheets, and site tours</p>
          </div>
          <a href="https://wa.me/917744009295?text=${encodeURIComponent(`Hi, I am looking for details regarding ${e.title}. Please share available units and cost sheets.`)}" target="_blank" class="btn btn-whatsapp btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Instant WhatsApp Consultation
          </a>
        </div>

        <div class="grid grid-3 gap-lg prog-cards-grid">
          <!-- Cards injected via JS -->
        </div>
      </div>

      <!-- In-depth Authority Narrative -->
      <div class="prog-content-block p-xl rounded-lg bg-white border">
        <h3 class="text-xl font-bold text-navy mb-sm">Why Invest in ${e.title}?</h3>
        <p class="text-sm text-muted leading-relaxed mb-md">${e.description}</p>
        
        <div class="prog-quick-specs grid grid-2 gap-md bg-light p-md rounded">
          <div>
            <span class="text-xs text-muted block uppercase font-bold">Corridor Growth</span>
            <strong class="text-sm text-navy">PCMC High-Growth Infrastructure & Metro Corridor</strong>
          </div>
          <div>
            <span class="text-xs text-muted block uppercase font-bold">Construction Technology</span>
            <strong class="text-sm text-navy">Mivan Monolithic Shear-Wall Precision Engineering</strong>
          </div>
        </div>
      </div>

    </div>
  `;const o=a.querySelector(".prog-cards-grid");o&&i.forEach(s=>{o.appendChild(se(s))});const r=document.createElement("style");return r.textContent=`
    .programmatic-hub-section {
      background-color: #F8FAFC;
      padding-top: 100px;
    }

    .prog-hero-banner {
      padding: 30px 15px;
    }

    .prog-main-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--color-navy);
      margin: 10px 0;
      font-family: var(--font-heading);
      letter-spacing: -0.02em;
    }

    .prog-subtitle {
      font-size: 1.05rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    .prog-badges-bar {
      margin-top: 20px;
    }

    .prog-badge {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.4);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--color-navy);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .prog-highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
    }

    .prog-high-item {
      background: #F8FAFC;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #E2E8F0;
    }

    .prog-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 25px;
    }

    @media (max-width: 768px) {
      .programmatic-hub-section {
        padding-top: 80px;
      }
      .prog-cards-grid {
        grid-template-columns: 1fr;
      }
    }
  `,a.appendChild(r),a}const te=[{slug:"harico-estates-overview",title:"Harico Estates Pune: Developer Profile, Sentosa Legacy & Master Portfolio Guide",subtitle:"Everything homebuyers and investors need to know about Harico Estates, Sentosa Developers’ 39-year track record, and landmark projects in Punawale and Kiwale.",metaDescription:"Complete guide to Harico Estates Pune by Sentosa Developers. Explore ongoing projects (Harico Diwaam, Harico Edge, Harico Pride), 39-year legacy, and 100% MahaRERA transparency.",keywords:"Harico Estates, Harico Estates Pune, Sentosa Developers Pune, Sentosa Harico, Harico Group, Harico Punawale, Harico Kiwale, Harico Diwaam, Harico Edge, Harico Pride, Real Estate Developer West Pune, हरिको इस्टेट्स पुणे",category:"Developer Profile",readTime:"7 min read",publishDate:"2026-03-01",author:"Harico Estates Research Desk",image:"/assets/harico-edge-hero.png",summary:"Harico Estates represents the modern residential development arm of Sentosa Developers, a trusted real estate and hospitality group with 39+ years of engineering excellence in Pune. This comprehensive profile covers corporate heritage, design philosophy, and flagship residential portfolios.",keyTakeaways:["Backed by Sentosa Developers with a 39-year legacy (founded in 1987) and 20+ delivered landmarks across Pune.","100% MahaRERA registered developments: Harico Diwaam (PR1260002502389), Harico Edge (P52100031773), and Harico Pride (P52100018471).","Pioneering Mivan monolithic concrete engineering for crack-resistant, seismic-safe high-rise homes.","Prime strategic locations: Punawale (near Bhumkar Chowk) and Kiwale (opposite Sentosa Water Park) within 2 minutes of the Mumbai-Pune Expressway."],contentHtml:`
      <h2>1. The Vision Behind Harico Estates</h2>
      <p>In Pune’s fast-evolving real estate landscape, discerning homebuyers seek three non-negotiables: legal transparency, uncompromised structural quality, and strategic growth corridor positioning. <strong>Harico Estates</strong> was created to fulfill this exact mandate as the luxury residential flagbearer of <strong>Sentosa Developers</strong>.</p>
      <p>Headquartered in West Pune, Harico Estates focuses on high-efficiency, architectural residential communities tailored for modern IT professionals, growing families, and long-term real estate investors. Every project is conceived with zero space wastage, dual balconies, panoramic Sahyadri views, and extensive resort-grade amenities.</p>

      <h2>2. Sentosa Developers: 39 Years of Proven Heritage (1987 – 2026)</h2>
      <p>Sentosa Developers, established in 1987, has built an enduring reputation for excellence across residential construction, commercial hubs, and leisure hospitality throughout Maharashtra. Landmark developments delivered under the Sentosa banner include:</p>
      <ul>
        <li><strong>Sentosa Ekam</strong> (Punawale) — Completed premium high-rise residences.</li>
        <li><strong>Sentosa Pride Phases 1, 2 & 3</strong> (Punawale) — Family-centric residential enclave.</li>
        <li><strong>Sentosa Serene</strong> (Tathawade) — High-rental-yield apartments near JSPM & Indira College.</li>
        <li><strong>Sentosa Paradise, Elysium, Pearl & Palm</strong> (Wakad) — Foundational luxury landmarks.</li>
        <li><strong>Sentosa Water Park & Resorts</strong> (Kiwale / Ravet) — West Pune's iconic 15+ acre leisure destination along the Mumbai-Pune Expressway.</li>
      </ul>

      <h2>3. Flagship Residential Portfolio</h2>
      <table style="width:100%; border-collapse:collapse; margin:20px 0;">
        <thead>
          <tr style="background:#0A192F; color:#FFF; text-align:left;">
            <th style="padding:12px;">Project Name</th>
            <th style="padding:12px;">Micro-Market</th>
            <th style="padding:12px;">Typology</th>
            <th style="padding:12px;">Starting Price</th>
            <th style="padding:12px;">MahaRERA ID</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Harico Diwaam</td>
            <td style="padding:12px;">Kiwale (Opp. Sentosa)</td>
            <td style="padding:12px;">2 & 3 BHK Sky Towers</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹70.00 Lacs*</td>
            <td style="padding:12px;">PR1260002502389</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Harico Edge</td>
            <td style="padding:12px;">Punawale (Bhumkar Chowk)</td>
            <td style="padding:12px;">2 & 3 BHK Luxury</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹74.00 Lacs*</td>
            <td style="padding:12px;">P52100031773</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Harico Pride</td>
            <td style="padding:12px;">Punawale (Kale School)</td>
            <td style="padding:12px;">2 & 3 BHK Expansive</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹78.00 Lacs*</td>
            <td style="padding:12px;">P52100018471</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Why Harico Estates Homes Appreciate Faster</h2>
      <p>Independent real estate market audits in PCMC indicate that developments positioned near transit infrastructure appreciate at 14%–17% CAGR compared to 8% in landlocked suburban sectors. Harico Estates projects are located within 2 minutes of the Mumbai-Pune Expressway, 5 minutes of Akurdi Station, and 12–15 minutes of Hinjewadi Phase 1, making them prime rental magnets for IT executives from TCS, Infosys, Wipro, and Cognizant.</p>
    `,faqs:[{q:"Who is the promoter behind Harico Estates?",a:"Harico Estates is developed in venture with Sentosa Developers, a prestigious real estate and hospitality group with a 39-year legacy (since 1987) across Pune and PCMC."},{q:"Where are Harico Estates projects located?",a:"Harico Estates has active developments in Punawale (Harico Edge & Harico Pride near Bhumkar Chowk) and Kiwale (Harico Diwaam directly opposite Sentosa Water Park)."},{q:"What is the customer care and sales helpline for Harico Estates?",a:"You can reach the direct Harico Estates sales desk at +91 7744009295 or email contact@haricoestates.in."}]},{slug:"harico-diwaam-kiwale-buyer-guide",title:"Harico Diwaam Kiwale: Floor Plans, 2 & 3 BHK Pricing, 100+ Amenities & Buyer Guide",subtitle:"A detailed breakdown of Harico Diwaam (Harico Divaam Kiwale), Pune’s iconic 24-storey sky towers opposite Sentosa Water Park. Starting ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*).",metaDescription:"Detailed buyer guide for Harico Diwaam Kiwale (Harico Divaam). Review 2 & 3 BHK floor plans (724–1108 sq.ft), starting price ₹70 Lacs*, 24-storey towers, 100+ amenities, and MahaRERA PR1260002502389.",keywords:"Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure, Flats opposite Sentosa Water Park, 2 BHK in Kiwale, 3 BHK in Kiwale, Tallest Towers Kiwale, हरिको दिवाम किवाळे, हॅरिको दिवाम",category:"Project Deep Dive",readTime:"9 min read",publishDate:"2026-03-05",author:"Harico Estates Architectural Team",image:"/assets/harico-divaam-hero.jpg",summary:"Harico Diwaam (also known as Harico Divaam Kiwale) is the tallest residential high-rise landmark in the Kiwale-Ravet corridor. Rising 24 storeys across 5 acres with 5 sky towers and 100+ resort amenities, it sets a new benchmark for luxury living in West Pune.",keyTakeaways:["Kiwale’s tallest residential sky towers: 5 iconic towers standing 24 storeys tall across 5.0 acres.","Attractive entry pricing: 2 BHK Smart starting at ₹70.00 Lacs* onwards; 3 BHK Smart starting at ₹89.90 Lacs* onwards.","Diverse carpet areas: 2 BHK (724 to 848 sq.ft) and 3 BHK (920 to 1,108 sq.ft) with dual private balconies.","Over 100 resort lifestyle amenities including a 24th-floor Sky Observation Deck, infinity pool, 40-seater mini theatre, and 12 luxury guest suites.","Approved under MahaRERA No. PR1260002502389 with target possession in December 2030."],contentHtml:`
      <h2>1. The Landmark Setting: Opposite Sentosa Water Park</h2>
      <p><strong>Harico Diwaam</strong> (spelled interchangeably as <em>Harico Divaam</em> in legal records) commands a prominent position directly opposite Sentosa Water Park on the Mumbai-Pune Expressway corridor. This strategic gateway location ensures residents are just 2 minutes from Mukai Chowk, 5 minutes from Akurdi Railway Station, and 12 minutes from Hinjewadi IT Park Phase 1.</p>

      <h2>2. Configurations, Usable Carpet Areas & Price Structure</h2>
      <p>Every apartment at Harico Diwaam has been engineered with zero-wastage space planning, large French windows, and dual cross-ventilating balconies overlooking scenic hills:</p>
      <table style="width:100%; border-collapse:collapse; margin:20px 0;">
        <thead>
          <tr style="background:#0A192F; color:#FFF; text-align:left;">
            <th style="padding:12px;">Configuration</th>
            <th style="padding:12px;">Usable Carpet Area</th>
            <th style="padding:12px;">Starting Price</th>
            <th style="padding:12px;">Key Highlights</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">2 BHK Smart</td>
            <td style="padding:12px;">724 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹70.00 Lacs* Onwards</td>
            <td style="padding:12px;">Optimized layout, dual balconies, master suite</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">2 BHK Comfort</td>
            <td style="padding:12px;">760 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹74.00 - 76.00 Lacs*</td>
            <td style="padding:12px;">Spacious dining nook, parallel kitchen platform</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">2 BHK Grand</td>
            <td style="padding:12px;">848 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹80.00 - 82.00 Lacs*</td>
            <td style="padding:12px;">Large living-dining deck, extended bedrooms</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">3 BHK Smart</td>
            <td style="padding:12px;">920 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹89.90 Lacs* Onwards</td>
            <td style="padding:12px;">3 expansive bedrooms, utility dry yard, 3 bathrooms</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">3 BHK Comfort</td>
            <td style="padding:12px;">983 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹93.00 - 95.00 Lacs*</td>
            <td style="padding:12px;">Dedicated work-from-home corner, private foyer</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">3 BHK Grand</td>
            <td style="padding:12px;">1,108 sq.ft</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹1.05 - 1.08 Cr*</td>
            <td style="padding:12px;">Palatial living hall, walk-in wardrobe, wrap-around deck</td>
          </tr>
        </tbody>
      </table>

      <h2>3. 100+ Curated Resort Amenities Across 6 Zones</h2>
      <p>Harico Diwaam is engineered as an integrated luxury ecosystem where residents enjoy hotel-inspired conveniences:</p>
      <ul>
        <li><strong>Sky Observation Deck (24th Floor):</strong> High-powered telescopes, glass-floor lookout, and sunset meditation pavilion.</li>
        <li><strong>Hospitality Suites:</strong> 12 fully furnished air-conditioned guest suites for visiting family members.</li>
        <li><strong>Digital & Creator Suites:</strong> Soundproof podcasting and YouTube streaming studios with high-speed fiber internet.</li>
        <li><strong>Entertainment:</strong> 40-seater Dolby Atmos mini-theatre with reclining luxury cinema seating.</li>
        <li><strong>Sports Complex:</strong> Multi-purpose turf, badminton courts, half-basketball court, and indoor squash.</li>
      </ul>

      <h2>4. MahaRERA Verification & Possession Schedule</h2>
      <p>Harico Diwaam is sanctioned under MahaRERA registration number <strong>PR1260002502389</strong> with scheduled completion by <strong>December 2030</strong>. Pre-approved construction-linked loans are available from SBI, HDFC, and ICICI with EMIs starting at approximately ₹52,000/month.</p>
    `,faqs:[{q:"What is the difference between Harico Diwaam and Harico Divaam?",a:"Both refer to the exact same landmark residential development in Kiwale opposite Sentosa Water Park. Harico Divaam is the MahaRERA registered name (PR1260002502389), while Harico Diwaam is the widely searched brand spelling."},{q:"What is the starting price for Harico Diwaam Kiwale?",a:"2 BHK apartments start from ₹70.00 Lacs* onwards (724 sq.ft) and 3 BHK apartments start from ₹89.90 Lacs* onwards (920 sq.ft)."},{q:"How can I download the official Harico Diwaam brochure and floor plans?",a:"You can download the brochure and cost sheets directly on our portal or contact the sales desk via WhatsApp or phone at +91 7744009295."}]},{slug:"harico-kiwale-real-estate-investment",title:"Why Kiwale Ravet is Pune’s #1 Real Estate Growth Corridor: Harico Kiwale Guide",subtitle:"Infrastructure boom, Mumbai-Pune Expressway connectivity, Akurdi Station access, and why Harico Kiwale properties are delivering 15%+ capital growth.",metaDescription:"Discover why Kiwale Ravet is West Pune’s top real estate investment hub. Explore expressway connectivity, BRTS corridors, price trends, and Harico Kiwale developments.",keywords:"Harico Kiwale, Kiwale Real Estate, Flats in Kiwale Ravet, Kiwale Property Price, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Pune Investment, Harico Estates Kiwale, किवाळे रियल इस्टेट पुणे",category:"Market Intelligence",readTime:"6 min read",publishDate:"2026-03-08",author:"Harico Estates Market Intelligence Desk",image:"/assets/harico-divaam-composite.jpg",summary:"Kiwale has emerged from a quiet PCMC suburb into West Pune’s most strategic transit-oriented residential hub. Backed by Mukai Chowk BRTS, Mumbai-Pune Expressway flyovers, and premier educational institutes, Kiwale offers the ideal blend of affordability and exponential appreciation.",keyTakeaways:["Unmatched highway connectivity: Direct entry to the Mumbai-Pune Expressway and Katraj-Dehu Road bypass.","Rapid multimodal transit: 2 minutes to Mukai Chowk BRTS terminal and 5 minutes to Akurdi Railway Station.","High educational hub density: Proximity to Symbiosis Skills University, D.Y. Patil Akurdi, and JSPM.","Substantial price appreciation: 15%–18% capital growth over the past 36 months, with 2 BHK prices starting from ₹70.00 Lacs*."],contentHtml:`
      <h2>1. The Rise of Kiwale: West Pune’s Strategic Gateway</h2>
      <p>Historically known as the gateway to the Mumbai-Pune Expressway, <strong>Kiwale</strong> has evolved into a premier residential micro-market within PCMC. While neighboring Wakad and Ravet experienced saturated density and elevated capital prices (₹7,500 – ₹9,500 per sq.ft), Kiwale offers expansive 5-acre land parcels, clean mountain air, and rapid transit access at an attractive entry threshold of ₹6,200 – ₹7,200 per sq.ft.</p>

      <h2>2. Infrastructure Catalysts Driving Kiwale’s Growth</h2>
      <ul>
        <li><strong>Mumbai-Pune Expressway:</strong> Commuters to Mumbai, Navi Mumbai, and Panvel save 25–40 minutes compared to living in Hinjewadi or Baner.</li>
        <li><strong>Mukai Chowk Multimodal Hub:</strong> The connecting point for BRTS buses to Pune Station, Aundh, and Bhosari, easing daily public transit.</li>
        <li><strong>Akurdi Railway Station:</strong> Just 4.2 km away, offering 20-minute local train shuttles to Pune Junction and 40 minutes to Lonavala.</li>
        <li><strong>Symbiosis Skills & Professional University:</strong> Located within 5 minutes, creating continuous rental demand from faculty and postgraduate students.</li>
      </ul>

      <h2>3. Rental Yields & Investment Potential</h2>
      <p>IT professionals working in Hinjewadi Phase 1 & 2 prefer Kiwale to bypass the notorious Bhumkar Chowk traffic bottle-necks. A 2 BHK in Kiwale commands rental yields of ₹22,000 to ₹27,000 per month, translating to a healthy 4.2%–4.6% gross rental yield, significantly higher than the 3.1% average across Central Pune.</p>

      <h2>4. Harico Kiwale: Flagship Residential Anchors</h2>
      <p>The centerpiece of Harico Estates in Kiwale is <strong>Harico Diwaam</strong> (PR1260002502389). Positioned directly opposite Sentosa Water Park, this 5-acre master development rises 24 storeys high, offering 2 & 3 BHK residences starting from ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*), complete with a 24th-floor sky deck and 100+ curated lifestyle amenities.</p>
    `,faqs:[{q:"Is Kiwale a good area to buy a home for Hinjewadi IT professionals?",a:"Yes. Kiwale is just 12–15 minutes from Hinjewadi Phase 1 via the Expressway bypass, avoiding internal Wakad traffic while offering larger carpet areas and better air quality."},{q:"What is the average price of 2 BHK flats in Kiwale?",a:"2 BHK apartments in Kiwale range between ₹68 Lacs to ₹82 Lacs depending on carpet area and amenities. Harico Diwaam offers premium 2 BHK homes starting from ₹70.00 Lacs* onwards."},{q:"What is the nearest railway station to Kiwale?",a:"Akurdi Railway Station is the nearest local rail hub, located approximately 5 minutes (4.2 km) from Kiwale."}]},{slug:"harico-punawale-guide-edge-pride",title:"Harico Punawale: Comprehensive Guide to Harico Edge & Harico Pride near Hinjewadi IT Park",subtitle:"Everything you need to know about Harico Punawale homes. Explore Harico Edge (June 2030) and Harico Pride (June 2027) starting from ₹74 Lacs* near Bhumkar Chowk.",metaDescription:"Complete guide to Harico Punawale developments: Harico Edge (MahaRERA P52100031773) and Harico Pride (MahaRERA P52100018471). Explore 2 & 3 BHK homes near Bhumkar Chowk.",keywords:"Harico Punawale, Sentosa Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Flats in Punawale, 2 BHK in Punawale, 3 BHK in Punawale, Flats near Bhumkar Chowk, हरिको पुनावळे, सेंटोसा पुनावळे",category:"Micro-Market Guide",readTime:"8 min read",publishDate:"2026-03-10",author:"Harico Estates Punawale Planning Desk",image:"/assets/harico-edge-hero.png",summary:"Punawale has established itself as West Pune’s most vibrant residential growth belt for tech professionals. Discover how Harico Edge and Harico Pride deliver uncompromised Mivan construction, dual private balconies, and exceptional transit connectivity 2 minutes from the Expressway.",keyTakeaways:["Unmatched proximity: 2 minutes to Mumbai-Pune Expressway & Bhumkar Chowk, 12 minutes to Hinjewadi Phase 1.","Two distinct possession timelines: Harico Pride (June 2027 near-possession) and Harico Edge (June 2030 flagship launch).","Dual balconies as standard: Every 2 & 3 BHK configuration features two private outdoor balconies with scenic views.","100% MahaRERA transparency: Harico Edge (P52100031773) and Harico Pride (P52100018471)."],contentHtml:`
      <h2>1. The Punawale Advantage: Minutes to Hinjewadi & Wakad</h2>
      <p>Located directly adjoining Wakad and Tathawade, <strong>Punawale</strong> offers the ultimate urban lifestyle without the density and congestion of inner IT corridors. With Bhumkar Chowk and Phoenix Mall of the Millennium just 8–10 minutes away, Punawale residents enjoy world-class shopping, multi-specialty hospitals, and renowned international schools within a 3 km radius.</p>

      <h2>2. Harico Edge: 22-Storey High-Rise Excellence (Possession June 2030)</h2>
      <p><strong>Harico Edge</strong> (MahaRERA No. P52100031773) is an iconic 22-storey residential high-rise spanning 2.5 acres. Designed specifically for young IT families and corporate managers, Harico Edge offers:</p>
      <ul>
        <li><strong>2 BHK Smart & Comfort:</strong> 741 to 782 sq.ft carpet starting from ₹74.00 Lacs* with parallel granite kitchen platforms and dual balconies.</li>
        <li><strong>2 BHK Grande:</strong> 826 sq.ft carpet starting from ₹84.00 Lacs* featuring extended living-dining decks.</li>
        <li><strong>3 BHK Luxury & Royale:</strong> 942 to 1,148 sq.ft carpet starting from ₹89.00 Lacs* up to ₹1.18 Cr* with master bedroom walk-in closets.</li>
        <li><strong>Amenities:</strong> Over 50 lifestyle amenities including rooftop infinity pool, sky terrace lounge, co-working studios, and landscaped podium gardens.</li>
      </ul>

      <h2>3. Harico Pride: Ready & Near-Possession Luxury (Possession June 2027)</h2>
      <p>For homebuyers seeking immediate or near-term possession, <strong>Harico Pride</strong> (MahaRERA No. P52100018471) near Bhiku Vallabh Kale School provides the largest usable carpet area layouts in Punawale:</p>
      <ul>
        <li>Expansive 2 & 3 BHK residences ranging from 765 sq.ft to 1,180 sq.ft.</li>
        <li>Rooftop swimming pool and multi-tier clubhouse.</li>
        <li>Starting prices from ₹78.00 Lacs* onwards.</li>
      </ul>
    `,faqs:[{q:"What is the starting price for 2 BHK flats in Harico Punawale?",a:"2 BHK apartments at Harico Edge Punawale start from ₹74.00 Lacs* with 741 sq.ft carpet area and dual private balconies."},{q:"What are the MahaRERA numbers for Harico projects in Punawale?",a:"Harico Edge is registered under MahaRERA No. P52100031773 (Possession June 2030) and Harico Pride is registered under MahaRERA No. P52100018471 (Possession June 2027)."},{q:"How far is Harico Punawale from Hinjewadi IT Park?",a:"Harico Punawale is located approximately 12–14 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1 via Bhumkar Chowk."}]},{slug:"mivan-monolithic-construction-guide",title:"Mivan Monolithic Concrete Technology Explained: Why Harico Homes Outlast Conventional Construction",subtitle:"Learn how aluminium formwork engineering creates jointless, earthquake-resistant (Zone III), seepage-free homes with higher usable carpet efficiency.",metaDescription:"Comprehensive guide to Mivan monolithic concrete technology used by Harico Estates in Pune. Learn about seismic safety, crack resistance, and superior construction quality.",keywords:"Mivan Construction flats Pune, Mivan Technology benefits, Earthquake resistant homes PCMC, Monolithic concrete construction, Harico Estates specifications, Mivan vs Brickwork Pune",category:"Engineering & Quality",readTime:"5 min read",publishDate:"2026-03-12",author:"Harico Estates Chief Civil Engineer",image:"/assets/harico-divaam-master-layout.png",summary:"While traditional buildings rely on red clay bricks and RCC frame joints prone to water seepage and structural cracking, Harico Estates deploys 100% Mivan monolithic aluminium formwork. Discover the engineering science behind our multi-generational durability.",keyTakeaways:["Monolithic casting: Walls and slabs are cast simultaneously in a single pour of high-grade concrete.","Superior seismic safety: Earthquake-resistant RCC shear wall construction compliant with IS Zone III standards.","Zero plaster cracks and dampness: High-density concrete eliminates water capillary action and seepage.","Higher carpet efficiency: Thinner, stronger shear walls provide 4%–6% more usable carpet area than bulky 9-inch brick walls."],contentHtml:`
      <h2>1. The Evolution from Brickwork to Monolithic Concrete</h2>
      <p>For decades, residential construction in Pune relied on conventional brick-and-mortar infill within an RCC column grid. Over time, seasonal temperature fluctuations cause differential expansion between bricks and concrete frames, leading to hairline cracks, paint peeling, and water seepage during the monsoon season.</p>
      <p>To eliminate these chronic homeowner headaches, <strong>Harico Estates</strong> standardizes <strong>Mivan monolithic aluminium formwork technology</strong> across all ongoing high-rises in Punawale and Kiwale.</p>

      <h2>2. Technical Comparison: Mivan vs Conventional Brickwork</h2>
      <table style="width:100%; border-collapse:collapse; margin:20px 0;">
        <thead>
          <tr style="background:#0A192F; color:#FFF; text-align:left;">
            <th style="padding:12px;">Parameter</th>
            <th style="padding:12px;">Mivan Monolithic Concrete</th>
            <th style="padding:12px;">Conventional Brick Construction</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Seismic Resistance</td>
            <td style="padding:12px; color:#16A34A; font-weight:bold;">High (Continuous shear wall envelope)</td>
            <td style="padding:12px; color:#DC2626;">Moderate (Joint vulnerability)</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Water Seepage Risk</td>
            <td style="padding:12px; color:#16A34A; font-weight:bold;">Virtually Zero (Jointless pour)</td>
            <td style="padding:12px; color:#DC2626;">High (Mortar joints absorb dampness)</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Surface Finish</td>
            <td style="padding:12px; color:#16A34A; font-weight:bold;">Smooth, mirror-like factory finish</td>
            <td style="padding:12px; color:#DC2626;">Uneven manual plaster requiring putty</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Usable Carpet Area</td>
            <td style="padding:12px; color:#16A34A; font-weight:bold;">4%–6% more usable area (160mm walls)</td>
            <td style="padding:12px; color:#DC2626;">Loss of area due to 230mm brick walls</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Acoustic Insulation</td>
            <td style="padding:12px; color:#16A34A; font-weight:bold;">Superior sound dampening</td>
            <td style="padding:12px; color:#DC2626;">Prone to sound transmission</td>
          </tr>
        </tbody>
      </table>

      <h2>3. The Peace of Mind for Harico Homeowners</h2>
      <p>Investing in a Mivan-constructed home at Harico Diwaam or Harico Edge protects your capital for generations. The reinforced concrete shear walls resist soil settlement, seismic stress, and severe climatic cycles, ensuring that your home maintains pristine aesthetics and structural integrity without costly waterproofing repairs.</p>
    `,faqs:[{q:"Is Mivan construction better than brickwork for high-rise buildings?",a:"Yes. Mivan construction offers superior seismic safety, eliminates structural joints where water leaks occur, provides smooth wall finishes, and increases usable carpet area by 4% to 6%."},{q:"Do all Harico Estates projects use Mivan construction?",a:"Yes, all flagship Harico Estates high-rises, including Harico Diwaam (24 storeys) and Harico Edge (22 storeys), are engineered using Mivan aluminium formwork technology."}]},{slug:"punawale-vs-kiwale-comparison",title:"Punawale vs Kiwale: Where Should You Buy a 2 or 3 BHK Flat in West Pune in 2026?",subtitle:"Side-by-side micro-market analysis of pricing, connectivity, infrastructure, lifestyle, and appreciation potential to help you choose the ideal home.",metaDescription:"Punawale vs Kiwale property comparison 2026. Compare 2 & 3 BHK flat prices, Hinjewadi commute times, social infrastructure, and Harico Estates projects.",keywords:"Punawale vs Kiwale, Kiwale vs Punawale property, Best area to buy flat in PCMC, Flats in Punawale or Kiwale, Hinjewadi commute flats, Harico Edge vs Harico Diwaam, प्रॉपर्टी तुलना पुनावळे विरुद्ध किवाळे",category:"Homebuyer Guide",readTime:"7 min read",publishDate:"2026-03-14",author:"Harico Estates Advisory Team",image:"/assets/harico-divaam-hero.jpg",summary:"Both Punawale and Kiwale represent the fastest-growing real estate corridors in PCMC. While Punawale is closer to Wakad’s urban entertainment and Hinjewadi, Kiwale offers unmatched Mumbai-Pune highway access, panoramic vistas, and taller sky towers.",keyTakeaways:["Punawale is ideal for: IT professionals desiring immediate proximity to Bhumkar Chowk, Wakad nightlife, and 12-minute commute to Hinjewadi Phase 1.","Kiwale is ideal for: Frequent Mumbai/Expressway commuters, families seeking 24-storey high-rises, 5-acre resorts, and proximity to Akurdi Station.","Entry pricing: Kiwale starts slightly lower at ₹70.00 Lacs* (Harico Diwaam), while Punawale starts at ₹74.00 Lacs* (Harico Edge).","Both corridors offer 14%–17% CAGR appreciation and pre-approved loans from major national banks."],contentHtml:`
      <h2>1. The Growth Context of West Pune</h2>
      <p>As Central Pune corridors (Baner, Aundh, Wakad) reach peak urban saturation with prices crossing ₹8,500 – ₹11,000/sq.ft, IT homebuyers are turning to the sister corridors of <strong>Punawale</strong> and <strong>Kiwale</strong>. Both are administered under the well-planned Pimpri-Chinchwad Municipal Corporation (PCMC), featuring wide 24-meter DP roads, planned green reservations, and high municipal water reliability.</p>

      <h2>2. Side-by-Side Micro-Market Comparison</h2>
      <table style="width:100%; border-collapse:collapse; margin:20px 0;">
        <thead>
          <tr style="background:#0A192F; color:#FFF; text-align:left;">
            <th style="padding:12px;">Feature</th>
            <th style="padding:12px;">Punawale (Harico Edge & Pride)</th>
            <th style="padding:12px;">Kiwale (Harico Diwaam)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Starting 2 BHK Price</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹74.00 Lacs* Onwards</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹70.00 Lacs* Onwards</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Starting 3 BHK Price</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹89.00 Lacs* Onwards</td>
            <td style="padding:12px; color:#D4AF37; font-weight:bold;">₹89.90 Lacs* Onwards</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Hinjewadi Commute</td>
            <td style="padding:12px;">12–14 Mins via Bhumkar Chowk</td>
            <td style="padding:12px;">12–15 Mins via Expressway bypass</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Expressway Access</td>
            <td style="padding:12px;">2 Mins (Punawale Underpass)</td>
            <td style="padding:12px;">0 Mins (Direct Expressway frontage)</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0;">
            <td style="padding:12px; font-weight:bold;">Nearest Rail Hub</td>
            <td style="padding:12px;">Chinchwad Station (12 Mins)</td>
            <td style="padding:12px;">Akurdi Station (5 Mins)</td>
          </tr>
          <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
            <td style="padding:12px; font-weight:bold;">Key Landmark</td>
            <td style="padding:12px;">Bhumkar Chowk & Akshara School</td>
            <td style="padding:12px;">Opposite Sentosa Water Park & Mukai Chowk</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Which Location Is Right for You?</h2>
      <p><strong>Choose Punawale if:</strong> You prioritize proximity to Wakad’s dining and shopping (Phoenix Mall of the Millennium), desire walking distance to premier CBSE schools (Akshara International, Blossom Public), and work in Hinjewadi Phase 1.</p>
      <p><strong>Choose Kiwale if:</strong> You travel frequently to Mumbai, prefer taller 24-storey towers with Sahyadri mountain views, want a 5-acre resort lifestyle opposite Sentosa Water Park, and want the best price-per-square-foot entry starting from ₹70.00 Lacs*.</p>
    `,faqs:[{q:"Is Punawale more expensive than Kiwale?",a:"Punawale prices average ₹6,800–₹7,600/sq.ft due to its direct border with Wakad. Kiwale averages ₹6,200–₹7,000/sq.ft, offering a slightly more accessible entry point starting at ₹70.00 Lacs*."},{q:"Which area has better expressway connectivity: Punawale or Kiwale?",a:"Both offer 2-minute access to the Mumbai-Pune Expressway. Kiwale has direct expressway frontage opposite Sentosa Water Park, while Punawale connects via the Punawale underpass near Bhumkar Chowk."}]}];function We(){const e=document.createElement("section");return e.className="section articles-hub-section lux-reveal",e.innerHTML=`
    <div class="container py-xl">
      <div class="section-header text-center mb-2xl">
        <span class="eyebrow fade-in-up">Homebuyer Intelligence & Insights</span>
        <h1 class="section-title text-3xl md:text-4xl font-bold text-navy mt-xs fade-in-up delay-1">
          Harico Estates Knowledge Hub & Real Estate Guides
        </h1>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-750 mt-sm fade-in-up delay-3">
          Comprehensive market intelligence, MahaRERA compliance guides, floor plan comparisons, and micro-market transit reports across Punawale and Kiwale.
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-3 gap-xl articles-grid">
        ${te.map(a=>`
          <article class="article-card bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all flex flex-col">
            <div class="article-img-box relative h-52 overflow-hidden">
              <img src="${a.image}" alt="${a.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
              <span class="badge-category absolute top-3 left-3 bg-navy text-white text-xs px-3 py-1 rounded-full font-semibold">
                ${a.category}
              </span>
            </div>

            <div class="article-body p-lg flex-1 flex flex-col justify-between">
              <div>
                <div class="article-meta flex items-center gap-md text-xs text-muted mb-xs">
                  <span><i class="fa-regular fa-clock mr-1"></i> ${a.readTime}</span>
                  <span>•</span>
                  <span><i class="fa-regular fa-calendar mr-1"></i> ${a.publishDate}</span>
                </div>

                <h2 class="article-title text-lg font-bold text-navy mb-xs hover:text-gold transition-colors line-clamp-2">
                  <a href="/articles/${a.slug}" class="nav-link-internal">${a.title}</a>
                </h2>

                <p class="article-desc text-sm text-muted line-clamp-3 mb-md">
                  ${a.summary}
                </p>
              </div>

              <div class="article-footer pt-sm border-t flex justify-between items-center">
                <span class="text-xs font-semibold text-navy"><i class="fa-solid fa-user-pen text-gold mr-1"></i> ${a.author}</span>
                <a href="/articles/${a.slug}" class="btn-read-more text-xs font-bold text-gold hover:underline nav-link-internal">
                  Read Guide <i class="fa-solid fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </article>
        `).join("")}
      </div>

      <!-- Expert Consultation Strip -->
      <div class="articles-cta-banner mt-3xl p-xl rounded-xl bg-navy text-white text-center">
        <h3 class="text-2xl font-bold text-white mb-xs">Need Direct Consultation on Harico Estates Projects?</h3>
        <p class="text-sm text-slate-300 max-w-600 mx-auto mb-md">Connect directly with senior sales advisors for verified cost sheets, MahaRERA certificates, and priority VIP site visit bookings.</p>
        <div class="flex justify-center gap-md flex-wrap">
          <a href="tel:+917744009295" class="btn btn-outline-white btn-sm">
            <i class="fa-solid fa-phone mr-1"></i> Call +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=Hi,%20I%20am%20reading%20Harico%20Estates%20articles%20and%20need%20more%20information." target="_blank" class="btn btn-gold btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Instant WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  `,e}function ze(e){const a=document.createElement("article");a.className="section article-detail-section lux-reveal";const t=te.filter(i=>i.slug!==e.slug).slice(0,3);return a.innerHTML=`
    <div class="container py-xl max-w-900 mx-auto">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="article-breadcrumb mb-md text-xs text-muted">
        <a href="/" class="hover:text-gold nav-link-internal">Home</a> &gt;
        <a href="/articles" class="hover:text-gold nav-link-internal">Articles</a> &gt;
        <span class="text-navy font-semibold">${e.title}</span>
      </nav>

      <!-- Header -->
      <header class="article-header mb-xl">
        <div class="flex items-center gap-sm mb-xs flex-wrap">
          <span class="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">${e.category}</span>
          <span class="text-xs text-muted"><i class="fa-regular fa-clock mr-1"></i> ${e.readTime}</span>
          <span class="text-xs text-muted">•</span>
          <span class="text-xs text-muted"><i class="fa-regular fa-calendar mr-1"></i> ${e.publishDate}</span>
          <span class="text-xs text-muted">•</span>
          <span class="text-xs text-navy font-semibold"><i class="fa-solid fa-user-pen text-gold mr-1"></i> ${e.author}</span>
        </div>

        <h1 class="article-main-title text-2xl md:text-4xl font-extrabold text-navy leading-tight mb-sm">
          ${e.title}
        </h1>
        <p class="article-lead-subtitle text-base md:text-lg text-muted leading-relaxed">
          ${e.subtitle}
        </p>
      </header>

      <!-- Featured Image -->
      <div class="article-featured-media mb-xl rounded-xl overflow-hidden shadow-md max-h-96">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
      </div>

      <!-- Key Takeaways Box -->
      <div class="key-takeaways-box p-lg bg-light-subtle rounded-xl border-l-4 border-gold mb-2xl shadow-sm">
        <h3 class="text-base font-bold text-navy uppercase tracking-wider mb-sm flex items-center gap-xs">
          <i class="fa-solid fa-bolt text-gold"></i> Key Executive Takeaways
        </h3>
        <ul class="space-y-2 pl-4 list-disc text-sm text-slate-700 leading-relaxed">
          ${e.keyTakeaways.map(i=>`<li>${i}</li>`).join("")}
        </ul>
      </div>

      <!-- Article Body Content -->
      <div class="article-rich-content typography-prose text-slate-800 leading-relaxed text-base space-y-6">
        ${e.contentHtml}
      </div>

      <!-- Article FAQ Accordion -->
      ${e.faqs.length>0?`
        <div class="article-faqs-wrapper mt-3xl pt-xl border-t">
          <h2 class="text-2xl font-bold text-navy mb-md flex items-center gap-xs">
            <i class="fa-solid fa-circle-question text-gold"></i> Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            ${e.faqs.map(i=>`
              <div class="faq-item p-md bg-white border rounded-lg shadow-sm">
                <h3 class="text-base font-bold text-navy mb-xs">${i.q}</h3>
                <p class="text-sm text-slate-600 leading-relaxed m-0">${i.a}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}

      <!-- Direct Assistance Box -->
      <div class="article-support-box mt-3xl p-xl bg-navy text-white rounded-xl text-center shadow-lg">
        <h3 class="text-xl font-bold text-white mb-xs">Have Detailed Inquiries About This Project?</h3>
        <p class="text-xs text-slate-300 max-w-550 mx-auto mb-md">Speak directly with senior sales managers for official floor plans, price breakup sheets, and scheduled site visits.</p>
        <div class="flex justify-center gap-sm flex-wrap">
          <a href="tel:+917744009295" class="btn btn-outline-white btn-sm">
            <i class="fa-solid fa-phone mr-1"></i> Call +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=${encodeURIComponent(`Hi, I just read the article "${e.title}" and would like more details.`)}" target="_blank" class="btn btn-gold btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> WhatsApp Instant Desk
          </a>
        </div>
      </div>

      <!-- Related Pillar Articles -->
      <div class="related-articles-section mt-3xl pt-xl border-t">
        <h3 class="text-xl font-bold text-navy mb-lg">Related Real Estate Guides</h3>
        <div class="grid grid-3 gap-md">
          ${t.map(i=>`
            <div class="related-card p-md bg-white rounded-lg border hover:border-gold transition-colors flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-gold uppercase tracking-wider block mb-xs">${i.category}</span>
                <h4 class="text-sm font-bold text-navy line-clamp-2 mb-xs">
                  <a href="/articles/${i.slug}" class="nav-link-internal hover:text-gold">${i.title}</a>
                </h4>
              </div>
              <a href="/articles/${i.slug}" class="text-xs font-semibold text-navy hover:text-gold mt-sm nav-link-internal">
                Read Guide &rarr;
              </a>
            </div>
          `).join("")}
        </div>
      </div>

    </div>
  `,a}const Ge=[{path:"location/punawale",title:"Harico Punawale & Sentosa Punawale | 2 & 3 BHK Luxury Flats in Punawale, Pune",eyebrow:"Micro-Market Intelligence",subtitle:"Explore premium 2 & 3 BHK high-rise residences in Punawale with dual balconies, 50+ lifestyle amenities, and 2-minute expressway access.",description:"Harico Punawale and Sentosa Punawale represent the finest residential developments in West Pune. Backed by the 39-year legacy of Sentosa Developers, Harico Edge and Harico Pride offer unmatched proximity to Hinjewadi IT Park Phase 1, Bhumkar Chowk, and the Mumbai-Pune Expressway.",targetLocation:"Punawale",metaKeywords:"Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Flats near Bhumkar Chowk, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, पुनावळे फ्लॅट्स",highlights:["2 Minutes to Mumbai-Pune Expressway & Katraj-Dehu Bypass","10 Minutes to Phoenix Mall of the Millennium, Wakad","15 Minutes to Rajiv Gandhi Infotech Park, Hinjewadi","Proximity to Akshara International & JSPM Imperial College","100% MahaRERA Sanctioned & Bank Approved by SBI & HDFC"]},{path:"location/kiwale",title:"Harico Kiwale & Harico Diwaam | 24-Storey 2 & 3 BHK Towers Opposite Sentosa",eyebrow:"Signature Sky Landmark",subtitle:"Discover Harico Diwaam, the tallest 24-storey high-rise development in Kiwale-Ravet directly opposite Sentosa Water Park, starting from ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs* onwards).",description:"Harico Kiwale and Harico Diwaam deliver 5 iconic sky towers with 100+ resort-grade amenities, sky observation decks, and direct 2-minute connectivity to Mukai Chowk and the Mumbai-Pune Expressway.",targetLocation:"Kiwale",metaKeywords:"Harico Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, किवाळे फ्लॅट्स",highlights:["Tallest 24-Storey Towers in Kiwale-Ravet Corridor","Directly Opposite Sentosa Water Park & Resort","5 Iconic Sky Towers with 100+ Curated Lifestyle Amenities","Air-Conditioned Co-Working Lounges & Creator Studios","Prices starting at ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*) with Zero Space Wastage"]},{path:"location/ravet",title:"Luxury 2 & 3 BHK Homes near Mukai Chowk Ravet | Sentosa Harico",eyebrow:"Ravet-Kiwale Corridor",subtitle:"High-connectivity luxury residences near Mukai Chowk, BRTS terminal, and Akurdi Railway Station with fast commute to Pune and PCMC.",description:"Ravet is known as the Gateway to Pune, connecting the Expressway, PCMC industrial belt, and Hinjewadi IT hub. Harico Estates brings world-class Mivan monolithic concrete residences with state-of-the-art clubhouses, swimming pools, and rooftop sky lounges.",targetLocation:"Kiwale",metaKeywords:"Harico Diwaam Ravet, Harico Divaam Ravet, Flats in Ravet Pune, 2 BHK near Mukai Chowk, 3 BHK flats Ravet, Sentosa Group Ravet, Sentosa Developers Kiwale Ravet, Harico Kiwale, Ravet BRTS Connectivity Flats, Harico Estates Kiwale Ravet",highlights:["5 Minutes from Mukai Chowk & Ravet BRTS Hub","7 Minutes to Akurdi Railway Station","Near D.Y. Patil University & Ojas Multispecialty Hospital","Seamless Commute to Talegaon & Chakan Industrial Corridors","100% Legal Title Clearance & MahaRERA Compliance"]},{path:"location/tathawade",title:"Flats near Tathawade & Wakad IT Hub | Harico Estates Portfolio",eyebrow:"Education & IT Belt",subtitle:"Premium residential developments within 5 minutes of Tathawade educational institutes and Wakad shopping destinations.",description:"Tathawade and Wakad are booming urban micro-markets favored by IT professionals and young families. Sentosa Developers and Harico Estates offer strategically situated homes that minimize daily commute while maximizing property capital appreciation.",targetLocation:"Punawale",metaKeywords:"Flats in Tathawade, 2 BHK in Tathawade Pune, 3 BHK in Tathawade, Flats near JSPM Tathawade, Flats near Indira College, Wakad Hinjewadi Corridor Flats, Sentosa Serene Tathawade, Harico Punawale Tathawade, Sentosa Developers Tathawade",highlights:["5 Minutes to JSPM, Indira Institute & Balaji University","Quick Access to Bhumkar Chowk & Dange Chowk","High Rental Demand from IT Professionals & Students","Mivan Monolithic Concrete Structural Strength","Exclusive Lifestyle Amenities with Swimming Pool & Gym"]},{path:"location/hinjewadi",title:"Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park | Harico",eyebrow:"IT Commuter Haven",subtitle:"Say goodbye to traffic with spacious 2 & 3 BHK homes located just 15 minutes from Hinjewadi Phase 1, Phase 2, and Phase 3.",description:"For professionals working in TCS, Infosys, Wipro, Cognizant, and Tech Mahindra, Harico Estates in Punawale and Kiwale provides the ideal sanctuary. Enjoy peaceful residential living with fast expressway and arterial road connectivity to all tech hubs.",targetLocation:"Punawale",metaKeywords:"Flats near Hinjewadi IT Park, 2 BHK near Hinjewadi Phase 1, 3 BHK near Hinjewadi, Homes for IT Professionals Pune, Harico Edge Hinjewadi, Harico Divaam Hinjewadi, Harico Punawale Hinjewadi, Harico Kiwale Hinjewadi, Sentosa Hinjewadi Flats",highlights:["15-18 Minutes Direct Drive to Hinjewadi Phase 1 & 2","Avoiding Core Hinjewadi Traffic Chokepoints","Dual Balcony Layouts Ideal for Hybrid & Remote Work","High-Speed WiFi Co-Working Hubs Inside Community","Attractive Rental Yields of 4.5% - 5.2% Annually"]},{path:"flats/2-bhk-flats-in-punawale",title:"2 BHK Flats in Punawale | Harico Punawale & Sentosa Edge from ₹74 Lacs*",eyebrow:"Best Value 2 BHK",subtitle:"Zero-wastage 2 BHK Smart & Premium residences with separate living and master bedroom balconies, starting from ₹74 Lacs*.",description:"Experience optimum space utilization with Harico Edge’s 2 BHK configurations in Punawale. Each residence features large vitrified tiles, branded Kohler/Grohe sanitary fittings, modular switchboards, and scenic unobstructed views.",targetLocation:"Punawale",targetBhk:"2 BHK",metaKeywords:"Harico Punawale 2 BHK, Sentosa Punawale 2 BHK, 2 BHK Flats in Punawale, 2 BHK with 2 Balconies Punawale, Affordable Luxury 2 BHK Pune, Harico Edge 2 BHK Price, Sentosa Edge 2 BHK Punawale, Best 2 BHK in PCMC, 2 BHK under 75 lakh Punawale",highlights:["Usable Carpet Areas: 741 sq.ft to 826 sq.ft","Dual Private Balconies with Anti-Skid Wooden Vitrified Tiles","Parallel Quartz Kitchen Countertop with Gas Pipeline Provision","Starting from ₹74 Lacs* with Flexible Payment Milestones","Ready for Site Visit & Model Apartment Tour"]},{path:"flats/3-bhk-flats-in-punawale",title:"3 BHK Flats in Punawale | Harico Punawale & Sentosa Pride Luxury Residences",eyebrow:"Ultra-Luxury 3 BHK",subtitle:"Expansive 3 BHK homes featuring dedicated walk-in wardrobe spaces, grand living-dining halls, and premium finishes.",description:"Designed for discerning homebuyers who refuse to compromise on space, our 3 BHK layouts in Punawale offer carpet areas up to 1,180 sq.ft with panoramic views and 50+ curated lifestyle amenities.",targetLocation:"Punawale",targetBhk:"3 BHK",metaKeywords:"Harico Punawale 3 BHK, Sentosa Punawale 3 BHK, 3 BHK Flats in Punawale, Large Carpet 3 BHK Pune, 3 BHK with Walk-In Wardrobe, Harico Edge 3 BHK, Harico Pride 3 BHK, Sentosa Edge 3 BHK, Sentosa Pride 3 BHK, 3 BHK under 1 crore Punawale",highlights:["Carpet Areas up to 1,180 sq.ft with Walk-in Wardrobe Spaces","Grand Double-Height Living Room Balconies","3-Tier Security with Biometric Digital Door Locks","Rooftop Clubhouse, Infinity Swimming Pool & Gym Access","Prices starting from ₹89 Lacs* Onwards"]},{path:"flats/2-bhk-flats-in-kiwale",title:"2 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹70.00 Lacs*",eyebrow:"Divine Living",subtitle:"Live high above the city in Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹70.00 Lacs*.",description:"Harico Diwaam offers 2 BHK Smart, Comfort, Prime, and Grand configurations in Kiwale. Spread across 5 acres with 5 iconic towers, residents enjoy private mini-theatres, box cricket turfs, and resort-grade pools.",targetLocation:"Kiwale",targetBhk:"2 BHK",metaKeywords:"Harico Kiwale 2 BHK, Harico Diwaam 2 BHK, 2 BHK Flats in Kiwale, 2 BHK in Kiwale Ravet starts 70 Lacs, Harico Diwaam 2 BHK Price, Sentosa Diwaam 2 BHK, 2 BHK under 75 lakh Kiwale",highlights:["Starting Price: ₹70.00 Lacs* for 724 sq.ft Carpet","24-Storey Elevation with Panoramic Mountain & Greenery Views","100+ Amenities including Heated Pool & Pet Exercise Park","Opposite Sentosa Water Park & 2 Mins to Expressway","MahaRERA Registered PR1260002502389"]},{path:"flats/3-bhk-flats-in-kiwale",title:"3 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹89.90 Lacs*",eyebrow:"Sky Living Collection",subtitle:"Palatial 3 BHK residences on 24-storey sky towers from ₹89.90 Lacs* with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.",description:"Experience ultra-luxury at Harico Diwaam in Kiwale. Designed for grand family celebrations and quiet sunset moments, our 3 BHK sky residences set a new standard for luxury in PCMC.",targetLocation:"Kiwale",targetBhk:"3 BHK",metaKeywords:"Harico Kiwale 3 BHK, Harico Diwaam 3 BHK, 3 BHK in Kiwale, 3 BHK Luxury High Rise Kiwale Ravet, Harico Diwaam 3 BHK Price, Tallest Towers 3 BHK Pune, Sentosa Diwaam 3 BHK, 3 BHK under 1 crore Kiwale",highlights:["Expansive 3 BHK Carpets from 920 sq.ft to 1,108 sq.ft","24th Floor Sky Observation Lounge & Sky Gymnasium","12 Fully Furnished Guest Suites for Visiting Relatives","Private 40-Seater Mini Theatre with Dolby Atmos Sound","Prices starting from ₹89.90 Lacs* Onwards"]},{path:"developer/sentosa-developers-pune",title:"Sentosa Punawale & Sentosa Developers Pune | 39-Year Real Estate Legacy",eyebrow:"Institutional Heritage",subtitle:"Explore 39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group.",description:"Founded in 1987, Sentosa Developers has shaped the skyline of Pune, PCMC, and Maharashtra. From iconic residential townships to the legendary Sentosa Water Park & Resorts, our projects stand as enduring testaments to structural integrity, timely delivery, and unmatched customer trust.",metaKeywords:"Sentosa Punawale, Sentosa Punwale, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale",highlights:["Established in 1987 with over 39 Years of Proven Track Record","20+ Completed Landmark Projects spanning 18+ Lakh Sq. Ft.","Over 5,000+ Delighted Families Calling Sentosa Home","Pioneers in Real Estate, Resorts, and Commercial Developments","100% Zero-Litigation Track Record with Complete MahaRERA Compliance"]},{path:"maharera-registered-projects-pune",title:"MahaRERA Approved & Registered Projects | Harico Estates Transparency",eyebrow:"Regulatory Compliance",subtitle:"100% legal verification, clear title certificates, and sanctioned building layouts approved by Maharashtra Real Estate Regulatory Authority.",description:"At Harico Estates, regulatory compliance and customer security are non-negotiable. Every phase of Harico Edge (P52100031773), Harico Diwaam (PR1260002502389), and Harico Pride (P52100018471) is fully vetted and approved on the official MahaRERA portal.",metaKeywords:"MahaRERA Approved Projects Pune, Harico Edge RERA P52100031773, Harico Diwaam RERA PR1260002502389, Harico Pride RERA P52100018471, Verified Real Estate PCMC",highlights:["Harico Edge Punawale: MahaRERA Reg No. P52100031773","Harico Diwaam Kiwale: MahaRERA Reg No. PR1260002502389","Harico Pride Punawale: MahaRERA Reg No. P52100018471","Direct QR Code Verification on All Sales Portals","Approved by Leading PSU and Private Financial Institutions"]},{path:"harico-new-launch",title:"Harico New Launch Kiwale & Punawale 2026 | Harico Diwaam & Harico Edge",eyebrow:"🔥 Mega New Launch 2026",subtitle:"Pre-launch updates, launch price offers & possession schedules for Harico Diwaam Kiwale (Dec 2030) and Harico Edge Punawale (June 2030). Starts ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*).",description:"Harico New Launch represents the latest landmark chapter by Harico Estates and Sentosa Developers. Featuring Harico Diwaam Kiwale — 5 iconic 24-storey sky towers across 5 acres with 100+ resort-grade amenities, sky gymnasium, observation deck, and seamless 2-minute connectivity to Mukai Chowk and Mumbai-Pune Expressway.",targetLocation:"Kiwale",metaKeywords:"Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico new launch Punawale, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Harico Diwaam, Harico Divaam, Harico Kiwale, Harico Punawale, Sentosa new launch, Sentosa Diwaam new launch, 2 BHK new launch Kiwale, 3 BHK new launch Kiwale, new launch flats near Expressway, हरिको नवीन लाँच, हरिको दिवाम नवीन लाँच पुणे",highlights:["Mega Flagship New Launch: 5 Iconic 24-Storey Sky Towers","Directly Opposite Sentosa Water Park on Expressway Corridor","Target Possession: December 2030 (MahaRERA PR1260002502389)","100+ Curated Lifestyle Amenities & 24th Floor Sky Observation Deck","Attractive Pre-Launch Inaugural Pricing starting at ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*)","2 Minutes to Mukai Chowk BRTS & 15 Minutes to Hinjewadi Phase 1"]},{path:"harico-diwaam-kiwale",title:"Harico Diwaam Kiwale Floor Plans, Brochure & Pricing | Sentosa Developers",eyebrow:"Signature Sky Landmark",subtitle:"Official floor plans (724–1108 sq.ft), brochure PDF download, and price sheets for Harico Diwaam Kiwale. MahaRERA PR1260002502389.",description:"Harico Diwaam Kiwale is the flagship high-rise development by Harico Estates and Sentosa Developers. Offering luxury 2 & 3 BHK residences with 100+ amenities, sky gymnasium, creator studios, private cinema, and immediate access to Mukai Chowk, Ravet, and Mumbai-Pune Expressway.",targetLocation:"Kiwale",metaKeywords:"Harico Diwaam Kiwale, Harico Diwaam, Harico Divaam Kiwale, Harico Divaam, Sentosa Diwaam Kiwale, Sentosa Diwaam, Sentosa Divaam Kiwale, Harico Kiwale, Harico Estates Kiwale, 2 BHK in Kiwale, 3 BHK in Kiwale, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, Harico Diwaam Possession December 2030, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure, हरिको दिवाम किवाळे, हॅरिको दिवाम किवाळे",highlights:["Tallest 24-Storey High-Rise Towers in Kiwale-Ravet","5 Iconic Sky Towers Spread Over 5 Acres Land Parcel","Directly Opposite Sentosa Water Park & Resorts","100+ Curated World-Class Lifestyle Amenities","MahaRERA Sanctioned PR1260002502389 | Possession Dec 2030","Prices starting at ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*) with Flexible Milestone Payment Plan"]},{path:"harico-kiwale",title:"Harico Kiwale Residential Projects & Master Layout | Harico Estates",eyebrow:"Kiwale Real Estate Ecosystem",subtitle:"Explore Harico Kiwale residential enclaves by Sentosa Developers. 5-acre master plan, 5 iconic towers, and infrastructure connectivity near Mukai Chowk.",description:"Harico Kiwale delivers world-class residential architecture to the Kiwale-Ravet growth belt. Centered around Harico Diwaam opposite Sentosa Water Park, residents enjoy unobstructed Sahyadri mountain vistas, zero space wastage layouts, and direct connectivity to Nigdi, Akurdi, and Hinjewadi.",targetLocation:"Kiwale",metaKeywords:"Harico Kiwale, Harico Diwaam Kiwale, Harico Divaam Kiwale, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale, Flats in Kiwale Ravet, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Property Price, Kiwale Real Estate, हरिको किवाळे, हॅरिको किवाळे, किवाळे फ्लॅट्स",highlights:["Prime Kiwale Location Directly Connected to Mukai Chowk","24-Storey Landmark Sky Towers with Dual Balcony Homes","Direct Proximity to Symbiosis University & Akurdi Railway Station","100+ Resort-Style Amenities including 24th Floor Sky Lounge","Prices from ₹70.00 Lacs* Onwards (3 BHK from ₹89.90 Lacs*) with MahaRERA PR1260002502389"]},{path:"harico-punawale",title:"Harico Punawale | Luxury 2 & 3 BHK Flats in Punawale Pune",eyebrow:"Punawale IT Growth Corridor",subtitle:"Discover Harico Edge and Harico Pride in Punawale by Sentosa Developers. Premium residences 2 minutes from Mumbai-Pune Expressway & Bhumkar Chowk.",description:"Harico Punawale encompasses the premier residential developments by Sentosa Developers in Punawale. With Harico Edge (June 2030) and Harico Pride (June 2027), homebuyers experience unmatched living standards near Hinjewadi Phase 1, Wakad, and PCMC.",targetLocation:"Punawale",metaKeywords:"Harico Punawale, Harico Edge Punawale, Harico Pride Punawale, Harico Estates Punawale, Sentosa Developers Punawale, Flats in Punawale, 2 BHK in Punawale, 3 BHK in Punawale, Bhumkar Chowk Flats, Hinjewadi proximity flats, Punawale Real Estate, हरिको पुनावळे, पुनावळे २ बीएचके",highlights:["Strategic Location: 2 Mins to Mumbai-Pune Expressway & 12 Mins to Hinjewadi","Multiple Ongoing Phases: Harico Edge (2030) & Harico Pride (2027)","Dual Private Balconies with Anti-Skid Vitrified Flooring","Mivan Monolithic Concrete Structural Durability","Starting from ₹74.00 Lacs* with MahaRERA Approvals P52100031773 & P52100018471"]},{path:"flats-opposite-sentosa-water-park-kiwale",title:"Flats Opposite Sentosa Water Park Kiwale | Harico Diwaam 2 & 3 BHK Sky Towers",eyebrow:"Prime Expressway Landmark",subtitle:"Premium 2 & 3 BHK residences situated directly opposite Sentosa Water Park & Resort on the Kiwale-Ravet Expressway corridor. Starts ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*).",description:"Looking for flats opposite Sentosa Water Park Kiwale? Harico Diwaam is a 24-storey landmark development by Sentosa Developers. 5 acres, 5 sky towers, 100+ curated amenities, and unbeatable connectivity to Mukai Chowk, Ravet, and Hinjewadi.",targetLocation:"Kiwale",metaKeywords:"Flats opposite Sentosa Water Park, Flats opposite Sentosa Water Park Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Sentosa Diwaam, Sentosa Water Park Kiwale Flats, Kiwale Ravet High Rise, 2 BHK opposite Sentosa, 3 BHK opposite Sentosa Water Park, Harico Kiwale, Sentosa Developers Kiwale, सेंटोसा वॉटर पार्क जवळील फ्लॅट्स किवाळे",highlights:["Directly Opposite Iconic Sentosa Water Park & Resorts","Tallest 24-Storey Elevation in Kiwale-Ravet Corridor","100+ Curated Resort-Grade Lifestyle & Sky Amenities","2 Minutes to Mukai Chowk & Expressway Toll Plaza","MahaRERA Sanctioned PR1260002502389 | Dec 2030 Possession"]}],L=document.querySelector("#app"),Ne=we(),Oe=Be(),Ve=ue(),Ye=Re(),Ue=Me(),Qe=Ae();L.innerHTML="";L.appendChild(Ne);const c=document.createElement("main");L.appendChild(c);L.appendChild(Oe);L.appendChild(Ve);L.appendChild(Ye);L.appendChild(Ue);L.appendChild(Qe);h.add("/",()=>{c.innerHTML="",document.title="Harico Estates | Luxury 2 & 3 BHK Flats in Punawale & Kiwale by Sentosa",y();const e=document.querySelector('meta[name="keywords"]');e&&e.setAttribute("content",Z("global",300)),c.appendChild(ve()),c.appendChild(xe()),c.appendChild(ne()),c.appendChild(le()),c.appendChild(ee()),c.appendChild(ce()),c.appendChild(de()),c.appendChild(ae()),c.appendChild(He()),c.appendChild(pe()),c.appendChild(P()),setTimeout(()=>x.init(),50)});h.add("/projects",()=>{c.innerHTML="",document.title="Featured Luxury Projects in Punawale & Kiwale | Harico Estates",y(),c.appendChild(ne()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/project-comparison",()=>{c.innerHTML="",document.title="Compare Harico Edge vs Divaam vs Pride | Harico Estates",y(),c.appendChild(le()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/specifications",()=>{c.innerHTML="",document.title="Mivan Monolithic Concrete Specs & Branded Fittings | Harico Estates",y(),c.appendChild(ee()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/location-hub",()=>{c.innerHTML="",document.title="Location Intelligence & Transit Matrix | Harico Estates",y(),c.appendChild(ce()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/amenities",()=>{c.innerHTML="",document.title="100+ Curated World-Class Amenities | Harico Estates",y(),c.appendChild(de()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/emi-calculator",()=>{c.innerHTML="",document.title="Home Loan EMI Calculator & Bank Approvals | Harico Estates",y(),c.appendChild(ae()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/faq",()=>{c.innerHTML="",document.title="MahaRERA & Homebuyer FAQs | Harico Estates",y(),c.appendChild(pe()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/contact",()=>{c.innerHTML="",document.title="Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale",y(),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/privacy",()=>{c.innerHTML="",y(),c.appendChild(je()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/terms",()=>{c.innerHTML="",y(),c.appendChild(Ie()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/articles",()=>{c.innerHTML="",document.title="Harico Estates Knowledge Hub | Homebuyer Guides, MahaRERA & Market Analysis",y(),c.appendChild(We()),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)});h.add("/articles/detail",(e,a)=>{c.innerHTML="";const t=te.find(i=>i.slug===a);t?(document.title=`${t.title} | Harico Estates Knowledge Hub`,y(void 0,void 0,t),c.appendChild(ze(t)),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)):c.appendChild(he())});Ge.forEach(e=>{h.add(`/${e.path}`,()=>{c.innerHTML="",document.title=e.title,y(void 0,e),c.appendChild($e(e)),c.appendChild(P()),window.scrollTo(0,0),setTimeout(()=>x.init(),50)})});const re={"2-3-bhk-flats-in-kiwale-harico-divaam":"harico-divaam","harico-edge-punawale":"harico-edge","harico-pride-punawale":"harico-pride"};h.add("/project",(e,a)=>{if(c.innerHTML="",a&&re[a]){const i=re[a];h.navigate(`/project/${i}`);return}let t=null;if(a&&(t=Object.values(A).find(i=>i.slug===a)),!t&&e?.get("id")){const i=e.get("id");t=A[i]}t?(document.title=`${t.title} | ${t.location} | Harico Estates`,y(t),c.appendChild(qe(t)),c.appendChild(P()),setTimeout(()=>x.init(),50)):c.appendChild(he())});console.log("Harico Estates Enterprise Programmatic SEO Engine Initialized");
