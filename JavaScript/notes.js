// Card pagination logic
document.querySelectorAll('.ui-card').forEach(card => {
    const pages = JSON.parse(card.getAttribute('data-pages'));
    let currentPage = 0;

    const contentDiv = card.querySelector('.card-content');
    const paginationDiv = card.querySelector('.card-pagination');

    function renderPage() {
        contentDiv.textContent = pages[currentPage];
        paginationDiv.innerHTML = '';
        if (pages.length > 1) {
            for (let i = 0; i < pages.length; i++) {
                const btn = document.createElement('button');
                btn.textContent = i + 1;
                if (i === currentPage) btn.classList.add('active');
                btn.addEventListener('click', () => {
                    currentPage = i;
                    renderPage();
                });
                paginationDiv.appendChild(btn);
            }
        }
    }
    renderPage();
});