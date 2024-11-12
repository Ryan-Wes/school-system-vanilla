document.getElementById("entrarBtn").addEventListener("click", function () {
    window.location.href = "login.html"; // Redireciona para a página de login
});

// Carrossel
let currentIndex = 0; // Índice do item atual
const items = document.querySelectorAll('.carousel-item'); // Seleciona todos os itens do carrossel
const totalItems = items.length; // Total de itens

// Função para atualizar a exibição do carrossel
function updateCarousel() {
    items.forEach((item, index) => {
        // Remove a classe active de todos os itens
        item.classList.remove('active');
        // Adiciona a classe active apenas ao item atual
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Evento para o botão "Próximo"
document.getElementById('nextBtn').addEventListener('click', function() {
    // Atualiza o índice para o próximo item
    currentIndex = (currentIndex + 1) % totalItems;
    // Atualiza a exibição do carrossel
    updateCarousel();
});

// Evento para o botão "Anterior"
document.getElementById('prevBtn').addEventListener('click', function() {
    // Atualiza o índice para o item anterior
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    // Atualiza a exibição do carrossel
    updateCarousel();
});

// Inicializa o carrossel ao carregar a página
updateCarousel();

