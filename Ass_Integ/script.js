document.addEventListener("DOMContentLoaded", function() {

    const starCount = 180;
    const body = document.body;

    function createStars() {
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 1; 
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`; 
            star.style.animationDelay = `${Math.random() * 5}s`; 
            body.appendChild(star);
        }
    }

    createStars();
});
