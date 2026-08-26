export function createLocationIntelligence(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'location-hub';
  section.className = 'section location-hub-section';

  const hubs = [
    {
      category: 'IT Parks & Employment Centers',
      icon: 'fa-briefcase',
      color: '#3B82F6',
      items: [
        { name: 'Hinjewadi Rajiv Gandhi IT Park (Phase 1)', time: '12 - 15 Mins', distance: '6.8 km' },
        { name: 'Hinjewadi IT Park (Phase 2 & 3 - Quadron/Embassy)', time: '18 - 20 Mins', distance: '10.5 km' },
        { name: 'Talawade IT Park & MIDC Pimpri', time: '20 Mins', distance: '12.0 km' },
        { name: 'Bhumkar Chowk Commercial Tech Zone', time: '07 Mins', distance: '3.5 km' }
      ]
    },
    {
      category: 'Highways, Transit & Metro',
      icon: 'fa-road',
      color: '#F59E0B',
      items: [
        { name: 'Mumbai-Pune Expressway (NH-48 Feeder)', time: '02 Mins', distance: '1.2 km' },
        { name: 'Mukai Chowk & Ravet Flyover', time: '04 Mins', distance: '2.0 km' },
        { name: 'Akurdi & Dehu Road Railway Stations', time: '10 Mins', distance: '4.5 km' },
        { name: 'Upcoming Hinjewadi - Shivajinagar Metro Line', time: '10 Mins', distance: '4.0 km' }
      ]
    },
    {
      category: 'Top Schools & Global Universities',
      icon: 'fa-graduation-cap',
      color: '#10B981',
      items: [
        { name: 'Akshara International School & Junior College', time: '03 Mins', distance: '1.5 km' },
        { name: 'JSPM Imperial College of Engineering', time: '04 Mins', distance: '2.0 km' },
        { name: 'Indira Institute of Management (Wakad)', time: '08 Mins', distance: '3.8 km' },
        { name: 'Symbiosis Skills & Professional University', time: '06 Mins', distance: '2.8 km' }
      ]
    },
    {
      category: 'Healthcare & Retail Lifestyle',
      icon: 'fa-hospital-user',
      color: '#EF4444',
      items: [
        { name: 'Phoenix Mall of the Millennium (Wakad)', time: '10 Mins', distance: '4.8 km' },
        { name: 'Lifepoint Multispecialty Hospital', time: '09 Mins', distance: '4.2 km' },
        { name: 'Aditya Birla Memorial Hospital (Chinchwad)', time: '12 Mins', distance: '5.9 km' },
        { name: 'Sentosa Water Park & Multi-Cuisine Resort', time: '02 Mins', distance: 'Opposite' }
      ]
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Strategic West Pune Growth Hub</span>
        <h2 class="section-title fade-in-up delay-1">Punawale & Kiwale Connectivity Matrix</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Positioned seamlessly at the crossroads of Hinjewadi IT Park, the Mumbai-Pune Expressway, and premier social infrastructure.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="location-category-pills flex justify-center flex-wrap gap-xs mb-lg">
        <button class="loc-filter-btn active" data-cat="all">All Landmarks</button>
        <button class="loc-filter-btn" data-cat="it">IT & Employment</button>
        <button class="loc-filter-btn" data-cat="transit">Highways & Transit</button>
        <button class="loc-filter-btn" data-cat="education">Schools & Universities</button>
        <button class="loc-filter-btn" data-cat="lifestyle">Retail & Hospitals</button>
      </div>

      <!-- Hubs Grid -->
      <div class="grid grid-cols-2 location-grid gap-lg">
        ${hubs.map((hub, idx) => `
          <div class="location-card" data-category-idx="${idx}">
            <div class="location-card-header flex items-center justify-between mb-md pb-xs border-bottom">
              <div class="flex items-center gap-sm">
                <div class="loc-icon-badge" style="background-color: ${hub.color}15; color: ${hub.color};">
                  <i class="fa-solid ${hub.icon}"></i>
                </div>
                <h3 class="loc-card-title">${hub.category}</h3>
              </div>
            </div>

            <div class="landmark-items-list flex flex-col gap-sm">
              ${hub.items.map(item => `
                <div class="landmark-item flex justify-between items-center p-sm rounded-md bg-light-subtle">
                  <div class="landmark-info">
                    <span class="landmark-name font-semibold text-navy text-sm block">${item.name}</span>
                    <span class="landmark-dist text-xs text-muted"><i class="fa-solid fa-route text-gold mr-1"></i> ${item.distance}</span>
                  </div>
                  <div class="landmark-badge-time text-xs font-bold bg-navy text-gold px-sm py-xs rounded-full">
                    ${item.time}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Location ROI Highlight Strip -->
      <div class="punawale-roi-strip mt-xl p-lg rounded-lg bg-navy text-white text-center flex flex-wrap justify-between items-center gap-md">
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-gold block">18.5%</span>
          <span class="text-xs uppercase tracking-wider text-light">3-Year Capital Appreciation</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-white block">5,00,000+</span>
          <span class="text-xs uppercase tracking-wider text-light">IT Workforce in Hinjewadi Catchment</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <span class="text-3xl font-extrabold text-gold block">₹25k - ₹35k</span>
          <span class="text-xs uppercase tracking-wider text-light">Average Monthly 2/3 BHK Rental Yield</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-item">
          <a href="https://wa.me/917744009295?text=Hi,%20I%20want%20the%20detailed%20Punawale%20and%20Kiwale%20Location%20Investment%20Report." target="_blank" class="btn btn-primary btn-sm">
            Download Location Report
          </a>
        </div>
      </div>

    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .location-hub-section {
      background-color: #FFFFFF;
      padding: 90px 0;
    }
    
    .loc-filter-btn {
      background: #F1F5F9;
      border: 1px solid #E2E8F0;
      color: var(--color-navy);
      padding: 10px 20px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: var(--font-heading);
    }
    
    .loc-filter-btn:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }
    
    .loc-filter-btn.active {
      background: var(--color-gold);
      color: #FFFFFF;
      border-color: var(--color-gold);
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
    }
    
    .location-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 25px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .location-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(10, 25, 47, 0.08);
      border-color: rgba(212, 175, 55, 0.4);
    }
    
    .loc-icon-badge {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    .loc-card-title {
      font-size: 1.15rem;
      color: var(--color-navy);
      font-family: var(--font-heading);
      margin: 0;
    }
    
    .landmark-item {
      background: #F8FAFC;
      border: 1px solid #F1F5F9;
      transition: background 0.2s ease;
    }
    
    .landmark-item:hover {
      background: #F1F5F9;
    }
    
    .landmark-badge-time {
      white-space: nowrap;
      border: 1px solid rgba(212, 175, 55, 0.4);
    }
    
    .punawale-roi-strip {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      box-shadow: 0 10px 30px rgba(10, 25, 47, 0.2);
    }
    
    .roi-divider {
      width: 1px;
      height: 50px;
      background: rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 900px) {
      .location-grid {
        grid-template-columns: 1fr;
      }
      .punawale-roi-strip {
        flex-direction: column;
        text-align: center;
      }
      .roi-divider {
        display: none;
      }
    }
  `;
  section.appendChild(style);

  // Category filter click handlers
  setTimeout(() => {
    const filterBtns = section.querySelectorAll('.loc-filter-btn');
    const cards = section.querySelectorAll<HTMLElement>('.location-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-cat');
        cards.forEach((card, idx) => {
          if (cat === 'all') {
            card.style.display = 'block';
          } else if (cat === 'it' && idx === 0) {
            card.style.display = 'block';
          } else if (cat === 'transit' && idx === 1) {
            card.style.display = 'block';
          } else if (cat === 'education' && idx === 2) {
            card.style.display = 'block';
          } else if (cat === 'lifestyle' && idx === 3) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, 0);

  return section;
}
