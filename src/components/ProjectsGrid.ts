import { createProjectCard, type Project, projectCardStyles } from './ProjectCard';
import { projectsData } from '../data/projects';
import { animationEngine } from '../utils/animationEngine';

const projects: Project[] = Object.values(projectsData);

export function createProjectsGrid(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'section projects-section lux-reveal';

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Handpicked Masterpieces</span>
        <h2 class="section-title fade-in-up delay-1">Featured Luxury Portfolio</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Explore iconic residential landmarks across Punawale & Kiwale, engineered with Mivan monolithic concrete and 100% MahaRERA regulatory compliance.
        </p>
      </div>

      <!-- Modern Luxury Filter Tabs -->
      <div class="luxury-tabs-wrapper fade-in-up delay-2 mb-xl text-center">
        <button class="lux-filter-tab active" data-filter="all">
          <span>All Landmarks</span>
          <span class="tab-count-badge">${projects.length}</span>
        </button>
        <button class="lux-filter-tab" data-filter="punawale">
          <span>Punawale</span>
          <span class="tab-count-badge">2</span>
        </button>
        <button class="lux-filter-tab" data-filter="kiwale">
          <span>Kiwale</span>
          <span class="tab-count-badge">1</span>
        </button>
        <button class="lux-filter-tab" data-filter="ongoing">
          <span>Ongoing</span>
          <span class="tab-count-badge">2</span>
        </button>
      </div>
      
      <div class="grid projects-grid-modern">
        <!-- Projects injected here -->
      </div>
    </div>
  `;

  const gridContainer = section.querySelector('.projects-grid-modern')!;
  const tabs = section.querySelectorAll('.lux-filter-tab');

  function renderProjects(filter: string) {
    gridContainer.innerHTML = '';

    const filteredProjects = projects.filter(project => {
      if (filter === 'all') return true;
      if (filter === 'ongoing') return project.status === 'Ongoing';
      if (filter === 'punawale') return project.location.toLowerCase().includes('punawale');
      if (filter === 'kiwale') return project.location.toLowerCase().includes('kiwale');
      return true;
    });

    if (filteredProjects.length === 0) {
      gridContainer.innerHTML = '<div class="text-center col-span-full py-xl text-muted">No projects found matching this filter.</div>';
      return;
    }

    filteredProjects.forEach((project, index) => {
      const card = createProjectCard(project);
      card.style.opacity = '0';
      card.style.transform = 'translateY(25px)';
      card.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;

      gridContainer.appendChild(card);

      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });

    // Initialize 3D tilt on newly rendered cards
    setTimeout(() => {
      animationEngine.init3DTilt();
    }, 50);
  }

  // Initial Render
  renderProjects('all');

  // Event Listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    ${projectCardStyles}
    
    .projects-section {
      background-color: #F8FAFC;
      padding: 100px 0;
      position: relative;
    }

    .luxury-tabs-wrapper {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .lux-filter-tab {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      padding: 10px 22px;
      border-radius: 9999px;
      font-family: var(--font-heading);
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      text-transform: uppercase;
      font-size: 0.82rem;
      letter-spacing: 0.8px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    }

    .lux-filter-tab:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
      transform: translateY(-2px);
    }

    .lux-filter-tab.active {
      background: var(--color-navy);
      border-color: var(--color-navy);
      color: #FFFFFF;
      box-shadow: 0 6px 20px rgba(10, 25, 47, 0.2);
    }

    .tab-count-badge {
      background: rgba(212, 175, 55, 0.18);
      color: var(--color-gold);
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 9999px;
      font-weight: 800;
    }

    .lux-filter-tab.active .tab-count-badge {
      background: var(--color-gold);
      color: var(--color-navy);
    }

    .projects-grid-modern {
      display: grid;
      gap: 35px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      padding: 0 10px;
    }

    @media (max-width: 768px) {
      .projects-grid-modern {
        grid-template-columns: 1fr;
      }
    }
  `;
  section.appendChild(style);

  return section;
}
