let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let themeIcon = document.getElementById('themeIcon');

// Função para definir o tema claro com transição apenas no clique
function setLightTheme(applyTransition = false) {
    if (applyTransition) {
        body.style.transition = "background-image 0.5s";
    } else {
        body.style.transition = "none"; // Remove a transição no carregamento
    }
    body.classList.remove('dark');
    themeIcon.src = "../images/pikachu.png";
    body.style.backgroundImage = "url('../images/background-pikachus.webp')";
    localStorage.setItem('theme', 'light');
    trilho.classList.remove('dark');
}

// Função para definir o tema escuro com transição apenas no clique
function setDarkTheme(applyTransition = false) {
    if (applyTransition) {
        body.style.transition = "background-image 0.5s";
    } else {
        body.style.transition = "none"; // Remove a transição no carregamento
    }
    body.classList.add('dark');
    themeIcon.src = "../images/umbreon.png";
    body.style.backgroundImage = "url('../images/backgrounddark-pikachus2.webp')";
    localStorage.setItem('theme', 'dark');
    trilho.classList.add('dark');
}

// Função para alternar o tema com transição ao clicar no botão
function toggleTheme() {
    if (body.classList.contains('dark')) {
        setLightTheme(true);
    } else {
        setDarkTheme(true);
    }

    // Adiciona a animação somente ao clicar
    themeIcon.classList.add('swing');
    themeIcon.addEventListener('animationend', () => {
        themeIcon.classList.remove('swing');
    }, { once: true });
}

// Carrega o tema salvo ao iniciar a página sem transição
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setDarkTheme(false); // Aplica tema escuro sem transição
    } else {
        setLightTheme(false); // Aplica tema claro sem transição
    }
}

// Adiciona o evento de clique ao trilho para alternar o tema
trilho.addEventListener('click', toggleTheme);

// Chama a função para carregar o tema ao iniciar a página
loadTheme();
