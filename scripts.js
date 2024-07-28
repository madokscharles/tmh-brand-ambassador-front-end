document.addEventListener('DOMContentLoaded', function () {
    const models = [
        { name: 'Model One', info: 'Info about Model One', image: 'images/pic1.jpg' },
        { name: 'Model Two', info: 'Info about Model Two', image: 'images/pic2.jpg' },
        { name: 'Model Three', info: 'Info about Model Three', image: 'images/pic3.jpg' },
        { name: 'Model Four', info: 'Info about Model Four', image: 'images/pic4.jpg' },
        { name: 'Model Five', info: 'Info about Model Five', image: 'images/pic5.jpg' },
        { name: 'Model Six', info: 'Info about Model Six', image: 'images/pic6.jpg' },
        { name: 'Model Seven', info: 'Info about Model Seven', image: 'images/pic7.jpg' },
        { name: 'Model Eight', info: 'Info about Model Eight', image: 'images/pic8.jpg' }
    ];

    // Populate gallery
    const gallery = document.getElementById('gallery');
    models.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.classList.add('model-card');

        const modelImage = document.createElement('img');
        modelImage.src = model.image;
        modelImage.alt = model.name;

        const modelInfo = document.createElement('div');
        modelInfo.classList.add('model-info');
        modelInfo.innerHTML = `<h3>${model.name}</h3><p>${model.info}</p>`;

        modelCard.appendChild(modelImage);
        modelCard.appendChild(modelInfo);

        gallery.appendChild(modelCard);
    });

    let currentIndex = 0;
    function changeImage() {
        const modelCards = document.querySelectorAll('.model-card');
        modelCards.forEach(card => card.style.display = 'none');
        modelCards[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % modelCards.length;
    }

    setInterval(changeImage, 3000); // Changes image every 3 seconds

    // Populate carousel
    const carouselTrack = document.getElementById('carousel-track');
    models.forEach(model => {
        const carouselItem = document.createElement('li');
        carouselItem.classList.add('carousel-item');

        const modelImage = document.createElement('img');
        modelImage.src = model.image;
        modelImage.alt = model.name;

        const modelName = document.createElement('h3');
        modelName.textContent = model.name;

        const voteButton = document.createElement('button');
        voteButton.classList.add('vote-button');
        voteButton.textContent = 'Vote';

        carouselItem.appendChild(modelImage);
        carouselItem.appendChild(modelName);
        carouselItem.appendChild(voteButton);

        carouselTrack.appendChild(carouselItem);
    });

    // Carousel functionality
    let position = 0;
    function moveCarousel(direction) {
        const itemWidth = carouselTrack.firstElementChild.offsetWidth;
        const totalItems = carouselTrack.children.length;
        const visibleItems = 4; // Number of visible items at a time

        position += direction * itemWidth * visibleItems;

        if (position < 0) {
            position = (totalItems - visibleItems) * itemWidth;
        } else if (position >= totalItems * itemWidth) {
            position = 0;
        }

        carouselTrack.style.transform = `translateX(-${position}px)`;
    }

    // Make moveCarousel function accessible globally
    window.moveCarousel = moveCarousel;
});
