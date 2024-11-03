// Seleciona o elemento de áudio e o ícone de controle de música
const music = document.getElementById('backgroundMusic');
const musicControlIcon = document.getElementById('musicControlIcon');

// Ajusta o volume
music.volume = 0.1;

// Recupera o progresso e o estado salvos, se houver
const savedTime = localStorage.getItem('musicTime');
const savedState = localStorage.getItem('musicPlaying');

// Configura a posição da música para o tempo salvo
if (savedTime) {
  music.currentTime = parseFloat(savedTime);
}

// Define o estado inicial da música com base no valor salvo
if (savedState === 'playing') {
  music.play();
  musicControlIcon.src = '../images/speaker1.png'; // Ícone de "tocando"
} else {
  music.pause();
  musicControlIcon.src = '../images/speakermute1.png'; // Ícone de "mudo"
}

// Função para alternar entre pausar e tocar
const toggleMusic = () => {
  if (music.paused) {
    music.play();
    musicControlIcon.src = '../images/speaker1.png';
    localStorage.setItem('musicPlaying', 'playing');
  } else {
    music.pause();
    musicControlIcon.src = '../images/speakermute1.png';
    localStorage.setItem('musicPlaying', 'paused');
  }
};

// Define o evento de clique para o ícone de controle de música
musicControlIcon.addEventListener('click', toggleMusic);

// Armazena o tempo e o estado da música ao sair da página
window.addEventListener('beforeunload', () => {
  localStorage.setItem('musicTime', music.currentTime);
  localStorage.setItem('musicPlaying', music.paused ? 'paused' : 'playing');
});
