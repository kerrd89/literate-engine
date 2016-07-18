// make default background same as prior using local storage

document.body.style.backgroundColor = 'rgb(' + (localStorage.getItem('backgroundColor'))+ ')';



var randomButton = document.querySelector('.btn');
var clearButton = document.querySelector('.btn-clear');


function generateRandomBackground() {
  var generateRandomNumber = function() {
    return (Math.floor(Math.random() * (254 - 0 + 0)) + 0);
  }
  return  [generateRandomNumber(),generateRandomNumber(),generateRandomNumber()];
};

function resetBackground() {
  return [255,255,255];
};

function changeBackground(randomColor) {
  document.body.style.backgroundColor = 'rgb(' + randomColor.join(',') + ')';
  localStorage.setItem('backgroundColor',randomColor);
};

randomButton.addEventListener('click', function() {
  changeBackground(generateRandomBackground());
});

clearButton.addEventListener('click', function() {
  changeBackground(resetBackground());
});
