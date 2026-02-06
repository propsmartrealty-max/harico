export function createAmenities(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'amenities-section section';

  // SVG Icons (Classy Line Art Style)
  const icons = {
    pool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20c1.333-1.667 3-1.667 4.333 0S9.667 21.667 11 20s3-1.667 4.333 0S18.667 21.667 20 20"/><path d="M2 16c1.333-1.667 3-1.667 4.333 0S9.667 17.667 11 16s3-1.667 4.333 0S18.667 17.667 20 16"/><path d="M12 9a4 4 0 1 1 4 4"/></svg>',
    gym: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l-2 2 3.5 3.5L9 10 4 8z"/><path d="M20 8l2 2-3.5 3.5L15 10l5-2z"/><path d="M9 10l1.3 7h3.4L15 10"/><path d="M4 8l-2 2 3.5 3.5L9 10 4 8zM20 8l2 2-3.5 3.5L15 10l5-2z"/><circle cx="12" cy="5" r="3"/></svg>',
    clubhouse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M10 8h4"/><path d="M12 8v8"/><path d="M8.5 14h7"/></svg>',
    track: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6a4.5 4.5 0 0 1 4.24 2.74L13 8l-2 2-1-1.5L8 10l4 5 5-2 1 2.5L20 13"/><path d="M16 16v4h4v-4"/></svg>',
    garden: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 8a7 7 0 1 0-7 7"/><path d="M10.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/><path d="M12 22a8 8 0 0 1-8-8"/></svg>',
    sitout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9h3v10h-3z"/><path d="M22 6h-3v3h3z"/><path d="M5 9H2v10h3z"/><path d="M2 6h3v3H2z"/><path d="M6 19v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6"/></svg>',
    hall: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"/></svg>' // Reused clubhouse for hall for now, or use similar
  };

  const amenities = [
    { title: 'Swimming Pool', icon: icons.pool },
    { title: 'Gymnasium', icon: icons.gym },
    { title: 'Club House', icon: icons.clubhouse },
    { title: 'Children Play Area', icon: icons.play },
    { title: 'Jogging Track', icon: icons.track },
    { title: 'Landscaped Garden', icon: icons.garden },
    { title: 'Senior Citizen Area', icon: icons.sitout },
    { title: 'Multipurpose Hall', icon: icons.hall }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="text-center mb-lg" style="margin-bottom: 3rem;">
        <h3 class="section-heading-center">Leisure Crafted For You</h3>
        <p class="section-subtitle">World-class amenities for a premium lifestyle</p>
      </div>
      
      <div class="amenities-grid-custom">
        <!-- Injected Below -->
      </div>
    </div>
  `;

  const grid = container.querySelector('.amenities-grid-custom')!;
  amenities.forEach(item => {
    const el = document.createElement('div');
    el.className = 'amenity-box';
    el.innerHTML = `
      <div class="amenity-icon-wrapper">${item.icon}</div>
      <p class="amenity-title">${item.title}</p>
    `;
    grid.appendChild(el);
  });

  const style = document.createElement('style');
  style.textContent = `
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
  `;
  container.appendChild(style);

  return container;
}
