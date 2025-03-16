// ОБЪЕКТЫ OBJECT

//  let user = {}          //литерал объекта

//  let user2 = new Object //КОНСТРУКТОР ОБЪЕКТА

//  let user3 = {
//     name: 'Regina',           //если из 2 св-в - в кавычках и []
//     age: 40,
//     address: {
//         city: "Ufa",
//         street: "Mira",
//     }
//  }
//   console.log(user3);
//   user3.age = 32
//   console.log(user3);
//   delete user3.age
//   console.log(user3);
  
//   user3['age'] = 5
//   console.log(user3);

//   let status = 'student'
//   user3.status = false
//   console.log(user3);

// console.log(user3.address.city);
// user3.address.home = 3
// console.log(user3.address.home);
  //написать конспект и решить задачи и посмотреть Ламкова, доделать верстку и фон

//   task 1
//   Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

//  let user = {}
// user.name = "John",
// user.surname = 'Smith'
// console.log(user);
// user.name = 'Pete'
// delete user.name




// task 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// // alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// // alert( isEmpty(schedule) ); // false


// function isEmpty(obj){
//   if (Object.keys(obj).length === 0)
//   return true;
//   else return false
// }

// alert( isEmpty(schedule) ) 


// task 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// let user = {
//   name: "John"
// };
// console.log(user);

// // это будет работать?
// user.name = "Pete";
// console.log(user);
// user = 5
// console.log(user);




// task 4
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let sum = 0                               
// for(let key in salaries){                //key  - каждое свойство объекта
//   sum += salaries[key]
// }
// console.log(sum);



// task 5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//   for(let key in obj){
//     if (typeof obj[key] === "number"){
//       obj[key] *= 2
//     }
    
//   }
//   return obj
// }


// console.log(multiplyNumeric(menu));  

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

  

  