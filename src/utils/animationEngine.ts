/**
 * Harico Estates Ultra-Advanced Animation & Physics Engine
 * Handles 3D magnetic card tilt, holographic glare, scroll-driven count-up numbers,
 * and staggered spring viewport reveals.
 */

export class AnimationEngine {
  private static instance: AnimationEngine;
  private observer: IntersectionObserver | null = null;
  private isTouchDevice: boolean = false;

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
    }
  }

  /**
   * Setup viewport intersection observer for staggered luxury spring reveals
   */
  private setupScrollObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('lux-in-view');

          // If element contains counters, trigger counter animation
          const counters = el.querySelectorAll<HTMLElement>('[data-counter-target]');
          counters.forEach(c => this.animateCounter(c));

          // Unobserve once revealed for performance
          this.observer?.unobserve(el);
        }
      });
    }, options);

    // Observe all reveal elements
    document.querySelectorAll('.lux-reveal, .lux-stagger, .section').forEach((el) => {
      this.observer?.observe(el);
    });
  }

  /**
   * Number Count-Up Animation with ease-out expo physics
   */
  public initCounters() {
    document.querySelectorAll<HTMLElement>('[data-counter-target]').forEach((counter) => {
      // Check if already in viewport
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
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease Out Expo: 1 - 2^(-10 * progress)
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
   * 3D Perspective Tilt with Real-Time Holographic Glare Sheen
   */
  public init3DTilt() {
    const cards = document.querySelectorAll<HTMLElement>('.card-3d-tilt');

    cards.forEach((card) => {
      let bounds: DOMRect;
      let mouseLeaveTimeout: any;

      const onMouseEnter = () => {
        bounds = card.getBoundingClientRect();
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
        clearTimeout(mouseLeaveTimeout);
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!bounds) bounds = card.getBoundingClientRect();

        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const leftPct = (mouseX / bounds.width) * 100;
        const topPct = (mouseY / bounds.height) * 100;

        // Calculate rotation angles (-10deg to +10deg)
        const xPct = mouseX / bounds.width - 0.5;
        const yPct = mouseY / bounds.height - 0.5;
        const rotateY = xPct * 16;
        const rotateX = -yPct * 16;

        // 3D Transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

        // Holographic Glare Position
        const glare = card.querySelector<HTMLElement>('.card-glare-overlay');
        if (glare) {
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle 300px at ${leftPct}% ${topPct}%, rgba(255, 255, 255, 0.28), rgba(212, 175, 55, 0.18) 40%, transparent 80%)`;
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
   * Magnetic Button Effect on Primary CTAs
   */
  public initMagneticButtons() {
    const magneticBtns = document.querySelectorAll<HTMLElement>('.btn-magnetic');

    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }
}

export const animationEngine = AnimationEngine.getInstance();
