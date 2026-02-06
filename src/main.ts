import './styles/global.css';
import './styles/layout.css';

import { createHeader } from './components/Header';
import { createHero } from './components/Hero';
import { createProjectsGrid } from './components/ProjectsGrid';
import { createAmenities } from './components/Amenities';
import { createFooter } from './components/Footer';
import { createEnquireModal } from './components/EnquireModal';
import { createProjectDetails } from './components/ProjectDetails';
import { createBuilderLegacy } from './components/BuilderLegacy';
import { router } from './router';
import { projectsData } from './data/projects';

const app = document.querySelector<HTMLDivElement>('#app')!;
const header = createHeader();
const footer = createFooter();
const enquireModal = createEnquireModal(); // Create modal

// Mount static parts
app.appendChild(header);
const mainAppContainer = document.createElement('main');
app.appendChild(mainAppContainer);
app.appendChild(footer);
app.appendChild(enquireModal); // Mount modal

// Route Handlers
router.add('/', () => {
    mainAppContainer.innerHTML = ''; // Clear current view
    document.title = 'Harico Estates | Premium Real Estate in Punawale'; // Reset title
    mainAppContainer.appendChild(createHero());
    mainAppContainer.appendChild(createBuilderLegacy());
    mainAppContainer.appendChild(createProjectsGrid());
    mainAppContainer.appendChild(createAmenities());
});

// Handle /project/:slug or /project?id=:id
router.add('/project', (params, slug) => {
    mainAppContainer.innerHTML = '';

    let project = null;

    // Strategy 1: Look up by slug (Passed from modified router or parsed path)
    if (slug) {
        project = Object.values(projectsData).find(p => p.slug === slug);
    }

    // Strategy 2: Look up by ID (Legacy query param)
    if (!project && params?.get('id')) {
        const id = params.get('id');
        project = projectsData[id as keyof typeof projectsData];
    }

    if (project) {
        // SEO: Dynamic Title Update
        document.title = `${project.title} | ${project.location} | Harico Estates`;

        mainAppContainer.appendChild(createProjectDetails(project));
    } else {
        router.navigate('/'); // Fallback
    }
});

console.log("Harico Estates App Initialized with Router");
