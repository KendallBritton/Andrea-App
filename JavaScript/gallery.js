// Example photo data by year (replace with your actual images)
const photosByYear = {
    "2020": [
        "../Images/Gallery-Images/2020-Images/9B709AD7-9AAC-4D94-A537-0ED6AB1D2B71.jpeg",
        "../Images/Gallery-Images/2020-Images/923645BE-81A2-436C-800F-308C15ACD7C4.jpeg",
        "../Images/Gallery-Images/2020-Images/62507855001__77FD547F-607F-4541-BE08-5DACF350C937.jpeg",
        "../Images/Gallery-Images/2020-Images/C9AAF305-C8A0-4065-9EAC-2847D7213BF1.jpeg",
        "../Images/Gallery-Images/2020-Images/DF1DAE10-8ACD-4611-A21E-AA8D2644C50E.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_0027.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_0038.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9289.png",
        "../Images/Gallery-Images/2020-Images/IMG_9301.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9302.png",
        "../Images/Gallery-Images/2020-Images/IMG_9305.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9306.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9321.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9337.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9357.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9369.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9393.png",
        "../Images/Gallery-Images/2020-Images/IMG_9395.png",
        "../Images/Gallery-Images/2020-Images/IMG_9435.png",
        "../Images/Gallery-Images/2020-Images/IMG_9451.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9454.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9457.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9500.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9521.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9587.png",
        "../Images/Gallery-Images/2020-Images/IMG_9814.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9819.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9888.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9889.jpeg",
        "../Images/Gallery-Images/2020-Images/IMG_9890.jpeg",
        "../Images/Gallery-Images/2020-Images/lp_image.jpeg",
        "../Images/Gallery-Images/2020-Images/lp_image2.jpeg"
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

document.querySelectorAll('.year-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const year = this.getAttribute('data-year');
        const photos = photosByYear[year] || [];
        const photoGrid = document.getElementById('photoGrid');
        const highlight = document.getElementById('highlight-photo');
        const section = document.getElementById('yearGallerySection');
        const viewBtn = document.getElementById('viewGalleryBtn');

        // Show section
        section.style.display = 'block';

        // Set highlight photo to first photo or blank
        highlight.src = photos[0] || '';
        highlight.style.display = photos.length ? 'block' : 'none';

        // Hide grid and show button
        photoGrid.style.display = 'none';
        viewBtn.style.display = photos.length > 1 ? 'block' : 'none';

        // Prepare grid but don't show yet
        photoGrid.innerHTML = '';
        photos.forEach((src, idx) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Photo ${idx + 1} of ${year}`;
            img.className = 'gallery-thumb';
            img.addEventListener('click', () => {
                highlight.src = src;
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on photo click
            });
            photoGrid.appendChild(img);
        });

        // Button click shows grid
        viewBtn.onclick = () => {
            photoGrid.style.display = 'grid';
            viewBtn.style.display = 'none';
        };
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