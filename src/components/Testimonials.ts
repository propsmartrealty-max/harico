export function createTestimonials(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'testimonials';
  section.className = 'section testimonials-section';

  const reviews = [
    {
      name: 'Rajesh & Sneha Kulkarni',
      designation: 'Senior Lead Architect, Infosys Hinjewadi',
      project: 'Harico Edge Homebuyer',
      rating: 5,
      avatar: '👨‍💼',
      quote: 'We spent 6 months surveying projects in Wakad and Punawale. Harico Edge was an easy decision because of the zero-wastage carpet layout, 2 private balconies, and the fact that we reach Hinjewadi Phase 1 in just 12 minutes without getting stuck at Bhumkar Chowk!'
    },
    {
      name: 'Amitabh Deshmukh',
      designation: 'VP of Engineering, Global Tech Firm',
      project: 'Harico Divaam Investor',
      rating: 5,
      avatar: '💼',
      quote: 'Sentosa Developers’ 39-year track record gave me complete peace of mind. Harico Divaam with 24 storeys and 100+ resort amenities is a landmark in Kiwale. The expressway connectivity and upcoming metro make it Pune’s most promising capital appreciation asset.'
    },
    {
      name: 'Pooja & Vikram Sharma',
      designation: 'Principal Consultant & Doctor',
      project: 'Harico Pride Resident Family',
      rating: 5,
      avatar: '👩‍⚕️',
      quote: 'The construction quality and transparency with MahaRERA documentation are exemplary. The carpet sizes are genuinely larger than competitor offerings in West Pune, and the rooftop pool and senior citizen sitouts are a delight for our parents.'
    },
    {
      name: 'Nitin & Aarti Gaikwad',
      designation: 'Entrepreneurs & Wakad Residents',
      project: 'Harico Edge Buyer',
      rating: 5,
      avatar: '🏢',
      quote: 'Mivan concrete finish, branded Kohler fittings, and genuine customer-first service during the entire booking and home loan sanction process through SBI. Proud to be part of the Harico Estates family!'
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header text-center mb-xl">
        <span class="eyebrow fade-in-up">Trusted by 5,000+ Homeowners</span>
        <h2 class="section-title fade-in-up delay-1">Stories of Delighted Homeowners</h2>
        <div class="title-separator mx-auto fade-in-up delay-2"></div>
        <p class="section-subtitle mx-auto text-muted max-w-700">
          Hear directly from families, IT professionals, and discerning investors who chose Harico Estates & Sentosa Group.
        </p>
      </div>

      <div class="testimonials-grid grid grid-cols-2 gap-lg">
        ${reviews.map(rev => `
          <div class="testimonial-card">
            <div class="test-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
            <div class="test-rating mb-sm">
              ${Array(rev.rating).fill('<i class="fa-solid fa-star text-gold"></i>').join('')}
            </div>
            <p class="test-quote-text">"${rev.quote}"</p>
            <div class="test-author-box flex items-center gap-md mt-md pt-sm border-top">
              <div class="test-avatar">${rev.avatar}</div>
              <div>
                <h4 class="test-author-name">${rev.name}</h4>
                <p class="test-author-desig">${rev.designation}</p>
                <span class="test-project-tag">${rev.project}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Trust Bar -->
      <div class="trust-metrics-strip mt-xl p-md rounded-md flex justify-center flex-wrap gap-xl text-center">
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="39" data-counter-suffix="+">39+</span>
          <span class="text-xs uppercase font-semibold text-navy">Years of Legacy</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="20" data-counter-suffix="+">20+</span>
          <span class="text-xs uppercase font-semibold text-navy">Landmarks Delivered</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block" data-counter-target="5000" data-counter-suffix="+">5,000+</span>
          <span class="text-xs uppercase font-semibold text-navy">Happy Families</span>
        </div>
        <div class="metric-box">
          <span class="text-2xl font-bold text-gold block">100%</span>
          <span class="text-xs uppercase font-semibold text-navy">MahaRERA Registered</span>
        </div>
      </div>

    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .testimonials-section {
      background-color: #F8FAFC;
      padding: 90px 0;
    }
    
    .testimonial-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(10, 25, 47, 0.08);
      border-color: rgba(212, 175, 55, 0.4);
    }
    
    .test-quote-icon {
      position: absolute;
      top: 20px;
      right: 25px;
      font-size: 2rem;
      color: rgba(212, 175, 55, 0.15);
    }
    
    .test-rating {
      font-size: 0.85rem;
    }
    
    .test-quote-text {
      color: var(--color-text-main);
      font-size: 0.95rem;
      line-height: 1.6;
      font-style: italic;
      min-height: 80px;
    }
    
    .test-avatar {
      font-size: 2.2rem;
      background: rgba(212, 175, 55, 0.1);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .test-author-name {
      font-size: 1.05rem;
      color: var(--color-navy);
      font-family: var(--font-heading);
      margin: 0;
    }
    
    .test-author-desig {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      margin: 2px 0;
    }
    
    .test-project-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .trust-metrics-strip {
      background: #FFFFFF;
      border: 1px solid rgba(212, 175, 55, 0.3);
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    }
    
    .metric-box {
      min-width: 140px;
    }

    @media (max-width: 900px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  section.appendChild(style);

  return section;
}
