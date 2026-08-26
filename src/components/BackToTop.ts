export function createBackToTop(): HTMLElement {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top-btn hidden';
  btn.setAttribute('aria-label', 'Back to top');

  btn.innerHTML = `
    <svg class="progress-ring" width="46" height="46" viewBox="0 0 46 46">
      <circle class="progress-ring-bg" stroke="rgba(212, 175, 55, 0.2)" stroke-width="3" fill="transparent" r="20" cx="23" cy="23"/>
      <circle class="progress-ring-circle" stroke="var(--color-gold)" stroke-width="3" fill="transparent" r="20" cx="23" cy="23"/>
    </svg>
    <i class="fa-solid fa-arrow-up arrow-icon"></i>
  `;

  const circle = btn.querySelector('.progress-ring-circle') as SVGCircleElement;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  if (circle) {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > 350) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }

    if (docHeight > 0 && circle) {
      const scrollPercent = scrollY / docHeight;
      const offset = circumference - scrollPercent * circumference;
      circle.style.strokeDashoffset = `${offset}`;
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const style = document.createElement('style');
  style.textContent = `
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
  `;
  btn.appendChild(style);

  return btn;
}
