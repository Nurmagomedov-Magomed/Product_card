const nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nambers);


const newArrayNambers = nambers.slice(4, 10);
console.log(newArrayNambers);


const trees = ['Дуб', 'Береза', 'Сосна', 'Клен', 'Липа', 'Тополь', 'Ясень', 'Ива', 'Осина',];
console.log(trees.includes('Липа'));
console.log(trees);
console.log(Array.isArray('[Тополь]'));


nambers.reverse();
trees.reverse();
console.log(nambers);
console.log(trees);


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
