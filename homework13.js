
/*===================farm problem=================*/

// function animals(chickens, cows, pigs) {
//     console.log(chickens * 2 + (cows + pigs) * 4 )
// }

// animals(2, 3, 5)

/*===================sort string length=================*/

// function sort_str(...args) {
//     let safe = ''
//     for (let i = 0; i < args.length; i++) {
//         for (let k = 0; k < args.length; k++) {
//             if (args[i].length < args[k].length && i !== k) {
//                 safe = args[i]
//                 args[i] = args[k]
//                 args[k] = safe
//             }
            
//         }
        
//     }
//     console.log(args);
// }


// sort_str("assalomu", 'salom', "olma", "it")

/*===================chack=================*/
// function chack(...args) {
//     let a = args[args.length - 1]
//     args.pop()
//     console.log();
//     for (let i = 0; i < args[0].length; i++) {
//         if (args[0][i].includes(a)) {
//             continue
//         }
//         else{
//             return false
//         }
        
//     }
//     return true
// }

// console.log(chack([[1, 3], [2, 1], [1, 4], [5, 4]], 1));

/*===================high low=================*/
// function high_low(arg){
//     let res = ""
//     let arr = arg.split(" ")
//     let max = Math.max(...arr)
//     res += max + " "
//     let min = Math.min(...arr)
//     res += min
     
//     console.log(res);
//     return 
// }


// high_low("1 2 3 4 5 6")


/*===================find number=================*/

// function find_number(arr) {
//     for (let i = 1; i <= 10; i++) {
//         if (arr.includes(i)) {
//             continue
//         }
//         else{
//             return i
//         }
        
//     }
// }

// console.log(find_number([10, 2, 5, 3, 1, 6, 9, 8, 7]));





















/* =====================math random====================*/
// function random(a) {
//     let num = Math.floor(Math.random()* a)
//     return num
// }

// console.log(random(20, 1));

/* =====================kasr formatlash====================*/
// function kasr_format(a, b) {
//     console.log(a.toFixed(b));
// }

// kasr_format(12.12530, 2)

/* =====================max====================*/

// function max(arr) {
//     return Math.max(...arr)
// }

// console.log(max([1, 2, 3, 9, 14]));

/* =====================min====================*/

function max(arr) {
    return Math.min(...arr)
}

console.log(max([1, 2, 3, 9, 14]));

























