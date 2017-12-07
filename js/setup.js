'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = setup.querySelector('.wizard');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARDS_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARDS_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomInteger = function (from, to) {
  return Math.floor(from + Math.random() * (to - from + 1));
};

var generateArrayOfWizards = function (n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr[i] = {
      name: WIZARDS_NAMES[getRandomInteger(0, WIZARDS_NAMES.length - 1)] + ' ' + WIZARDS_LASTNAMES[getRandomInteger(0, WIZARDS_LASTNAMES.length - 1)],
      coatColor: WIZARDS_COAT_COLORS[getRandomInteger(0, WIZARDS_COAT_COLORS.length - 1)],
      eyesColor: WIZARDS_EYES_COLORS[getRandomInteger(0, WIZARDS_EYES_COLORS.length - 1)]
    };
  }

  return arr;
};

var renderWizard = function (wizard) {
  var element = similarWizardTemplate.cloneNode(true);

  element.querySelector('.setup-similar-label').textContent = wizard.name;
  element.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  element.querySelector('.setup-similar-label').style.textAlign = 'center';

  return element;
};

var collectWizards = function (arr, wizard) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(wizard(arr[i]));
  }

  return fragment;
};

var setSetupSimilarList = function () {
  var wizards = generateArrayOfWizards(4);
  setupSimilarList.appendChild(collectWizards(wizards, renderWizard));
  setupSimilar.classList.remove('hidden');
};

var clearSetupSimilarList = function () {
  var children = setupSimilarList.children;
  for (var i = children.length - 1; i >= 0; i--) {
    setupSimilarList.removeChild(children[i]);
  }
};

var showSetup = function () {
  setSetupSimilarList();
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
  setupWizard.addEventListener('click', onSetupWizardClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
};

var hideSetup = function () {
  clearSetupSimilarList();
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
      evt.target.style.fill = WIZARDS_COAT_COLORS[getRandomInteger(0, WIZARDS_COAT_COLORS.length - 1)];
      break;
    case 'wizard-eyes':
      evt.target.style.fill = WIZARDS_EYES_COLORS[getRandomInteger(0, WIZARDS_EYES_COLORS.length - 1)];
      break;
    default:
      break;
  }
};

var onSetupFireballClick = function () {
  setupFireball.style.backgroundColor = FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length - 1)];
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
