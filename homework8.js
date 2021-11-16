let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [17, 4, 28, 14], [3, 1, 6, 7]]


// function nested(args) {
//     let sum = []
//     for (let i = 0; i < args.length; i++) {
//         let all = 0
//         for (let k = 0; k < args[i].length; k++) {
//             all += args[i][k]            
//         }
//         sum.push(all)
//     }
//     return sum
// }
// console.log(nested(arr));




// function nested_min(args) {
//     let min = 0
//     let index = 0
//     for (let i = 0; i < args.length; i++) {
//         let chack = 0
//         for (let k = 0; k < args[i].length; k++) {
//             chack += args[i][k]
//         }
//         if (min === 0) {
//             min = chack
//             index = i
//         }
//         else if (min > chack) {
//             min = chack
//             index = i
//         }

//     }
//     return {
//         min,
//         index
//     }
// }
// console.log(nested_min(arr));

/*===============================================*/

// function two_sum(nums, target) {
//     let array = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let k = 0; k < nums.length; k++) {
//             if (nums[i] + nums[k] == target) {
//                 array.push(i, k)
//                 return array
//             }
            
//         }
//     }
    
// }

// let result = two_sum([2, 7, 11, 15], 9)
// console.log(result);


















