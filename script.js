document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const underline = document.querySelector('.nav-underline');

    function moveUnderline(link) {
        underline.style.width = link.offsetWidth + 'px';
        underline.style.left = link.offsetLeft + 'px';
    }

    // Disable transition for initial position
    underline.style.transition = 'none';
    const current = document.querySelector('.nav-link.current-link') || navLinks[0];
    moveUnderline(current);

    // Enable transition after initial position
    setTimeout(() => {
        underline.style.transition = 'left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1)';
    }, 0);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('current-link'));
            link.classList.add('current-link');
            moveUnderline(link);
        });
    });

    window.addEventListener('resize', function () {
        const current = document.querySelector('.nav-link.current-link') || navLinks[0];
        moveUnderline(current);
    });
});