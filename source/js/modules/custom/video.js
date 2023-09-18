const addVideoPlayer = () => {
  const videoPlayers = document.querySelectorAll('.hero__video');
  const iframe = `
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

  if (videoPlayers.length > 0) {
    let playerButton = null;

    videoPlayers.forEach((player) => {
      playerButton = player.querySelector('.video__btn');
      playerButton.addEventListener('click', () => {
        player.innerHTML = iframe;
      }, {once: true});
    });
  }
  return null;
};

export {addVideoPlayer};
