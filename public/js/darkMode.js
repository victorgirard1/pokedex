let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let themeIcon = document.getElementById('themeIcon');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');

    // Alterna a imagem de acordo com o tema
    if (body.classList.contains('dark')) {
        themeIcon.src = "../images/umbreon.png";
        body.style.backgroundImage = "url('../images/backgrounddark-pikachus2.webp')";
    } else {
        themeIcon.src = "../images/pikachu.png";
        body.style.backgroundImage = "url('../images/background-pikachus.webp')";
    }

        // Adiciona a classe de animação
        themeIcon.classList.add('swing');

        // Remove a classe de animação após o término para permitir futuras animações
        themeIcon.addEventListener('animationend', () => {
            themeIcon.classList.remove('swing');
        }, { once: true });
});
