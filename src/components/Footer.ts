export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer-section';

  footer.innerHTML = `
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
             <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
             </a>
             <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
             </a>
             <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
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
            <li><a href="/emi-calculator">EMI Calculator</a></li>
            <li><a href="/amenities">Curated Amenities</a></li>
            <li><a href="/faq">FAQ Knowledge Base</a></li>
            <li><a href="/contact">VIP Site Visit</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Projects</h4>
          <ul class="footer-links">
            <li><a href="/project/harico-edge">HARICO EDGE (Punawale)</a></li>
            <li><a href="/project/harico-divaam">HARICO DIVAAM (Kiwale)</a></li>
            <li><a href="/project/harico-pride">HARICO PRIDE (Punawale)</a></li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4 class="footer-heading">Contact Us</h4>
          <ul class="footer-contact">
            <li>
                <span class="icon">📍</span>
                <span>Punawale & Kiwale, Pune, Maharashtra 411033</span>
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
                 <img src="/assets/harico-divaam-rera-qr.png" alt="Harico Divaam QR" title="Harico Divaam QR" style="width: 55px; height: 55px; border: 2px solid var(--color-gold); border-radius: 6px; background: white; padding: 3px;">
                 <div style="font-size: 0.65rem; color: var(--color-gold); margin-top: 4px; font-weight: bold;">Harico Divaam</div>
                 <div style="font-size: 0.6rem; color: #CBD5E1;">PR1260002502389</div>
             </div>
             <div style="text-align: center;">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100018471" alt="Harico Pride QR" title="Harico Pride QR" style="width: 55px; height: 55px; border: 2px solid var(--color-gold); border-radius: 6px; background: white; padding: 3px;">
                 <div style="font-size: 0.65rem; color: var(--color-gold); margin-top: 4px; font-weight: bold;">Harico Pride</div>
                 <div style="font-size: 0.6rem; color: #CBD5E1;">P52100018471</div>
             </div>
         </div>
         <p style="font-size: 0.75rem; color: rgba(255,255,255,0.7); max-width: 950px; margin: 0 auto; line-height: 1.6;">
            <strong>MahaRERA Registered Projects:</strong> Harico Edge (P52100031773) | Harico Divaam (PR1260002502389) | Harico Pride (P52100018471). 
            Comprehensive project details, approved building layouts, and legal title certificates are available on the official MahaRERA portal (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style="color:var(--color-gold); text-decoration: underline;">maharera.mahaonline.gov.in</a>). 
            Harico Estates is a flagship real estate venture by Sentosa Developers.
         </p>
      </div>

      <!-- Popular Searches (Ultra-Advanced SEO & SGE Entity Mesh) -->
      <div class="popular-searches">
        <h5 class="seo-heading">Sentosa & Harico Real Estate Entity Network • Pune & PCMC</h5>
        <p class="seo-text">
            <strong>Sentosa Group Pune Projects:</strong> Sentosa Edge Punawale | Sentosa Divaam Kiwale | Sentosa Ekam Punawale | Sentosa Pride Phase 1, 2 & 3 | Sentosa Serene Tathawade | Sentosa Paradise Wakad | Sentosa Elysium Wakad | Sentosa Pearl Wakad | Sentosa Palm Wakad | Sentosa Elite Biz Hub Wakad | Sentosa Era Moshi Pradhikaran | Sentosa Residency Hadapsar | Gulraj Residency Kondhwa.
        </p>
        <p class="seo-text mt-xs">
            <strong>Harico Estates Flagship Developments:</strong> Harico Edge 2 & 3 BHK Punawale | Harico Divaam 24-Storey Kiwale Ravet | Harico Pride Punawale | Harico Ventures Pune | Sentosa Harico Joint Ventures.
        </p>
        <p class="seo-text mt-xs">
            <strong>PCMC & West Pune Micro-Market Coverage:</strong> 2 BHK Flats in Punawale | 3 BHK Luxury Homes Kiwale | 2 & 3 BHK Flats in Tathawade | Flats near Hinjewadi IT Park Phase 1, 2 & 3 | Rajiv Gandhi Infotech Park | Mukai Chowk Ravet | Bhumkar Chowk Wakad | Flats near Mumbai-Pune Expressway | D.Y. Patil & Symbiosis University corridor | Akshara International School Punawale | Real Estate Investment in PCMC | MahaRERA Approved Projects Pune.
        </p>
        <p class="seo-text mt-xs">
            <span lang="mr">पुनावळे मधील नवीन २ आणि ३ बीएचके फ्लॅट्स | किवाळे सेंटोसा प्रोजेक्ट्स | तथावडे फ्लॅट विक्रीसाठी | हिंजवडी जवळ घरे | पिंपरी चिंचवड रिअल इस्टेट | हरिको इस्टेट्स पुणे</span>
        </p>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
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
  `;
  footer.appendChild(style);

  return footer;
}
