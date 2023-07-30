
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';



const onPlay = function ({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  };

player.on('timeupdate', throttle(onPlay, 1000));
  




player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

  






