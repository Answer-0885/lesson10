'use strict'

const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const book3 = document.querySelectorAll('.book h2 a')[4];
const adv = document.querySelector('.adv');
// вторая книга
const head2 = document.querySelectorAll('.book')[0];
const head24 = head2.querySelectorAll('li')[4];
const head25 = head2.querySelectorAll('li')[5];
const head23 = head2.querySelectorAll('li')[8];
const head2a = head2.querySelectorAll('li')[7];
const head2b = head2.querySelectorAll('li')[9];
const head2c = head2.querySelectorAll('li')[2];
const head2d = head2.querySelectorAll('li')[10];
// пятая книга
const head5 = document.querySelectorAll('.book')[5];
const head51 = head5.querySelectorAll('li')[9];
const head52 = head5.querySelectorAll('li')[3];
const head53 = head5.querySelectorAll('li')[4];
const head54 = head5.querySelectorAll('li')[2];
const head55 = head5.querySelectorAll('li')[6];
const head56 = head5.querySelectorAll('li')[7];
const head5a = head5.querySelectorAll('li')[5];
const head5b = head5.querySelectorAll('li')[8];
const head5c = head5.querySelectorAll('li')[10];
// шестая книга
const book6 = document.querySelectorAll('.book')[2];
const head67 = book6.querySelectorAll('li')[8];

// Расставляем все книги по местам
books[0].prepend(book[1])
book[2].before(book[4])
books[0].append(book[2])

// Меняем фон
document.body.style.backgroundImage = "url('./image/1.jpg')";

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book3.textContent = "Книга 3. this и Прототипы Объектов";

//Удалить рекламу со страницы
adv.remove()

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

// вторая книга
head23.after(head24);
head24.after(head25);
head25.after(head2a);
head2b.after(head2c);

// пятая книга
head51.after(head52)
head52.after(head53)
head53.after(head54)
head54.after(head55)
head55.after(head56)
head56.after(head5a)
head5a.after(head5b)

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
head67.after("Глава 8: За пределами ES6");

console.dir(head67);