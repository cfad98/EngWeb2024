document.addEventListener('DOMContentLoaded', () => {
    const cardWrapper = document.querySelector('.card-3d-wrapper');
    const switchToSignup = document.querySelector('#switch-to-signup');
    const switchToLogin = document.querySelector('#switch-to-login');

    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        cardWrapper.style.transform = 'rotateY(180deg)';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        cardWrapper.style.transform = 'rotateY(0deg)';
    });
});
