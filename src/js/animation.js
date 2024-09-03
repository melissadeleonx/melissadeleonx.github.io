document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const viewportHeight = window.innerHeight;
    const dragonImage = document.createElement('img');
    dragonImage.src = 'assets/img/dragon.png';
    dragonImage.style.position = 'fixed';
    dragonImage.style.bottom = '50%';
    dragonImage.style.left = '50%';
    dragonImage.style.transform = 'translate(-50%, 50%)';
    dragonImage.style.zIndex = '1000';
    dragonImage.style.display = 'none';
    document.body.appendChild(dragonImage);

    let dragonShown = false;

    function handleScroll() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const line = section.querySelector('.connecting-line');

            if (index < sections.length - 1) {
                const nextSection = sections[index + 1];
                const nextSectionTop = nextSection.getBoundingClientRect().top;

                if (sectionTop < viewportHeight * 0.75 && nextSectionTop < viewportHeight * 1.25) {
                    line.classList.remove('hidden');
                    line.style.height = `${nextSectionTop - sectionTop}px`;
                } else {
                    line.classList.add('hidden');
                }
            }

            if (index === sections.length - 1) {
                const lastSectionTop = section.getBoundingClientRect().top;

                if (lastSectionTop < viewportHeight * 0.75 && !dragonShown) {
                    dragonShown = true;
                    dragonImage.style.display = 'block';
                    setTimeout(() => {
                        dragonImage.style.display = 'none';
                    }, 2000);
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

