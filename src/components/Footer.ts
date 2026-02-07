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
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/amenities">Amenities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Projects</h4>
          <ul class="footer-links">
            <li><a href="/project/harico-edge">HARICO EDGE</a></li>
            <li><a href="/project/harico-divaam">Harico Divaam</a></li>
            <li><a href="/project/harico-pride">HARICO PRIDE</a></li>
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
  `;
  footer.appendChild(style);

  return footer;
}
