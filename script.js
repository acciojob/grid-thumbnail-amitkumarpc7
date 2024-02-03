document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullsize = document.getElementById('fullsize');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Set the src attribute of the fullsize image to the clicked thumbnail's src
            fullsize.src = thumbnail.src;

            // Toggle visibility of the fullsize image
            fullsize.style.display = fullsize.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Hide fullsize image when clicking outside of it
    fullsize.addEventListener('click', (event) => {
        if (event.target === fullsize) {
            fullsize.style.display = 'none';
        }
    });
});
