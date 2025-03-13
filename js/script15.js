// ОБЪЕКТЫ OBJECT

 let user = {}          //литерал объекта

 let user2 = new Object //КОНСТРУКТОР ОБЪЕКТА

 let user3 = {
    name: 'Regina',           //если из 2 св-в - в кавычках и []
    age: 40,
    address: {
        city: "Ufa",
        street: "Mira",
    }
 }
  console.log(user3);
  user3.age = 32
  console.log(user3);
  delete user3.age
  console.log(user3);
  
  user3['age'] = 5
  console.log(user3);

  let status = 'student'
  user3.status = false
  console.log(user3);

console.log(user3.address.city);
user3.address.home = 3
console.log(user3.address.home);


  
  
  
  