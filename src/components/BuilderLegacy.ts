export function createBuilderLegacy(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'builder-legacy';
  section.className = 'builder-legacy-section';

  const legacyData = [
    { year: '1987', name: 'SATYAM COMPLEX', location: 'THANE - DISTRICT', area: '48,000 SQ. FT.' },
    { year: '1990', name: 'SHIVDHAM COMPLEX', location: 'THANE - DISTRICT', area: '2,52,500 SQ. FT.' },
    { year: '1992', name: 'SAMARPAM COMPLEX', location: 'THANE - DISTRICT', area: '40,000 SQ. FT.' },
    { year: '1997', name: 'GULRAJ RESIDENCY', location: 'KONDHWA', area: '60,000 SQ. FT.' },
    { year: '2009', name: 'SENTOSA RESIDENCY', location: 'HADAPSAR', area: '32,000 SQ. FT.' },
    { year: '2011', name: 'SENTOSA PARADISE', location: 'WAKAD', area: '48,000 SQ. FT.' },
    { year: '2012', name: 'SENTOSA ELYSIUM', location: 'WAKAD', area: '45,692 SQ. FT.' },
    { year: '2014', name: 'SENTOSA PEARL', location: 'WAKAD', area: '61,486 SQ. FT.' },
    { year: '2016', name: 'ROYAL PALMS', location: 'THANE - DISTRICT', area: '2,10,000 SQ. FT.' },
    { year: '2017', name: 'SENTOSA PALM', location: 'WAKAD', area: '22,023 SQ. FT.' },
    { year: '2017', name: 'SENTOSA PRIDE PH 1', location: 'PUNAWALE', area: '1,75,303 SQ. FT.' },
    { year: '2018', name: 'REGENCY PLAZA', location: 'THANE - DISTRICT', area: '2,12,922 SQ. FT.' },
    { year: '2019', name: 'AMI INFRA PINK CITY', location: 'THANE - DISTRICT', area: '3,40,000 SQ. FT.' },
    { year: '2023', name: 'SENTOSA SERENE', location: 'TATHAWADE', area: '88,197 SQ. FT.' },
    { year: '2023', name: 'SENTOSA PRIDE PH 2', location: 'PUNAWALE', area: '1,22,473 SQ. FT.' },
    { year: '2025', name: 'SENTOSA EKAM', location: 'PUNAWALE', area: '1,09,742 SQ. FT.' },
    { year: '2026', name: 'SENTOSA PRIDE PH 3', location: 'PUNAWALE', area: '1,54,800 SQ. FT.' },
    { year: '2026', name: 'SENTOSA ELITE BIZ HUB', location: 'WAKAD', area: '56,586 SQ. FT.' },
    { year: '2026', name: 'SENTOSA EDGE', location: 'PUNAWALE', area: '48,000 SQ. FT.' },
    { year: '2026', name: 'SENTOSA ERA', location: 'PRADHIKARAN MOSHI', area: '80,000 SQ. FT.' },
  ];

  const midPoint = Math.ceil(legacyData.length / 2);
  const row1Data = legacyData.slice(0, midPoint);
  const row2Data = legacyData.slice(midPoint);

  function renderRow(data: typeof legacyData, startIndex: number) {
    return `
        <div class="timeline-row">
            <div class="timeline-line"></div>
            <div class="timeline-items">
                ${data.map((item, i) => {
      const globalIndex = startIndex + i;
      const isLatest = globalIndex === legacyData.length - 1;
      const positionClass = i % 2 === 0 ? 'top' : 'bottom';
      const highlightClass = isLatest ? 'latest-project' : '';

      return `
                    <div class="timeline-item ${positionClass} ${highlightClass}">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-year">${item.year}</div>
                            <h4 class="timeline-project">${item.name}</h4>
                            <p class="timeline-detail">COMPLETED</p>
                            <p class="timeline-detail">${item.area}</p>
                            <p class="timeline-detail">${item.location}</p>
                            ${isLatest ? '<div class="latest-badge">LATEST</div>' : ''}
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
      `;
  }

  section.innerHTML = `
    <div class="container">
      <div class="legacy-header text-center">
        <h2 class="legacy-years">39</h2>
        <div class="legacy-title-wrapper">
            <span class="legacy-subtitle">YEARS OF REAL ESTATE<br>AND HOSPITALITY</span>
            <h3 class="legacy-script">Legacy</h3>
        </div>
        <div class="legacy-vision">
            BUILT ON VISION,<br>INTEGRITY<br>& INNOVATION
        </div>
      </div>

      <div class="timeline-wrapper">
        ${renderRow(row1Data, 0)}
        ${renderRow(row2Data, midPoint)}
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .builder-legacy-section {
      padding: var(--spacing-section) 0;
      background-color: #FFFFFF;
      overflow: hidden;
      color: var(--color-navy);
    }

    .legacy-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 4rem;
      position: relative;
    }

    @media (min-width: 768px) {
        .legacy-header {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            text-align: left;
        }
    }

    .legacy-years {
      font-family: var(--font-heading);
      font-size: 8rem;
      font-weight: 800;
      line-height: 1;
      color: var(--color-navy);
      margin: 0;
    }

    .legacy-title-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .legacy-subtitle {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .legacy-script {
        font-family: 'Dancing Script', cursive;
        font-family: var(--font-heading); 
        font-style: italic;
        font-weight: 300;
        font-size: 4rem;
        color: var(--color-accent-red);
        line-height: 0.8;
        margin: 0;
        z-index: 1;
    }

    .legacy-vision {
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 1.4;
      border-left: 2px solid var(--color-gold);
      padding-left: 1.5rem;
      margin-left: 2rem;
    }

    /* Timeline Wrapper & Rows */
    .timeline-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20rem; /* Increased space to prevent overlap */
        padding-top: 5rem; /* Space for top items of first row */
        padding-bottom: 5rem;
    }

    .timeline-row {
      position: relative;
      /* padding: 2rem 0; */ /* Adjusted padding */
      width: 100%;
    }

    /* Original timeline container styles adapted */
    .timeline-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-gold);
      transform: translateY(-50%);
      z-index: 0;
    }

    .timeline-items {
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* removed min-width forcing horizontal scroll for rows, assuming they fit or wrap gracefully on very small screens? Actually, for mobile let's keep scroll if needed or stack vertical */
    }
    
    @media (max-width: 1024px) {
        .timeline-items {
            overflow-x: auto;
            min-width: 100%;
            padding-bottom: 20px; /* Scrollbar space */
        }
        .timeline-item {
            min-width: 200px;
        }
        .timeline-line {
            min-width: 1000px; /* Ensure line extends in scroll */
        }
    }

    .timeline-item {
      position: relative;
      flex: 1;
      text-align: center;
      padding: 0 10px;
      z-index: 1;
    }

    .timeline-marker {
      width: 20px;
      height: 20px;
      background-color: var(--color-gold);
      transform: rotate(45deg);
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -10px;
      z-index: 2;
      box-shadow: 0 0 0 4px #FFF;
      transition: all 0.3s ease;
    }

    .timeline-content {
      background: #FFF;
      padding: 1rem;
      border-radius: 4px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .timeline-item:hover .timeline-marker {
        background-color: var(--color-navy);
        transform: rotate(45deg) scale(1.2);
    }
    
    .timeline-item:hover .timeline-content {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    /* Top Items */
    .timeline-item.top .timeline-content {
      margin-bottom: 2rem; 
      transform: translateY(-100%);
      top: -20px;
    }
    
    /* Bottom Items */
    .timeline-item.bottom .timeline-content {
      margin-top: 50px; 
    }

    .timeline-year {
      background-color: var(--color-navy);
      color: #FFF;
      display: inline-block;
      padding: 4px 12px;
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .timeline-project {
      color: var(--color-accent-red);
      font-weight: 800;
      font-size: 1rem;
      text-transform: uppercase;
      margin: 0.5rem 0;
    }

    .timeline-detail {
        font-size: 0.75rem;
        color: var(--color-text-secondary);
        margin: 2px 0;
        font-weight: 500;
        text-transform: uppercase;
    }

    /* Latest Project Highlight */
    .latest-project .timeline-marker {
        background-color: var(--color-accent-red);
        width: 30px;
        height: 30px;
        margin-top: -15px;
        box-shadow: 0 0 0 6px rgba(198, 40, 40, 0.2);
        animation: pulse 2s infinite;
    }

    .latest-project .timeline-content {
        border: 2px solid var(--color-accent-red);
        background: #FFF5F5;
        transform: scale(1.05) !important; /* Force scale */
    }
    
    .timeline-item.top.latest-project .timeline-content {
        transform: translateY(-105%) scale(1.05) !important;
    }

    .latest-badge {
        background-color: var(--color-accent-red);
        color: white;
        font-size: 0.7rem;
        font-weight: bold;
        padding: 4px 8px;
        border-radius: 4px;
        position: absolute;
        top: -15px;
        right: 50%;
        transform: translateX(50%);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(198, 40, 40, 0); }
        100% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0); }
    }

    @media (max-width: 768px) {
        .legacy-header {
            flex-direction: column;
            text-align: center;
        }
        .legacy-years { font-size: 5rem; }
        .legacy-vision { 
            border-left: none; 
            border-top: 2px solid var(--color-gold);
            margin-left: 0;
            margin-top: 1rem;
            padding-top: 1rem;
        }
        
        .timeline-wrapper {
            gap: 2rem;
        }
        
        /* Adjust spacing for mobile stack if needed, or keep scroll */
        .timeline-items {
             padding-bottom: 250px; /* Extra space for bottom items overlapping next row */
        }
        
        /* Reduce vertical space if items are huge */
        .timeline-item.bottom .timeline-content {
             margin-top: 40px;
        }
    }
  `;
  section.appendChild(style);

  return section;
}
