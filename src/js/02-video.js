
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';



const onPlay = function ({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};
player.on('timeupdate', throttle(onPlay, 1000)); 




player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });







