document.addEventListener('DOMContentLoaded', function () {
    const burgerLink = document.querySelector('.burger');
    const toggle = document.querySelector('.toggle');
    const closeImg = document.querySelector('.xbtn');

    burgerLink.addEventListener('click', () => {
        toggle.classList.toggle('toggle-active');
    });

    closeImg.addEventListener('click', () => {
        toggle.classList.remove('toggle-active');
    });
});