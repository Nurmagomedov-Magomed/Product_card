const resume = {
  lastName: 'Нурмагомедов',
  name: 'Магомед',
  age: '23',
  country: 'Россия',
  city: 'Химки',
  mail: '102intel.inside102@gmail.com',
  job: 'Водитель',
  studies: 'Учусь'
};
console.log(resume);


const car = {
  brand: 'Лада',
  model: 'Приора',
  yearOfManufacture: '2013',
  carColor: 'Чёрный',
  transmission: 'Механическая'
};
console.log(car);


car.owner = resume;


function checkSpeed(carObject) {
  if ('maxSpeed' in carObject) {
    return;
  } else {
    carObject.maxSpeed = 220;
  }
};
checkSpeed(car);


function getKeyObject(object, key) {
  if (key in object) {
    return object[key];
  }
};
console.log(car.model);


const products = [
  'Арбуз',
  'Банан',
  'Яблоко',
  'Груша',
  'Апельсин',
  'Гранат',
  'Дыня',
  'Айва',
  'Курага',
  'Манго',
];
console.log(products);


const books = [{
  name: 'Граф Монте-Кристо',
  author: 'Александр Дюма',
  edition: '1844',
  color: 'Чёрный',
  genre: 'Приключенческий роман',
},
{
  name: '1984',
  author: 'Джордж Оруэлл',
  edition: '1949',
  color: 'Серый',
  genre: 'Роман-антиутопия',
},
{
  name: 'Мастер и Маргарита',
  author: 'Михаил булгаков',
  edition: '1940',
  color: 'Чёрный',
  genre: 'Фэнтези',
},
{
  name: 'Преступление и наказание',
  author: 'Фёдор Достоевский',
  edition: '1866',
  color: 'Жёлтый',
  genre: 'Психологический роман',
}];

books.push({
  name: 'Тень ветра',
  author: 'Карлос Руис Сафон',
  edition: '2001',
  color: 'Чёрный',
  genre: 'Мистический детектив',
});
console.log(books);


const movies = [{
  name: 'Тёмный рыцарь',
  director: 'Кристофер Нолан',
  edition: '2008',
  genre: 'Неонуар, боевик, триллер',
},
{
  name: 'Бэтмен',
  director: 'Мэтт Ривз',
  edition: '2022',
  genre: 'Детектив, нуар, драма',
},
{
  name: 'Джокер',
  director: 'Тодд Филлипс',
  edition: '2019',
  genre: 'Психологический триллер, драма',
},
{
  name: 'Хранители',
  director: 'Зак Снайдер',
  edition: '2009',
  genre: 'Супергероика, детектив, фантастика',
}];


const mergedBooksMovies = [...books, ...movies];
console.log(mergedBooksMovies);


function checkRare(moviesAndBooks) {
  return moviesAndBooks.map((mergedBooksMovies) => {
    if (mergedBooksMovies.edition < 2000) {
      mergedBooksMovies.isRare = true;
    } else {
      mergedBooksMovies.isRare = false;
    } return mergedBooksMovies;
  });
};


const result = checkRare(mergedBooksMovies);
console.log(result);