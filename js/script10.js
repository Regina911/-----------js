//  цикл switch case
// let age = 40

function ageFn(age) {
    switch (true) {
        case (age<18): {
            return console.log('зеленый еще');
        } 
        case (age>=18 && age>=65):{
            return console.log('молодой');
        }
            
         case (age>65):{
            return console.log("взрослый");
         }
            
        default:
            console.log("нет данных");
    }
}
ageFn(9)
ageFn(19)
ageFn(66)
ageFn('')





