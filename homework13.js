
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

// function max(arr) {
//     return Math.min(...arr)
// }

// console.log(max([1, 2, 3, 9, 14]));

/* =====================gcd====================*/

// function gcd_two_number(a, b) {
//     let max = 0
//     let res = 0
//     if (a >= b) {
//         max = a
//     }
//     else{
//         max = b
//     }
//     for (let i = 1; i <= max; i++) {
//         if (a % i === 0 && b % i ===0) {
//             if (res < i) {
//                 res = i
//             }
//         }
        
//     }
//     return res
// }

// console.log(gcd_two_number(9, 3));

/* =====================gcd 2========chala============*/

// function gcd_more(arr) {
//     let res = 0
//     let array = []
//     let max = Math.max(...arr)
//     let min_index = arr.indexOf(Math.min(...arr))
//     // console.log(min_index);
//     for (let i = 0; i < arr.length; i++) {
//         let ar = []
//         for (let k = 0; k <= max; k++) {
//             if (arr[i] % k === 0) {
//                 ar.push(k)
//             }
//         }
//         array.push(ar)
//     }
//     for (let l = 0; l < array[min_index].length; l++) {
//         for (let d = 0; d < array.length; d++) {
//             if (array[d].includes(array[min_index][l]) && res < array[min_index][l]) {
//                 res = array[min_index][l]
//             }
            
//         }        
//     }
//     console.log(array);
// }


// gcd_more([10, 15, 2, 25, 5])

/* =====================EKUK====================*/

// function EKUK(a, b) {
//     let i = 1
//     let ekuk = true
//     while (ekuk) {
//         // console.log("dang");
//         if (i % a === 0 && i % b === 0) {
//             ekuk = false
//             return i
//         }
//         i++
//     }
    
// }


// console.log(EKUK(12, 13));



/*===================================ARRAY============================================*/


// function is_it_array(arg) {
//     if (typeof arg === "object") {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(is_it_array([1, 2, 3]));


/*=======================array clone======================*/

// function array_clone(arr) {
//     let new_arr = [...arr]
//     return new_arr
    
// }

// console.log(array_clone([1, 2, 3, 4, 5]));


// 2-usul


// function array_clone2(arg) {
//     let array = []
//     array = arg.slice()
//     arg.push(10)
//     console.log(array);
// }

// console.log(array_clone2([1, 5, 6, 7, 8]));

/*==================first elemnt arrays====================*/

// function first_element_arrays(params) {
//     return params[0];
// }

// console.log(first_element_arrays([1, 2, 3, 4]));





/*==================last elemnt arrays====================*/

// function last_element_arrays(params) {
//     return params[params.length - 1];
// }

// console.log(last_element_arrays([1, 2, 3, 4]));


/*====================Colour=====================*/

// function my_colour(arr) {
//     let str = arr.join("+")
//     console.log(str);
// }

// my_colour(["qizil", "yashil", "oq", "qora"])













