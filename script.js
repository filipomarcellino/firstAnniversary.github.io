document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById('envelope');
    const container = document.querySelector('.container');
    const backButton = document.getElementById('back-button');

    envelope.addEventListener('click', function() {
        container.classList.add('opened');
    });

    backButton.addEventListener('click', function() {
        container.classList.remove('opened');
    });
});
