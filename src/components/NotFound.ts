export function createNotFound(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section not-found-section flex items-center justify-center text-center';

  section.innerHTML = `
    <div class="container py-3xl">
      <span class="text-gold uppercase font-bold tracking-widest text-sm block mb-sm">Error 404</span>
      <h1 class="text-5xl font-extrabold text-navy mb-md">Page Not Found</h1>
      <div class="title-separator mx-auto mb-md"></div>
      <p class="text-muted max-w-600 mx-auto mb-xl">
        The luxury residence or page you are looking for might have been moved or is currently unavailable. Explore our master collection or speak directly with our concierge.
      </p>

      <div class="flex justify-center gap-md flex-wrap">
        <a href="/" class="btn btn-primary">
          <i class="fa-solid fa-house mr-2"></i> Return to Home
        </a>
        <a href="/projects" class="btn btn-secondary">
          <i class="fa-solid fa-building mr-2"></i> View All Projects
        </a>
        <a href="https://wa.me/917744009295" target="_blank" class="btn btn-whatsapp">
          <i class="fa-brands fa-whatsapp mr-2"></i> Chat with Concierge
        </a>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .not-found-section {
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F8FAFC;
    }
  `;
  section.appendChild(style);

  return section;
}
