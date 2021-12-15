// function containsDuplicate(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let k = 0; k < nums.length; k++) {
//             if (nums[i] === nums[k] && i !== k) {
//                 return true
//             }
            
//         }
//         return false
//     }
// }
// console.log(containsDuplicate([1,2,3,4]));









// function findDuplicates(nums) {
//     let res = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let l = 0; l < nums.length; l++) {
//             if (nums[i] === nums[l] && i !== l && !res.includes(nums[l])) {
//                 res.push(nums[l])
//             }
//         }
//     }
//     return res
// }

// console.log(findDuplicates([4,5,4,1,2,6]));



/*===============isPalindrome=====================*/

var isPalindrome = function(x) {
    x = x.toString()
    let x1 = ''
    for (let i = x.length - 1; i >= 0; i--) {
        x1 += x[i]
        
    }
    return x === x1
};
console.log(isPalindrome(121));

