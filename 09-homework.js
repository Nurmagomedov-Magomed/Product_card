const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);


const newArrayNumbers = numbers.slice(4, 10);
console.log(newArrayNumbers);


const trees = ['Дуб', 'Береза', 'Сосна', 'Клен', 'Липа', 'Тополь', 'Ясень', 'Ива', 'Осина',];
function searchTree(array, name) {
  if (!Array.isArray(array)) {
    return 'Неверный формат массива.'
  }
  if (typeof name !== 'string') {
    return 'Неверный формат названия дерева.'
  }
  return array.includes(name);
}
console.log(searchTree(trees, 'Липа'));


function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(trees));


import { comments } from "./comments.js";
console.log(comments);


const email = comments.filter(comment => comment.email?.toLowerCase().endsWith(".com"));
console.log(email);


const deduceIdName = comments.map(comment => ({ id: comment.id, name: comment.name }));
console.log(deduceIdName);


const updatedComments = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  }
});
console.log(updatedComments);

const addIsInvalid = comments.map(comment => {
  return {
    ...comment,
    isInvalid:
      comment.body.length > 180
  }
});
console.log(addIsInvalid);


const commentsByEmail = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(commentsByEmail);


let commentsByEmails = comments.map(comment => {
  return comment.email;
});
console.log(commentsByEmails);


const commentsToString = commentsByEmails.toString();
console.log(commentsToString);


const commentsJoin = commentsByEmail.join();
console.log(commentsJoin);
