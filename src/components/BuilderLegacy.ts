export function createBuilderLegacy(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'builder-legacy';
  section.className = 'section builder-legacy-section lux-reveal';

  const milestones = [
    { year: '2026', name: 'Sentosa Edge', location: 'Punawale, Pune', area: '48,000 SQ. FT.', type: 'Luxury High-Rise', highlight: true },
    { year: '2026', name: 'Sentosa Era', location: 'Pradhikaran Moshi', area: '80,000 SQ. FT.', type: 'Residential Landmark', highlight: true },
    { year: '2026', name: 'Sentosa Pride Ph 3', location: 'Punawale, Pune', area: '1,54,800 SQ. FT.', type: 'Gated Community' },
    { year: '2026', name: 'Sentosa Elite Biz Hub', location: 'Wakad, Pune', area: '56,586 SQ. FT.', type: 'Commercial Landmark' },
    { year: '2025', name: 'Sentosa Ekam', location: 'Punawale, Pune', area: '1,09,742 SQ. FT.', type: 'Premium Residences' },
    { year: '2023', name: 'Sentosa Serene', location: 'Tathawade, Pune', area: '88,197 SQ. FT.', type: 'Residential Tower' },
    { year: '2023', name: 'Sentosa Pride Ph 2', location: 'Punawale, Pune', area: '1,22,473 SQ. FT.', type: 'Luxury Homes' },
    { year: '2019', name: 'Ami Infra Pink City', location: 'Thane District', area: '3,40,000 SQ. FT.', type: 'Township Project' },
    { year: '2018', name: 'Regency Plaza', location: 'Thane District', area: '2,12,922 SQ. FT.', type: 'Residential Complex' },
    { year: '2017', name: 'Sentosa Pride Ph 1', location: 'Punawale, Pune', area: '1,75,303 SQ. FT.', type: 'Residential Landmark' },
    { year: '2017', name: 'Sentosa Palm', location: 'Wakad, Pune', area: '22,023 SQ. FT.', type: 'Boutique Residences' },
    { year: '2016', name: 'Royal Palms', location: 'Thane District', area: '2,10,000 SQ. FT.', type: 'Luxury Apartments' },
    { year: '2014', name: 'Sentosa Pearl', location: 'Wakad, Pune', area: '61,486 SQ. FT.', type: 'Residential Tower' },
    { year: '2012', name: 'Sentosa Elysium', location: 'Wakad, Pune', area: '45,692 SQ. FT.', type: 'Gated Community' },
    { year: '2011', name: 'Sentosa Paradise', location: 'Wakad, Pune', area: '48,000 SQ. FT.', type: 'Luxury Homes' },
    { year: '2009', name: 'Sentosa Residency', location: 'Hadapsar, Pune', area: '32,000 SQ. FT.', type: 'Residential Building' },
    { year: '1997', name: 'Gulraj Residency', location: 'Kondhwa, Pune', area: '60,000 SQ. FT.', type: 'Apartments' },
    { year: '1992', name: 'Samarpam Complex', location: 'Thane District', area: '40,000 SQ. FT.', type: 'Residential' },
    { year: '1990', name: 'Shivdham Complex', location: 'Thane District', area: '2,52,500 SQ. FT.', type: 'Township Complex' },
    { year: '1987', name: 'Satyam Complex', location: 'Thane District', area: '48,000 SQ. FT.', type: 'Inaugural Milestone' }
  ];

  section.innerHTML = `
    <div class="container">
      
      <!-- Refined Legacy Header Strip -->
      <div class="legacy-refined-header">
        <div class="legacy-stat-group">
          <span class="legacy-big-num" data-counter-target="39" data-counter-suffix="+">39+</span>
          <div class="legacy-header-text">
            <span class="legacy-kicker">Established 1987</span>
            <h2 class="legacy-main-title">Years of Real Estate & Hospitality Legacy</h2>
            <p class="legacy-sub-desc">Built on vision, uncompromising civil engineering, and 20+ delivered landmark developments across Pune and Maharashtra.</p>
          </div>
        </div>
        
        <div class="legacy-trust-quote-box">
          <i class="fa-solid fa-medal text-gold text-2xl mb-xs"></i>
          <p class="quote-txt">"Transforming Pune's skyline with iconic architecture and timeless quality for over three decades."</p>
          <span class="quote-author">— Sentosa Developers Leadership</span>
        </div>
      </div>

      <!-- Decade Filter Pills -->
      <div class="legacy-filter-bar mt-xl text-center">
        <button class="legacy-filter-btn active" data-era="all">All 20+ Landmarks</button>
        <button class="legacy-filter-btn" data-era="2020s">2020 — 2026 (High-Rise Era)</button>
        <button class="legacy-filter-btn" data-era="2010s">2010 — 2019 (Wakad Expansion)</button>
        <button class="legacy-filter-btn" data-era="classic">1987 — 2009 (Foundations)</button>
      </div>

      <!-- Modern Milestone Grid -->
      <div class="legacy-milestone-grid mt-lg">
        ${milestones.map((m) => {
          const eraClass = parseInt(m.year) >= 2020 ? 'era-2020s' : (parseInt(m.year) >= 2010 ? 'era-2010s' : 'era-classic');
          return `
            <div class="milestone-card-refined ${eraClass} ${m.highlight ? 'milestone-highlight' : ''}">
              <div class="milestone-top-row">
                <span class="milestone-year-badge">${m.year}</span>
                <span class="milestone-status-badge"><i class="fa-solid fa-check text-success mr-1"></i> Delivered</span>
              </div>
              <h4 class="milestone-project-name">${m.name}</h4>
              <div class="milestone-details-grid">
                <div class="m-detail-item">
                  <span class="m-detail-lbl">Location</span>
                  <span class="m-detail-val">${m.location}</span>
                </div>
                <div class="m-detail-item">
                  <span class="m-detail-lbl">Scale</span>
                  <span class="m-detail-val">${m.area}</span>
                </div>
              </div>
              <div class="milestone-footer-type">
                <span>${m.type}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .builder-legacy-section {
      padding: 90px 0;
      background: #FFFFFF;
      position: relative;
    }

    .legacy-refined-header {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 40px;
      align-items: center;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    }

    .legacy-stat-group {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .legacy-big-num {
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      font-weight: 800;
      line-height: 1;
      font-family: var(--font-heading);
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      flex-shrink: 0;
    }

    .legacy-header-text {
      display: flex;
      flex-direction: column;
    }

    .legacy-kicker {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-gold);
      margin-bottom: 4px;
    }

    .legacy-main-title {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 0 0 8px;
      line-height: 1.25;
      font-family: var(--font-heading);
    }

    .legacy-sub-desc {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin: 0;
      line-height: 1.6;
    }

    .legacy-trust-quote-box {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-left: 4px solid var(--color-gold);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .quote-txt {
      font-size: 0.88rem;
      font-style: italic;
      color: var(--color-navy);
      margin: 0 0 10px;
      line-height: 1.5;
    }

    .quote-author {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Era Filter Bar */
    .legacy-filter-bar {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .legacy-filter-btn {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      padding: 8px 18px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: var(--font-heading);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .legacy-filter-btn:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }

    .legacy-filter-btn.active {
      background: var(--color-navy);
      color: #FFFFFF;
      border-color: var(--color-navy);
      box-shadow: 0 4px 12px rgba(10, 25, 47, 0.25);
    }

    /* Milestone Grid */
    .legacy-milestone-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .milestone-card-refined {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .milestone-card-refined:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(10, 25, 47, 0.1);
      border-color: var(--color-gold);
    }

    .milestone-highlight {
      border-color: rgba(212, 175, 55, 0.6);
      background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 100%);
    }

    .milestone-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .milestone-year-badge {
      background: var(--color-navy);
      color: var(--color-gold);
      font-size: 0.85rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      font-family: var(--font-heading);
    }

    .milestone-status-badge {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-navy);
      background: #F1F5F9;
      padding: 3px 8px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .milestone-project-name {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 0;
      font-family: var(--font-heading);
      letter-spacing: -0.01em;
    }

    .milestone-details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      background: #F8FAFC;
      padding: 10px;
      border-radius: 8px;
    }

    .m-detail-item {
      display: flex;
      flex-direction: column;
    }

    .m-detail-lbl {
      font-size: 0.65rem;
      font-weight: 600;
      color: var(--color-text-light);
      text-transform: uppercase;
    }

    .m-detail-val {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--color-navy);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .milestone-footer-type {
      font-size: 0.72rem;
      color: var(--color-text-secondary);
      font-weight: 600;
      border-top: 1px solid #F1F5F9;
      padding-top: 8px;
      margin-top: auto;
    }

    @media (max-width: 900px) {
      .legacy-refined-header {
        grid-template-columns: 1fr;
        padding: 25px;
      }
      .legacy-stat-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  `;
  section.appendChild(style);

  // Era filter logic
  setTimeout(() => {
    const filterBtns = section.querySelectorAll('.legacy-filter-btn');
    const cards = section.querySelectorAll('.milestone-card-refined');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const era = btn.getAttribute('data-era');

        cards.forEach((card: any) => {
          if (era === 'all' || card.classList.contains(`era-${era}`)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, 0);

  return section;
}
