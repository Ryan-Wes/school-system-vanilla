document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('carouselContainer');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateCarousel() {
        const totalCards = cards.length;
        const visibleCards = 3; // Número de cartões visíveis por vez

        // Ajustar a posição do carrossel
        const offset = currentIndex * -((100 / visibleCards)); // Percentual para deslocar
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Desativar botões se não houver mais cartões
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + visibleCards >= totalCards;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function () {
        const totalCards = cards.length;
        if (currentIndex + 3 < totalCards) { // Se ainda houver cartões para mostrar
            currentIndex++;
            updateCarousel();
        }
    });

    // Inicializar o carrossel
    updateCarousel();
});
