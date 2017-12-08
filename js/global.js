'use strict';

(function () {
  window.global = {
    WIZARDS_COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    WIZARDS_EYES_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    getRandom: function (min, max) {
      return min + Math.random() * (max - min);
    },
    getRandomInteger: function (min, max) {
      return Math.floor(min + Math.random() * (max - min + 1));
    }
  };
})();
