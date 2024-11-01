// Seleciona o elemento de áudio e o botão de pausa
const music = document.getElementById('backgroundMusic');
const pauseButton = document.getElementById('pausePlayBtn');

// Ajusta o volume e inicia a reprodução
music.volume = 0.3;
music.play();

// Função para alternar entre pausar e tocar
const toggleMusic = () => {
  if (music.paused) {
    music.play();
    pauseButton.textContent = 'Pause';
  } else {
    music.pause();
    pauseButton.textContent = 'Play';
  }
};

// Define o evento de clique para o botão de pausa
pauseButton.addEventListener('click', toggleMusic);
