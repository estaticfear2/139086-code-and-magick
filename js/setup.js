'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  var generateArrayOfWizards = function (n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
      arr[i] = {
        name: WIZARDS_NAMES[window.global.getRandomInteger(0, WIZARDS_NAMES.length - 1)] + ' ' + WIZARDS_LASTNAMES[window.global.getRandomInteger(0, WIZARDS_LASTNAMES.length - 1)],
        coatColor: window.global.WIZARDS_COAT_COLORS[window.global.getRandomInteger(0, window.global.WIZARDS_COAT_COLORS.length - 1)],
        eyesColor: window.global.WIZARDS_EYES_COLORS[window.global.getRandomInteger(0, window.global.WIZARDS_EYES_COLORS.length - 1)]
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

  window.setSetupSimilarList = function () {
    clearSetupSimilarList();
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
})();
