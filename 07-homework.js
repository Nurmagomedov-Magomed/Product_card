const city = 'Домодедово'
const temperature = 17
console.log(`Сейчас в городе ${city} ${temperature}℃`)


const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed < 299791433) {
    console.log('Сверхсветовая скорость')
  } else if (speed > 299795670) {
    console.log('Субсветовая скорость')
  } else {
    console.log('Скорость света')
  }
}
checkSpeed(299792458)


let product;
let price;

function checkPrice(product, price) {
  if (price >= 17700) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  }
}
checkPrice('Велосипед', 177345)


const age = 25;

function checkAge(age) {

  if (age <= 30) {
    console.log('Мы берем вас на работу!')
  } else {
    console.log('Вы нам не нужны')
  }
}
checkAge(25)


const CHROMOSOMESN = 46;

function checkChromosomes(chromosomes) {
  if (chromosomes < 46) {
    console.log('Вы уникальный человек!')
  } else if (chromosomes > 46) {
    console.log('Вы необычный человек!')
  } else {
    console.log('Вы обычный человек!')
  }
}
checkChromosomes(47)


let student = 'Амир';
let haveExperience = false;

function toExperience(student) {
  if (student) {
    if (haveExperience) {
      console.log('Вы опытный студент, мы искали вас!')
    } else {
      console.log('Вы не опытный студент, мы ищем опытного студента!')
    }
  }
}
toExperience(student)