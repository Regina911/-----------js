// // let user = prompt('Regina')
// // alert(user ?? 'Аноним')

// // let firstName = null;
// // let lastName = null;
// // let nickName = "Суперкодер";

// // // показывает первое значение, которое определено:
// // alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

// // || возвращает первое истинное значение.
// // ?? возвращает первое определённое значение

// // Оператор нулевого присваивания (??=)

// let userAge = null
// if(userAge === null || userAge === undefined ){
//     userAge = 18
// }

// userAge ??=18 // оператор ??= присвоит 18 если userAge не определено (null , undefined)

// let userAge = 18
// userAge ??= alert ('не сработает')   // выведет alert ('не сработает') 
// userAge ??= 21                       // выведет alert ('не сработает') 
// userAge ??= null
// alert (userAge)

// прочитать тему, в конце задачи и начать делать проект с телефоном

// // task1 
// alert(undefined ?? NaN ?? null ?? "" ?? " ");  //NaN

// // task2
// let city = null;

// city ??= "Берлин";  //"Берлин"
// city ??= null;      //
// city ??= "Кёльн";   //
// city ??= "Гамбург";

// alert(city); //"Берлин"

// // task3
// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

// result ??= num1 ?? num2;
