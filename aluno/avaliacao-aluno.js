document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    function updateCarousel() {
        // Remove a classe 'active' de todos os cartões
        cards.forEach(card => card.classList.remove('active'));

        // Adiciona a classe 'active' apenas ao cartão atual
        cards[currentIndex].classList.add('active');

        // Controla a visibilidade dos botões
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === cards.length - 1 ? 'none' : 'block';
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Inicializa o carrossel com o primeiro cartão ativo
    updateCarousel();
});
