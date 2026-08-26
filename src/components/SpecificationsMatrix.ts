import type { SpecificationCategory } from '../data/projects';

export function createSpecificationsMatrix(specs?: SpecificationCategory[]): HTMLElement {
  const container = document.createElement('div');
  container.className = 'specifications-section section';
  container.id = 'specifications';

  const defaultSpecs: SpecificationCategory[] = [
    {
      category: 'Structure & Civil',
      icon: 'fa-building',
      items: [
        'Earthquake resistant RCC framed shear-wall structure compliant with IS 1893 & IS 13920 codes',
        'Mivan / Aluminium formwork construction for monolithic concrete strength, superior finish, and crack prevention',
        'AAC (Autoclaved Aerated Concrete) block masonry offering superior thermal and acoustic insulation',
        'Sand-faced double-coat external plaster with silicone water-repellent protective paint shield'
      ]
    },
    {
      category: 'Flooring & Wall Finishes',
      icon: 'fa-layer-group',
      items: [
        'Large format 800x1600mm / 1200x1800mm High Gloss Glazed Vitrified Tiles in living, dining, and bedrooms',
        'Anti-skid matte vitrified tiles in all attached balconies, sitouts, and utility dry terraces',
        'Full-height designer ceramic wall tiles in all bathrooms with anti-fungal epoxy grouting',
        'Internal walls finished with gypsum plaster and Asian Paints Royale low-VOC luxury paint finish'
      ]
    },
    {
      category: 'Kitchen & Gourmet Utility',
      icon: 'fa-kitchen-set',
      items: [
        'Premium natural Granite / Quartz platform with heavy-duty stainless steel Franke/Nirali sink',
        'Designer ceramic wall dado tiles up to lintel height above countertop',
        'Dedicated dry balcony with washing machine power and plumbing inlet/outlet points',
        'Piped gas connection provision (MNGL network compatible) and exhaust chimney electrical provision'
      ]
    },
    {
      category: 'Sanitaryware & Bath Fixtures',
      icon: 'fa-bath',
      items: [
        'Luxury series CP and sanitary fixtures from Kohler / Jaquar / Grohe / Toto',
        'Wall-hung European Water Closets (EWC) with concealed dual-flush tanks for water conservation',
        'Single lever hot and cold water diverters with overhead rainfall shower in master bath',
        'Solar water heating provision in master bathroom and instantaneous geyser provision across all bathrooms'
      ]
    },
    {
      category: 'Electrical & Smart Automation',
      icon: 'fa-bolt',
      items: [
        'Concealed copper wiring with flame-retardant low-smoke (FRLS) Polycab / Havells cables',
        'Schneider Electric / Legrand Arteor designer modular switches and shock-proof MCB protection',
        'High-speed fiber-optic broadband and DTH TV cabling points in living room and master bedroom',
        'Smart biometric digital door lock (Fingerprint, Passcode, RFID Card, Key) with video door phone'
      ]
    },
    {
      category: 'Doors, Windows & Elevators',
      icon: 'fa-door-open',
      items: [
        '8-ft high grand designer flush main door with veneer/laminate finish and premium brass hardware',
        'Powder-coated heavy-gauge aluminium sliding windows with mosquito mesh and granite window sills',
        'High-speed automatic elevators (Schindler / Otis / Kone) with Automatic Rescue Device (ARD) and power backup'
      ]
    }
  ];

  const activeSpecs = specs && specs.length > 0 ? specs : defaultSpecs;

  container.innerHTML = `
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
        ${activeSpecs.map((cat, idx) => `
          <button class="spec-tab-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <i class="fa-solid ${cat.icon} mr-2"></i> ${cat.category}
          </button>
        `).join('')}
      </div>

      <!-- Specification Tabs Content Container -->
      <div class="spec-content-card">
        ${activeSpecs.map((cat, idx) => `
          <div class="spec-pane ${idx === 0 ? 'active' : ''}" id="spec-pane-${idx}">
            <div class="spec-pane-header flex items-center gap-md mb-md pb-sm border-bottom">
              <div class="spec-icon-circle">
                <i class="fa-solid ${cat.icon}"></i>
              </div>
              <div>
                <h3 class="spec-category-title">${cat.category}</h3>
                <span class="text-xs text-gold uppercase font-bold tracking-wider">Certified Benchmark Standards</span>
              </div>
            </div>
            <ul class="spec-items-list">
              ${cat.items.map(item => `
                <li class="spec-item flex items-start gap-md">
                  <div class="spec-check-icon">
                    <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <p class="spec-text">${item}</p>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
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
  `;
  container.appendChild(style);

  // Tab switching logic
  setTimeout(() => {
    const tabs = container.querySelectorAll('.spec-tab-btn');
    const panes = container.querySelectorAll('.spec-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const idx = tab.getAttribute('data-index');
        const targetPane = container.querySelector('#spec-pane-' + idx);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }, 0);

  return container;
}
