

document.addEventListener('DOMContentLoaded', function () {
    const capsuleContainer = document.querySelector('.capsule-container');
    const fireBuster = document.querySelector('.fire-buster');

    // Function to animate the capsuleContainer and fire-buster on page load
    function animateCapsuleContainer() {
        capsuleContainer.classList.add('animate-capsule'); // Animate the container
        fireBuster.classList.add('animate-fire-buster'); // Animate the fire buster effect
    }

    // Initial animation on page load
    animateCapsuleContainer();

    // Function to hide elements after animation ends
    function hideAfterAnimation(event) {
        // Ensure this is the correct animation/transition event
        if (event.target === capsuleContainer) {
            capsuleContainer.style.display = 'none';
        }
        if (event.target === fireBuster) {
            fireBuster.style.display = 'none';
        }
    }

    // Listen for the transitionend event on capsuleContainer
    capsuleContainer.addEventListener('transitionend', hideAfterAnimation);
    // Listen for the animationend event on fireBuster
    fireBuster.addEventListener('animationend', hideAfterAnimation);
});
