import { createQuickInfoBar } from './QuickInfoBar';
import { createConfigurationTable } from './ConfigurationTable';
import { createEnquireModal } from './EnquireModal';
import { createSpecificationsMatrix } from './SpecificationsMatrix';
import { createEmiCalculator } from './EmiCalculator';

export function createProjectDetails(project: any): HTMLElement {
  const container = document.createElement('div');
  container.className = 'project-details-page';

  // 1. Hero Section
  const hero = document.createElement('div');
  hero.className = 'pd-hero';
  hero.style.backgroundImage = `url('${project.image}')`;
  hero.innerHTML = `
    <div class="pd-hero-overlay"></div>
    <div class="container pd-hero-content" style="position: relative;">
      ${project.reraNumber ? `
      <div class="hero-rera-badge">
        <div class="hero-rera-info">
          <span class="hero-rera-title">MahaRERA Verified</span>
          <span class="hero-rera-id"><i class="fa-solid fa-shield-halved" style="color: #25D366; margin-right:4px;"></i>${project.reraNumber}</span>
        </div>
        ${project.reraQRCodeUrl ? `<img src="${project.reraQRCodeUrl}" alt="MahaRERA QR Code" class="hero-rera-qr">` : ''}
      </div>
      ` : ''}
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/projects">Projects</a> &gt; <span class="current">${project.title}</span>
      </nav>
      <h1 class="pd-title">${project.title}</h1>
      <p class="pd-subtitle">${project.tagline || 'The Edge Of Timeless Modern Sophistication'}</p>
      
      <div class="pd-hero-pills flex justify-center flex-wrap gap-xs mt-md">
        ${project.landParcel ? `<span class="pd-pill"><i class="fa-solid fa-vector-square mr-1"></i> ${project.landParcel}</span>` : ''}
        ${project.towers ? `<span class="pd-pill"><i class="fa-solid fa-building mr-1"></i> ${project.towers}</span>` : ''}
        ${project.floors ? `<span class="pd-pill"><i class="fa-solid fa-layer-group mr-1"></i> ${project.floors}</span>` : ''}
        ${project.possession ? `<span class="pd-pill"><i class="fa-solid fa-calendar-check mr-1"></i> Possession: ${project.possession}</span>` : ''}
      </div>

      <div class="mt-lg flex justify-center gap-md flex-wrap">
        <a href="https://wa.me/917744009295?text=Hi,%20I%20want%20to%20download%20the%20official%20brochure%20and%20pricing%20sheet%20for%20${encodeURIComponent(project.title)}." target="_blank" class="btn btn-primary">
          <i class="fa-solid fa-file-arrow-down mr-2"></i> Download Brochure & Cost Sheet
        </a>
        <button class="btn btn-secondary pd-visit-btn" style="border-color:white; color:white;">
          <i class="fa-solid fa-calendar-days mr-2"></i> Book VIP Site Visit
        </button>
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

  // About Project & Highlights Section
  const aboutSection = document.createElement('div');
  aboutSection.className = 'about-section mb-xl';
  aboutSection.id = 'about';

  const highlightsHtml = (project.highlights || []).map((hl: string) => `
    <li class="flex items-start gap-sm mb-xs">
      <i class="fa-solid fa-check-circle text-gold mt-1"></i>
      <span class="text-sm font-semibold text-navy">${hl}</span>
    </li>
  `).join('');

  aboutSection.innerHTML = `
    <div class="grid grid-cols-2 gap-xl items-start">
      <div>
        <h2 class="section-heading">About Project</h2>
        <p class="text-body mb-md">${project.description}</p>
        
        ${project.reraNumber ? `
          <div class="mt-md p-md rounded-md bg-light border flex items-center gap-md" style="border-left: 4px solid var(--color-gold);">
            ${project.reraQRCodeUrl ? `<img src="${project.reraQRCodeUrl}" alt="MahaRERA QR Code" style="width: 55px; height: 55px; border-radius: 4px; border: 1px solid #CBD5E1; background: white; padding: 2px;">` : ''}
            <div>
              <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin: 0 0 2px;">MahaRERA Registered</p>
              <p style="font-weight: 700; color: var(--color-navy); margin: 0; font-size: 0.95rem;">
                <i class="fa-solid fa-shield-halved text-success mr-1"></i> ${project.reraNumber}
              </p>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Highlights Box -->
      ${project.highlights && project.highlights.length > 0 ? `
        <div class="project-highlights-box p-lg rounded-lg bg-light-subtle border">
          <h3 class="text-lg font-bold text-navy mb-md flex items-center gap-xs">
            <i class="fa-solid fa-star text-gold"></i> Project Key Highlights
          </h3>
          <ul class="highlights-list p-0 list-none">
            ${highlightsHtml}
          </ul>
        </div>
      ` : ''}
    </div>
  `;

  // Configuration Table
  const configTable = createConfigurationTable(project);
  configTable.id = 'pricing';

  // Bank Loan Partners Strip
  const bankSection = document.createElement('div');
  bankSection.className = 'bank-partners-section mt-xl p-lg rounded-lg bg-white border text-center';
  const banks = project.bankPartners || ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda'];
  bankSection.innerHTML = `
    <span class="text-xs uppercase font-bold text-gold tracking-widest block mb-xs">Home Loan Sanction Partners</span>
    <h3 class="text-xl font-bold text-navy mb-md">Pre-Approved for Zero-Hassle Financing</h3>
    <div class="flex justify-center flex-wrap gap-sm items-center">
      ${banks.map((b: string) => `<span class="bank-badge font-semibold text-sm px-md py-xs rounded-full border bg-light-subtle text-navy"><i class="fa-solid fa-landmark mr-1 text-gold"></i> ${b}</span>`).join('')}
    </div>
    <p class="text-xs text-muted mt-sm">*Enjoy pre-approved lowest interest rates and flexible disbursement schedules.</p>
  `;

  // 4. Amenities (Dynamic Support for Categories)
  const amenitiesSection = document.createElement('div');
  amenitiesSection.className = 'section bg-light';
  amenitiesSection.id = 'amenities';

  const iconMap: Record<string, string> = {
    'Swimming Pool': 'fa-person-swimming',
    'Swimming Pool with Infinity Edge': 'fa-person-swimming',
    'Resort-inspired Swimming Pool': 'fa-water',
    'Resort-inspired Grand Swimming Pool': 'fa-water',
    'Children\'s Splash Pool': 'fa-child',
    'Children\'s Splash Fun Pool': 'fa-child',
    'Kids Splash Pool': 'fa-child',
    'Kids Play Area': 'fa-child-reaching',
    'Children\'s Play Zone': 'fa-child-reaching',
    'Children\'s Adventure Play Zone with Rubberized Flooring': 'fa-child-reaching',
    'Children Play Area': 'fa-child-reaching',
    'Poolside Leisure Deck': 'fa-umbrella-beach',
    'Poolside Sunken Cabana Deck': 'fa-umbrella-beach',
    'Cabana-style Pergolas': 'fa-tent',
    'Cabana-style Private Pergolas': 'fa-tent',
    'Cabana & Gazebo Sitouts': 'fa-tent',
    'BBQ & Poolside Party Deck': 'fa-fire-burner',
    'BBQ & Poolside Celebration Deck': 'fa-fire-burner',
    'Barbeque Counter & Pergola': 'fa-fire-burner',
    'Sacred Temple Pavilion': 'fa-om',
    'Sacred Temple Pavilion & Bell Tower': 'fa-om',
    'Temple & Flag Hoisting Plaza': 'fa-om',
    'Temple & Flag Hoisting': 'fa-om',
    'Meditation & Yoga Lawns': 'fa-seedling',
    'Meditation, Pranayama & Yoga Lawns': 'fa-seedling',
    'Zen Tranquillity Garden': 'fa-leaf',
    'Zen Tranquillity Rock Garden': 'fa-leaf',
    'Reflexology Walkway': 'fa-shoe-prints',
    'Acupressure Reflexology Walkway': 'fa-shoe-prints',
    'Sensory & Aromatherapy Garden': 'fa-wind',
    'Sensory & Aromatherapy Floral Garden': 'fa-wind',
    'Sky-level Gym': 'fa-dumbbell',
    'Sky-Level Panoramic Gymnasium': 'fa-dumbbell',
    'Equipped Gymnasium & Crossfit Zone': 'fa-dumbbell',
    'Gymnasium': 'fa-dumbbell',
    'Gym & Jogging Track': 'fa-dumbbell',
    'Indoor Yoga Studio': 'fa-person-yoga',
    'Indoor Aerobics & Yoga Studio': 'fa-person-yoga',
    'Yoga & Zumba Studio': 'fa-person-yoga',
    'Yoga & Zumba Room': 'fa-person-yoga',
    'Yoga Deck': 'fa-person-yoga',
    'Creative Sand Play': 'fa-bucket',
    'Creative Sandcastle Pit': 'fa-bucket',
    'Multi-purpose Sports Court': 'fa-basketball',
    'Multi-Purpose Badminton & Basketball Sports Court': 'fa-basketball',
    'Professional Mini Cricket Turf': 'fa-baseball-bat-ball',
    'Professional Box Cricket Turf with Floodlights': 'fa-baseball-bat-ball',
    'Jogging & Walking Track': 'fa-person-running',
    'Jogging & Nordic Walking Track': 'fa-person-running',
    'Jogging & Acupressure Track': 'fa-person-running',
    'Dedicated Pet Park': 'fa-dog',
    'Dedicated Pet Exercise Park & Agility Zone': 'fa-dog',
    'Open-air Amphitheatre': 'fa-masks-theater',
    'Open-Air Roman Amphitheatre': 'fa-masks-theater',
    'Party Hall with DJ System': 'fa-music',
    'Acoustic Party Banquet Hall with Sound System': 'fa-music',
    'Party Lawn with Banquet Deck': 'fa-music',
    'Party Lawn': 'fa-music',
    'Party Lawn with BBQ Pavilion': 'fa-music',
    'Private Mini Theatre': 'fa-film',
    'Private Mini Theatre (30-Seater)': 'fa-film',
    'Private 40-Seater Dolby Atmos Mini Theatre': 'fa-film',
    'Mini Theater': 'fa-film',
    'Indoor Games Lounge': 'fa-chess-board',
    'Indoor Games Arcade (Table Tennis, Foosball, Carrom)': 'fa-chess-board',
    'Snooker & Indoor Games Arena': 'fa-chess-board',
    'Snooker Lounge': 'fa-chess-board',
    'Music/Dance/Hobby Studio': 'fa-guitar',
    'Music, Dance & Creative Hobby Studio': 'fa-guitar',
    '12 Premium Guest Suites': 'fa-bed',
    '12 Luxury Furnished Guest Suites for Visitors': 'fa-bed',
    'Luxury Salon & Beauty Parlour': 'fa-scissors',
    'Salon & Wellness Spa Corner': 'fa-scissors',
    'Exclusive Residents\' Sky Lounge': 'fa-martini-glass-citrus',
    'Exclusive Residents\' Rooftop Sky Lounge': 'fa-martini-glass-citrus',
    'Co-working Spaces': 'fa-briefcase',
    'Air-Conditioned Co-Working Hub with High-Speed WiFi': 'fa-briefcase',
    'Library & Co-working Lounge': 'fa-briefcase',
    'Library': 'fa-book-open',
    'Podcast & Content Creator Studio': 'fa-microphone',
    'Podcast & Digital Content Creator Studio': 'fa-microphone',
    'Sky Observation Deck': 'fa-binoculars',
    '24th Floor Sky Observation Deck': 'fa-binoculars',
    'Rooftop Stargazing Observatory': 'fa-binoculars',
    'Rooftop Amenities': 'fa-city',
    'EV Charging Points': 'fa-charging-station',
    'EV Charging Stations': 'fa-charging-station',
    'EV Charging Point': 'fa-charging-station',
    'Fast EV Charging Stations for Cars & Two-Wheelers': 'fa-charging-station',
    'Grand Clubhouse (10,000 sq.ft)': 'fa-house-user',
    'Clubhouse': 'fa-house-user',
    'Grand Clubhouse & Gymnasium': 'fa-house-user',
    'Landscaped Garden': 'fa-tree',
    'Landscape Meditation Gardens': 'fa-tree',
    'Senior Citizen Sitout': 'fa-couch',
    'Senior Citizen Sitout & Gazebo': 'fa-couch',
    'Sunset Point': 'fa-cloud-sun',
    'Grand Designer Entrance Gate': 'fa-dungeon',
    'Decorated Entrance Gate': 'fa-dungeon',
    'Intercom System & CCTV': 'fa-video',
    'Intercom & Video Door Phone': 'fa-video',
    'Solar Power Backup': 'fa-solar-panel',
    '100% DG Power Backup for Common Areas': 'fa-bolt',
    'Multipurpose Hall': 'fa-people-roof',
    'Multipurpose Community Hall': 'fa-people-roof',
    'Day Care & Creche Center': 'fa-baby-carriage',
    'Day Care Room': 'fa-baby-carriage'
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
            <span class="eyebrow">Luxury Lifestyle</span>
            <h2 class="section-title">World Class Curated Amenities</h2>
            <div class="title-separator mx-auto"></div>
        </div>
        ${amenitiesContent}
    </div>
  `;

  // 5. Floor Plans & Master Layout
  let layoutsContent = '';
  if (project.masterLayout) {
    layoutsContent += `
        <div class="mb-xl">
            <h3 class="section-heading text-center mb-lg">Master Site Layout</h3>
            <div class="layout-image-container fade-in-up" onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${project.masterLayout}', 'Master Site Layout', '${project.title}', '${project.title}');" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); background: white; max-width: 900px; margin: 0 auto; border: 1px solid #E2E8F0; cursor: zoom-in; position: relative;" title="Click to view full-screen">
                <img src="${project.masterLayout}" alt="Master Layout" style="width: 100%; height: auto; display: block;">
                <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(10,25,47,0.85); color: white; padding: 6px 14px; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                  <i class="fa-solid fa-expand text-gold"></i> Click to Zoom Fullscreen
                </div>
            </div>
        </div>
    `;
  }

  if (project.floorPlans && project.floorPlans.length > 0) {
    layoutsContent += `
        <div class="mb-xl">
             <h3 class="section-heading text-center mb-lg">Architectural Floor Plans</h3>
             <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
                ${project.floorPlans.map((plan: any) => `
                    <div class="plan-item fade-in-up" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0; display: flex; flex-direction: column;">
                        <div class="plan-img-wrapper" onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${plan.image}', '${plan.title.replace(/'/g, "\\'")}', '${plan.carpet || ''}', '${project.title.replace(/'/g, "\\'")}');" style="padding: 20px; background: #fff; flex-grow: 1; display: flex; align-items: center; justify-content: center; cursor: zoom-in; position: relative;" title="Click to Zoom Plan">
                            <img src="${plan.image}" alt="${plan.title}" style="width: 100%; max-height: 280px; object-fit: contain; display: block;">
                            <span style="position: absolute; top: 12px; right: 12px; background: rgba(10,25,47,0.75); color: var(--color-gold); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                        <div class="plan-info p-md text-center" style="border-top: 1px solid #F1F5F9; background: #FAFBFC;">
                            <h4 style="margin: 0 0 5px; color: var(--color-navy); font-family: var(--font-heading); font-size: 1.1rem;">${plan.title}</h4>
                            ${plan.carpet ? `<span style="font-size: 0.85rem; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 10px;">Carpet Area: ${plan.carpet}</span>` : ''}
                            <div class="flex gap-xs">
                              <button onclick="if(window.openFloorPlanLightbox) window.openFloorPlanLightbox('${plan.image}', '${plan.title.replace(/'/g, "\\'")}', '${plan.carpet || ''}', '${project.title.replace(/'/g, "\\'")}');" class="btn btn-sm btn-secondary w-full" style="padding: 8px;">
                                <i class="fa-solid fa-expand mr-1"></i> Zoom
                              </button>
                              <a href="https://wa.me/917744009295?text=Hi,%20please%20send%20me%20the%20detailed%20high-res%20floorplan%20and%20dimensions%20for%20${encodeURIComponent(plan.title)}%20at%20${encodeURIComponent(project.title)}." target="_blank" class="btn btn-sm btn-primary w-full" style="padding: 8px;">
                                <i class="fa-brands fa-whatsapp mr-1"></i> Cost Sheet
                              </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
             </div>
        </div>
    `;
  }

  const layoutsContainer = document.createElement('div');
  layoutsContainer.className = 'section container';
  layoutsContainer.id = 'floor-plans';
  layoutsContainer.innerHTML = layoutsContent;

  // 6. Specifications Matrix Component
  const specsComponent = createSpecificationsMatrix(project.specifications);

  // 7. Embedded EMI Calculator
  const emiComponent = createEmiCalculator();

  // 8. Connectivity Section
  const connectivitySection = document.createElement('div');
  connectivitySection.className = 'section pd-location';
  connectivitySection.id = 'location';

  const connectivityHtml = (project.connectivity || []).map((item: any) => `
    <div class="connect-item" style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #F1F5F9;">
        <div>
          <span style="font-weight:600; color:var(--color-navy); display:block;">${item.title}</span>
          ${item.distance ? `<span style="font-size:0.75rem; color:var(--color-text-secondary);"><i class="fa-solid fa-route text-gold mr-1"></i> ${item.distance}</span>` : ''}
        </div>
        <span class="badge-time" style="background:var(--color-navy); color:var(--color-gold); font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:20px;">${item.time}</span>
    </div>
  `).join('');

  connectivitySection.innerHTML = `
    <div class="container grid grid-cols-2 gap-lg items-center">
      <div class="location-info">
        <span class="eyebrow">Strategic Urban Advantage</span>
        <h3 class="section-heading mb-md">Seamless Connectivity</h3>
        <div class="connectivity-list" style="background:white; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.06); border:1px solid #E2E8F0; overflow:hidden;">
            ${connectivityHtml}
        </div>
      </div>
      <div class="location-map">
        <div style="border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1); border:1px solid #E2E8F0;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043232!2d73.79292636283737!3d18.52460355403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bc2e9d924155%3A0x6b77c57f7243c3d5!2sPunawale%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707010000000!5m2!1sen!2sin" width="100%" height="420" style="border:0; display:block;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  `;

  // 9. Enquire Modal
  const modal = createEnquireModal();

  // 9. MahaRERA Regulatory & Sanctioned Layouts Guarantee Box
  const reraTrustSection = document.createElement('div');
  reraTrustSection.className = 'section container';
  reraTrustSection.innerHTML = `
    <div class="p-xl rounded-lg bg-white border" style="box-shadow: 0 10px 30px rgba(0,0,0,0.04); border-left: 5px solid var(--color-gold);">
      <div class="flex justify-between items-center flex-wrap gap-md">
        <div>
          <span class="text-xs uppercase font-bold text-gold tracking-widest block mb-xs"><i class="fa-solid fa-shield-halved mr-1"></i> Government Approved & Sanctioned</span>
          <h3 class="text-2xl font-bold text-navy m-0">MahaRERA Registration & Legal Title Clearance</h3>
          <p class="text-sm text-muted mt-xs m-0">Project Registration Number: <strong class="text-navy font-bold">${project.reraNumber || project.reraId || 'Approved'}</strong></p>
        </div>
        <div class="flex items-center gap-md">
          ${project.reraQRCodeUrl ? `
            <img src="${project.reraQRCodeUrl}" alt="MahaRERA QR" style="width: 70px; height: 70px; border: 2px solid var(--color-gold); border-radius: 8px; padding: 3px; background: white;">
          ` : ''}
          <a href="https://maharera.mahaonline.gov.in" target="_blank" class="btn btn-secondary btn-sm">
            <i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Verify on MahaRERA Portal
          </a>
        </div>
      </div>
      <p class="text-xs text-muted mt-md pt-sm border-top m-0">
        *All sanctions, building commencement certificates (CC), architectural blueprints, and environmental clearances are 100% verified and accessible on the official Maharashtra Real Estate Regulatory Authority portal.
      </p>
    </div>
  `;

  // 10. Investor Rental Yield & Micro-Market Growth Analysis
  const investorSection = document.createElement('div');
  investorSection.className = 'section bg-light';
  investorSection.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow">Capital Appreciation & Rental Yield</span>
        <h2 class="section-title">Institutional Real Estate Investment Thesis</h2>
        <div class="title-separator mx-auto"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Positioned directly in West Pune's highest capital appreciation corridor with sustained rental demand from 350,000+ tech professionals.
        </p>
      </div>

      <div class="grid grid-3 gap-md">
        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">4.5% — 5.2%</span>
          <h4 class="text-navy font-bold text-base mb-xs">Projected Annual Rental Yield</h4>
          <p class="text-xs text-muted m-0">Driven by rapid hiring across Hinjewadi IT Park Phase 1-3, Talegaon auto corridor, and PCMC industrial hub.</p>
        </div>

        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">12% — 15%</span>
          <h4 class="text-navy font-bold text-base mb-xs">3-Year Capital Appreciation</h4>
          <p class="text-xs text-muted m-0">Fuelled by upcoming Pune Metro Line 3 extension, Ring Road expansion, and Mukai Chowk arterial grade-separators.</p>
        </div>

        <div class="p-lg rounded-lg bg-white border">
          <span class="text-gold text-2xl font-bold block mb-xs">100%</span>
          <h4 class="text-navy font-bold text-base mb-xs">Mivan Monolithic Concrete</h4>
          <p class="text-xs text-muted m-0">High-grade structural earthquake-resistant shear walls ensuring superior thermal comfort, acoustic insulation, and durability.</p>
        </div>
      </div>
    </div>
  `;

  // Final Assembly
  container.appendChild(hero);
  container.appendChild(quickInfo);

  const sectionsWrapper = document.createElement('div');
  sectionsWrapper.className = 'pd-sections-wrapper';

  // About + Highlights
  innerContainer.appendChild(aboutSection);
  sectionsWrapper.appendChild(innerContainer);

  // Layouts
  sectionsWrapper.appendChild(layoutsContainer);

  // Configuration / Pricing
  const pricingContainer = document.createElement('div');
  pricingContainer.className = 'section container';
  pricingContainer.appendChild(configTable);
  pricingContainer.appendChild(bankSection);
  sectionsWrapper.appendChild(pricingContainer);

  // Specifications
  sectionsWrapper.appendChild(specsComponent);

  // Amenities
  sectionsWrapper.appendChild(amenitiesSection);

  // Financial EMI Calculator
  sectionsWrapper.appendChild(emiComponent);

  // Connectivity
  sectionsWrapper.appendChild(connectivitySection);

  // MahaRERA Trust Guarantee
  sectionsWrapper.appendChild(reraTrustSection);

  // Investor Growth Analysis
  sectionsWrapper.appendChild(investorSection);

  container.appendChild(sectionsWrapper);
  container.appendChild(modal);

  // Styles
  const pageStyle = document.createElement('style');
  pageStyle.textContent = `
    .pd-hero {
      height: 65vh;
      min-height: 520px;
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -90px;
      padding-top: 90px;
    }

    .pd-hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(10, 25, 47, 0.75) 0%, rgba(10, 25, 47, 0.9) 100%);
    }

    .pd-hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: var(--color-white);
      max-width: 900px;
    }

    .pd-pill {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.4);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #FFFFFF;
    }

    .breadcrumbs {
      font-size: 0.85rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.7);
    }
    .breadcrumbs a {
      color: var(--color-white);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    .breadcrumbs a:hover {
      color: var(--color-gold);
    }
    .breadcrumbs .current {
      color: var(--color-gold);
      font-weight: 600;
    }

    .pd-title {
      font-size: clamp(2.5rem, 5vw, 3.8rem);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      font-family: var(--font-heading);
    }

    .pd-subtitle {
      font-size: 1.15rem;
      font-weight: 300;
      color: #E2E8F0;
    }

    .text-body {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--color-text-secondary);
    }

    .project-highlights-box {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }

    .highlights-list li {
      padding: 8px 0;
      border-bottom: 1px solid #F1F5F9;
    }
    .highlights-list li:last-child {
      border-bottom: none;
    }

    .hero-rera-badge {
      position: absolute;
      top: -20px;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      border: 1px solid rgba(212, 175, 55, 0.5);
      border-left: 4px solid var(--color-gold);
      z-index: 10;
    }

    .hero-rera-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }

    .hero-rera-title {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-text-secondary);
      font-weight: 700;
    }

    .hero-rera-id {
      font-size: 0.95rem;
      color: var(--color-navy);
      font-weight: 800;
      margin-top: 2px;
      letter-spacing: 0.5px;
    }

    .hero-rera-qr {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 4px;
      border: 1px solid var(--color-border-light);
      padding: 2px;
      background: white;
    }

    @media (max-width: 900px) {
      .hero-rera-badge {
         position: static;
         margin: 0 auto 20px auto;
         width: fit-content;
      }
      .pd-hero {
        height: auto;
        padding: 120px 0 60px;
      }
    }
  `;
  container.appendChild(pageStyle);

  // VIP Visit Button Trigger
  setTimeout(() => {
    const visitBtn = container.querySelector('.pd-visit-btn');
    visitBtn?.addEventListener('click', () => {
      if ((window as any).showEnquireModal) {
        (window as any).showEnquireModal(`VIP Site Visit for ${project.title}`);
      }
    });
  }, 0);

  return container;
}
