import { projectsData } from '../data/projects';
import { createProjectCard } from './ProjectCard';

export interface ProgrammaticPageData {
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  targetLocation?: string;
  targetBhk?: string;
  metaKeywords?: string;
  highlights: string[];
}

export function createProgrammaticHub(data: ProgrammaticPageData): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section programmatic-hub-section lux-reveal';

  // Filter projects matching location or typology
  const allProjects = Object.values(projectsData);
  let matchingProjects = allProjects;

  if (data.targetLocation) {
    matchingProjects = allProjects.filter(p => 
      p.location.toLowerCase().includes(data.targetLocation!.toLowerCase())
    );
  }

  if (matchingProjects.length === 0) {
    matchingProjects = allProjects;
  }

  section.innerHTML = `
    <div class="container py-xl">
      
      <!-- Programmatic Hero Strip -->
      <div class="prog-hero-banner text-center mb-2xl">
        <span class="eyebrow">${data.eyebrow}</span>
        <h1 class="prog-main-title">${data.title}</h1>
        <div class="title-separator mx-auto"></div>
        <p class="prog-subtitle max-w-750 mx-auto">${data.subtitle}</p>
        
        <!-- Trust Badges -->
        <div class="prog-badges-bar flex justify-center gap-sm mt-md flex-wrap">
          <span class="prog-badge"><i class="fa-solid fa-shield-halved text-gold mr-1"></i> 100% MahaRERA Sanctioned</span>
          <span class="prog-badge"><i class="fa-solid fa-building-shield text-gold mr-1"></i> 39-Year Sentosa Legacy</span>
          <span class="prog-badge"><i class="fa-solid fa-road text-gold mr-1"></i> 2 Mins to Expressway</span>
          <span class="prog-badge"><i class="fa-solid fa-percent text-gold mr-1"></i> Zero Brokerage Developer Direct</span>
        </div>
      </div>

      <!-- Highlights Grid -->
      <div class="prog-highlights-box p-xl rounded-lg bg-white border mb-2xl">
        <h3 class="text-xl font-bold text-navy mb-md"><i class="fa-solid fa-circle-check text-gold mr-2"></i> Key Market Highlights & Amenities</h3>
        <div class="prog-highlights-grid">
          ${data.highlights.map(h => `
            <div class="prog-high-item flex items-center gap-sm">
              <i class="fa-solid fa-check text-success"></i>
              <span class="text-sm font-semibold text-navy">${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Matching Featured Developments -->
      <div class="prog-projects-wrapper mb-2xl">
        <div class="flex justify-between items-center mb-lg flex-wrap gap-sm">
          <div>
            <h2 class="text-2xl font-bold text-navy m-0">Featured Sanctioned Landmarks</h2>
            <p class="text-xs text-muted m-0">Explore verified floor plans, pricing sheets, and site tours</p>
          </div>
          <a href="https://wa.me/917744009295?text=${encodeURIComponent(`Hi, I am looking for details regarding ${data.title}. Please share available units and cost sheets.`)}" target="_blank" class="btn btn-whatsapp btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Instant WhatsApp Consultation
          </a>
        </div>

        <div class="grid grid-3 gap-lg prog-cards-grid">
          <!-- Cards injected via JS -->
        </div>
      </div>

      <!-- In-depth Authority Narrative -->
      <div class="prog-content-block p-xl rounded-lg bg-white border">
        <h3 class="text-xl font-bold text-navy mb-sm">Why Invest in ${data.title}?</h3>
        <p class="text-sm text-muted leading-relaxed mb-md">${data.description}</p>
        
        <div class="prog-quick-specs grid grid-2 gap-md bg-light p-md rounded">
          <div>
            <span class="text-xs text-muted block uppercase font-bold">Corridor Growth</span>
            <strong class="text-sm text-navy">PCMC High-Growth Infrastructure & Metro Corridor</strong>
          </div>
          <div>
            <span class="text-xs text-muted block uppercase font-bold">Construction Technology</span>
            <strong class="text-sm text-navy">Mivan Monolithic Shear-Wall Precision Engineering</strong>
          </div>
        </div>
      </div>

    </div>
  `;

  // Inject matching project cards
  const grid = section.querySelector('.prog-cards-grid');
  if (grid) {
    matchingProjects.forEach(project => {
      grid.appendChild(createProjectCard(project));
    });
  }

  const style = document.createElement('style');
  style.textContent = `
    .programmatic-hub-section {
      background-color: #F8FAFC;
      padding-top: 100px;
    }

    .prog-hero-banner {
      padding: 30px 15px;
    }

    .prog-main-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--color-navy);
      margin: 10px 0;
      font-family: var(--font-heading);
      letter-spacing: -0.02em;
    }

    .prog-subtitle {
      font-size: 1.05rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    .prog-badges-bar {
      margin-top: 20px;
    }

    .prog-badge {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.4);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--color-navy);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .prog-highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
    }

    .prog-high-item {
      background: #F8FAFC;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #E2E8F0;
    }

    .prog-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 25px;
    }

    @media (max-width: 768px) {
      .programmatic-hub-section {
        padding-top: 80px;
      }
      .prog-cards-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  section.appendChild(style);

  return section;
}
