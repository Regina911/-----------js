//Логические операторы

// || или ищет первый true
// && и ищет первую false
// ! не
 
// let num = false || false || "карта"
// console.log(num);

// console.log(true || true);  //true
// console.log(false || true); //true
// console.log(true || false);  //true
// console.log(false || false);  // false

// if ( 1 || 0) {     // 1 - true, 0 - false
//     console.log(111);
// }


// let hour = 18
// if (hour < 10 || hour >= 18) {   // hour < 10  > 17
//     console.log('офис закрыт');
// }else {
//     console.log("Офис открыт");
    
// }


// let hour =18
// console.log(hour < 10 || hour >= 18 ? "Офис закрыт" : 'Офис окрыт');

// let result = false || null || undefined || 0 || ' ' || NaN

// возвращает первый true и поcледний false

// console.log((undefined || null || 0));

// Вычисления сокращенные
// !true || alert ('никогда не сработает');
// false || alert ('сработает');

// ||= (логическое присваивание ИЛИ)

// let Regina = false
// Regina ||= 'У Регины нет машины'
//  false || Regina  = 'У Регины нет машины'
// if (Regina == false || Regina == undefined) {
// Regina = 'У Регины нет машины'
// }
// console.log(Regina);


// let parol = 123
// let parolUser = Number(prompt('ВВедите пароль', 0))
// // 123 = 453
// let proverka = parol === parolUser
// proverka ||= "не авторизован"
// console.log(proverka);

//  Оператор && и

// let Egypt = "passport" && "bilet" && "visa"

// ищет первое ложное значение

// console.log(true && true);  //true
// console.log(true && false);  //false
// console.log(false && true);  //false
// console.log(false && false);  //false

// console.log(1 || 5 || 6);     //1
// console.log(1 && 5 && 6);      //6
// console.log(1 || null || undefined || 6); // null
// console.log(0 && null && undefined )

// Приоритет  оператора && больше, чем у  ||
//  a && b || c && 
//  1*5 + 5*8

 // &&= (Логическое присваивание И)

//  let a = 'Hello '
//  let name = prompt('ВВедите свое имя')
//  a &&= a + name
//  console.log(a);
 

// ! не

// task1
// alert ( null || 2 || undefined)
// console.log( alert (1) || 2 alert (3));    // 2
// alert возвращает undefined
//console.log(1 && null && 2);  //null
//console.log(alert (1) && alert (2));   //undefined
//console.log(null || 2 && 2 | 4);

// let value = NaN  // false
//false ||=
//true &&+

// value &&= 10 //value = NaN
// value ||= 20  // value = 20
// value &&= 30   // value = 30
// value ||= 40   // value = 40
// alert (value)
//  прочитать статью Логические операторы, решить в конце задачи

// Напишите условие if для проверки, что значение переменной age находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
//  let age = 9
//  if (age <= 14 && age >= 90) {
//     alert (`значение переменной age ${age}  находится в диапазоне 14 и 90 включительно`)
//  }

 // Напишите условие if для проверки, что значение переменной age находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// let age1 = 9
// if (age1 >= 14 && age >= 90) {
//    alert (`значение переменной age ${age} НЕ находится в диапазоне 14 и 90 включительно`)
// }
// let age2 
// if (!(age2 >=14 && age2 <= 90)) {
//     alert ('значение переменной age НЕ находится в диапазоне 14 и 90 включительно')
// }

// let age3
// if (age <14 || age >90){
//     alert ('значение переменной age НЕ находится в диапазоне 14 и 90 включительно')
// }

// // Какие из перечисленных ниже alert выполнятся?
// // Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert( 'first' );     // if(-1)  alert( 'first' ); 
// if (-1 && 0) alert( 'second' );    // if(0)   
// if (null || -1 && 1) alert( 'third' );  // if(1)  alert( 'third' );

// // Напишите код, который будет спрашивать логин с помощью prompt.
// // Если посетитель вводит «Админ», то prompt запрашивает пароль, 
// // если ничего не введено или нажата клавиша Esc – показать «Отменено», 
// // в противном случае отобразить «Я вас не знаю».
// // Пароль проверять так:

// // Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// // Иначе – «Неверный пароль»,
// // При отмене или в случае если ничего не введено – «Отменено».


// let parol = prompt('Введите логин')
// if (parol === 'Aдмин' === 'Я главный') {
//     prompt('Введите пароль');
//     alert ('Здравствуйте!')

// }
// else if(" ", "Esc") {
//     alert('Отменено')
// }
// else if ('Я вас не знаю')

let user = prompt('Кто там?')

// if(user === "Админ"){

//   let parol = prompt('Пароль?')

//   if(parol === 'Я главный'){
//     alert('Здравтсвуйте')
//   }else if (parol === null || parol === ''){
//     alert('Отменено')
//   }else {
//     alert('Неверный пароль')  
//     }

// }else if (user === null || user === ''){
//     alert('Отменено')
// }else{
//     alert(' я вас не знаю')
// }

