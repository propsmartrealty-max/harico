import { router } from '../router';

export interface Project {
  id: string;
  slug?: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  type: string;
  price?: string;
  landParcel?: string;
  floors?: string;
  possession?: string;
  reraNumber?: string;
  reraQRCodeUrl?: string;
}

export function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement('article');
  card.className = 'project-card-3d card-3d-tilt';

  const identifier = project.slug || project.id;

  // Global card click navigation
  card.onclick = (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('.card-rera-interactive')) return;
    router.navigate(`/project/${identifier}`);
  };

  card.innerHTML = `
    <!-- 3D Holographic Glare Sheen -->
    <div class="card-glare-overlay"></div>

    <!-- Media Header -->
    <div class="card-media-wrapper">
      <img src="${project.image}" alt="${project.title}" class="card-hero-img" loading="lazy">
      <div class="card-media-gradient"></div>
      
      <!-- Top Floating Badges -->
      <div class="card-top-badges flex justify-between items-center w-full">
        <div class="status-badge-capsule ${project.status.toLowerCase()}">
          <span class="status-radar-dot ${project.status === 'Ongoing' ? 'radar-pulse-ongoing' : ''}"></span>
          <span class="status-text">${project.status}</span>
        </div>

        ${project.possession ? `
          <div class="possession-capsule">
            <i class="fa-solid fa-clock-rotate-left mr-1 text-gold"></i>
            <span>${project.possession}</span>
          </div>
        ` : ''}
      </div>

      <!-- Hover Action Overlay -->
      <div class="card-hover-overlay">
        <button class="btn-card-preview btn-explore-trigger" data-slug="${identifier}">
          <i class="fa-solid fa-eye mr-2"></i> View Project
        </button>
      </div>
    </div>
    
    <!-- Body Content Section -->
    <div class="card-body-content">
      
      <!-- Title, Location & Price -->
      <div class="card-main-header">
        <div class="flex justify-between items-start gap-sm mb-xs">
          <h3 class="card-project-title">${project.title}</h3>
          <div class="card-price-tag">
            <span class="price-val">${project.price || 'Price on Request'}</span>
          </div>
        </div>
        <p class="card-project-loc">
          <i class="fa-solid fa-location-dot text-gold mr-1"></i>
          ${project.location}
        </p>
      </div>

      <!-- Key Specs Grid -->
      <div class="card-specs-matrix">
        <div class="spec-chip spec-chip-full">
          <span class="spec-chip-icon"><i class="fa-solid fa-bed"></i></span>
          <div class="spec-chip-text">
            <span class="spec-chip-lbl">Configuration</span>
            <span class="spec-chip-val">${project.type}</span>
          </div>
        </div>

        ${project.landParcel ? `
          <div class="spec-chip">
            <span class="spec-chip-icon"><i class="fa-solid fa-vector-square"></i></span>
            <div class="spec-chip-text">
              <span class="spec-chip-lbl">Land Parcel</span>
              <span class="spec-chip-val">${project.landParcel}</span>
            </div>
          </div>
        ` : ''}

        ${project.floors ? `
          <div class="spec-chip">
            <span class="spec-chip-icon"><i class="fa-solid fa-layer-group"></i></span>
            <div class="spec-chip-text">
              <span class="spec-chip-lbl">Elevation</span>
              <span class="spec-chip-val">${project.floors}</span>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- MahaRERA Verified Strip with QR Hover -->
      ${project.reraNumber ? `
        <div class="card-rera-interactive" title="Click to inspect MahaRERA QR">
          <div class="rera-info-group">
            <span class="rera-pill-lbl"><i class="fa-solid fa-shield-halved text-success mr-1"></i> MahaRERA Verified</span>
            <span class="rera-number-txt">${project.reraNumber}</span>
          </div>
          ${project.reraQRCodeUrl ? `
            <div class="rera-qr-wrapper">
              <img src="${project.reraQRCodeUrl}" alt="MahaRERA QR" class="rera-qr-thumb">
              <div class="qr-zoom-tooltip">
                <img src="${project.reraQRCodeUrl}" alt="MahaRERA QR Zoom" class="qr-zoom-img">
                <span>Scan for MahaRERA Certificate</span>
              </div>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <!-- Bottom Interactive Action CTAs -->
      <div class="card-bottom-actions flex gap-sm items-center mt-auto pt-sm">
        <button class="btn-card-primary btn-explore-action btn-magnetic" data-slug="${identifier}">
          <span>Explore Details</span>
          <span class="btn-arrow-slide"><i class="fa-solid fa-arrow-right"></i></span>
        </button>

        <button class="btn-card-whatsapp" onclick="event.stopPropagation(); if(window.showEnquireModal) window.showEnquireModal('${project.title}');" title="Instant WhatsApp Enquiry">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

    </div>
  `;

  // Attach button navigation listeners
  setTimeout(() => {
    const triggers = card.querySelectorAll<HTMLElement>('.btn-explore-trigger, .btn-explore-action');
    triggers.forEach(t => {
      t.addEventListener('click', (e) => {
        e.stopPropagation();
        const slug = t.getAttribute('data-slug');
        if (slug) router.navigate(`/project/${slug}`);
      });
    });
  }, 0);

  return card;
}

export const projectCardStyles = `
  .project-card-3d {
    background: #FFFFFF;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 15px 35px -5px rgba(10, 25, 47, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(226, 232, 240, 0.9);
    position: relative;
    transform-style: preserve-3d;
    will-change: transform, box-shadow;
  }

  .project-card-3d:hover {
    box-shadow: 0 30px 60px -10px rgba(10, 25, 47, 0.18), 0 15px 30px -10px rgba(212, 175, 55, 0.12);
    border-color: rgba(212, 175, 55, 0.6);
  }

  .card-glare-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px;
  }

  .card-media-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #0A192F;
  }

  .card-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-card-3d:hover .card-hero-img {
    transform: scale(1.08);
  }

  .card-media-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 25, 47, 0.4) 0%, transparent 45%, rgba(10, 25, 47, 0.75) 100%);
    pointer-events: none;
  }

  .card-top-badges {
    position: absolute;
    top: 14px;
    left: 0;
    padding: 0 14px;
    z-index: 5;
  }

  .status-badge-capsule {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    background: rgba(10, 25, 47, 0.88);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  .status-radar-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-gold);
    display: inline-block;
  }

  .status-badge-capsule.ongoing .status-radar-dot { background-color: var(--color-gold); }
  .status-badge-capsule.upcoming .status-radar-dot { background-color: #38BDF8; }
  .status-badge-capsule.completed .status-radar-dot { background-color: #4ADE80; }

  .possession-capsule {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--color-navy);
    border: 1px solid rgba(212, 175, 55, 0.3);
  }

  .card-hover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 25, 47, 0.45);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 6;
  }

  .project-card-3d:hover .card-hover-overlay {
    opacity: 1;
  }

  .btn-card-preview {
    background: #FFFFFF;
    color: var(--color-navy);
    padding: 10px 22px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(12px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-card-3d:hover .btn-card-preview {
    transform: translateY(0);
  }

  .btn-card-preview:hover {
    background: var(--color-gold);
    color: #FFFFFF;
  }

  .card-body-content {
    padding: 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
  }

  .card-project-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--color-navy);
    margin: 0;
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .card-project-loc {
    font-size: 0.84rem;
    color: var(--color-text-secondary);
    margin: 0;
    font-weight: 500;
  }

  .card-price-tag {
    background: rgba(212, 175, 55, 0.12);
    border: 1px solid rgba(212, 175, 55, 0.4);
    padding: 5px 12px;
    border-radius: 6px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price-val {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--color-navy);
    font-family: var(--font-heading);
  }

  .card-specs-matrix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    background: #F8FAFC;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
  }

  .spec-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .spec-chip.spec-chip-full {
    grid-column: span 2;
    border-bottom: 1px dashed #E2E8F0;
    padding-bottom: 6px;
  }

  .spec-chip-icon {
    color: var(--color-gold);
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .spec-chip-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .spec-chip-lbl {
    font-size: 0.65rem;
    color: var(--color-text-light);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .spec-chip-val {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--color-navy);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-rera-interactive {
    background: #FAFBFC;
    border: 1px solid #E2E8F0;
    border-left: 3px solid var(--color-gold);
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition: all 0.25s ease;
  }

  .card-rera-interactive:hover {
    background: #FFFFFF;
    border-color: var(--color-gold);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.15);
  }

  .rera-info-group {
    display: flex;
    flex-direction: column;
  }

  .rera-pill-lbl {
    font-size: 0.68rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-text-secondary);
    letter-spacing: 0.5px;
  }

  .rera-number-txt {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-navy);
    font-family: var(--font-heading);
  }

  .rera-qr-wrapper {
    position: relative;
  }

  .rera-qr-thumb {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    padding: 2px;
    cursor: zoom-in;
    transition: transform 0.25s ease;
  }

  .qr-zoom-tooltip {
    position: absolute;
    bottom: 42px;
    right: 0;
    background: #FFFFFF;
    border: 2px solid var(--color-gold);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 140px;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.85) translateY(10px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 20;
  }

  .qr-zoom-tooltip .qr-zoom-img {
    width: 110px;
    height: 110px;
    object-fit: contain;
  }

  .qr-zoom-tooltip span {
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--color-navy);
    text-align: center;
  }

  .card-rera-interactive:hover .qr-zoom-tooltip {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1) translateY(0);
  }

  .btn-card-primary {
    flex-grow: 1;
    background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
    color: #FFFFFF;
    border: 1px solid rgba(212, 175, 55, 0.4);
    padding: 11px 18px;
    border-radius: 9999px;
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .btn-card-primary:hover {
    background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    border-color: var(--color-gold);
  }

  .btn-arrow-slide {
    transition: transform 0.25s ease;
  }

  .btn-card-primary:hover .btn-arrow-slide {
    transform: translateX(4px);
  }

  .btn-card-whatsapp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #25D366;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
    transition: transform 0.2s ease, background-color 0.2s ease;
    flex-shrink: 0;
  }

  .btn-card-whatsapp:hover {
    transform: scale(1.1);
    background: #20BA56;
  }
`;
