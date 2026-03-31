export function createPrivacyPolicy(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'legal-page-container container section fade-in-up';
  
  document.title = "Privacy Policy | Harico Estates & Sentosa Developers";

  const content = '<div class="legal-content">' +
      '<h1 class="page-title" style="color: var(--color-navy); margin-bottom: 30px;">Privacy Policy</h1>' +
      '<p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Last Updated: ' + new Date().toLocaleDateString() + '</p>' +
      
      '<h3>1. Information We Collect</h3>' +
      '<p>Sentosa Developers ("we," "our," or "us") operates the Harico Estates website. We collect personal information out of business necessity. This includes your name, email address, phone number, and any other details you provide when filling out contact forms or interacting with our digital assets.</p>' +

      '<h3>2. How We Use Your Information</h3>' +
      '<p>The information collected is used exclusively to provide you with property updates, sales offers, and customer service. We may send you promotional emails or SMS messages regarding new launches like Harico Edge, Harico Divaam, and Harico Pride.</p>' +

      '<h3>3. Data Protection and MahaRERA Compliance</h3>' +
      '<p>We implement stringent security measures to maintain the safety of your personal data. We comply with all local privacy regulations and MahaRERA guidelines for consumer transparency.</p>' +

      '<h3>4. Cookies</h3>' +
      '<p>Our website utilizes cookies to enhance user experience, track site usage analytics, and optimize our advertising campaigns across Google and social media platforms.</p>' +

      '<h3>5. Contact Us</h3>' +
      '<p>If you have any questions regarding this Privacy Policy or our data processing practices, please contact us at: <br>' +
      '<strong>Harico Estates by Sentosa Group</strong><br>' +
      'Punawale, Pune, MH, 411033<br>' +
      'Phone: +91-7744009295</p>' +
    '</div>';

  container.innerHTML = content;
  return container;
}

export function createTermsOfUse(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'legal-page-container container section fade-in-up';
  
  document.title = "Terms of Use | Harico Estates & Sentosa Developers";

  const content = '<div class="legal-content">' +
      '<h1 class="page-title" style="color: var(--color-navy); margin-bottom: 30px;">Terms of Use & Disclaimer</h1>' +
      '<p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Last Updated: ' + new Date().toLocaleDateString() + '</p>' +
      
      '<h3>1. Acceptance of Terms</h3>' +
      '<p>By accessing and using the Harico Estates website (haricoestates.in), you accept and agree to be bound by the terms and provisions of this agreement.</p>' +

      '<h3>2. Disclaimer of Information</h3>' +
      '<p>The contents of this website are for informational purposes only. The imagery, layouts, master plans, animations, and descriptions are artistic impressions and signify design intent. They do not constitute a legal offer, contract, or binding agreement.</p>' +

      '<h3>3. MahaRERA Registration</h3>' +
      '<p>All projects listed on this platform are registered with MahaRERA. The official details are physically verified and actively updated on the MahaRERA website. The numbers assigned are:<br>' +
      'Harico Edge: <strong>P52100031773</strong><br>' +
      'Harico Divaam: <strong>PR1260002502389</strong><br>' +
      'Harico Pride: <strong>P52100018471</strong></p>' +

      '<h3>4. Pricing</h3>' +
      '<p>Prices indicated are illustrative and subject to change without prior notice. Statutory charges, registration, GST, and maintenance deposits are typically excluded from the base prices unless strictly specified.</p>' +

      '<h3>5. Copyright & Trademarks</h3>' +
      '<p>All materials contained on this site, including text, graphics, logos, and images are the property of Sentosa Developers and are protected by Indian and International intellectual property laws.</p>' +
    '</div>';

  container.innerHTML = content;

  const style = document.createElement('style');
  style.textContent = '.legal-content h3 { color: var(--color-gold); margin-top: 30px; margin-bottom: 15px; font-size: 1.4rem; font-family: var(--font-heading); } .legal-content p { color: var(--color-text-secondary); line-height: 1.8; margin-bottom: 20px; font-size: 1.05rem; }';
  container.appendChild(style);

  return container;
}
