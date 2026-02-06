export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'hero';
  section.className = 'hero-section';

  section.innerHTML = `
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
  `;

  const style = document.createElement('style');
  style.textContent = `
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
  `;
  section.appendChild(style);

  // Logic
  setTimeout(() => {
    const enquireBtn = section.querySelector('.hero-enquire-btn');
    if (enquireBtn) {
      enquireBtn.addEventListener('click', () => {
        if ((window as any).showEnquireModal) {
          (window as any).showEnquireModal();
        }
      });
    }
  }, 0);

  return section;
}
