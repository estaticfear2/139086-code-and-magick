'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  sortRelatedArrays(times, names);

  var max = times[times.length - 1];

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50;
  var lineHeight = 20;
  var initialX = 150;
  var initialY = 90;
  var playerBarColor = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '000';
    ctx.fillText(Math.floor(times[i]), initialX + barWidth * i + indent * i, initialY + histogramHeight - times[i] * step - 5);

    if (names[i] === 'Вы') {
      ctx.fillStyle = playerBarColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')';
    }

    ctx.fillRect(initialX + barWidth * i + indent * i, initialY + histogramHeight - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + barWidth * i + indent * i, initialY + histogramHeight + lineHeight);
  }

};

var sortRelatedArrays = function (arr1, arr2) {

  var min;

  for (var i = 0; i < arr1.length - 1; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
      min = arr1[i];

      if (arr1[j] < min) {
        min = arr1[j];
        var swap = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = swap;

        swap = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = swap;
      }
    }
  }

};
