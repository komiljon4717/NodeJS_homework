/*===================homework 21.12.2021===================*/
// function find(arr, words) {
//     let safe = ''
//     for (const val of arr) {
//         if (words.includes(val) && safe.length < val.length) {
//             safe = val
//         }
//     }
//     return safe
// }

// console.log(find(['gle', 'go', 'gog', ], 'google'));


/*========================================================*/
function chack(arr) {
    let obj = {}
   for (let i = 0; i < arr.length; i++) {
       if (!obj[arr[i]]) {
           obj[arr[i]] = 0
           obj[arr[i]]++
       }
       else obj[arr[i]]++
   }
//    let max = Object.values(obj)
   console.log(obj);
}

chack(['a', 1, 2, 3, 2, 5, 2, 'a'])
























