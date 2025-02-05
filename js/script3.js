//строковое преобразование
// let value = NaN
// console.log(typeof value)
// value = String(value)
// console.log(typeof value);
// console.log(value);

// численное преобразование
// console.log('6' / '2');
// console.log('6' / '2n');
// let a = 'Regina'          // NaN
// console.log(a);
// console.log(typeof a);
// a = Number(a)            //строку => в число NaN
// console.log(a);

// let a = true
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //boolean в число
// console.log(a);
// console.log(typeof a);

// let a = false
// console.log(a);
// console.log(typeof a);
// a = Number(a)               
// console.log(a);
// console.log(typeof a);

// let a = null
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //null в число 0
// console.log(a);
// console.log(typeof a);

// let a = undefined
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //undefined в число NaN
// console.log(a);
// console.log(typeof a);

// let a = Symbol("id")
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //Symbol в число  - TypeError!!!
// console.log(a);
// console.log(typeof a);

// let a = Object
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //object в число  - NaN
// console.log(a);
// console.log(typeof a);

// let a = 15424154n
// console.log(a);
// console.log(typeof a);
// a = Number(a)               //Bigint в число  - number
// console.log(a);
// console.log(typeof a);

//Логическое преобразование

// let money = 100500000
// console.log(money);
// money = Boolean(money)       //число в Boolean 
// console.log(money);
// console.log(typeof money);

// let money = "hfgfh"
// console.log(money);
// money = Boolean(money)       //строка в Boolean 
// console.log(money);
// console.log(typeof money);

// let money = null
// console.log(money);
// money = Boolean(money)       //null в Boolean  - false
// console.log(money);
// console.log(typeof money);

// let money = undefined       (NaN)
// console.log(money);
// money = Boolean(money)       //undefined в Boolean  - false
// console.log(money);
// console.log(typeof money);

// let money = Infinity        // минус-infinity тоже true
// console.log(money);
// money = Boolean(money)       //infinity в Boolean  - true
// console.log(money);
// console.log(typeof money);

// let money = Symbol        
// console.log(money);
// money = Boolean(money)       //Symbol в Boolean  - true
// console.log(money);
// console.log(typeof money);

// let money = Object        
// console.log(money);
// money = Boolean(money)       //object в Boolean  - true
// console.log(money);
// console.log(typeof money);


