import { injectSchema } from '../utils/schemaGenerator';

export function createFaqSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section faq-section';

  const faqs = [
    {
      question: 'What is Harico Estates and what is its development heritage in Pune?',
      answer: '<b>Harico Estates</b> is the premier residential development entity of <b>Sentosa Developers</b>, a trusted real estate and hospitality conglomerate with a <b>39-year legacy (founded in 1987)</b> across Pune, PCMC, and Maharashtra. Backed by 20+ delivered landmark developments and the iconic Sentosa Water Park & Resorts, Harico Estates is known for 100% legal title compliance, earthquake-resistant Mivan monolithic engineering, and strategic highway-adjacent developments.'
    },
    {
      question: 'What is the starting price for 2 BHK and 3 BHK flats at Harico Diwaam Kiwale?',
      answer: 'At <b>Harico Diwaam (Harico Divaam Kiwale)</b>, luxury 2 BHK apartments start from <b>₹70.00 Lacs* Onwards</b> (724 sq.ft usable carpet area) and 3 BHK apartments start from <b>₹89.90 Lacs* Onwards</b> (920 sq.ft usable carpet area). Larger 2 BHK Comfort (760 sq.ft), 2 BHK Grand (848 sq.ft), 3 BHK Comfort (983 sq.ft), and 3 BHK Grand (1,108 sq.ft) variants are also available with flexible construction-linked payment schedules.'
    },
    {
      question: 'What is the difference between Harico Diwaam and Harico Divaam?',
      answer: '<b>Harico Diwaam</b> and <b>Harico Divaam</b> refer to the exact same landmark residential development situated directly opposite Sentosa Water Park in Kiwale-Ravet. "Harico Divaam" is the official spelling filed under MahaRERA registration number <b>PR1260002502389</b>, while "Harico Diwaam" is the widely used phonetic brand spelling searched by homebuyers.'
    },
    {
      question: 'How many towers, floors, and acres make up Harico Diwaam Kiwale?',
      answer: 'Harico Diwaam is the tallest residential development in the Kiwale-Ravet micro-market, featuring <b>5 iconic sky towers rising 24 storeys tall</b> set within an expansive <b>5.0-acre master-planned land parcel</b>.'
    },
    {
      question: 'What is the MahaRERA registration number and possession date for Harico Diwaam?',
      answer: 'Harico Diwaam (Harico Divaam) is approved and registered under MahaRERA registration number <b>PR1260002502389</b> with target completion and possession scheduled for <b>December 2030</b>.'
    },
    {
      question: 'What 100+ resort lifestyle amenities are provided at Harico Diwaam Kiwale?',
      answer: 'Harico Diwaam features over 100+ curated amenities across 6 lifestyle zones, including a <b>24th-floor Rooftop Sky Observation Deck</b>, infinity edge swimming pool, sky gymnasium, 40-seater Dolby Atmos private mini-theatre, podcasting and YouTube creator studio, 12 fully furnished guest suites for visiting family, business co-working lounges, tennis and badminton courts, children’s splash pool, and 3-tier security.'
    },
    {
      question: 'Where is Harico Diwaam located and how far is it from Hinjewadi & Expressway?',
      answer: 'Harico Diwaam is positioned <b>directly opposite Sentosa Water Park</b> on the Mumbai-Pune Expressway corridor in Kiwale-Ravet (PIN: 412101). It is situated just <b>2 minutes from Mukai Chowk BRTS</b>, <b>2 minutes from the Mumbai-Pune Expressway</b>, <b>5 minutes from Akurdi Railway Station</b>, and <b>12–15 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1</b>.'
    },
    {
      question: 'What residential projects are developed under Harico Kiwale?',
      answer: 'Under the <b>Harico Kiwale</b> development umbrella, the flagship project is <b>Harico Diwaam (Harico Divaam Kiwale)</b>, featuring 24-storey high-rise luxury towers across 5 acres opposite Sentosa Water Park. Harico Kiwale represents the pinnacle of high-rise engineering in the Kiwale-Ravet growth belt.'
    },
    {
      question: 'What is Harico Edge Punawale and what is its starting price and possession date?',
      answer: '<b>Harico Edge</b> is a luxury 22-storey residential development in Punawale (PIN: 411033) spanning 2.5 acres near Bhumkar Chowk. 2 BHK residences start from <b>₹74.00 Lacs* Onwards</b> (741 sq.ft carpet) and 3 BHK residences start from <b>₹89.00 Lacs* Onwards</b> (942 sq.ft carpet up to 1,148 sq.ft). Target possession is scheduled for <b>June 2030</b> under MahaRERA registration number <b>P52100031773</b>.'
    },
    {
      question: 'What residential projects are developed under Harico Punawale?',
      answer: 'The <b>Harico Punawale</b> corridor comprises two flagship developments by Sentosa Developers: <b>Harico Edge</b> (MahaRERA P52100031773, June 2030 possession) and <b>Harico Pride</b> (MahaRERA P52100018471, near-possession June 2027), along with delivered Sentosa landmarks such as Sentosa Ekam and Sentosa Pride Phases 1, 2 & 3.'
    },
    {
      question: 'What is Harico Pride Punawale and when is its possession?',
      answer: '<b>Harico Pride</b> is an expansive residential enclave located near Bhiku Vallabh Kale School in Punawale. It offers the largest usable carpet area 2 & 3 BHK residences in Punawale (765 to 1,180 sq.ft) with starting prices from <b>₹78.00 Lacs*</b>. Target possession is <b>June 2027</b> under MahaRERA registration number <b>P52100018471</b>.'
    },
    {
      question: 'What is Mivan monolithic concrete construction and why does Harico Estates use it?',
      answer: 'Harico Estates standardizes <b>Mivan monolithic aluminium formwork concrete casting</b> across all projects. Unlike conventional brick construction that is prone to hairline cracks and moisture seepage, Mivan casts walls and slabs simultaneously in high-grade concrete, delivering superior earthquake resistance (IS Zone III compliant), jointless water-tight walls, smooth factory-quality wall finishes, and 4%–6% more usable carpet area.'
    },
    {
      question: 'Which nationalized and private banks have approved Harico projects for home loans?',
      answer: 'All Harico Estates developments are pre-approved by leading financial institutions including <b>State Bank of India (SBI)</b>, <b>HDFC Bank</b>, <b>ICICI Bank</b>, <b>Axis Bank</b>, <b>Bank of Baroda</b>, and <b>Kotak Mahindra Bank</b>. Competitive interest rates starting from 8.35%* p.a. and fast-track sanctions are facilitated by our in-house finance desk.'
    },
    {
      question: 'What are the usable carpet areas available across Harico Estates projects?',
      answer: 'Harico Estates offers 2 BHK configurations from <b>724 sq.ft to 848 sq.ft</b> and 3 BHK configurations from <b>920 sq.ft to 1,180 sq.ft</b>. Every layout features zero space wastage, dual private balconies, separate dry utility balconies, and dedicated master bedroom wardrobe niches.'
    },
    {
      question: 'What are the expected rental yields and capital appreciation in Punawale and Kiwale?',
      answer: 'Punawale and Kiwale have demonstrated consistent <b>15%–18% capital appreciation</b> over the past 3 years due to high IT professional influx from Hinjewadi and Wakad. Gross rental yields range between <b>4.2% to 4.8%</b>, with 2 BHK monthly rentals averaging ₹22,000 to ₹28,000 and 3 BHK rentals reaching ₹32,000 to ₹40,000.'
    },
    {
      question: 'What is the booking token amount and procedure for a flat in Harico Estates?',
      answer: 'You can reserve your preferred unit with a nominal booking token amount. The construction-linked payment plan is structured according to clear MahaRERA milestones across plinth casting, individual slab completions, internal plastering, and final handover.'
    },
    {
      question: 'Are all Harico Estates projects free from legal encumbrances and clear title approved?',
      answer: 'Yes, 100% of Harico Estates developments have clear, marketable, and unencumbered legal titles vetted by top corporate legal counsels, with sanctioned building layouts and commencement certificates (CC) approved by PCMC and MahaRERA.'
    },
    {
      question: 'How do I schedule a priority VIP site visit and visit the sample flat?',
      answer: 'You can schedule a priority VIP site visit by calling our direct sales desk at <b>+91 7744009295</b> or messaging on WhatsApp. Our site sales galleries are open all 7 days from 9:30 AM to 7:30 PM with fully furnished show apartments available for viewing.'
    },
    {
      question: 'What is the Sky Observation Deck at Harico Diwaam Kiwale?',
      answer: 'The <b>24th-Floor Sky Observation Deck</b> at Harico Diwaam is a panoramic open-air terrace featuring a <b>12-metre glass-floor lookout panel</b>, high-powered astronomical telescopes, a sunset meditation pavilion with yoga mats, and a social terrace with seating for 60+ residents. It offers unobstructed 360° views of the Sahyadri mountain range, the Sentosa Water Park, and the Mumbai-Pune Expressway corridor — one of the very few residential sky decks in all of Pune.'
    },
    {
      question: 'What makes the Harico Diwaam Creator Studio unique in residential real estate?',
      answer: 'The <b>Creator Studio</b> at Harico Diwaam is India\'s first professionally equipped media production facility inside a residential complex. It includes a soundproof podcast recording booth with condenser microphones and acoustic panels, a YouTube & Reels production studio with a green screen wall, ring-light kit, 4K teleprompter, and 4 Mac editing workstations — all backed by <b>1-Gbps dedicated symmetric fiber</b> for zero-lag live streaming.'
    },
    {
      question: 'How many luxury guest suites are available at Harico Diwaam and how can residents book them?',
      answer: 'Harico Diwaam offers <b>12 fully furnished, air-conditioned luxury guest suites</b> exclusively for visiting family and friends of residents. Each suite can be booked for up to <b>7 consecutive nights at no additional cost</b> to the resident via the society\'s resident mobile app. This eliminates hotel expenses for outstation guests visiting Pune.'
    },
    {
      question: 'Is Harico Diwaam Kiwale a good real estate investment in 2026?',
      answer: 'Yes — Harico Diwaam is among the <b>highest-conviction real estate investments in West Pune in 2026</b>. Key reasons: (1) Pre-launch pricing 18–22% below comparable Wakad and Baner addresses. (2) Gross rental yield of 4.2%–5.2% — best in the West Pune micro-market. (3) 12–15% CAGR capital appreciation projected through 2030, supported by Metro Phase 3 (Hinjewadi–Shivajinagar) and Hinjewadi IT Park Phase 3 expansion. (4) MahaRERA registered under PR1260002502389. (5) Sentosa Developers: 14 on-time project deliveries across Pune since 2013.'
    },
    {
      question: 'What is the Mivan construction advantage at Harico Diwaam compared to conventional projects?',
      answer: '<b>Mivan Aluminium Formwork</b> technology at Harico Diwaam casts walls, slabs, columns, and beams in one monolithic RCC pour — eliminating the internal brick-bat filling used in conventional construction. Benefits for homebuyers: (1) <b>Zero hairline cracks</b> guaranteed — no replastering ever needed (saving ₹1.5–2.5 Lacs over 10 years). (2) <b>Earthquake-resistant</b> to Zone III seismic standards. (3) <b>5–7 day construction cycle per floor</b> vs. 21+ days for brick — ensuring on-time possession. (4) <b>35% less concrete wastage</b> contributing to IGBC green pre-certification. (5) Near-mirror-smooth wall finish ready for direct painting.'
    },
    {
      question: 'What is the expected capital appreciation for Harico Diwaam Kiwale from 2026 to 2030?',
      answer: 'Based on Kiwale-Ravet historical appreciation of 13–18% CAGR (2019–2024), a 2 BHK apartment purchased at <b>₹70 Lacs* in 2026</b> is projected to reach: <b>₹89.78 Lacs</b> by 2028 (+28%), <b>₹1.12 Cr</b> by 2030 at possession (+60%), and <b>₹1.25 Cr</b> by 2031 post-OC (+78%). Key catalysts: Metro Phase 3 station near Mukai Chowk (proposed 2028), Hinjewadi IT Phase 3 (45,000+ employees by 2031), and Mumbai-Pune Expressway 8-lane widening (approved by NHAI).'
    },
    {
      question: 'Which banks offer home loans for Harico Diwaam and what are the EMIs?',
      answer: 'Harico Diwaam has <b>pre-approved home loan tie-ups</b> with SBI (8.50% p.a.), HDFC Bank (8.65% p.a.), ICICI Bank (8.75% p.a.), and Axis Bank (8.70% p.a.). For a <b>₹70 Lacs loan over 20 years</b>, EMIs range from <b>₹60,800–₹62,200/month</b> depending on the lender. Loans are sanctioned within 3–5 working days for pre-approved applicants. The loan typically covers up to 90% of the agreement value.'
    },
    {
      question: 'What is the rental income potential from a Harico Diwaam flat after possession?',
      answer: '2 BHK apartments at Harico Diwaam are expected to command <b>₹18,000–₹22,000/month in rent</b> at possession (Dec 2030), generating a gross rental yield of <b>4.2%–5.0%</b>. 3 BHK apartments are expected to achieve <b>₹24,000–₹30,000/month</b> (yield: 4.5%–5.2%). This is higher than Wakad (3.2%–3.8%) and Baner (3.0%–3.5%), making Kiwale the <b>highest-yielding premium micro-market in West Pune</b>.'
    },
    {
      question: 'What is the total possession timeline and construction milestone plan for Harico Diwaam?',
      answer: 'Harico Diwaam follows a structured <b>Construction-Linked Payment (CLP)</b> plan tied to verified Mivan milestones: Foundation completed (2025 Q2) → 6th floor (2026 Q2, triggers 15% CLP) → 12th floor (2027 Q1) → 18th floor (2028 Q2) → 24th floor (2029 Q1) → Amenity handover including Sky Deck, Theatre, and Pool (June 2030) → <b>OC and possession: December 2030</b>. MahaRERA registration PR1260002502389 legally mandates adherence to this timeline.'
    },
    {
      question: 'How does Harico Diwaam compare to other residential projects in Kiwale and Ravet?',
      answer: 'Harico Diwaam is in a category of its own in Kiwale-Ravet: (1) <b>Tallest towers</b> — 24 storeys vs. 7–14 storeys for all competing Kiwale projects. (2) <b>Most amenities</b> — 100+ across 6 themed zones vs. 15–30 in comparable projects. (3) <b>Only Mivan-constructed</b> project in the Kiwale micro-market. (4) <b>Only project with a Sky Deck, 12 Guest Suites, and Creator Studio</b> in this price range anywhere in West Pune. (5) <b>Developer pedigree</b>: 14 on-time deliveries by Sentosa Developers vs. peers with 2–5 projects.'
    },
    {
      question: 'What is the connectivity from Harico Diwaam Kiwale to key city landmarks?',
      answer: 'Harico Diwaam\'s location opposite Sentosa Water Park at Mukai Chowk, Kiwale, provides: <b>Mukai Chowk BRTS</b> (2 min), <b>Mumbai-Pune Expressway on-ramp</b> (3 min), <b>Akurdi Railway Station</b> (8 min), <b>Hinjewadi IT Park Phase 1</b> (12 min), <b>Wakad commercial hub</b> (15 min), <b>PCMC Hospital</b> (10 min), and <b>Pune International Airport</b> (35 min via Expressway). The proposed Metro Phase 3 station near Mukai Chowk will further reduce commute times from 2028 onwards.'
    },
    {
      question: 'Can NRI buyers invest in Harico Diwaam Kiwale and how does the process work?',
      answer: 'Yes, <b>NRI buyers</b> can invest in Harico Diwaam without any restrictions under FEMA guidelines. The process involves: (1) Digital document submission (Passport, PAN, OCI/PIO card). (2) Agreement for Sale execution via courier/notarization or Power of Attorney. (3) NRE/NRO account-based payment or foreign inward remittance. (4) Home loan available via SBI NRI Home Loans and HDFC NRI Loan Scheme. (5) Our NRI desk at <b>+91 7744009295</b> provides dedicated support from booking to possession handover.'
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
