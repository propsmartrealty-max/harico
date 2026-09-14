import { articlesData } from '../data/articles';

export function createArticlesHub(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section articles-hub-section lux-reveal';

  section.innerHTML = `
    <div class="container py-xl">
      <div class="section-header text-center mb-2xl">
        <span class="eyebrow fade-in-up">Homebuyer Intelligence & Insights</span>
        <h1 class="section-title text-3xl md:text-4xl font-bold text-navy mt-xs fade-in-up delay-1">
          Harico Estates Knowledge Hub & Real Estate Guides
        </h1>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-750 mt-sm fade-in-up delay-3">
          Comprehensive market intelligence, MahaRERA compliance guides, floor plan comparisons, and micro-market transit reports across Punawale and Kiwale.
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-3 gap-xl articles-grid">
        ${articlesData.map(article => `
          <article class="article-card bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all flex flex-col">
            <div class="article-img-box relative h-52 overflow-hidden">
              <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
              <span class="badge-category absolute top-3 left-3 bg-navy text-white text-xs px-3 py-1 rounded-full font-semibold">
                ${article.category}
              </span>
            </div>

            <div class="article-body p-lg flex-1 flex flex-col justify-between">
              <div>
                <div class="article-meta flex items-center gap-md text-xs text-muted mb-xs">
                  <span><i class="fa-regular fa-clock mr-1"></i> ${article.readTime}</span>
                  <span>•</span>
                  <span><i class="fa-regular fa-calendar mr-1"></i> ${article.publishDate}</span>
                </div>

                <h2 class="article-title text-lg font-bold text-navy mb-xs hover:text-gold transition-colors line-clamp-2">
                  <a href="/articles/${article.slug}" class="nav-link-internal">${article.title}</a>
                </h2>

                <p class="article-desc text-sm text-muted line-clamp-3 mb-md">
                  ${article.summary}
                </p>
              </div>

              <div class="article-footer pt-sm border-t flex justify-between items-center">
                <span class="text-xs font-semibold text-navy"><i class="fa-solid fa-user-pen text-gold mr-1"></i> ${article.author}</span>
                <a href="/articles/${article.slug}" class="btn-read-more text-xs font-bold text-gold hover:underline nav-link-internal">
                  Read Guide <i class="fa-solid fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <!-- Expert Consultation Strip -->
      <div class="articles-cta-banner mt-3xl p-xl rounded-xl bg-navy text-white text-center">
        <h3 class="text-2xl font-bold text-white mb-xs">Need Direct Consultation on Harico Estates Projects?</h3>
        <p class="text-sm text-slate-300 max-w-600 mx-auto mb-md">Connect directly with senior sales advisors for verified cost sheets, MahaRERA certificates, and priority VIP site visit bookings.</p>
        <div class="flex justify-center gap-md flex-wrap">
          <a href="tel:+917744009295" class="btn btn-outline-white btn-sm">
            <i class="fa-solid fa-phone mr-1"></i> Call +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=Hi,%20I%20am%20reading%20Harico%20Estates%20articles%20and%20need%20more%20information." target="_blank" class="btn btn-gold btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Instant WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  `;

  return section;
}
