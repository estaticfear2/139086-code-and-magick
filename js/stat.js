'use strict';

var getRandom = function (min, max) {
  return min + Math.random() * (max - min);
};

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

var getRandomColor = function () {
  return 'rgba(0, 0, 255, ' + getRandom(0.3, 1).toFixed(2) + ')';
};

var sortRelatedArrays = function (arr1, arr2) {
  var min;
  var swap;

  for (var i = 0; i < arr1.length - 1; i++) {

    for (var j = i + 1; j < arr1.length; j++) {
      min = arr1[i];

      if (arr1[j] < min) {
        min = arr1[j];
        swap = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = swap;

        swap = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = swap;
      }

    }

  }
};

var renderHistogram = function (ctx, times, names) {
  sortRelatedArrays(times, names);

  var max = times[times.length - 1];
  var fontColor = '#000';
  var fontStyle = '16px PT Mono';
  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50;
  var lineHeight = 20;
  var initialX = 150;
  var initialY = 90;
  var x;
  var y;
  var nameCenterX = 0;
  var color;

  for (var i = 0; i < names.length; i++) {
    x = initialX + (barWidth + indent) * i;
    y = initialY + histogramHeight - times[i] * step;
    nameCenterX = (barWidth - ctx.measureText(names[i]).width) / 2;

    color = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor();

    drawText(ctx, Math.floor(times[i]), x, y - 5, fontColor, fontStyle);
    drawRect(ctx, x, y, barWidth, times[i] * step, color);
    drawText(ctx, names[i], x + nameCenterX, initialY + histogramHeight + lineHeight, fontColor, fontStyle);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawRect(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, 100, 10, 420, 270, 'rgba(256, 256, 256, 1)');

  drawText(ctx, 'Ура вы победили!', 130, 40, '#000', '16px PT Mono');
  drawText(ctx, 'Список результатов:', 130, 60, '#000', '16px PT Mono');

  renderHistogram(ctx, times, names);
};
