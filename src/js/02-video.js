import VimeoPlayer from '@vimeo/player';
var throttle = require('lodash.throttle');

const storageKey = 'videoplayer-current-time';

const videoEl = {
  iframe: document.querySelector('iframe'),
};

const player = new VimeoPlayer(videoEl.iframe);
const savedTime = localStorage.getItem(storageKey);
setTime(savedTime);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem(storageKey, data.seconds);
}

function setTime(savedTime) {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
