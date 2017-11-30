'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

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

var wizards = generateArrayOfWizards(4);
setupSimilarList.appendChild(collectWizards(wizards, renderWizard));

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

