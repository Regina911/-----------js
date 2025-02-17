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

let value = NaN  // false
//false ||=
//true &&+

value &&= 10 //value = NaN
value ||= 20  // value = 20
value &&= 30   // value = 30
value ||= 40   // value = 40
alert (value)
 прочитать статью Логические операторы, решить в конце задачи
 







