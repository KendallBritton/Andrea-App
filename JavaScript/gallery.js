// Example photo data by year (replace with your actual images)
const photosByYear = {
    "2020": [
        "../Images/Gallery-Images/2020-Images/photo1.jpg",
        "../Images/Gallery-Images/2020-Images/photo1.jpg",
        "../Images/Gallery-Images/2020-Images/photo1.jpg",
        "../Images/Gallery-Images/2020-Images/photo1.jpg"
    ],
    "2021": [
        "../Images/Gallery-Images/2021-Images/photo1.jpg",
        "../Images/Gallery-Images/2021-Images/photo1.jpg",
        "../Images/Gallery-Images/2021-Images/photo1.jpg",
        "../Images/Gallery-Images/2021-Images/photo1.jpg"
    ],
    "2022": [
        "../Images/Gallery-Images/2022-Images/photo1.jpg",
        "../Images/Gallery-Images/2022-Images/photo1.jpg",
        "../Images/Gallery-Images/2022-Images/photo1.jpg",
        "../Images/Gallery-Images/2022-Images/photo1.jpg"
    ],
    "2023": [
        "../Images/Gallery-Images/2023-Images/photo1.jpg",
        "../Images/Gallery-Images/2023-Images/photo1.jpg",
        "../Images/Gallery-Images/2023-Images/photo1.jpg",
        "../Images/Gallery-Images/2023-Images/photo1.jpg"
    ],
    "2024": [
        "../Images/Gallery-Images/2024-Images/photo1.jpg",
        "../Images/Gallery-Images/2024-Images/photo1.jpg",
        "../Images/Gallery-Images/2024-Images/photo1.jpg",
        "../Images/Gallery-Images/2024-Images/photo1.jpg"
    ]
};

const yearBtns = document.querySelectorAll('.year-btn');
const yearGallerySection = document.getElementById('yearGallerySection');
const photoGrid = document.getElementById('photoGrid');
const highlightPhoto = document.getElementById('highlight-photo');

let currentYear = null;

yearBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        yearBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentYear = this.getAttribute('data-year');
        openYearGallery(currentYear);
    });
});

function openYearGallery(year) {
    const photos = photosByYear[year] || [];
    photoGrid.innerHTML = '';
    if (photos.length > 0) {
        highlightPhoto.src = photos[0];
        photos.forEach((src, idx) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Photo ${idx + 1}`;
            if (idx === 0) img.classList.add('selected');
            img.addEventListener('click', function () {
                highlightPhoto.src = this.src;
                photoGrid.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
            });
            photoGrid.appendChild(img);
        });
        yearGallerySection.style.display = '';
    } else {
        highlightPhoto.src = '';
        photoGrid.innerHTML = '<div>No photos available for this year.</div>';
        yearGallerySection.style.display = '';
    }
}