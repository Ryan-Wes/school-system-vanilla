document.addEventListener('DOMContentLoaded', function () {
    const loginSelect = document.getElementById('loginSelect');
    const loginAluno = document.getElementById('loginAluno');
    const loginProfessor = document.getElementById('loginProfessor');
    const loginEscola = document.getElementById('loginEscola');
    const entrarBtn = document.getElementById('entrarBtn');

    function mostrarFormulario() {
        const valorSelecionado = loginSelect.value;

        // Esconder todos os formulários
        loginAluno.style.display = 'none';
        loginProfessor.style.display = 'none';
        loginEscola.style.display = 'none';

        // Mostrar o formulário selecionado
        if (valorSelecionado === 'aluno') {
            loginAluno.style.display = 'block';
        } else if (valorSelecionado === 'professor') {
            loginProfessor.style.display = 'block';
        } else if (valorSelecionado === 'escola') {
            loginEscola.style.display = 'block';
        }
    }

    // Adiciona o evento de mudança no select
    loginSelect.addEventListener('change', mostrarFormulario);

    // Inicializa mostrando o formulário de Aluno
    mostrarFormulario();

    // Adiciona o evento de clique no botão "Entrar"
    entrarBtn.addEventListener('click', function () {
        const tipoLogin = loginSelect.value;

        if (tipoLogin === 'aluno') {
            window.location.href = './aluno/home-aluno.html'; // Redireciona para a página do aluno
        } else if (tipoLogin === 'professor') {
            window.location.href = 'professor.html'; // Redireciona para a página do professor (ainda a ser criada)
        } else if (tipoLogin === 'escola') {
            window.location.href = 'escola.html'; // Redireciona para a página da escola (ainda a ser criada)
        }
    });
});
