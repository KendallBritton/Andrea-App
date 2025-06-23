const openLetter = document.getElementById('openLetter');
const noteModal = document.getElementById('noteModal');
const closeNoteBtn = document.getElementById('closeNoteBtn');
const notePages = document.getElementById('notePages');
const notePagination = document.getElementById('notePagination');

// Define your pages here
const pages = [
    `<p>My Dearest,</p>
    <p>
        I just wanted to remind you of how much you mean to me.<br><br>
        You always know how to make me smile, even on the toughest days.<br><br>
        Your kindness and compassion inspire me to be a better person every day.
        I love the way you listen and truly care about what I have to say.<br><br>
        Your laughter is contagious and fills our home with joy.<br><br>
        Thank you for being my partner, my best friend, and my greatest support.
        <br><br>
        I love you more than words can say.<br>
        Forever yours,<br>❤️
    </p>`,
    `<p>
        I love the way you listen and truly care about what I have to say.<br>
        Your laughter is contagious and fills our home with joy.<br>
        Thank you for being my partner, my best friend, and my greatest support.
    </p>`,
    `<p>
        I love you more than words can say.<br>
        Forever yours,<br>❤️
    </p>`
];

let currentPage = 0;

function renderPage() {
    notePages.innerHTML = pages[currentPage];
    notePagination.innerHTML = '';
    if (pages.length > 1) {
        for (let i = 0; i < pages.length; i++) {
            const btn = document.createElement('button');
            btn.textContent = i + 1;
            if (i === currentPage) btn.classList.add('active');
            btn.addEventListener('click', () => {
                currentPage = i;
                renderPage();
            });
            notePagination.appendChild(btn);
        }
    }
}

openLetter.addEventListener('click', () => {
    noteModal.classList.add('open');
    currentPage = 0;
    renderPage();
});

openLetter.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        noteModal.classList.add('open');
        currentPage = 0;
        renderPage();
    }
});

closeNoteBtn.addEventListener('click', () => {
    noteModal.classList.remove('open');
});

noteModal.addEventListener('click', (e) => {
    if (e.target === noteModal) {
        noteModal.classList.remove('open');
    }
});

const heartsRain = document.getElementById('heartsRain');

function spawnHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart-float';
    heart.innerHTML = '❤';

    // Random horizontal position (10% to 90% for padding)
    heart.style.left = Math.random() * 80 + 10 + '%';
    // Random size
    const size = Math.random() * 1.2 + 1;
    heart.style.fontSize = `${size}em`;
    // Random color shade
    const colors = ['#ff6f91', '#ffb6d5', '#ffb3b3', '#ff8fab', '#ffb300'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    // Random animation duration
    heart.style.animationDuration = (2.2 + Math.random() * 1.2) + 's';

    // Position the heart absolutely in the viewport, starting from the bottom
    heart.style.position = 'fixed';
    heart.style.bottom = '0px';
    heart.style.zIndex = '0';

    // Append to body so it can float from the bottom of the viewport
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Spawn hearts at intervals
setInterval(spawnHeart, 400);