/*===================factor chain=================*/
// function factor_chain(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = i; k < arr.length; k++) {
//             if (arr[k] % arr[i] === 0) {
//                 continue;
//             }
//             else return false
//         }
//     }
//     return true
// }

// console.log(factor_chain([3, 6, 12, 24]));

/*========================================================*/

// function removeDublicat(arr) {
//     arr = new Set(arr)
//     return new Array(...arr)
// }
// console.log(removeDublicat(["The", "John", "The"]));


/*====================================================*/

function mirror(arr) {
    let newArr = []
    let a=[...arr]
    a = a.reverse()
    arr.pop()
    return newArr = [...arr, ...a]
    
}
console.log(mirror([1, 2, 3, 4, 5]));




