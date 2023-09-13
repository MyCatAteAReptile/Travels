const addAudioPlayer = () => {
  if (document.querySelector('.hero__audio')) {
    const root = document.querySelector('.hero__audio');
    const button = root.querySelector('.hero__audio-play');
    const iframe = `
    <iframe frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="https://music.yandex.ru/iframe/#album/25474374">Слушайте <a href='https://music.yandex.ru/iframe/#album/25474374'>Про код</a> на Яндекс Музыке</iframe>
  `;

    button.addEventListener('click', () => {
      root.innerHTML = iframe;
    }, {once: true});
  }
  return null;
};

export {addAudioPlayer};
