'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizard = setup.querySelector('.wizard');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var showSetup = function () {
    window.setSetupSimilarList();
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    setupWizard.addEventListener('click', onSetupWizardClick);
    setupFireball.addEventListener('click', onSetupFireballClick);
  };

  var hideSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    setupWizard.removeEventListener('click', onSetupWizardClick);
    setupFireball.removeEventListener('click', onSetupFireballClick);
  };

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
      hideSetup();
    }
  };

  var onSetupWizardClick = function (evt) {
    var target = evt.target.getAttribute('class');
    switch (target) {
      case 'wizard-coat':
        evt.target.style.fill = window.global.WIZARDS_COAT_COLORS[window.global.getRandomInteger(0, window.global.WIZARDS_COAT_COLORS.length - 1)];
        break;
      case 'wizard-eyes':
        evt.target.style.fill = window.global.WIZARDS_EYES_COLORS[window.global.getRandomInteger(0, window.global.WIZARDS_EYES_COLORS.length - 1)];
        break;
      default:
        break;
    }
  };

  var onSetupFireballClick = function () {
    setupFireball.style.backgroundColor = FIREBALL_COLORS[window.global.getRandomInteger(0, FIREBALL_COLORS.length - 1)];
  };

  setupOpen.addEventListener('click', function () {
    showSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      showSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    hideSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      hideSetup();
    }
  });
})();
