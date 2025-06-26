document.addEventListener('DOMContentLoaded', function () {
    // Main gallery highlight logic
    const highlightPhoto = document.getElementById('highlight-photo');
    const galleryThumbs = document.querySelectorAll('.gallery-grid img');
    galleryThumbs.forEach(img => {
        img.addEventListener('click', function () {
            highlightPhoto.src = this.src;
            galleryThumbs.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Modal gallery logic
    const viewGalleryBtn = document.getElementById('viewGalleryBtn');
    const galleryModal = document.getElementById('galleryModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalGalleryThumbs = galleryModal.querySelectorAll('.modal-gallery-grid img');

    // Sync modal highlight with main highlight
    function syncModalHighlight() {
        const currentSrc = highlightPhoto.src;
        modalGalleryThumbs.forEach(img => {
            if (img.src === currentSrc) {
                img.classList.add('selected');
            } else {
                img.classList.remove('selected');
            }
        });
    }

    // Sync main highlight with modal highlight
    function syncMainHighlight(selectedSrc) {
        highlightPhoto.src = selectedSrc;
        galleryThumbs.forEach(img => {
            if (img.src === selectedSrc) {
                img.classList.add('selected');
            } else {
                img.classList.remove('selected');
            }
        });
    }

    viewGalleryBtn.addEventListener('click', () => {
        galleryModal.classList.add('open');
        syncModalHighlight();
    });

    closeModalBtn.addEventListener('click', () => {
        galleryModal.classList.remove('open');
    });

    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('open');
        }
    });

    // Modal image selection (close modal after selection)
    modalGalleryThumbs.forEach(img => {
        img.addEventListener('click', function () {
            modalGalleryThumbs.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            syncMainHighlight(this.src);
            galleryModal.classList.remove('open'); // Close modal after selection
        });
    });
});

const engagementPhotos = [
    "../Images/Engagement-Images/IMG_3809_VSCO 2.jpeg",
    "../Images/Engagement-Images/IMG_7540.jpeg",
    "../Images/Engagement-Images/IMG_4134.jpeg",
    "../Images/Engagement-Images/IMG_3848_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_1135.jpeg",
    "../Images/Engagement-Images/IMG_3317.jpeg",
    "../Images/Engagement-Images/IMG_3689.jpeg",
    "../Images/Engagement-Images/IMG_3696.jpeg",
    "../Images/Engagement-Images/IMG_3699.jpeg",
    "../Images/Engagement-Images/IMG_3747_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_3748.jpeg",
    "../Images/Engagement-Images/IMG_3768.jpeg",
    "../Images/Engagement-Images/IMG_3770.jpeg",
    "../Images/Engagement-Images/IMG_3792.jpeg",
    "../Images/Engagement-Images/IMG_3809_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_3809.jpeg",
    "../Images/Engagement-Images/IMG_3823.jpeg",
    "../Images/Engagement-Images/IMG_3856.jpeg",
    "../Images/Engagement-Images/IMG_3860.jpeg",
    "../Images/Engagement-Images/IMG_3867.jpeg",
    "../Images/Engagement-Images/IMG_3871.jpeg",
    "../Images/Engagement-Images/IMG_3875.jpeg",
    "../Images/Engagement-Images/IMG_3877.jpeg",
    "../Images/Engagement-Images/IMG_3878_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_3878.jpeg",
    "../Images/Engagement-Images/IMG_3912.jpeg",
    "../Images/Engagement-Images/IMG_3920.jpeg",
    "../Images/Engagement-Images/IMG_3924.jpeg",
    "../Images/Engagement-Images/IMG_3925_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_3926.jpeg",
    "../Images/Engagement-Images/IMG_3931.jpeg",
    "../Images/Engagement-Images/IMG_3948.jpeg",
    "../Images/Engagement-Images/IMG_3977_VSCO.jpeg",
    "../Images/Engagement-Images/IMG_3977.jpeg",
    "../Images/Engagement-Images/IMG_4015.jpeg",
    "../Images/Engagement-Images/IMG_4071.jpeg",
    "../Images/Engagement-Images/IMG_4073.jpeg",
    "../Images/Engagement-Images/IMG_4080.jpeg",
    "../Images/Engagement-Images/IMG_4082.jpeg",
    "../Images/Engagement-Images/IMG_4089.jpeg",
    "../Images/Engagement-Images/IMG_4098.jpeg",
    "../Images/Engagement-Images/IMG_4100.jpeg",
    "../Images/Engagement-Images/IMG_4132.jpeg",
    "../Images/Engagement-Images/IMG_4137.jpeg",
    "../Images/Engagement-Images/IMG_6159.jpeg",
    "../Images/Engagement-Images/IMG_6250.jpeg"
];

let currentPhotoIndex = 0;

function renderGalleryGrid() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    engagementPhotos.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Engagement Photo ${idx + 1}`;
        img.className = 'gallery-thumb';
        if (idx === currentPhotoIndex) img.classList.add('selected');
        img.loading = 'lazy';
        img.addEventListener('click', function() {
            setHighlightPhoto(idx);
        });
        grid.appendChild(img);
    });
}

function setHighlightPhoto(idx) {
    currentPhotoIndex = (idx + engagementPhotos.length) % engagementPhotos.length;
    document.getElementById('highlight-photo').src = engagementPhotos[currentPhotoIndex];
    // Update selected class in grid
    document.querySelectorAll('#galleryGrid img').forEach((img, i) => {
        img.classList.toggle('selected', i === currentPhotoIndex);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderGalleryGrid();
    setHighlightPhoto(0);

    document.getElementById('highlight-left').onclick = function() {
        setHighlightPhoto(currentPhotoIndex - 1);
    };
    document.getElementById('highlight-right').onclick = function() {
        setHighlightPhoto(currentPhotoIndex + 1);
    };

    // Optional: swipe support for highlight photo
    let touchStartX = null;
    document.getElementById('highlight-photo').addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    document.getElementById('highlight-photo').addEventListener('touchend', function (e) {
        if (touchStartX === null) return;
        let touchEndX = e.changedTouches[0].screenX;
        let diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setHighlightPhoto(currentPhotoIndex - 1);
            } else {
                setHighlightPhoto(currentPhotoIndex + 1);
            }
        }
        touchStartX = null;
    });
});