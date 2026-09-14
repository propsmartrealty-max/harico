import type { Article } from '../data/articles';
import { articlesData } from '../data/articles';

export function createArticleDetail(article: Article): HTMLElement {
  const section = document.createElement('article');
  section.className = 'section article-detail-section lux-reveal';

  const relatedArticles = articlesData.filter(a => a.slug !== article.slug).slice(0, 3);

  section.innerHTML = `
    <div class="container py-xl max-w-900 mx-auto">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="article-breadcrumb mb-md text-xs text-muted">
        <a href="/" class="hover:text-gold nav-link-internal">Home</a> &gt;
        <a href="/articles" class="hover:text-gold nav-link-internal">Articles</a> &gt;
        <span class="text-navy font-semibold">${article.title}</span>
      </nav>

      <!-- Header -->
      <header class="article-header mb-xl">
        <div class="flex items-center gap-sm mb-xs flex-wrap">
          <span class="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">${article.category}</span>
          <span class="text-xs text-muted"><i class="fa-regular fa-clock mr-1"></i> ${article.readTime}</span>
          <span class="text-xs text-muted">•</span>
          <span class="text-xs text-muted"><i class="fa-regular fa-calendar mr-1"></i> ${article.publishDate}</span>
          <span class="text-xs text-muted">•</span>
          <span class="text-xs text-navy font-semibold"><i class="fa-solid fa-user-pen text-gold mr-1"></i> ${article.author}</span>
        </div>

        <h1 class="article-main-title text-2xl md:text-4xl font-extrabold text-navy leading-tight mb-sm">
          ${article.title}
        </h1>
        <p class="article-lead-subtitle text-base md:text-lg text-muted leading-relaxed">
          ${article.subtitle}
        </p>
      </header>

      <!-- Featured Image -->
      <div class="article-featured-media mb-xl rounded-xl overflow-hidden shadow-md max-h-96">
        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
      </div>

      <!-- Key Takeaways Box -->
      <div class="key-takeaways-box p-lg bg-light-subtle rounded-xl border-l-4 border-gold mb-2xl shadow-sm">
        <h3 class="text-base font-bold text-navy uppercase tracking-wider mb-sm flex items-center gap-xs">
          <i class="fa-solid fa-bolt text-gold"></i> Key Executive Takeaways
        </h3>
        <ul class="space-y-2 pl-4 list-disc text-sm text-slate-700 leading-relaxed">
          ${article.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>

      <!-- Article Body Content -->
      <div class="article-rich-content typography-prose text-slate-800 leading-relaxed text-base space-y-6">
        ${article.contentHtml}
      </div>

      <!-- Article FAQ Accordion -->
      ${article.faqs.length > 0 ? `
        <div class="article-faqs-wrapper mt-3xl pt-xl border-t">
          <h2 class="text-2xl font-bold text-navy mb-md flex items-center gap-xs">
            <i class="fa-solid fa-circle-question text-gold"></i> Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            ${article.faqs.map(faq => `
              <div class="faq-item p-md bg-white border rounded-lg shadow-sm">
                <h3 class="text-base font-bold text-navy mb-xs">${faq.q}</h3>
                <p class="text-sm text-slate-600 leading-relaxed m-0">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Direct Assistance Box -->
      <div class="article-support-box mt-3xl p-xl bg-navy text-white rounded-xl text-center shadow-lg">
        <h3 class="text-xl font-bold text-white mb-xs">Have Detailed Inquiries About This Project?</h3>
        <p class="text-xs text-slate-300 max-w-550 mx-auto mb-md">Speak directly with senior sales managers for official floor plans, price breakup sheets, and scheduled site visits.</p>
        <div class="flex justify-center gap-sm flex-wrap">
          <a href="tel:+917744009295" class="btn btn-outline-white btn-sm">
            <i class="fa-solid fa-phone mr-1"></i> Call +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=${encodeURIComponent(`Hi, I just read the article "${article.title}" and would like more details.`)}" target="_blank" class="btn btn-gold btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> WhatsApp Instant Desk
          </a>
        </div>
      </div>

      <!-- Related Pillar Articles -->
      <div class="related-articles-section mt-3xl pt-xl border-t">
        <h3 class="text-xl font-bold text-navy mb-lg">Related Real Estate Guides</h3>
        <div class="grid grid-3 gap-md">
          ${relatedArticles.map(rel => `
            <div class="related-card p-md bg-white rounded-lg border hover:border-gold transition-colors flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-gold uppercase tracking-wider block mb-xs">${rel.category}</span>
                <h4 class="text-sm font-bold text-navy line-clamp-2 mb-xs">
                  <a href="/articles/${rel.slug}" class="nav-link-internal hover:text-gold">${rel.title}</a>
                </h4>
              </div>
              <a href="/articles/${rel.slug}" class="text-xs font-semibold text-navy hover:text-gold mt-sm nav-link-internal">
                Read Guide &rarr;
              </a>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  return section;
}
