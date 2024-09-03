document.addEventListener('DOMContentLoaded', function () {
    // Element references
    // const scrollImage = document.getElementById('scrollImage');
    const card = document.getElementById('bioSection');
    const bioSectionContainer = document.getElementById('bioSectionContainer');
    const skillsSection = document.getElementById('skillsSection');
    const skillsCard = document.getElementById('skillsCard');
    const certificates = document.querySelectorAll('.certificate-card');
    const projectCards = document.querySelectorAll('.project-card');
    const showMoreBtn = document.getElementById('show-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const arrowMoreBtn = document.getElementById('arrow-more-btn');
    const arrowLessBtn = document.getElementById('arrow-less-btn');
    const certificatesContainer = document.getElementById('certificates-container');
    const allCertificates = Array.from(certificatesContainer.children);
    const versions = document.querySelectorAll('.version-card');
    
    const tagsContainer = document.getElementById('tagsContainer');
    const tags = Array.from(tagsContainer.getElementsByTagName('button'));
    const cardsPerPage = 6;
    let currentPage = 1;
    let visibleCertificates = 4;
    let skillsAnimationStarted = false; // To ensure animation only starts once
  
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });
  
    // Handle scroll animations
    function handleScroll() {
        const viewportHeight = window.innerHeight;

       // Check the image's position relative to the viewport
    //    const imagePosition = scrollImage.getBoundingClientRect().top;
    //    if (imagePosition < viewportHeight * 0.75 && imagePosition > 0) {
    //        scrollImage.style.display = 'block'; // Show the image
    //    } else {
    //        scrollImage.style.display = 'none'; // Hide the image
    //    }
  
        // Check bio section visibility and apply burst effect
        const bioSectionPosition = bioSectionContainer.getBoundingClientRect().top;
        if (bioSectionPosition < viewportHeight * 0.75) {
            bioSectionContainer.classList.add('active');
        } else {
            bioSectionContainer.classList.remove('active');
        }
  
        // Check skills section visibility
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        if (sectionPosition < viewportHeight * 0.75) {
            skillsSection.classList.add('visible');
            if (!skillsAnimationStarted) { // Ensure animation starts only once
                skillsAnimationStarted = true;
                startSkillsAnimations(); // Start skills animations
            }
        } else {
            skillsSection.classList.remove('visible');
            skillsAnimationStarted = false; // Reset if you want to trigger animation again when scrolling back
        }
  
        // Existing animations for other elements
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < viewportHeight * 0.75) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
  
        const skillscardColumn = skillsCard.getBoundingClientRect().top;
        if (skillscardColumn < viewportHeight * 0.75) {
            skillsCard.classList.add('visible');
        } else {
            skillsCard.classList.remove('visible');
        }
  
        certificates.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < viewportHeight * 0.75) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
  
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < viewportHeight * 0.85) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 250);
            } else {
                card.classList.remove('visible');
            }
        });
  
        versions.forEach(version => {
            const versionTop = version.getBoundingClientRect().top;
            if (versionTop < viewportHeight * 0.75) {
                version.classList.add('active');
            } else {
                version.classList.remove('active');
            }
        });
    }
  
    function startSkillsAnimations() {
        resetTags();  // Reset tags visibility
        displayTags(); // Start tag animation
    }
  
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
  
    function displayTags() {
        const shuffledTags = shuffleArray(tags);
  
        shuffledTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.display = 'inline-block';
                tag.classList.add('show');
            }, index * 500);
        });
    }
  
    function resetTags() {
        tags.forEach(tag => {
            tag.style.display = 'none';
            tag.classList.remove('show');
        });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    // Pagination functionality for project cards
    function showCards() {
        const totalCards = projectCards.length;
        const maxCardsToShow = currentPage * cardsPerPage;
  
        projectCards.forEach((card, index) => {
            if (index < maxCardsToShow) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
  
        if (maxCardsToShow >= totalCards) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'inline-block';
        }
  
        if (currentPage > 1) {
            showLessBtn.style.display = 'inline-block';
        } else {
            showLessBtn.style.display = 'none';
        }
    }
  
    showCards();
  
    showMoreBtn.addEventListener('click', function () {
        currentPage++;
        showCards();
    });
  
    showLessBtn.addEventListener('click', function () {
        currentPage = 1;
        showCards();
    });
  
    // Show/hide certificates functionality
    allCertificates.forEach((certificate, index) => {
        if (index >= visibleCertificates) {
            certificate.style.display = "none";
        }
    });
  
    arrowMoreBtn.addEventListener("click", function () {
        visibleCertificates += 2; // Increase the number of visible certificates
        allCertificates.forEach((certificate, index) => {
            if (index < visibleCertificates) {
                certificate.style.display = "block";
            }
        });
  
        // Hide "Show More" button and show "Show Less" button if all certificates are visible
        if (visibleCertificates >= allCertificates.length) {
            arrowMoreBtn.classList.add("d-none");
            arrowLessBtn.classList.remove("d-none");
        }
    });
  
    arrowLessBtn.addEventListener("click", function () {
        visibleCertificates = 2; // Reset to only show initial 2 rows
        allCertificates.forEach((certificate, index) => {
            if (index >= visibleCertificates) {
                certificate.style.display = "none";
            }
        });
  
        // Show "Show More" button and hide "Show Less" button
        arrowMoreBtn.classList.remove("d-none");
        arrowLessBtn.classList.add("d-none");
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
  // Element references
  const sections = document.querySelectorAll('section');
  const viewportHeight = window.innerHeight;

  function handleScroll() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const line = section.querySelector('.connecting-line');
      
      if (index < sections.length - 1) {
        // Get the next section
        const nextSection = sections[index + 1];
        const nextSectionTop = nextSection.getBoundingClientRect().top;
        
        // Check if the current section is in view and reveal the line
        if (sectionTop < viewportHeight * 0.75 && nextSectionTop < viewportHeight * 1.25) {
          line.classList.remove('hidden');
          line.style.height = `${nextSectionTop - sectionTop}px`; // Adjust height to connect sections
        } else {
          line.classList.add('hidden');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
