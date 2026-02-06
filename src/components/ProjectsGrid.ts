import { createProjectCard, type Project, projectCardStyles } from './ProjectCard';
import { projectsData } from '../data/projects';

const projects: Project[] = Object.values(projectsData);

export function createProjectsGrid(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'section projects-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Exceptional Living</span>
        <h2 class="section-title fade-in-up delay-1">Exclusive Works</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="tabs-container fade-in-up delay-2 mb-xl text-center">
        <button class="filter-tab active" data-filter="all">All Projects</button>
        <button class="filter-tab" data-filter="residential">Residential</button>
        <button class="filter-tab" data-filter="commercial">Commercial</button>
        <button class="filter-tab" data-filter="ongoing">Ongoing</button>
      </div>
      
      <div class="grid projects-grid">
        <!-- Projects injected here -->
      </div>
    </div>
  `;

  const gridContainer = section.querySelector('.projects-grid')!;
  const tabs = section.querySelectorAll('.filter-tab');

  // Observer for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  function renderProjects(filter: string) {
    gridContainer.innerHTML = '';

    const filteredProjects = projects.filter(project => {
      if (filter === 'all') return true;
      if (filter === 'ongoing') return project.status === 'Ongoing';
      if (filter === 'residential') return project.type.toLowerCase().includes('home') || project.type.includes('BHK') || project.type.includes('Apartment');
      if (filter === 'commercial') return project.type.toLowerCase().includes('commercial') || project.type.includes('Office');
      return true;
    });

    if (filteredProjects.length === 0) {
      gridContainer.innerHTML = '<div class="text-center col-span-full py-xl text-muted">No projects found in this category.</div>';
      return;
    }

    filteredProjects.forEach((project, index) => {
      const card = createProjectCard(project);
      card.classList.add('project-card-wrapper');
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';

      card.classList.add('animate-card');
      // Reset transition delay so they animate in together nicely on filter change
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;

      gridContainer.appendChild(card);

      // Slight timeout to allow DOM insertion before observing/animating
      setTimeout(() => observer.observe(card), 50);
    });
  }

  // Initial Render
  renderProjects('all');

  // Event Listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    ${projectCardStyles}
    
    .projects-section {
      background-color: var(--color-secondary-bg);
      padding: 100px 0;
      position: relative;
    }
    
    .eyebrow {
      display: block;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 15px;
      font-family: var(--font-heading);
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--color-navy);
      font-weight: 700;
      margin-bottom: 20px;
      font-family: var(--font-heading);
    }

    .title-separator {
      width: 80px;
      height: 3px;
      background-color: var(--color-gold);
      margin-bottom: 30px; /* Reduced to fit tabs */
      position: relative;
    }
    
    .title-separator::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 10px;
        height: 3px;
        background-color: var(--color-navy);
    }

    /* Tabs Styles */
    .tabs-container {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    .filter-tab {
        background: transparent;
        border: 1px solid var(--color-border);
        padding: 10px 25px;
        border-radius: 30px;
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 1px;
    }

    .filter-tab:hover {
        border-color: var(--color-gold);
        color: var(--color-gold);
    }

    .filter-tab.active {
        background: var(--color-gold);
        border-color: var(--color-gold);
        color: var(--color-white);
        box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
    }

    .mx-auto { margin-left: auto; margin-right: auto; }
    .mb-xl { margin-bottom: var(--spacing-xl); }
    .col-span-full { grid-column: 1 / -1; }
    .text-muted { color: var(--color-text-light); }
    .py-xl { padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl); }

    .projects-grid {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      padding: 0 10px;
    }

    /* Animation Classes */
    .animate-card {
        transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    .animate-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .fade-in-up {
        opacity: 0;
        animation: fadeUp 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    
    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
  `;
  section.appendChild(style);

  return section;
}
