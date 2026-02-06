export function createQuickInfoBar(project: any): HTMLElement {
  const bar = document.createElement('div');
  bar.className = 'quick-info-bar';

  bar.innerHTML = `
    <div class="container flex justify-between items-center h-full">
      <div class="info-item">
        <span class="info-label">Location</span>
        <span class="info-value">${project.location}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Configuration</span>
        <span class="info-value">${project.type}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Price</span>
        <span class="info-value">${project.price || 'On Request'}</span>
      </div>
      <div class="info-separator"></div>
      <div class="info-item">
        <span class="info-label">Possession</span>
        <span class="info-value">${project.possession || (project.status === 'Ongoing' ? 'Dec 2026' : 'Ready')}</span>
      </div>
      <div class="info-action">
        <button onclick="(window as any).showEnquireModal('${project.title}');" class="btn btn-primary btn-sm btn-whatsapp-bar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Get Price on WhatsApp
        </button>
      </div>
    </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .quick-info-bar {
      background-color: var(--color-navy);
      color: var(--color-white);
      height: 80px;
      width: 100%;
      border-bottom: 2px solid var(--color-gold);
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .info-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-gold);
      margin-bottom: 2px;
    }

    .info-value {
      font-size: 1rem;
      font-weight: 600;
    }

    .info-separator {
      width: 1px;
      height: 40px;
      background-color: rgba(255,255,255,0.2);
    }

    .btn-sm {
      padding: 8px 20px;
      font-size: 0.9rem;
    }
    
    .btn-whatsapp-bar {
        display: inline-flex;
        align-items: center;
        background-color: #25D366;
        border: none;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    
    .btn-whatsapp-bar:hover {
        background-color: #20BA5C;
        color: white;
    }
    
    .mr-2 { margin-right: 8px; }

    @media (max-width: 768px) {
      .quick-info-bar {
        height: auto;
        padding: 15px 0;
      }
      .container.flex {
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
      }
      .info-separator {
        display: none;
      }
      .info-item {
        align-items: center;
        min-width: 45%;
        text-align: center;
      }
    }
  `;
  bar.appendChild(style);

  return bar;
}
