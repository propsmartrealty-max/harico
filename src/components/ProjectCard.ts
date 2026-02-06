export interface Project {
  id: string;
  slug?: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  type: string;
  price?: string;
}

export function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.onclick = (e) => {
    // Navigate via slug if available, else fallback to ID
    // Check if click originated from a button preventing default
    if ((e.target as HTMLElement).tagName.toLowerCase() === 'button') return;

    const identifier = project.slug || project.id;
    window.location.hash = `#project/${identifier}`;
  };

  card.innerHTML = `
    <div class="card-image-wrapper">
      <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">
      <div class="card-badges">
        <span class="status-badge ${project.status.toLowerCase()}">${project.status}</span>
      </div>
      <div class="card-overlay">
        <button class="btn-overlay btn-explore" onclick="event.stopPropagation(); window.location.hash = '#project/${project.slug || project.id}'">Explore</button>
        <button class="btn-overlay btn-enquire" onclick="event.stopPropagation(); window.showEnquireModal('${project.title}');">Enquire</button>
      </div>
    </div>
    
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px; color:var(--color-gold)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${project.location}
        </p>
      </div>
      
      <div class="card-details">
         <div class="detail-item">
            <span class="detail-icon">🏢</span>
            <div class="detail-text">
                <span class="detail-label">Type</span>
                <span class="detail-value">${project.type}</span>
            </div>
         </div>
         ${project.price ? `
         <div class="detail-item">
            <span class="detail-icon">💰</span>
            <div class="detail-text">
                <span class="detail-label">Price</span>
                <span class="detail-value">${project.price}</span>
            </div>
         </div>
         ` : ''}
      </div>

      <div class="card-actions">
        <div class="btn-text">
          View Details 
          <span class="arrow-icon">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L17 6L12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 6H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;

  return card;
}

export const projectCardStyles = `
  .project-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); /* Softer, deeper shadow */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.05);
  }

  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }

  /* Image Section */
  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3; /* Standard balanced ratio */
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .project-card:hover .card-image {
    transform: scale(1.1);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 25, 47, 0.4); /* Navy tint */
    opacity: 0; 
    transition: opacity 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .project-card:hover .card-overlay {
    opacity: 1;
  }
  
  .btn-overlay {
      background: var(--color-white);
      color: var(--color-navy);
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8rem;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.4s 0.1s ease;
      border: none;
  }
  
  .project-card:hover .btn-overlay {
      transform: translateY(0);
      opacity: 1;
  }
  
  .btn-overlay.btn-explore { transition-delay: 0.1s; }
  .btn-overlay.btn-enquire { 
      transition-delay: 0.2s; 
      margin-left: 10px;
      background: var(--color-gold);
      color: var(--color-white);
  }

  .card-badges {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 2;
  }

  .status-badge {
    padding: 6px 12px;
    border-radius: 4px; /* Square edges for modern tech look or soft round */
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.95);
    color: var(--color-navy);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    backdrop-filter: blur(4px);
  }
  
  .status-badge.ongoing { border-left: 3px solid var(--color-gold); }
  .status-badge.completed { border-left: 3px solid var(--color-success); }
  .status-badge.upcoming { border-left: 3px solid var(--color-navy); }

  /* Content Section */
  .card-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
  }

  .card-header {
    border-bottom: 1px solid var(--color-border-light);
    padding-bottom: 15px;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 5px;
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
  }

  .card-location {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .card-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  
  .detail-icon {
      margin-top: 2px;
      font-size: 1.1rem;
  }
  
  .detail-text {
      display: flex;
      flex-direction: column;
  }

  .detail-label {
    font-size: 0.7rem;
    color: var(--color-text-light);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .detail-value {
    font-size: 0.9rem;
    color: var(--color-navy);
    font-weight: 600;
  }

  .card-actions {
    margin-top: auto;
    padding-top: 10px;
  }

  .btn-text {
    width: 100%;
    text-align: left;
    padding: 0;
    background: transparent;
    color: var(--color-gold);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: color var(--transition-normal);
  }

  .project-card:hover .btn-text {
    color: var(--color-navy);
  }
  
  .arrow-icon {
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
  }
  
  .project-card:hover .arrow-icon {
      transform: translateX(8px);
      color: var(--color-navy);
  }
`;
