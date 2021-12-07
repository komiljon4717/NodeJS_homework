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

// function sum_arr(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === Number(arr[i])) {
//             sum += arr[i]
//         }
        
//     }
//     return sum
// }

// console.log(sum_arr([1, 2, "a", true, 7]));

/*============================================================*/

// function find_number(str) {
//     let arr = str.split(' ')
//     if (arr[1] === "+") {
//         return number(arr[4]) - Number(arr[2]);
//     }
//     else if (arr[1] === "-") {
//         return Number(arr[4]) + Number(arr[2]);
//     }
//     else if (arr[1] === "*") {
//         return Number(arr[4]) / Number(arr[2]);
//     }
//     else if (arr[1] === "/") {
//         return Number(arr[4]) * Number(arr[2]);
//     }
// }

// console.log(find_number("x * 5 = 20"));

/*================================================*/

// function pifagor(obj1, obj2) {
//     return Math.sqrt(Math.pow((obj1.x - obj2.x), 2) + Math.pow((obj1.y - obj2.y), 2))
// }

// console.log(pifagor({x: 0, y: 0}, {x: 1, y: 1}));


/*=======================sum of cubes============================*/
// function sum_of_cubes(arr) {
//     let sum = 0
//     if (arr.length === 0) {
//         return 0
//     }
//     for (let i = 0; i < arr.length; i++) {
//         sum = Math.pow(arr[i], 3)
//     }
//     return sum
// }

// console.log(sum_of_cubes([]));

/*=======================slice of pie============================*/

// function pie(num1, num2, num3) {
//     if (num2 * num3 <= num1) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(pie(11, 5, 3));


/*=======================digital clock============================*/

// function clock(secunds) {
//     let res = ''
//     let hour = Math.floor(secunds / 3600)
//     let min = Math.floor((secunds % 3600) / 60)
//     let sec = Math.floor((secunds % 3600) % 60)
//     if (hour >= 24) {
//         hour -= 24
//     }
    
//     return res += hour +":" + min + ":" + sec
    
// }
// console.log(clock(87000));


/*=====================================================*/

function paper(num) {
    let res = 1
    if (num === 1) {
        return 1
    }
    for (let i = 1; i < num; i++) {
        res *= 2
    }
    return res / 1000;
}


console.log(paper(5));

