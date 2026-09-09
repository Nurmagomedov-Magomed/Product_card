const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-button');

const firstProductcard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

const openGoogleButton = document.querySelector('#open-google');
const outputLogButton = document.querySelector('#output-console-log');
const titleElement = document.getElementsByClassName('title')[0];
const changeColorButton = document.querySelector('#change-color-button');

const yellowColorHash = '#FFFF00';
const greyColorHash = '#808080';
const blueColorHash = '#0000FF';
const redColorHash = '#FF0000';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = yellowColorHash);
});

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductcard.style.backgroundColor = greyColorHash;
});

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы уверены, что хотите открыть страницу Google.com?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return;
  }
}

outputLogButton.addEventListener('click', () => outputConsoleLog('хватит нажимать'));

function outputConsoleLog(message) {
  alert('homeworke №6');
  console.log(message);
}

titleElement.addEventListener('mouseover', () => {
  console.log('Выберите свой продукт');
})

changeColorButton.addEventListener('click', () => {

  if (changeColorButton.style.backgroundColor === 'rgb(0, 0, 255)') {
    changeColorButton.style.backgroundColor = redColorHash;
  }
  else {
    changeColorButton.style.backgroundColor = blueColorHash;
  }
  console.log('interesting');
});