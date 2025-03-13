// // МАССИВЫ ARRAYS
// // let arr = [15, 4, 'Yfa', true. false. undefined,[2,3], {adress: "Ufa-02"}]
// // let arr2 = new Array()

// // console.log(arr.length);
// // console.log(arr[0]);
// // console.log(arr[7].adress)
// // console.log(arr(arr.length-1).adress);

// // POP/PUCH       SHIFT/UNSHIFT

// // let arr = [1, 2, 3]
// // arr.pop();             // добавить в конце
// // console.log(arr);

// // arr.push(4); 
// // console.log(arr);      // добавить в начале

// // arr.shift()            // удалить в начале
// // console.log(arr);

// // arr.unshift()           // удалить в конце
// // console.log(arr);


// //   ПУЗЫРЬКОВЫЙ МЕТОД СОРТИРОВКИ
// let arrNum = [5, 1, 2, 7, 3, 0, 6, 8, 9, 4]

// function bubbleSort(arr) {       //выучить функцию
//     for(j=0; j<arr.length; j++){
//         for(i=0; i<arr.length; i++){
//         if (arr[i] > arr[i+1]) {
//             let temp = arr[i]     
//             arr[i]=arr[i+1]          
//             arr[i+1]=temp
//         }  
//     } 
//     }
//     return arr
// }


// console.log(bubbleSort(arrNum))









function bubbleSort(arrNum){
    for(i=0; i<arrNum.length; i++){
        for(j=0; j<arrNum.length; j++){
            if(arrNum[j]>arrNum[j+1]){
                let temp = arrNum[j]
                arrNum[j] = arrNum[j+1]
                arrNum[j+1] = temp
            }
        }
        
    }
    return arrNum
}
console.log(bubbleSort([3,5,4,1,2]));









