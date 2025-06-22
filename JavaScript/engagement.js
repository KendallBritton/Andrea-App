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