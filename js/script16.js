// КОПИРОВАНИЕ ОБЪЕКТОВ COPYING OBJECT

// let a = {age: 5}      //{age: 5} jdhdkjdkjblk
// let b = a             // jdhdkjdkjblk
// b.age = 6
// console.log(b);
// console.log(a);

// let c = {}
// let d = {}
// console.log(c===d);


// 1 - for in
// let user = {
//     name: "Reg",
//     age: 31
// }

// let usercopy = {}
//     for(let key in user){
//         usercopy[key] = user[key]
//     }
// usercopy.age = 18
// console.log(user);
// console.log(usercopy);

//2 - object.assign
// let user = {
//     name: "Reg",
// }

// let a = {
//     age: 32
// }

// let b = {
//     address:"Ufa"
// }
// let f = {}
// Object.assign(f, a, b)
// f.age = 35
// console.log(a);
// console.log(f);

//3 - cпред-оператор
// let user = {
//     name: "Reg",
//     age: 31,
//     address: {
//         city:'Ufa'
//     }
// }
// let userCopy = {...user}
// console.log(userCopy == user);
// console.log(userCopy.address == user.address);




//4 - ГЛУБОКОЕ КОПИРОВАНИЕ

// let user = {
//     name: "Reg",
//     age: 31,
//     address: {
//         city:'Ufa'
//     }
// }
// let user2 = Object.assign({}, user)
// user2.address. city = "Moskow"
// console.log(user);

// let userCopy = structuredClone(user)
// userCopy.address.city = 'New-York'

// console.log(userCopy);
// console.log(user);


