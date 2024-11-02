// Seleciona o elemento de áudio e o ícone de controle de música
const music = document.getElementById('backgroundMusic');
const musicControlIcon = document.getElementById('musicControlIcon');

// Ajusta o volume e inicia a reprodução da música
music.volume = 0.1;
music.play();
musicControlIcon.src = '../images/speaker1.png'; // Ícone de "tocando"

// Função para alternar entre pausar e tocar
const toggleMusic = () => {
  if (music.paused) {
    music.play();
    musicControlIcon.src = '../images/speaker1.png'; // Ícone de "tocando"
  } else {
    music.pause();
    musicControlIcon.src = '../images/speakermute1.png'; // Ícone de "mudo"
  }
};

// Define o evento de clique para o ícone de controle de música
musicControlIcon.addEventListener('click', toggleMusic);