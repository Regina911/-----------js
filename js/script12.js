//function Expression  function Declaration

// function sayHi(){                    //function Declaration
//     return console.log('hi');
    
// }
// sayHi()


// let sayHi2 = function(){            //function Expression
//     return console.log('hi');
// }
// sayHi2();

// Колбэк функции Сallback - обратный вызов

// function ask(question, yes, no){
//     if(confirm(question)) {
//         yes()
//      } else {no()}
// }

// function showOk(){
//     console.log('You say Ok');
// }

// function showNo(){
//     console.log('You say No');
// }

// ask('Вы согласны?', showOk, showNo)

//ОТЛИЧИЯ function Expression от  function Declaration

//СТРЕЛОЧНЫЕ ФУНКЦИИ

// const sum = (a, b) => {console.log(a + b)}
// const sun = function(a, b){console.log(a + b)}

// sum (4, 9)
// sun(4,9)

// let age = prompt('Сколько вам лет', 18)
// let result = age < 18 ? ()=>alert('Подросток') : ()=>alert('Взрослый')
// result()

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },           
//     () => { alert("Вы отменили выполнение."); }
//   )
   
//   () => {}
// function() {}

// Сделайте функцию func1, которая будет возвращать через return число 3 

// function func1() {
//     return 3
// }
 
// // Скопируйте исходный код функции func1, в переменную func2.
 
// let func2 = func1()

// console.log(func2);

// function Go (a, b) {
//     return a * b
// }
// console.log(Go(3, 5));



// let sum = (a) => {console.log(a * 4)}
// sum(5)
// sum(4)
// sum(100)

// / const sum = (a, b) => {console.log(a + b)}