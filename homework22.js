/*=====================chat room status==================*/

// function room_status(array) {
//     let size = array.length

//     if (size === 0) {
//         console.log("no one online");
//     }
//     else if (size === 1) {
//         console.log(`${array[0]} online`);
//     }
//     else if (size === 2) {
//         console.log(`${array[0]} and ${array[1]} online`);
//     }
//     else if (size > 2) {
//         console.log(`${array[0]} and ${array[1]} ${size - 2} more online`);
        
//     }
// }

// room_status(["Ali", "Vali", "Eshmat", "Umidjon"])

/*=====================matchstics houses====================*/

// function matchstics_houses(num) {
//     if (num === 1) {
//         return 6
//     }
//     else if (num === 2) {
//         return 11
//     }
//     else if (num === 3) {
//         return 16
//     }
//     else if (num > 3) {
//         return (num - 3) * 5 + 16
//     }
//     else{
//         return "Dang kalla qo'ydiz"
//     }
// }
// console.log(matchstics_houses(87));

/*=============================calculator==========================*/

// function calculator(num1, char, num2) {
//     switch (char) {
//         case "+":
//             return num1 + num2
            
//         case "-":
//             return num1 - num2
//         case "/":
//             return num1 / num2
//         case "*":
//             return num1 * num2
//         default:
//             return "Dang"
            
//     }
// }

// console.log(calculator(2, "+", 2));

/*===========================================*/

function sum_arr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(arr[i])) {
            sum += arr[i]
        }
        
    }
    return sum
}

console.log(sum_arr([1, 2, "a", true, 7]));






























