export function createConfigurationTable(project: any): HTMLElement {
  const container = document.createElement('div');
  container.className = 'config-section';

  const configs = project.configurations || [];

  container.innerHTML = `
    <h3 class="section-heading">Project Configuration</h3>
    <div class="table-responsive">
      <table class="config-table">
        <thead>
          <tr>
            <th>Unit Type</th>
            <th>Carpet Area</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${configs.length > 0 ? configs.map((item: any) => `
            <tr>
                <td><span class="unit-type">${item.type}</span></td>
                <td><span class="unit-area">${item.carpet}</span></td>
                <td>
                    <a href="https://wa.me/917744009295?text=Hi, I am interested in ${encodeURIComponent(item.type)} at ${encodeURIComponent(project.title)}. Please share the price breakup." target="_blank" class="btn-price-request">
                        <span class="icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </span>
                        Request Price
                    </a>
                </td>
            </tr>
          `).join('') : '<tr><td colspan="3" style="text-align:center; padding: 20px;">Configurations coming soon</td></tr>'}
        </tbody>
      </table>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .config-section {
      margin-top: var(--spacing-xl);
    }
    
    .section-heading {
      font-size: 1.5rem;
      color: var(--color-navy);
      margin-bottom: var(--spacing-lg);
      border-left: 4px solid var(--color-gold);
      padding-left: 15px;
      font-family: var(--font-heading);
    }

    .table-responsive {
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }

    .config-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--color-white);
    }

    .config-table th, .config-table td {
      padding: 20px 25px;
      text-align: left;
      border-bottom: 1px solid var(--color-border-light);
    }

    .config-table th {
      background-color: var(--color-navy);
      color: var(--color-white);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
    }
    
    .config-table tr:last-child td {
        border-bottom: none;
    }
    
    .config-table tr {
        transition: background-color 0.2s ease;
    }
    
    .config-table tr:hover {
        background-color: #FAFCFF; /* Very light blue tint on hover */
    }

    .config-table td {
      color: var(--color-text-main);
      vertical-align: middle;
    }
    
    .unit-type {
        font-weight: 700;
        color: var(--color-navy);
        font-size: 1.05rem;
    }
    
    .unit-area {
        color: var(--color-text-secondary);
        font-weight: 500;
    }

    .btn-price-request {
      background: transparent;
      color: var(--color-gold);
      padding: 8px 18px;
      border-radius: 50px;
      text-decoration: none;
      font-size: 0.85rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 1px solid var(--color-gold);
    }

    .btn-price-request:hover {
      background: var(--color-gold);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
    }
    
    .btn-price-request .icon {
        display: flex;
        align-items: center;
    }
  `;
  container.appendChild(style);

  return container;
}
