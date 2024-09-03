document.addEventListener('DOMContentLoaded', function () {
    const tagsContainer = document.getElementById('tagsContainer');
    const tags = Array.from(tagsContainer.getElementsByTagName('button'));

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

    resetTags(); // Ensure tags are hidden initially
    displayTags(); // Start tag animation on page load
});
