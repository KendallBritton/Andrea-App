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