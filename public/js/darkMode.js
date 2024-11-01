let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');

    // Adiciona ou remove a imagem de fundo
    if (body.classList.contains('dark')) {
        body.style.backgroundImage = "url('../images/backgrounddark-pikachus.webp')"; // Novo fundo para dark mode
    } else {
        body.style.backgroundImage = "url('../images/background-pikachus.webp')"; // Fundo padrão
    }
});
