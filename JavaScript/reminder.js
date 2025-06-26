const openLetter = document.getElementById('openLetter');
const noteModal = document.getElementById('noteModal');
const closeNoteBtn = document.getElementById('closeNoteBtn');
const notePages = document.getElementById('notePages');
const notePagination = document.getElementById('notePagination');

// Define your pages here
const pages = [
    `<p class="note-page">
        My Andrea,
    </p>
    <p class="note-page">
        Everyday I wake up, look into your eyes, and ask myself, <strong>"How did I get so lucky?"</strong><br>
        And I mean truly, how did I get so lucky to have you in my life?
    </p>
    <p class="note-page">
        From the moment I met you, I instantly fell in love with your smile, your passion, and your spirit.
    </p>
    <p class="note-page">
        Being fortunate enough to be your partner and dating you throughout all these years, I've had countless additional reasons to fall deeper and deeper in love with you that range from your profound intention of care, support, and love for others, to your dedication of growth within yourself and every relationship around you.
    </p>`,

    `<p class="note-page">
        Andrea, I believe you are the human embodiment of a shining star in the night sky. Every time I look at you, I see a pure entity of energy that gleams with warmth and light, and it extends to every corner of this earth that is graced by your presence.
    </p>
    <p class="note-page">
        I love you for your gentle heart, for your way of thinking, for your strength and resiliency, and for your acceptance of others.<br>
        I love you because you embrace yourself in every aspect that you are and are so generous to share that with the world around you.<br>
        I love you because you complete me, yet also push me in ways to grow that I've been previously unaware of.
    </p>`,

    `<p class="note-page">
        I could go on and on and list all the things that make you a true sensation, but what's the rush when we have a lifetime together that I can express all the ways that I appreciate, love, cherish, and value everything that you are on a daily basis!
    </p>
    <p class="note-page">
        I want to thank you for choosing me all those years ago and saving me to experience a life with love that I never thought was possible for myself. The love that you offer is so rich and pure, and I can't thank you enough for loving me in the way that you do, regardless of how hard I make it sometimes.
    </p>`,

    `<p class="note-page">
        The love that we share is something that I wish everyone has the chance to find and experience at some point in their lifetime because there is simply no better feeling than being able to share, walk, and build this life together as the strongest team that we are.
    </p>
    <p class="note-page" style="margin-top: 1.5em;">
        I read a quote recently and it made me think of us. It goes:
    </p>`,
    `<p>
        <blockquote class="note-quote">
            "my love for you isn't something that I can lose.<br>
            it's part of me, given freely to you.<br>
            no conditions, no expectations.<br>
            just a promise: I will be there next to you.<br><br>
            if you need to stay up all night crying,<br>
            i will be there next to you,<br>
            and if tomorrow you have a bad day,<br>
            i will be there for you.<br><br>
            just tell me, and i will be there,<br>
            next to you."
        </blockquote>
    </p>`,

    `<p class="note-page">
        There was an additional point that stated <em>"we don't fall in love with the people who promise everything... we fall for the ones who stay especially when we fall apart."</em>
    </p>
    <p class="note-page">
        I referenced this because I want you to know that I will always be there for you, no matter what life throws our way.
    </p>
    <p class="note-page">
        I recognize that it's not on you to always voice out your needs, and that I need to be more proactive in reading the signs, trusting my instinct (by which you taught me), and being there for you when you need me the most, in both the good and bad times.
    </p>`,

    `<p class="note-page">
        At the end of the day, it's nobody but you and me. We built this life together, and we will continue to fortify our future, foundation, love, and relationship so that it blossoms into something that is everlasting and perfect for us.
    </p>
    <p class="note-page">
        Being Andrea Elizabeth Moore's partner and lover is the greatest milestone of my lifetime, and I am so grateful, lucky, and honored to be walking this journey with you!
    </p>
    <p class="note-page">
        Thank you for being so patient with me, forgiving me when I make mistakes, and holding me accountable when I need it most although it may not always be easy to do so, and somehow still managing to love me through it all.
    </p>`,

    `<p class="note-page">
        Thank you for being the person I love most in this world, and for being the person I will spend the rest of my life with.
    </p>
    <p class="note-page">
        Most importantly, thank you for your existence and your story!
    </p>
    <p class="note-page">
        I am so much of the person who I am today due to all of your direct and indirect contributions to our life.
    </p>
        <p class="note-page">
        Seriously, I thank you for your love, friendship, partnership, existence, and everything else that is a direct reflection of Andrea.
    </p>
    <p class="note-page">
        Let's blossom together, grow together, and continue to build a life that is full of love, laughter, and adventure.
    </p>`,

    `<p class="note-page">
        I love you endlessly, the soon to be Mrs. Andrea Britton!!
    </p>
    <p class="note-page" style="margin-top: 2em;">
        <strong>Now stop reading this so I can give you the biggest hug and kiss!</strong>
    </p>
    <p class="note-page" style="margin-top: 1.5em;">
        Forever yours,<br>
        Kenny ❤️
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

// --- Swipe navigation for note modal ---
let touchStartX = null;
noteModal.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
    }
});
noteModal.addEventListener('touchend', function(e) {
    if (touchStartX === null) return;
    let touchEndX = e.changedTouches[0].clientX;
    let diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
        if (diff < 0 && currentPage < pages.length - 1) {
            currentPage++;
            renderPage();
        } else if (diff > 0 && currentPage > 0) {
            currentPage--;
            renderPage();
        }
    }
    touchStartX = null;
});

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
