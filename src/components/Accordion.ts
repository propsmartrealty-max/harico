export interface AccordionItem {
  title: string;
  content: string; // HTML string
}

export function createAccordion(items: AccordionItem[], idPrefix: string): HTMLElement {
  const container = document.createElement('div');
  container.className = 'accordion';

  items.forEach((item, index) => {
    const itemId = `${idPrefix}-${index}`;
    const itemEl = document.createElement('div');
    itemEl.className = 'accordion-item';

    itemEl.innerHTML = `
      <button class="accordion-header" aria-expanded="false" aria-controls="${itemId}">
        <span class="accordion-title">${item.title}</span>
        <span class="accordion-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
      </button>
      <div id="${itemId}" class="accordion-content" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
        <div class="accordion-body">
          ${item.content}
        </div>
      </div>
    `;

    // Interaction
    const header = itemEl.querySelector('.accordion-header') as HTMLButtonElement;
    const content = itemEl.querySelector('.accordion-content') as HTMLElement;
    const icon = itemEl.querySelector('.accordion-icon') as HTMLElement;

    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Toggle current
      header.setAttribute('aria-expanded', String(!isExpanded));

      if (!isExpanded) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
        header.style.backgroundColor = 'var(--color-secondary-bg)'; // Subtle bg change
      } else {
        header.classList.remove('active');
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
        header.style.backgroundColor = 'var(--color-white)';
      }
    });

    container.appendChild(itemEl);
  });

  const style = document.createElement('style');
  style.textContent = `
    .accordion {
      display: flex;
      flex-direction: column;
      gap: 15px; /* Increased gap */
    }

    .accordion-item {
      background: var(--color-white);
      border-radius: var(--radius-md);
      box-shadow: 0 2px 4px rgba(0,0,0,0.03); /* Subtle shadow */
      border: 1px solid var(--color-border-light);
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .accordion-item:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        border-color: var(--color-border);
    }

    .accordion-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px; /* More padding */
      background: var(--color-white);
      border: none;
      cursor: pointer;
      text-align: left;
      transition: all var(--transition-normal);
      position: relative;
    }
    
    .accordion-header::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: var(--color-gold);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .accordion-header.active::before {
        opacity: 1;
    }
    
    .accordion-header.active .accordion-title {
        color: var(--color-gold-hover);
    }

    .accordion-title {
      font-weight: 600;
      color: var(--color-navy);
      font-size: 1.15rem;
      flex: 1;
      font-family: var(--font-heading);
      letter-spacing: 0.5px;
    }

    .accordion-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-secondary);
      transition: transform 0.3s ease;
      width: 24px;
      height: 24px;
    }
    
    .accordion-header.active .accordion-icon {
        color: var(--color-gold);
    }

    .accordion-body {
      padding: 5px 25px 25px; /* Matches header padding horizontally */
      color: var(--color-text-secondary);
      line-height: 1.7;
      font-size: 1rem;
    }
    
    /* List styling within accordion body if present */
    .accordion-body ul {
        padding-left: 20px;
        margin: 0;
    }
    
    .accordion-body li {
        margin-bottom: 8px;
    }
  `;
  container.appendChild(style);

  return container;
}
