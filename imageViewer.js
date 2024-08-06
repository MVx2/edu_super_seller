let currentImageIndex = 0;
let images = [];

function initializeImageViewer() {
    images = Array.from(document.querySelectorAll('.responsive-image'));
}

function openImageViewer(image) {
    currentImageIndex = images.indexOf(image);
    const viewer = document.getElementById('imageViewer');
    const viewerImage = viewer.querySelector('.viewer-image');
    viewerImage.src = image.src;
    viewer.style.display = 'flex';
}

function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.style.display = 'none';
    viewer.querySelector('.viewer-image').src = '';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const viewerImage = document.querySelector('.viewer-image');
    viewerImage.src = images[currentImageIndex].src;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const viewerImage = document.querySelector('.viewer-image');
    viewerImage.src = images[currentImageIndex].src;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeImageViewer();
});
