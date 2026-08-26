/**
 * Harico Estates Ultra-Advanced Animation & Physics Engine
 * Powered by 60FPS Hardware-Accelerated Smooth Transformations
 * 
 * Capabilities:
 * 1. Dynamic Ambient Gold Cursor Glow Spotlight
 * 2. 3D Perspective Tilt with Real-Time Radial Holographic Glare Sheen
 * 3. Exponential Ease-Out Count-Up Physics
 * 4. Staggered Spring Viewport Intersection Reveals (Cubic-Bezier 0.16, 1, 0.3, 1)
 * 5. Magnetic Kinetic Buttons
 * 6. Smooth Scroll-Driven Parallax Depth
 */

export class AnimationEngine {
  private static instance: AnimationEngine;
  private observer: IntersectionObserver | null = null;
  private isTouchDevice: boolean = false;
  private cursorGlow: HTMLElement | null = null;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private currentMouseX: number = 0;
  private currentMouseY: number = 0;
  private isCursorGlowActive: boolean = false;

  private constructor() {
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  public static getInstance(): AnimationEngine {
    if (!AnimationEngine.instance) {
      AnimationEngine.instance = new AnimationEngine();
    }
    return AnimationEngine.instance;
  }

  public init() {
    this.setupScrollObserver();
    this.initCounters();
    
    if (!this.isTouchDevice) {
      this.init3DTilt();
      this.initMagneticButtons();
      this.initCursorGlow();
      this.initScrollParallax();
    }
  }

  /**
   * 1. Dynamic Ambient Gold Cursor Glow Spotlight
   */
  private initCursorGlow() {
    if (this.cursorGlow || this.isTouchDevice) return;

    this.cursorGlow = document.createElement('div');
    this.cursorGlow.id = 'cursor-glow-spotlight';
    this.cursorGlow.className = 'cursor-glow-spotlight';
    document.body.appendChild(this.cursorGlow);

    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
      if (!this.isCursorGlowActive && this.cursorGlow) {
        this.cursorGlow.style.opacity = '1';
        this.isCursorGlowActive = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      if (this.cursorGlow) {
        this.cursorGlow.style.opacity = '0';
        this.isCursorGlowActive = false;
      }
    });

    // Smooth Lerp Animation Loop
    const updateCursor = () => {
      if (this.isCursorGlowActive && this.cursorGlow) {
        this.currentMouseX += (this.targetMouseX - this.currentMouseX) * 0.12;
        this.currentMouseY += (this.targetMouseY - this.currentMouseY) * 0.12;
        this.cursorGlow.style.transform = `translate3d(${this.currentMouseX - 200}px, ${this.currentMouseY - 200}px, 0)`;
      }
      requestAnimationFrame(updateCursor);
    };

    requestAnimationFrame(updateCursor);
  }

  /**
   * 2. Viewport Intersection Observer for Staggered Luxury Reveals
   */
  private setupScrollObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('lux-in-view');

          // Trigger Counter Animation if present
          const counters = el.querySelectorAll<HTMLElement>('[data-counter-target]');
          counters.forEach(c => this.animateCounter(c));

          this.observer?.unobserve(el);
        }
      });
    }, options);

    document.querySelectorAll('.lux-reveal, .lux-stagger, .section, .milestone-card-refined, .project-card-3d').forEach((el) => {
      this.observer?.observe(el);
    });
  }

  /**
   * 3. Ease-Out Exponential Number Count-Up Physics
   */
  public initCounters() {
    document.querySelectorAll<HTMLElement>('[data-counter-target]').forEach((counter) => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        this.animateCounter(counter);
      }
    });
  }

  public animateCounter(counter: HTMLElement) {
    if (counter.dataset.counterAnimated === 'true') return;
    counter.dataset.counterAnimated = 'true';

    const targetStr = counter.dataset.counterTarget || '0';
    const target = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
    const prefix = counter.dataset.counterPrefix || '';
    const suffix = counter.dataset.counterSuffix || '';
    const duration = 2200;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);

      counter.textContent = `${prefix}${current.toLocaleString('en-IN')}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = `${prefix}${target.toLocaleString('en-IN')}${suffix}`;
      }
    };

    requestAnimationFrame(update);
  }

  /**
   * 4. 3D Perspective Mouse Tilt & Real-Time Holographic Glare
   */
  public init3DTilt() {
    const cards = document.querySelectorAll<HTMLElement>('.card-3d-tilt, .milestone-card-refined');

    cards.forEach((card) => {
      let bounds: DOMRect;

      const onMouseEnter = () => {
        bounds = card.getBoundingClientRect();
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s ease';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!bounds) bounds = card.getBoundingClientRect();

        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const leftPct = (mouseX / bounds.width) * 100;
        const topPct = (mouseY / bounds.height) * 100;

        const xPct = mouseX / bounds.width - 0.5;
        const yPct = mouseY / bounds.height - 0.5;
        const rotateY = xPct * 14;
        const rotateX = -yPct * 14;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        const glare = card.querySelector<HTMLElement>('.card-glare-overlay');
        if (glare) {
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle 280px at ${leftPct}% ${topPct}%, rgba(255, 255, 255, 0.3), rgba(212, 175, 55, 0.16) 40%, transparent 80%)`;
        }
      };

      const onMouseLeave = () => {
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

        const glare = card.querySelector<HTMLElement>('.card-glare-overlay');
        if (glare) {
          glare.style.opacity = '0';
        }
      };

      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }

  /**
   * 5. Magnetic Kinetic Buttons
   */
  public initMagneticButtons() {
    const magneticBtns = document.querySelectorAll<HTMLElement>('.btn-magnetic, .btn-primary, .btn-whatsapp');

    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /**
   * 6. Smooth Scroll-Driven Parallax Depth
   */
  private initScrollParallax() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroBg = document.querySelector<HTMLElement>('.hero-bg-media');
      if (heroBg && scrollY < window.innerHeight) {
        heroBg.style.transform = `translate3d(0, ${(scrollY * 0.3).toFixed(1)}px, 0)`;
      }
    }, { passive: true });
  }
}

export const animationEngine = AnimationEngine.getInstance();
