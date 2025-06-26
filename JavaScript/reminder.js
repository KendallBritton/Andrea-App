const openLetter = document.getElementById('openLetter');
const noteModal = document.getElementById('noteModal');
const closeNoteBtn = document.getElementById('closeNoteBtn');
const notePages = document.getElementById('notePages');
const notePagination = document.getElementById('notePagination');

// Define your pages here
const pages = [
    `<p>My Andrea,</p>
    <p>
        Everyday I wake up, look into your eyes, and ask myself, "How did I get so lucky?"<br>
        And I mean truly, how did I get so lucky to have you in my life?<br>
        
        From the moment I met you, I instantly fell in love with your smile, your passion, and your spirit.<br>
        Being fortunate enought to be your partner and dating you through all these years, I've had countless additional reasons to fall 
        deeper and deeper in love with you that range from your profound intention of care, support, and love for others, to your dedication of growth
        within yourself and every relationship around you.

        Andrea, I believe you are the human embodiment of a shining star in the night sky. Every time I look at you, I see
        a pure entity of energy that gleams with warmth and light, and it extends to every corner of this earth that is graced
        by your presence.

        I love you for your gentle heart, for your way of thinking, for your strength and resiliency, and for your acceptance of others.<br>
        I love you because you embrace yourself in every aspect that you are and are so generous to share that with the world around you.
        I love you because you complete me, yet also push me in ways to grow that I've been previously unaware of. 

        I could go on and on and list all the things that make you a true sensation, but what's the rush when we have a lifetime together that
        I can express all the ways that I appreciate, love, cherish, and value everything that you are on a daily basis!

        I want to thank you for choosing me all those years ago and saving me to experience a life with love that I never thought was possible for myself. The love that you offer
        is so rich and pure, and I can't take you enough for loving me in the way that you do, regardless of how hard I make it sometimes.

        The love that we share is something that I wish everyone has the chance to find and experience at some point in their lifetime because there is simply no better feeling than
        being able to share, walk, and build this life together as the strongest team that we are.

        I read quote recently and it made me think of us. It goes:
        
        "my love for you isn't something that I can lose.
        it's part of me, given freely to you.
        no conditions, no expectations.
        just a promise: I will be there next to you.

        if you need to stay up all night crying,
        i will be there next to you,
        and if tomorrow you have a bad day,
        i will be there for you.

        just tell me, and i will be there,
        next to you."

        There was an additional comment that stated "we don't fall in love with the people who promise everything... We fall 
        for the ones who stay especially when we fall apart."

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
