const addAudioPlayer = () => {
  const audioPlayers = document.querySelectorAll('.hero__audio');
  const iframe = `
  <iframe frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="https://music.yandex.ru/iframe/#album/25474374">Слушайте <a href='https://music.yandex.ru/iframe/#album/25474374'>Про код</a> на Яндекс Музыке</iframe>
  `;

  if (audioPlayers.length > 0) {
    let playerButton = null;

    audioPlayers.forEach((player) => {
      playerButton = player.querySelector('.hero__audio-play');
      playerButton.addEventListener('click', () => {
        player.innerHTML = iframe;
      }, {once: true});
    });
  }
  return null;
};

export {addAudioPlayer};
