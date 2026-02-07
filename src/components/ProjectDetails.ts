import { createQuickInfoBar } from './QuickInfoBar';
import { createConfigurationTable } from './ConfigurationTable';
import { createEnquireModal } from './EnquireModal';

export function createProjectDetails(project: any): HTMLElement {
  const container = document.createElement('div');
  container.className = 'project-details-page';

  // 1. Hero Section
  const hero = document.createElement('div');
  hero.className = 'pd-hero';
  hero.style.backgroundImage = `url('${project.image}')`;
  hero.innerHTML = `
    <div class="pd-hero-overlay"></div>
    <div class="container pd-hero-content">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/projects">Projects</a> &gt; <span class="current">${project.title}</span>
      </nav>
      <h1 class="pd-title">${project.title}</h1>
      <p class="pd-subtitle">${project.tagline || 'The Edge Of Timeless Modern Sophistication'}</p>
      <div class="mt-lg fade-in-up">
         <a href="/projects" class="btn btn-secondary" style="border-color:white; color:white;">Back to Projects</a>
      </div>
    </div>
  `;

  // 2. Quick Info Bar
  const quickInfo = createQuickInfoBar(project);

  // 3. Main Content Grid (Wrapper)
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'pd-content-wrapper section';

  const innerContainer = document.createElement('div');
  innerContainer.className = 'container';

  // About Project
  const aboutSection = document.createElement('div');
  aboutSection.className = 'about-section mb-xl';
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
    <h2 class="section-heading">About Project</h2>
    <p class="text-body">${project.description}</p>
    ${project.reraId ? `<p class="mt-md text-sm" style="color: var(--color-text-secondary); font-weight: 500;">RERA Registration: <span style="color: var(--color-navy);">${project.reraId}</span></p>` : ''}
  `;

  // Configuration Table
  const configTable = createConfigurationTable(project);
  configTable.id = 'pricing';

  // 4. Amenities (Dynamic Support for Categories)
  const amenitiesSection = document.createElement('div');
  amenitiesSection.className = 'section bg-light';
  amenitiesSection.id = 'amenities';

  const iconMap: Record<string, string> = {
    'Swimming Pool': 'fa-person-swimming',
    'Resort-inspired Swimming Pool': 'fa-water',
    'Children\'s Splash Pool': 'fa-child',
    'Poolside Leisure Deck': 'fa-umbrella-beach',
    'Cabana-style Pergolas': 'fa-tent',
    'BBQ & Poolside Party Deck': 'fa-fire-burner',

    'Sacred Temple Pavilion': 'fa-om',
    'Meditation & Yoga Lawns': 'fa-seedling',
    'Zen Tranquillity Garden': 'fa-leaf',
    'Reflexology Walkway': 'fa-shoe-prints',
    'Sensory & Aromatherapy Garden': 'fa-wind',

    'Sky-level Gym': 'fa-dumbbell',
    'Indoor Yoga Studio': 'fa-person-yoga',

    'Children\'s Play Zone': 'fa-child-reaching',
    'Creative Sand Play': 'fa-bucket',
    'Multi-purpose Sports Court': 'fa-basketball',
    'Professional Mini Cricket Turf': 'fa-baseball-bat-ball',
    'Jogging & Walking Track': 'fa-person-running',
    'Dedicated Pet Park': 'fa-dog',
    'Open-air Amphitheatre': 'fa-masks-theater',
    'Party Hall with DJ System': 'fa-music',
    'Private Mini Theatre': 'fa-film',
    'Indoor Games Lounge': 'fa-chess-board',
    'Music/Dance/Hobby Studio': 'fa-guitar',

    '12 Premium Guest Suites': 'fa-bed',
    'Luxury Salon & Beauty Parlour': 'fa-scissors',
    'Exclusive Residents\' Sky Lounge': 'fa-martini-glass-citrus',
    'Co-working Spaces': 'fa-briefcase',
    'Podcast & Content Creator Studio': 'fa-microphone',
    'Sky Observation Deck': 'fa-binoculars',
    'EV Charging Points': 'fa-charging-station',

    'Clubhouse': 'fa-house-user',
    'Landscaped Garden': 'fa-tree',
    'Gym & Jogging Track': 'fa-dumbbell',
    'Temple & Flag Hoisting': 'fa-om',
    'Gazebo': 'fa-tent',
    'Sun Bathing Area': 'fa-umbrella-beach',
    'Pool Deck Area': 'fa-water',
    'Rooftop Amenities': 'fa-city',
    'Yoga & Zumba Room': 'fa-person-yoga',
    'Sunset Point': 'fa-cloud-sun',
    'Decorated Entrance Gate': 'fa-dungeon',
    'Intercom System & CCTV': 'fa-video',
    'Solar Power Backup': 'fa-solar-panel',
    'Multipurpose Hall': 'fa-people-roof',
    'Mini Theater': 'fa-film',
    'Barbeque Counter': 'fa-fire-burner',
    'Day Care Room': 'fa-baby-carriage',
    'Library': 'fa-book-open',
    'Snooker Lounge': 'fa-bowling-ball'
  };

  const renderAmenityItem = (amenity: string) => `
    <div class="amenity-box">
        <div class="icon-circle">
            <i class="fa-solid ${iconMap[amenity] || 'fa-star'}"></i>
        </div>
        <span class="amenity-name">${amenity}</span>
    </div>
  `;

  let amenitiesContent = '';
  const isCategorized = (project.amenities && project.amenities.length > 0 && typeof project.amenities[0] !== 'string');

  if (isCategorized) {
    amenitiesContent = project.amenities.map((cat: { category: string, items: string[] }) => `
        <div class="amenities-category mb-lg">
            <h3 class="category-title text-center mb-md" style="font-family: var(--font-heading); color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px;">${cat.category}</h3>
            <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                ${cat.items.map((item: string) => renderAmenityItem(item)).join('')}
            </div>
        </div>
      `).join('');
  } else {
    amenitiesContent = `
        <div class="grid amenities-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px;">
            ${(project.amenities || []).map((amenity: string) => renderAmenityItem(amenity)).join('')}
        </div>
      `;
  }

  amenitiesSection.innerHTML = `
    <div class="container">
        <div class="section-header text-center mb-xl">
            <h2 class="section-title">World Class Amenities</h2>
            <div class="title-separator mx-auto"></div>
        </div>
        ${amenitiesContent}
    </div>
  `;

  // Styles for Amenity Box
  const style = document.createElement('style');
  style.textContent = `
    .amenity-box {
        background: white;
        padding: 30px 20px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        border: 1px solid transparent;
        position: relative;
        overflow: hidden;
    }
    
    .amenity-box:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        border-color: rgba(212, 175, 55, 0.3);
    }
    
    .amenity-box::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--color-gold);
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: center;
    }
    
    .amenity-box:hover::after {
        transform: scaleX(1);
    }

    .icon-circle {
        width: 60px;
        height: 60px;
        background: #f8f9fa;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--color-gold);
        transition: all 0.3s ease;
        margin-bottom: 5px;
    }
    
    .amenity-box:hover .icon-circle {
        background: var(--color-gold);
        color: white;
        transform: rotateY(180deg);
    }
    
    .amenity-name {
        font-weight: 600;
        color: var(--color-navy);
        font-size: 0.95rem;
        line-height: 1.4;
    }
  `;
  amenitiesSection.appendChild(style);

  // 5. Connectivity (Dynamic)
  const connectivitySection = document.createElement('div');
  connectivitySection.className = 'section pd-location';
  connectivitySection.id = 'location';

  // Connectivity Content
  const connectivityHtml = (project.connectivity || []).map((item: any) => `
    <div class="connect-item" style="display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid rgba(0,0,0,0.1);">
        <span style="font-weight:600; color:var(--color-navy);">${item.title}</span>
        <span style="color:var(--color-gold); font-weight:700;">${item.time}</span>
    </div>
  `).join('');

  connectivitySection.innerHTML = `
    <div class="container grid grid-cols-2 gap-lg">
      <div class="location-info">
        <h3 class="section-heading mb-md">Connectivity</h3>
        <div class="connectivity-list" style="background:white; padding:20px; border-radius:10px; box-shadow:var(--shadow-md);">
            ${connectivityHtml}
        </div>
      </div>
      <div class="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043232!2d73.79292636283737!3d18.52460355403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bc2e9d924155%3A0x6b77c57f7243c3d5!2sPunawale%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707010000000!5m2!1sen!2sin" width="100%" height="400" style="border:0; border-radius:10px;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  `;

  // 6. Master Layout & Floor Plans HTML (Clean Layout)
  let layoutsContent = '';

  if (project.masterLayout) {
    layoutsContent += `
        <div class="mb-xl">
            <h3 class="section-heading text-center mb-lg">Master Layout</h3>
            <div class="layout-image-container fade-in-up" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); background: white;">
                <img src="${project.masterLayout}" alt="Master Layout" style="width: 100%; height: auto; display: block;">
            </div>
        </div>
    `;
  }

  if (project.floorPlans && project.floorPlans.length > 0) {
    layoutsContent += `
        <div class="mb-xl">
             <h3 class="section-heading text-center mb-lg">Floor Plans</h3>
             <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                ${project.floorPlans.map((plan: any) => `
                    <div class="plan-item fade-in-up" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                        <div class="plan-img-wrapper" style="padding: 20px; background: #fff;">
                            <img src="${plan.image}" alt="${plan.title}" style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
                        </div>
                        <div class="plan-info text-center py-md" style="border-top: 1px solid #f0f0f0; background: #fafafa;">
                            <h4 style="margin: 0; color: var(--color-navy); font-family: var(--font-heading);">${plan.title}</h4>
                        </div>
                    </div>
                `).join('')}
             </div>
        </div>
    `;
  }

  const layoutsContainer = document.createElement('div');
  layoutsContainer.className = 'section container';
  layoutsContainer.innerHTML = layoutsContent;

  // 7. Enquire Modal
  const modal = createEnquireModal();

  // 8. Final Assembly

  // A. Hero
  container.appendChild(hero);

  // B. Quick Info
  container.appendChild(quickInfo);

  // C. Main Content Wrapper
  const sectionsWrapper = document.createElement('div');
  sectionsWrapper.className = 'pd-sections-wrapper';

  // C1. About Project
  innerContainer.appendChild(aboutSection);
  sectionsWrapper.appendChild(innerContainer);

  // C2. Amenities
  sectionsWrapper.appendChild(amenitiesSection);

  // C3. Layouts (Master & Floor)
  // layoutsContainer is already created and populated above.
  sectionsWrapper.appendChild(layoutsContainer);

  // C4. Configuration / Pricing
  const pricingContainer = document.createElement('div');
  pricingContainer.className = 'section container';
  pricingContainer.appendChild(configTable);
  sectionsWrapper.appendChild(pricingContainer);

  // C5. Connectivity
  sectionsWrapper.appendChild(connectivitySection);

  container.appendChild(sectionsWrapper);
  container.appendChild(modal);

  // Add styles
  const pageStyle = document.createElement('style');
  pageStyle.textContent = `
    .pd-hero {
      height: 60vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -80px;
    }

    .pd-hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(5, 12, 51, 0.8);
    }

    .pd-hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: var(--color-white);
    }

    .breadcrumbs {
      font-size: 0.9rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.7);
    }
    .breadcrumbs a {
      color: var(--color-white);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color var(--transition-fast);
    }
    .breadcrumbs a:hover {
      border-color: var(--color-gold);
    }
    .breadcrumbs .current {
      color: var(--color-gold);
      font-weight: 600;
    }

    .pd-title {
      font-size: 3.5rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .pd-subtitle {
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .text-body {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--color-text-light);
      max-width: 800px;
    }

    .bg-white { background-color: var(--color-white); }
    .mb-md { margin-bottom: var(--spacing-md); }
    .mb-xl { margin-bottom: var(--spacing-xl); }

    @media (max-width: 768px) {
      .pd-title { font-size: 2rem; }
      .pd-hero { height: 50vh; }
      .pd-location .grid-cols-2 { grid-template-columns: 1fr; }
    }
  `;
  container.appendChild(pageStyle);

  // Logic to show modal on buttons
  setTimeout(() => {
    // If there were other buttons needing listeners, they'd go here.
  }, 0);

  return container;
}
