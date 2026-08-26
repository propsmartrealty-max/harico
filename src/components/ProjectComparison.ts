import { projectsData } from '../data/projects';
import { router } from '../router';

export function createProjectComparison(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'project-comparison';
  section.className = 'section project-comparison-section';

  const pEdge = projectsData['1'];
  const pDivaam = projectsData['2'];
  const pPride = projectsData['3'];

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Project Selection Matrix</span>
        <h2 class="section-title fade-in-up delay-1">Compare Harico Landmarks</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Find the perfect residence aligned with your lifestyle, budget, and location preferences in Punawale & Kiwale.
        </p>
      </div>

      <div class="comparison-table-wrapper">
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-col-head">Project Attributes</th>
                <th class="project-head">
                  <div class="project-head-card">
                    <span class="badge-status ${pEdge.status.toLowerCase()}">${pEdge.status}</span>
                    <h3 class="comp-title">${pEdge.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${pEdge.location}</p>
                    <span class="comp-price">${pEdge.price}</span>
                  </div>
                </th>
                <th class="project-head highlight-col">
                  <div class="project-head-card">
                    <span class="badge-status ${pDivaam.status.toLowerCase()}">${pDivaam.status}</span>
                    <h3 class="comp-title">${pDivaam.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${pDivaam.location}</p>
                    <span class="comp-price">${pDivaam.price}</span>
                  </div>
                </th>
                <th class="project-head">
                  <div class="project-head-card">
                    <span class="badge-status ${pPride.status.toLowerCase()}">${pPride.status}</span>
                    <h3 class="comp-title">${pPride.title}</h3>
                    <p class="comp-loc"><i class="fa-solid fa-location-dot"></i> ${pPride.location}</p>
                    <span class="comp-price">${pPride.price}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-vector-square mr-2 text-gold"></i> Land Parcel & Scale</td>
                <td>${pEdge.landParcel || '2.5 Acres'}</td>
                <td class="highlight-cell">${pDivaam.landParcel || '5.0 Acres'}</td>
                <td>${pPride.landParcel || '3.0 Acres'}</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-building mr-2 text-gold"></i> Towers & Storeys</td>
                <td>3 Towers | 22 Floors</td>
                <td class="highlight-cell">5 Towers | 24 Floors (Tallest in Region)</td>
                <td>4 Towers | 18 Floors</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-bed mr-2 text-gold"></i> Configurations</td>
                <td>2 & 3 BHK (741 - 1148 sq.ft)</td>
                <td class="highlight-cell">2 & 3 BHK (724 - 1108 sq.ft)</td>
                <td>2 & 3 BHK (765 - 1180 sq.ft)</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-calendar-check mr-2 text-gold"></i> Target Possession</td>
                <td>December 2028</td>
                <td class="highlight-cell">March 2028</td>
                <td>June 2027</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-shield-halved mr-2 text-gold"></i> MahaRERA Status</td>
                <td>
                  <span class="font-bold text-navy">P52100031773</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
                <td class="highlight-cell">
                  <span class="font-bold text-navy">PR1260002502389</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
                <td>
                  <span class="font-bold text-navy">P52100018471</span>
                  <span class="badge-verified"><i class="fa-solid fa-check"></i> Verified</span>
                </td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-gem mr-2 text-gold"></i> Lifestyle Amenities</td>
                <td>50+ Curated Amenities</td>
                <td class="highlight-cell">100+ Resort-Grade Amenities</td>
                <td>35+ Essential Amenities</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-car mr-2 text-gold"></i> Expressway Proximity</td>
                <td>2 Mins (Direct Feeder)</td>
                <td class="highlight-cell">2 Mins (Opp. Sentosa Resort)</td>
                <td>4 Mins (Near Bhiku Kale School)</td>
              </tr>
              <tr>
                <td class="feature-name"><i class="fa-solid fa-certificate mr-2 text-gold"></i> Construction Tech</td>
                <td>Mivan Monolithic Concrete</td>
                <td class="highlight-cell">Mivan RCC Shear Wall</td>
                <td>Robust RCC Framed IS Code</td>
              </tr>
              <tr>
                <td class="feature-name">Action</td>
                <td>
                  <button class="btn btn-sm btn-outline comp-nav-btn" data-slug="${pEdge.slug}">View ${pEdge.title}</button>
                </td>
                <td class="highlight-cell">
                  <button class="btn btn-sm btn-primary comp-nav-btn" data-slug="${pDivaam.slug}">View ${pDivaam.title}</button>
                </td>
                <td>
                  <button class="btn btn-sm btn-outline comp-nav-btn" data-slug="${pPride.slug}">View ${pPride.title}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .project-comparison-section {
      background: #FFFFFF;
      padding: 90px 0;
    }
    
    .comparison-table-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(10, 25, 47, 0.08);
      border: 1px solid #E2E8F0;
    }
    
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      background: #FFFFFF;
    }
    
    .comparison-table th, .comparison-table td {
      padding: 18px 20px;
      border-bottom: 1px solid #F1F5F9;
      vertical-align: middle;
      font-size: 0.95rem;
    }
    
    .feature-col-head {
      background: var(--color-navy);
      color: var(--color-gold);
      font-family: var(--font-heading);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.85rem;
      width: 25%;
      text-align: left;
      padding-left: 25px !important;
    }
    
    .project-head {
      background: var(--color-navy);
      color: #FFFFFF;
      width: 25%;
      padding: 24px 15px !important;
    }
    
    .project-head.highlight-col {
      background: #172A45;
      border-top: 4px solid var(--color-gold);
    }
    
    .highlight-cell {
      background: #F8FAFC;
      font-weight: 600;
      color: var(--color-navy);
    }
    
    .comp-title {
      font-size: 1.25rem;
      color: #FFFFFF;
      font-family: var(--font-heading);
      margin: 8px 0 4px;
      letter-spacing: 0.5px;
    }
    
    .comp-loc {
      font-size: 0.8rem;
      color: var(--color-gold);
      margin-bottom: 8px;
    }
    
    .comp-price {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #FFFFFF;
    }
    
    .feature-name {
      text-align: left;
      font-weight: 700;
      color: var(--color-navy);
      padding-left: 25px !important;
      background: #FAFBFC;
    }
    
    .badge-verified {
      display: inline-block;
      font-size: 0.7rem;
      background: #ECFDF5;
      color: #059669;
      padding: 2px 8px;
      border-radius: 12px;
      font-weight: 700;
      margin-left: 4px;
    }
    
    .comp-nav-btn {
      width: 100%;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
    }

    @media (max-width: 900px) {
      .table-responsive {
        overflow-x: auto;
      }
      .comparison-table {
        min-width: 750px;
      }
    }
  `;
  section.appendChild(style);

  // Bind navigation clicks
  setTimeout(() => {
    section.querySelectorAll('.comp-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        if (slug) router.navigate('/project/' + slug);
      });
    });
  }, 0);

  return section;
}
