/**
 * Full-screen Floor Plan & Layout Lightbox Modal
 * Allows interactive viewing of high-res 2 BHK & 3 BHK architectural floor plans
 */

export function createFloorPlanModal(): HTMLElement {
  const modal = document.createElement('div');
  modal.id = 'floorplan-lightbox';
  modal.className = 'floorplan-lightbox-overlay hidden';

  modal.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-dialog">
      <button class="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
      
      <div class="lightbox-header">
        <div class="lightbox-title-group">
          <span class="lightbox-tag">Architectural Layout</span>
          <h3 id="lightbox-plan-title" class="lightbox-title">Floor Plan Preview</h3>
          <p id="lightbox-plan-subtitle" class="lightbox-subtitle">Usable Carpet & Balcony Configuration</p>
        </div>
        <div class="lightbox-actions-top">
          <a id="lightbox-wa-btn" href="#" target="_blank" class="btn btn-whatsapp btn-sm">
            <i class="fa-brands fa-whatsapp mr-1"></i> Request High-Res PDF
          </a>
        </div>
      </div>

      <div class="lightbox-image-viewport">
        <img id="lightbox-img" src="" alt="Floor Plan" class="lightbox-img">
      </div>

      <div class="lightbox-footer flex justify-between items-center">
        <span class="lightbox-disclaimer">*Dimensions are approximate and subject to MahaRERA approved architectural sanctions.</span>
        <button class="btn btn-primary btn-sm lightbox-enquire-btn">
          <i class="fa-solid fa-file-pdf mr-1"></i> Enquire for Cost Sheet
        </button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .floorplan-lightbox-overlay {
      position: fixed;
      inset: 0;
      z-index: 2100;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .floorplan-lightbox-overlay.hidden {
      display: none;
      opacity: 0;
    }

    .lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(10, 25, 47, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }

    .lightbox-dialog {
      position: relative;
      background: #FFFFFF;
      border-radius: 16px;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(212, 175, 55, 0.4);
      z-index: 2;
      overflow: hidden;
      animation: dialogScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes dialogScaleIn {
      from { transform: scale(0.92) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    .lightbox-close-btn {
      position: absolute;
      top: 14px;
      right: 18px;
      font-size: 2rem;
      background: none;
      border: none;
      color: var(--color-navy);
      cursor: pointer;
      line-height: 1;
      z-index: 10;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .lightbox-close-btn:hover {
      color: var(--color-gold);
      transform: scale(1.15);
    }

    .lightbox-header {
      padding: 20px 24px 15px;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F8FAFC;
    }

    .lightbox-tag {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--color-gold);
    }

    .lightbox-title {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-navy);
      margin: 2px 0 0;
      font-family: var(--font-heading);
    }

    .lightbox-subtitle {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .lightbox-image-viewport {
      flex: 1;
      padding: 20px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      max-height: 60vh;
    }

    .lightbox-img {
      max-width: 100%;
      max-height: 55vh;
      object-fit: contain;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .lightbox-footer {
      padding: 15px 24px;
      background: #F8FAFC;
      border-top: 1px solid #E2E8F0;
      gap: 15px;
      flex-wrap: wrap;
    }

    .lightbox-disclaimer {
      font-size: 0.72rem;
      color: var(--color-text-light);
      max-width: 500px;
    }

    @media (max-width: 768px) {
      .lightbox-dialog {
        max-height: 95vh;
      }
      .lightbox-header {
        padding: 15px;
      }
      .lightbox-actions-top {
        display: none;
      }
    }
  `;
  modal.appendChild(style);

  // Global Lightbox Open Function
  (window as any).openFloorPlanLightbox = (imageUrl: string, title: string, subtitle: string, projectName: string) => {
    const imgEl = modal.querySelector('#lightbox-img') as HTMLImageElement;
    const titleEl = modal.querySelector('#lightbox-plan-title') as HTMLElement;
    const subEl = modal.querySelector('#lightbox-plan-subtitle') as HTMLElement;
    const waBtn = modal.querySelector('#lightbox-wa-btn') as HTMLAnchorElement;

    if (imgEl) imgEl.src = imageUrl;
    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = subtitle;

    const waMsg = `Hi, I am interested in the *${title}* (${subtitle}) at *${projectName}*. Please share the high-resolution architectural plan PDF and detailed cost sheet.`;
    if (waBtn) waBtn.href = `https://wa.me/917744009295?text=${encodeURIComponent(waMsg)}`;

    modal.classList.remove('hidden');
  };

  // Close handlers
  const closeBtn = modal.querySelector('.lightbox-close-btn');
  const backdrop = modal.querySelector('.lightbox-backdrop');
  const enquireBtn = modal.querySelector('.lightbox-enquire-btn');

  closeBtn?.addEventListener('click', () => modal.classList.add('hidden'));
  backdrop?.addEventListener('click', () => modal.classList.add('hidden'));
  enquireBtn?.addEventListener('click', () => {
    modal.classList.add('hidden');
    const title = (modal.querySelector('#lightbox-plan-title') as HTMLElement)?.textContent || 'Floor Plan';
    if ((window as any).showEnquireModal) {
      (window as any).showEnquireModal(`Enquiry for ${title}`);
    }
  });

  return modal;
}
