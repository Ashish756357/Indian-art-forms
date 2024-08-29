// script.js
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h2').innerText;
        const description = this.dataset.description;
        const imageSrc = this.dataset.image;

        document.getElementById('popup-title').innerText = title;
        document.getElementById('popup-description').innerText = description;
        document.getElementById('popup-image').src = imageSrc;

        document.getElementById('popup').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
