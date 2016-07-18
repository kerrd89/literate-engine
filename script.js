var randomButton = document.querySelector('.btn');
var clearButton = document.querySelector('.btn-clear');


function generateRandomBackground() {
  var generateRandomNumber = function() {
    return (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  }
  return [generateRandomNumber(),generateRandomNumber(),generateRandomNumber()];
};

function resetBackground() {
  return [255,255,255];
};

function changeBackground(RGBcolor) {
  document.body.style.backgroundColor = 'rgb(' + RGBcolor.join(',') + ')';
};

randomButton.addEventListener('click', function() {
  changeBackground(generateRandomBackground());
});

clearButton.addEventListener('click', function() {
  changeBackground(resetBackground());
});
