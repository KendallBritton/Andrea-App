// Card pagination logic
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.ui-card');
    const modal = document.getElementById('cardViewerModal');
    const closeBtn = document.getElementById('closeCardViewerBtn');
    const header = document.getElementById('viewerCardHeader');
    const content = document.getElementById('viewerCardContent');
    const pagination = document.getElementById('viewerCardPagination');

    let currentPages = [];
    let currentPage = 0;
    let currentTitle = "";

    function renderPage() {
        content.innerHTML = `<img src="${currentPages[currentPage]}" alt="Card Page Image" style="max-width:100%;max-height:60vh;display:block;margin:0 auto;border-radius:12px;">`;
        header.textContent = currentTitle;
        pagination.innerHTML = '';
        if (currentPages.length > 1) {
            for (let i = 0; i < currentPages.length; i++) {
                const btn = document.createElement('button');
                btn.textContent = i + 1;
                if (i === currentPage) btn.classList.add('active');
                btn.addEventListener('click', () => {
                    currentPage = i;
                    renderPage();
                });
                pagination.appendChild(btn);
            }
        }
    }

    cards.forEach(card => {
        card.addEventListener('click', function () {
            currentPages = JSON.parse(this.getAttribute('data-pages'));
            currentPage = 0;
            currentTitle = this.querySelector('.card-header').textContent;
            modal.style.display = 'flex';
            renderPage();
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll('.card-section').forEach(section => {
    // Create toggle button if not present
    let toggle = section.querySelector('.card-section-toggle');
    if (!toggle) {
        toggle = document.createElement('button');
        toggle.className = 'card-section-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerText = '+';
        section.insertBefore(toggle, section.firstChild);
    } else {
        // Ensure all toggles start collapsed
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerText = '+';
    }
    const cardList = section.querySelector('.card-list');
    const title = section.querySelector('.card-section-title');
    // Start collapsed
    cardList.style.display = 'none';
    toggle.onclick = function() {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        cardList.style.display = expanded ? 'none' : '';
        toggle.innerText = expanded ? '+' : '−';
    };
    // Make title clickable too
    title.style.cursor = 'pointer';
    title.onclick = () => toggle.click();
});

document.querySelectorAll('.ui-card').forEach(card => {
    const pages = JSON.parse(card.getAttribute('data-pages') || '[]');
    if (pages.length > 0) {
        // Remove any existing thumbnail to avoid duplicates
        const oldThumb = card.querySelector('.card-thumb');
        if (oldThumb) oldThumb.remove();

        const thumb = document.createElement('img');
        thumb.src = pages[0];
        thumb.alt = 'Card thumbnail';
        thumb.className = 'card-thumb';
        thumb.style.width = '50%';
        thumb.style.maxWidth = '180px';
        thumb.style.height = 'auto';
        thumb.style.display = 'block';
        thumb.style.margin = '10px auto 20px auto';
        thumb.style.borderRadius = '12px';
        thumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.09)';
        thumb.style.objectFit = 'contain';

        // Insert thumbnail after the card title
        const header = card.querySelector('.card-header');
        if (header && header.nextSibling) {
            card.insertBefore(thumb, header.nextSibling);
        } else if (header) {
            card.appendChild(thumb);
        } else {
            card.insertBefore(thumb, card.firstChild);
        }
    }
});