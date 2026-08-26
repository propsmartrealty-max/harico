import './styles/global.css';
import './styles/layout.css';

import { createHeader } from './components/Header';
import { createHero } from './components/Hero';
import { createBuilderLegacy } from './components/BuilderLegacy';
import { createProjectsGrid } from './components/ProjectsGrid';
import { createProjectComparison } from './components/ProjectComparison';
import { createSpecificationsMatrix } from './components/SpecificationsMatrix';
import { createLocationIntelligence } from './components/LocationIntelligence';
import { createAmenities } from './components/Amenities';
import { createEmiCalculator } from './components/EmiCalculator';
import { createTestimonials } from './components/Testimonials';
import { createFaqSection } from './components/FaqSection';
import { createFooter } from './components/Footer';
import { createEnquireModal } from './components/EnquireModal';
import { createProjectDetails } from './components/ProjectDetails';
import { router } from './router';
import { projectsData } from './data/projects';
import { initSEO } from './utils/schemaGenerator';
import { generateKeywords } from './data/seo_strategy';
import { createPrivacyPolicy, createTermsOfUse } from './components/LegalPages';
import { animationEngine } from './utils/animationEngine';

const app = document.querySelector<HTMLDivElement>('#app')!;
const header = createHeader();
const footer = createFooter();
const enquireModal = createEnquireModal(); // Create modal

// Mount static header, footer, modal
app.appendChild(header);
const mainAppContainer = document.createElement('main');
app.appendChild(mainAppContainer);
app.appendChild(footer);
app.appendChild(enquireModal);

// Route Handlers
router.add('/', () => {
    mainAppContainer.innerHTML = ''; // Clear current view
    document.title = 'Harico Estates | Luxury 2 & 3 BHK Flats in Punawale & Kiwale by Sentosa';
    
    // Inject global schema and dense keywords
    initSEO();
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', generateKeywords('global', 300));

    // Master narrative flow
    mainAppContainer.appendChild(createHero());
    mainAppContainer.appendChild(createBuilderLegacy());
    mainAppContainer.appendChild(createProjectsGrid());
    mainAppContainer.appendChild(createProjectComparison());
    mainAppContainer.appendChild(createSpecificationsMatrix());
    mainAppContainer.appendChild(createLocationIntelligence());
    mainAppContainer.appendChild(createAmenities());
    mainAppContainer.appendChild(createEmiCalculator());
    mainAppContainer.appendChild(createTestimonials());
    mainAppContainer.appendChild(createFaqSection());

    // Initialize ultra-advanced animation & physics engine
    setTimeout(() => {
        animationEngine.init();
    }, 50);
});

const legacySlugs: Record<string, string> = {
    '2-3-bhk-flats-in-kiwale-harico-divaam': 'harico-divaam',
    'harico-edge-punawale': 'harico-edge',
    'harico-pride-punawale': 'harico-pride'
};

router.add('/privacy', () => {
    mainAppContainer.innerHTML = '';
    initSEO();
    mainAppContainer.appendChild(createPrivacyPolicy());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/terms', () => {
    mainAppContainer.innerHTML = '';
    initSEO();
    mainAppContainer.appendChild(createTermsOfUse());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/project', (params, slug) => {
    mainAppContainer.innerHTML = '';

    // Check for legacy slug first
    if (slug && legacySlugs[slug]) {
        const newSlug = legacySlugs[slug];
        router.navigate(`/project/${newSlug}`);
        return;
    }

    let project = null;

    // Strategy 1: Look up by slug
    if (slug) {
        project = Object.values(projectsData).find(p => p.slug === slug);
    }

    // Strategy 2: Look up by ID
    if (!project && params?.get('id')) {
        const id = params.get('id');
        project = projectsData[id as keyof typeof projectsData];
    }

    if (project) {
        document.title = `${project.title} | ${project.location} | Harico Estates`;
        mainAppContainer.appendChild(createProjectDetails(project));
        setTimeout(() => animationEngine.init(), 50);
    } else {
        console.warn('[Router] Project not found for slug:', slug);
        router.navigate('/'); // Fallback
    }
});

console.log("Harico Estates Portal Initialized with Ultra-Modern Physics & Animation Engine");
