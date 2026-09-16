function getTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} ${temperature}℃`)
  return temperature
}
getTemperature('Домодедово', 13)


const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > 299791433) {
    return ('Сверхсветовая скорость')
  } else if (speed < 299795670) {
    return ('Субсветовая скорость')
  } else {
    return ('Скорость света')
  }
}
console.log(checkSpeed(2997924))


function checkBudget(product, price, budget) {
  if (budget >= price) {
    return `${product} приобретён. Спасибо за покупку!`
  } else {
    return `Недостаточно средств для покупки ${product}. Не хватает ${price - budget} рублей.`
  }
}
console.log(checkBudget('froggy', 100, 50))


function checkAge(age) {
  if (age <= 30) {
    return ('Мы берем вас на работу!')
  } else {
    return ('Вы нам не нужны')
  }
}
console.log(checkAge(40))


function checkChromosomes(chromosomes) {
  if (chromosomes < 46) {
    return ('Вы уникальный человек!')
  } else if (chromosomes > 46) {
    return ('Вы необычный человек!')
  } else {
    return ('Вы обычный человек!')
  }
}
console.log(checkChromosomes(47))


let student = 'Амир';
let haveExperience = true;

function toExperience() {
  if (haveExperience) {
    return ('Вы опытный студент, мы искали вас!')
  } else {
    return ('Вы не опытный студент, мы ищем опытного студента!')
  }
}
console.log(toExperience())


function strongTest(name, strong) {
  if (strong) {
    return (`Поможешь мне таскать мешки, ${name}`)
  } else {
    return (`Иди домой, ${name}`)
  }
}
console.log(strongTest('Вахид', true))