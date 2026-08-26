export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer-section';
  footer.id = 'contact'; // Navigation Target

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
             <a href="javascript:void(0)" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 0 011-1h3z"></path></svg>
             </a>
             <a href="javascript:void(0)" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
             <a href="javascript:void(0)" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 6.127-1.291l.003 9.597h4.852v-10.298c0-7.88-8.917-7.614-11.014-3.684v-2.018z"/></svg>
             </a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4 class="footer-heading">Navigate</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/project-comparison">Compare Landmarks</a></li>
            <li><a href="/specifications">Material Specs</a></li>
            <li><a href="/location-hub">Location Matrix</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Buyer Tools</h4>
          <ul class="footer-links">
            <li><a href="/emi-calculator">EMI Calculator</a></li>
            <li><a href="/amenities">Curated Amenities</a></li>
            <li><a href="/faq">FAQ Knowledge Base</a></li>
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
             <!-- Verified QRs targeting MahaRERA API via wrapper -->
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

      <!-- Popular Searches (SEO Entity Mesh) -->
      <div class="popular-searches">
        <h5 class="seo-heading">Pune Real Estate Micro-Market Searches</h5>
        <p class="seo-text">
            2 BHK Flats in Punawale | 3 BHK Luxury Homes Kiwale | Flats near Hinjewadi IT Park Phase 1 & 2 | 
            Sentosa Harico Projects Pune | Tallest Towers in Kiwale Ravet | Flats near Bhumkar Chowk & Wakad | 
            Luxury Apartments near Mumbai-Pune Expressway | Harico Edge Floor Plans | Harico Divaam Price & Brochure | 
            Sentosa Group 39 Years Legacy | Home Loan Approved Projects SBI HDFC Punawale | 
            <span lang="mr">पुनावळे मध्ये 2 व 3 BHK फ्लॅट</span> | <span lang="mr">किवाळे सेंटोसा प्रोजेक्ट्स</span>
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
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
        opacity: 0.5;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.2fr 1.5fr;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-2xl);
    }

    /* Brand Column */
    .brand-col {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .footer-logo-wrapper {
        margin-bottom: 10px;
        display: inline-block;
        width: fit-content;
    }

    .footer-logo-img {
       height: 70px;
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
        gap: 12px;
        margin-top: 5px;
    }
    
    .social-links a {
        color: var(--color-text-light);
        transition: color var(--transition-fast), transform var(--transition-fast);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.15);
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
      font-size: 0.9rem;
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
        font-size: 0.9rem;
        line-height: 1.5;
    }
    .footer-contact .icon {
        color: var(--color-gold);
        font-size: 1rem;
    }
    .footer-contact a {
        color: inherit;
        text-decoration: none;
        transition: color var(--transition-fast);
    }
    .footer-contact a:hover {
        color: var(--color-gold);
    }

    /* Bottom Bar */
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
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
        text-decoration: none;
        transition: color var(--transition-fast);
    }
    .legal-links a:hover {
        color: var(--color-white);
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 35px;
      }
    }

    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
    }

    /* Popular Searches SEO Block */
    .popular-searches {
        margin-top: 25px;
        border-top: 1px solid rgba(255,255,255,0.05);
        padding-top: 20px;
        text-align: center;
        opacity: 0.7;
    }
    
    .seo-heading {
        font-size: 0.8rem;
        color: var(--color-gold);
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .seo-text {
        font-size: 0.75rem;
        color: var(--color-text-light);
        line-height: 1.8;
        max-width: 950px;
        margin: 0 auto;
    }
  `;
  footer.appendChild(style);

  return footer;
}
