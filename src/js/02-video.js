import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

console.log(1);

//const iframe = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.setCurrentTime(
  window.localStorage.getItem('CurrentTime')
    ? window.localStorage.getItem('CurrentTime')
    : 0
);

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(data => {
      console.log(data);
      window.localStorage.setItem('CurrentTime', data);
    });
  }, 1000)
);

// const intervalId = setInterval(
//   () =>
//     player.getCurrentTime().then(data => {
//       console.log(data);
//       window.localStorage.setItem('CurrentTime', data);
//     }),
//   1000
// );

console.log(player);
