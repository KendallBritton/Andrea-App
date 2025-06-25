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
        "../Images/Gallery-Images/2021-Images/0B935FEA-8859-4F3B-B218-511BB9C9168B.jpeg",
        "../Images/Gallery-Images/2021-Images/2021-10-08-18_23_18-325.jpeg",
        "../Images/Gallery-Images/2021-Images/5598CF24-D6AF-4B3D-82C8-FD9342784F6B.jpeg",
        "../Images/Gallery-Images/2021-Images/64936684890__64596C4C-3256-472C-B8CD-D3FCC06FE1AC.jpeg",
        "../Images/Gallery-Images/2021-Images/64947262554__4E636932-C251-4551-809E-C2A134B090F4.jpeg",
        "../Images/Gallery-Images/2021-Images/B72250F0-C1B3-4A5E-8BB6-EC9044F3752F.jpeg",
        "../Images/Gallery-Images/2021-Images/E78321A8-9349-45D1-A682-555E78E07A93.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0018.png",
        "../Images/Gallery-Images/2021-Images/IMG_0021.png",
        "../Images/Gallery-Images/2021-Images/IMG_0022.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0076.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0089.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0090.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0098.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0100.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0103.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0123.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0131.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0182.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0196.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0198.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0215.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0223.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0237.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0240.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0242.png",
        "../Images/Gallery-Images/2021-Images/IMG_0324.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0327.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0337.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0341.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0343.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0359.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0361.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0363.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0365.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0368.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0370.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0371.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0374.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0393.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0400.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0576.png",
        "../Images/Gallery-Images/2021-Images/IMG_0774.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_0829.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1325.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1485.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1583.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1599.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1609.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1747.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1834.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_1845.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2086.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2153.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2155.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2156.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2158.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2159.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_2228.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_8604.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_8610.jpeg",
        "../Images/Gallery-Images/2021-Images/IMG_9999.jpeg",
        "../Images/Gallery-Images/2021-Images/lp_image.jpeg"
    ],
    "2022": [
        "../Images/Gallery-Images/2022-Images/1CA3ACC9-906F-488B-97AC-4C4CD1407ED4.jpeg",
        "../Images/Gallery-Images/2022-Images/1D6A9996-1B8B-433F-82A6-AA14BAE9F5B6.jpeg",
        "../Images/Gallery-Images/2022-Images/8FB6E584-FFA8-433D-8135-352BA0D1D024.jpeg",
        "../Images/Gallery-Images/2022-Images/18AB9750-2AD4-486A-8AF3-7C75936D8557.jpeg",
        "../Images/Gallery-Images/2022-Images/21AB8516-C8A8-49E8-A75F-A2C79539A789.jpeg",
        "../Images/Gallery-Images/2022-Images/21F7E6F4-6B42-4A1C-858C-9E8DFFF5125A.jpeg",
        "../Images/Gallery-Images/2022-Images/67E1AFE7-C79A-4BCE-92A4-2BC2B244C264.jpeg",
        "../Images/Gallery-Images/2022-Images/158C1393-C19E-4A49-99E4-46E172EE21B7.jpeg",
        "../Images/Gallery-Images/2022-Images/572F3D03-0CD8-456A-928A-1643B488EA8C.jpeg",
        "../Images/Gallery-Images/2022-Images/645E49ED-D273-4094-AEFF-692F04DE26D3.jpeg",
        "../Images/Gallery-Images/2022-Images/1614C4BE-2EB9-4748-8D25-0B4A4D1EE440.jpeg",
        "../Images/Gallery-Images/2022-Images/2022-06-04-16_40_02-796.jpeg",
        "../Images/Gallery-Images/2022-Images/5594E35B-A560-4334-8A23-206D55A4E4F1.jpeg",
        "../Images/Gallery-Images/2022-Images/602946C6-BEB7-4F0D-8DDA-8C0A9B36638C.jpeg",
        "../Images/Gallery-Images/2022-Images/08293015-5FC6-46A8-AC9C-9BE3BF5AB241.jpeg",
        "../Images/Gallery-Images/2022-Images/68274936401__9099313F-FAAB-4EA9-987A-3743873CC0EB.jpeg",
        "../Images/Gallery-Images/2022-Images/AC405B92-4001-4CBC-BBCF-3C7408E257D0.jpeg",
        "../Images/Gallery-Images/2022-Images/B7BF1A02-FFF7-4C09-8F1F-0CC25D774CC5.jpeg",
        "../Images/Gallery-Images/2022-Images/BA6BE0D1-5A25-4D40-8CA6-04693451ECA1.jpeg",
        "../Images/Gallery-Images/2022-Images/BD556F6B-8FC9-4C8B-A92E-5644BDD76D13.jpeg",
        "../Images/Gallery-Images/2022-Images/CCCDCC5A-AC82-496C-A3A8-592D95D1BF0A.jpeg",
        "../Images/Gallery-Images/2022-Images/DM4A1648.jpeg",
        "../Images/Gallery-Images/2022-Images/E1B78FB9-D823-470A-865D-6B16AE90BDA0.jpeg",
        "../Images/Gallery-Images/2022-Images/E4DB5E20-50EA-4A4F-99B4-94B4D0B063D8.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_0109.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_0121.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_1145.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_2378.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3214.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3216.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3417.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3881.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3882.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3890.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3916.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_3997.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_4022.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_4046.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_4403.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_6317.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_6330.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_6331.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_6351.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_7824.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_7829.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_7864.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_7929.jpeg",
        "../Images/Gallery-Images/2022-Images/IMG_7938.jpeg"
    ],
    "2023": [
        "../Images/Gallery-Images/2023-Images/71016929473__45B18085-B952-452A-ABC9-F4EA48D9AC54.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_1222.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_1227.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_1230.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3443.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3444.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3448.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3450.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3453.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3454.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3484.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3489.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3490.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3501.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3509.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_3519.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4047.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4105.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4108.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4133.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4142.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4152.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4168.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4176.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4288.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4299.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_4313.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5524.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5572.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5577.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5582.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5585.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5613.png",
        "../Images/Gallery-Images/2023-Images/IMG_5619.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5637.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5676.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_5697.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6073.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6266.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6275.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6279.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6282.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6286.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6736.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6742.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6749.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6762.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6857.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_6877.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_8216.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_8320.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_9362.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_9370.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_9387.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_9389.jpeg",
        "../Images/Gallery-Images/2023-Images/IMG_9439.jpeg",
        "../Images/Gallery-Images/2023-Images/lp_image.jpeg"
    ],
    "2024": [
        "../Images/Gallery-Images/2024-Images/001551990020.jpeg",
        "../Images/Gallery-Images/2024-Images/001551990021.jpeg",
        "../Images/Gallery-Images/2024-Images/001551990022.jpeg",
        "../Images/Gallery-Images/2024-Images/001551990025.jpeg",
        "../Images/Gallery-Images/2024-Images/001551990037.jpeg",
        "../Images/Gallery-Images/2024-Images/BB85B5A4-5241-463C-9F51-15F8C7CA0893.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC02878.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC02882.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC02943.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03006.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03009-3.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03055.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03068.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03092.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03100.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03144.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03210-2.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03260.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03308.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03359.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03371.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03382.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03404-2.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03432.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03456.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03497.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03575-2.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03588-2.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03597-2.jpeg",
        "../Images/Gallery-Images/2024-Images/DSC03857.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_0238.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_1557.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_1562.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_1578.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3317.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3696.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3699.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3747_VSCO.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3766.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3768.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3770.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3776.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3779.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3788.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3792.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3800.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3803.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3809.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3817.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3823.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3848_VSCO.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3856.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3860.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3871.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3875.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3877.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3925_VSCO.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3926.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3948.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_3977.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4000.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4008.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4132.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4134.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4155.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4789.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_4796.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_5251.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_5274.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_5590.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_6159.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_6250.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_6531.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7027.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7047.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7049.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7050.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7051.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7079.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7268.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7384.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_7540.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8064.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8271.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8279.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8330.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8339.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_8344.jpeg",
        "../Images/Gallery-Images/2024-Images/IMG_9386.jpeg"
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