// var color = prompt("Введите цвет","");
// if (color === 'red'){
//     document.write("<div style='background-color: red;'>красный</div>");
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// }else if (color === 'black') {
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// }else if (color === 'blue') {
//     document.write("<div style='background-color: blue;'>синий</div>");
//     document.write("<div style='background-color: green;'>зеленый</div>");
// }else if (color === 'green') {
//     document.write("<div style='background-color: green;'>зеленый</div>");
// }else {
//     document.write("<div style='background-color: gray;'>Я не понял</div>");
// }





// var age = prompt("Напишите сколько Вам лет", "");
// if (age < 0 || age > 100) {
//     console.log('Ошибка, введите еще раз');
// }else if (age <= 1 && age >= 1) {
//     console.log('Ваш возраст ' + age + ' год');
// }else if (age >= 2 && age <= 4) {
//     console.log('Ваш возраст ' + age + ' года');
// }else {
//     console.log('Ваш возраст ' + age + ' лет');
// }





// var day = prompt("Вводить месяц на инглише","");
// switch (day.toLowerCase()){
//     case 'january':
//     case 'march':
//     case 'may':
//     case 'july':
//     case 'august':
//     case 'october':
//     case 'december':
//         console.log('В этом месяце 31 день');
//         break;
//     case 'april':
//     case 'june':
//     case 'september':
//     case 'november':
//         console.log('В этом месяце 30 дней');
//         break;
//     case 'february':
//         console.log('В этом месяце 28 или 29 дней в зависимости от года');
//         break;
//     default:
//         console.log('Ошибка');
// }





// var userAge = prompt("Напишите сколько Вам лет", "");
// var weather = prompt("Сейчас день или ночь", "day or night");
// if (userAge >= 0 && userAge <= 5) {
//     console.log('Привет малой');
// }else if (userAge >=6 && userAge <= 16) {
//     console.log('Школьник йоу');
// }else if (userAge >= 17 && userAge <= 26) {
//     console.log('Хай кент');
// }else if (userAge >= 27 && userAge <= 40) {
//     console.log('Дядька приветсвую');
// }else if (userAge >= 41 && userAge <= 59) {
//     console.log('Здарова мужик');
// }else if (userAge >= 60 && userAge <= 79) {
//     console.log('пенсия здарвствуй');
// }else if (userAge >= 80 && userAge <= 100) {
//     console.log('ну ты дед');
// }else {
//     console.log('Не правильный ввод');
// }
// switch (weather.toLowerCase()) {
//     case 'night':
//         console.log('Доброй ночи');
//         break;
//     case 'day':
//         console.log('Добрый день');
//         break;
//         default:
//         console.log('Ввод на инглише');
// }





// var notebook = {
//     brand: prompt("a notebook brand", "HP"),
//     type:  prompt("a notebook type", "440 G4"),
//     model: prompt("a notebook model", "Y7Z75EA"),
//     ram: prompt("a notebook ram", "4"),
//     size: prompt("a notebook size", "14"),
//     weight: prompt("a notebook weight", "1.8"),
//     resolution: {
//         width: prompt("a resolution width", "1920"),
//         height: prompt("a resolution height", "1080")
//     },
// };
// console.log(notebook);

// var phone = {
//     brand: prompt("a telephone brand", "meizu"),
//     model: prompt("a telephone model", "m2"),
//     ram: prompt("a telephone ram", "2"),
//     color: prompt("a telephone color","black"),
// };
// console.log(phone);

// var person = {
//     name: prompt("what is name", "Donald"),
//     surname: prompt("what is surname", "Trump"),
//     married: confirm("you is married", "true"),
// };
// console.log(person);





// do {
//     var answer = confirm("continius");
// } while (answer === false);






// var i = 0;
// while (true) {
//     i++;
//     if (Math.random() > 0.9) {
//         alert(i);
//         break;
//     }
// }



// var number = prompt("Введите число","");
// var diez = '';
// for (var i = 0; i < number; i++) {
//     diez = diez + '#';
// }
// alert(diez);




var array = [];
var number = prompt("Напиши число");
for (var i = 0; i < + number; i++){
    array.push(Math.pow(i, 3))
}
console.log(array);