import { injectSchema } from '../utils/schemaGenerator';

export function createFaqSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section faq-section';

  const faqs = [
    {
      question: 'Are all Harico Estates projects registered under MahaRERA?',
      answer: 'Yes, 100% of Harico Estates and Sentosa Group projects are fully registered with MahaRERA. Our verified registration IDs are: <b>Harico Edge: P52100031773</b>, <b>Harico Divaam: PR1260002502389</b>, and <b>Harico Pride: P52100018471</b>. All project approvals, sanctioned plans, and title certificates can be validated directly on the official MahaRERA website (maharera.mahaonline.gov.in).'
    },
    {
      question: 'What unit configurations and carpet areas are available in Punawale & Kiwale?',
      answer: 'Harico Estates offers premium 2 & 3 BHK residences ranging from 724 sq.ft up to 1,180 sq.ft of carpet area. Every home is designed with zero-space wastage, dual cross-ventilated private balconies, and dedicated walk-in wardrobe provisions in 3 BHK master suites.'
    },
    {
      question: 'Which nationalized and private banks have approved Harico projects for Home Loans?',
      answer: 'Our developments are pre-approved by all leading financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, Kotak Mahindra Bank, and Punjab National Bank. Our in-house home loan desk assists buyers with fast-track loan sanctions and competitive interest rates starting from 8.35%* p.a.'
    },
    {
      question: 'How close is Harico Estates to Hinjewadi IT Park and the Mumbai-Pune Expressway?',
      answer: 'Harico Edge and Harico Pride are located just 2 minutes from the Mumbai-Pune Expressway and 12–15 minutes from Hinjewadi Rajiv Gandhi IT Park (Phase 1). Harico Divaam in Kiwale sits directly opposite Sentosa Water Park with instantaneous access to the expressway flyover and Mukai Chowk.'
    },
    {
      question: 'What is the construction technology used across Harico projects?',
      answer: 'We deploy advanced Mivan aluminium formwork monolithic concrete technology and earthquake-resistant RCC shear wall structures compliant with IS Zone III standards. This ensures crack-free walls, superior acoustic privacy, extended structural lifespan, and on-time delivery.'
    },
    {
      question: 'What is the booking procedure and payment schedule for a flat?',
      answer: 'You can book your preferred unit with a nominal token amount. The construction-linked payment plan (CLP) is spread systematically across excavation, plinth, slab casting, brickwork, finishing, and final handover, fully compliant with MahaRERA milestone guidelines.'
    },
    {
      question: 'What are the expected rental yields and capital appreciation in Punawale?',
      answer: 'Punawale and Kiwale have demonstrated consistent 15%–18% capital appreciation over the last 3 years due to high IT professional demand from Hinjewadi and Wakad. Expected monthly rental yields range between ₹24,000 to ₹36,000 for 2 and 3 BHK homes.'
    }
  ];

  // Inject FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer.replace(/<[^>]*>?/gm, '')
      }
    }))
  };
  injectSchema(faqSchema, 'faq-schema');

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Homebuyer Knowledge Hub</span>
        <h2 class="section-title fade-in-up delay-1">Frequently Asked Questions</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Everything you need to know regarding MahaRERA compliance, bank home loans, construction standards, and possession timelines.
        </p>
      </div>

      <div class="faq-accordion-container max-w-900 mx-auto">
        ${faqs.map((faq, idx) => `
          <div class="faq-item ${idx === 0 ? 'active' : ''}">
            <button class="faq-question-btn flex justify-between items-center w-full" aria-expanded="${idx === 0 ? 'true' : 'false'}">
              <span class="faq-q-text">${faq.question}</span>
              <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer-pane" style="${idx === 0 ? 'max-height: 250px;' : 'max-height: 0;'}">
              <p class="faq-a-text">${faq.answer}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Assistance Footer -->
      <div class="faq-support-box text-center mt-xl p-lg rounded-lg bg-light-subtle max-w-700 mx-auto border">
        <h4 class="font-bold text-navy text-lg mb-xs">Still have questions regarding our projects?</h4>
        <p class="text-sm text-muted mb-md">Our certified project relationship managers are available 24x7 for personalized consultations.</p>
        <div class="flex justify-center gap-md flex-wrap">
          <a href="tel:+917744009295" class="btn btn-sm btn-outline">
            <i class="fa-solid fa-phone mr-2"></i> +91 7744009295
          </a>
          <a href="https://wa.me/917744009295?text=Hi,%20I%20have%20questions%20regarding%20Harico%20Estates%20projects." target="_blank" class="btn btn-sm btn-primary">
            <i class="fa-brands fa-whatsapp mr-2"></i> Chat with Senior Advisor
          </a>
        </div>
      </div>

    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .faq-section {
      background-color: #FFFFFF;
      padding: 90px 0;
    }
    
    .max-w-900 { max-width: 900px; }
    .max-w-700 { max-width: 700px; }
    
    .faq-accordion-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .faq-item {
      background: #FAFBFC;
      border: 1px solid #E2E8F0;
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .faq-item.active {
      border-color: var(--color-gold);
      background: #FFFFFF;
      box-shadow: 0 4px 20px rgba(10, 25, 47, 0.06);
    }
    
    .faq-question-btn {
      padding: 20px 25px;
      background: transparent;
      text-align: left;
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-navy);
      cursor: pointer;
      border: none;
      transition: color 0.2s ease;
    }
    
    .faq-item.active .faq-question-btn {
      color: var(--color-gold-hover);
    }
    
    .faq-icon {
      color: var(--color-gold);
      transition: transform 0.3s ease;
      font-size: 0.9rem;
      margin-left: 15px;
    }
    
    .faq-item.active .faq-icon {
      transform: rotate(180deg);
    }
    
    .faq-answer-pane {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0 25px;
    }
    
    .faq-item.active .faq-answer-pane {
      padding-bottom: 20px;
    }
    
    .faq-a-text {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 768px) {
      .faq-question-btn {
        padding: 16px 18px;
        font-size: 0.95rem;
      }
      .faq-answer-pane {
        padding: 0 18px;
      }
    }
  `;
  section.appendChild(style);

  // Accordion toggle behavior
  setTimeout(() => {
    const items = section.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const pane = item.querySelector<HTMLElement>('.faq-answer-pane');

      btn?.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        items.forEach(other => {
          other.classList.remove('active');
          const otherPane = other.querySelector<HTMLElement>('.faq-answer-pane');
          if (otherPane) otherPane.style.maxHeight = '0';
        });

        // Open if wasn't active
        if (!isActive && pane) {
          item.classList.add('active');
          pane.style.maxHeight = pane.scrollHeight + 30 + 'px';
        }
      });
    });
  }, 0);

  return section;
}
