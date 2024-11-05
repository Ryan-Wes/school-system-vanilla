document.addEventListener('DOMContentLoaded', function () {
    const materiaSelect = document.getElementById('materia-select');
    const scoreDisplay = document.getElementById('score');

    // Pontuações simuladas para cada matéria
    const pontuacoes = {
        matematica: 85,
        portugues: 78,
        ingles: 92,
        historia: 74,
        geografia: 88
        // Adicione outras pontuações conforme necessário
    };

    materiaSelect.addEventListener('change', function () {
        const selectedMateria = materiaSelect.value;

        // Atualiza a pontuação com base na matéria selecionada ou exibe "--" se nenhuma estiver selecionada
        scoreDisplay.textContent = selectedMateria ? pontuacoes[selectedMateria] : '--';
    });
});
