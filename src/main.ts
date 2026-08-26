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
import { createContactSection } from './components/ContactSection';
import { createFooter } from './components/Footer';
import { createEnquireModal } from './components/EnquireModal';
import { createFloorPlanModal } from './components/FloorPlanModal';
import { createBackToTop } from './components/BackToTop';
import { createMobileQuickBar } from './components/MobileQuickBar';
import { createProjectDetails } from './components/ProjectDetails';
import { createPrivacyPolicy, createTermsOfUse } from './components/LegalPages';
import { createNotFound } from './components/NotFound';
import { createProgrammaticHub } from './components/ProgrammaticHub';
import { programmaticRoutes } from './data/programmatic_routes';
import { router } from './router';
import { projectsData } from './data/projects';
import { initSEO } from './utils/schemaGenerator';
import { generateKeywords } from './data/seo_strategy';
import { animationEngine } from './utils/animationEngine';

const app = document.querySelector<HTMLDivElement>('#app')!;
const header = createHeader();
const footer = createFooter();
const enquireModal = createEnquireModal();
const floorPlanModal = createFloorPlanModal();
const backToTop = createBackToTop();
const mobileQuickBar = createMobileQuickBar();

// Mount global shells & modals
app.appendChild(header);
const mainAppContainer = document.createElement('main');
app.appendChild(mainAppContainer);
app.appendChild(footer);
app.appendChild(enquireModal);
app.appendChild(floorPlanModal);
app.appendChild(backToTop);
app.appendChild(mobileQuickBar);

// 1. Home Master Route
router.add('/', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Harico Estates | Luxury 2 & 3 BHK Flats in Punawale & Kiwale by Sentosa';
    
    initSEO();
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', generateKeywords('global', 300));

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
    mainAppContainer.appendChild(createContactSection());

    setTimeout(() => animationEngine.init(), 50);
});

// 2. Direct Sub-Page Routes
router.add('/projects', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Featured Luxury Projects in Punawale & Kiwale | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createProjectsGrid());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/project-comparison', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Compare Harico Edge vs Divaam vs Pride | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createProjectComparison());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/specifications', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Mivan Monolithic Concrete Specs & Branded Fittings | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createSpecificationsMatrix());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/location-hub', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Location Intelligence & Transit Matrix | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createLocationIntelligence());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/amenities', () => {
    mainAppContainer.innerHTML = '';
    document.title = '100+ Curated World-Class Amenities | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createAmenities());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/emi-calculator', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Home Loan EMI Calculator & Bank Approvals | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createEmiCalculator());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/faq', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'MahaRERA & Homebuyer FAQs | Harico Estates';
    initSEO();
    mainAppContainer.appendChild(createFaqSection());
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

router.add('/contact', () => {
    mainAppContainer.innerHTML = '';
    document.title = 'Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale';
    initSEO();
    mainAppContainer.appendChild(createContactSection());
    window.scrollTo(0, 0);
    setTimeout(() => animationEngine.init(), 50);
});

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

// 3. Programmatic SEO Dynamic Routes
programmaticRoutes.forEach(prog => {
    router.add(`/${prog.path}`, () => {
        mainAppContainer.innerHTML = '';
        document.title = prog.title;
        initSEO();
        mainAppContainer.appendChild(createProgrammaticHub(prog));
        mainAppContainer.appendChild(createContactSection());
        window.scrollTo(0, 0);
        setTimeout(() => animationEngine.init(), 50);
    });
});

// 4. Project Detail Dynamic Handler
const legacySlugs: Record<string, string> = {
    '2-3-bhk-flats-in-kiwale-harico-divaam': 'harico-divaam',
    'harico-edge-punawale': 'harico-edge',
    'harico-pride-punawale': 'harico-pride'
};

router.add('/project', (params, slug) => {
    mainAppContainer.innerHTML = '';

    if (slug && legacySlugs[slug]) {
        const newSlug = legacySlugs[slug];
        router.navigate(`/project/${newSlug}`);
        return;
    }

    let project = null;

    if (slug) {
        project = Object.values(projectsData).find(p => p.slug === slug);
    }

    if (!project && params?.get('id')) {
        const id = params.get('id');
        project = projectsData[id as keyof typeof projectsData];
    }

    if (project) {
        document.title = `${project.title} | ${project.location} | Harico Estates`;
        mainAppContainer.appendChild(createProjectDetails(project));
        mainAppContainer.appendChild(createContactSection());
        setTimeout(() => animationEngine.init(), 50);
    } else {
        mainAppContainer.appendChild(createNotFound());
    }
});

console.log("Harico Estates Enterprise Programmatic SEO Engine Initialized");
