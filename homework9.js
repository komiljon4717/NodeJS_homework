/*===============1=============*/

// let array = []
// let array2 = new Array

/*===============2=============*/

// array.length = 1

/*===============2=============*/

// let arr2 = new Array(5).fill(1)
// let arr2 = new Array(5).push(1)

// console.log(arr2);

/*==============4===========*/

// for
// toString
// join

/*==============5===========*/

// let add = [1, 2]

// function ret(arr) {
//     add.unshift(9, 8, 7)
//     add.push(4, 5, 6)
//     let ort = add.splice(3, 3)
//     console.log(add);
//     return ort
// }

// console.log(ret(add));



/*==============6===========*/

let arara = [1, 2, 2, 3, 4, 3, 5, 1, 6]


// function getValues(arr, start, end) {
//     let cut = arr.splice(start, end)
//     return cut
// }

// console.log(getValues(arara, 1, 3));

/*================7===============*/

// function del(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let k = 0; k < array.length; k++) {
//             if (array[i] === array[k] && i != k) {
//                 array.splice(k, 1)
//             }
            
//         }
//     }
//     console.log(array);
// }

// del(arara)


// 2-usul

// function Dang(arr) {
//     let res = new Set(arr)
//     return res
// }

// console.log(Dang(arara));

/*================8===============*/

// let mas1 = [1, 2, 3]
// let mas2 = [4, 5, 6]

// // let mass = [...mas1, ...mas2]

// // console.log(mass);

// let massiv = mas1.concat(mas2)

// console.log(massiv);

/*================9===============*/

let arr7 = [4, 2, 3]
let arr8 = [1, 2, 3]

// function is_equal(arr1, arr2) {
//     let equal_value = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let k = 0; k < arr2.length; k++) {
//             if (arr1[i] === arr2[k]) {
//                 equal_value.push(arr2[k])
//             }
//         }
//     }
//     return equal_value
// }

// console.log(is_equal(arr7, arr8));

// 2-usul

// function equal(arr1, arr2) {
//     return arr1.include
// }



/*================10===============*/

// let array = [1, 2, 3]

// // array = []

// array.length = 0

// console.log(array);

/*================11===============*/

// function str_to_array(array) {
//     for (let i = 0; i < array.length; i++) {
        
//     }
// }



// let str_array = ['1', '2', '3', '4']
// str_to_array(str_array)




/*================12===============*/

// let arr_to_obj = [1, 2, 3, 4, 5, 6]


// function array_to_object(arr) {
//     return Object.assign({}, arr)
// }

// console.log(array_to_object(arr_to_obj));

// 2-usul

// function to_object(array) {
//     let obj = {}
//     for (let i = 0; i < array.length; i++) {
//         obj[i] = array[i]
//     }
//     return obj
// }

// console.log(to_object(arr_to_obj));


/*================13===============*/

// const array_objs = [
//     { name: 'Chris', work: 'dev'},
//     { name: 'George', work: 'test'},
//     { name: 'Jim', work: 'dev'},
//     { name: 'Trey', work: 'test'}
// ]

// function sorted(array, word) {

//     word = word.toLowerCase()
//     let sorted = []
//     for (let k = 0; k < array.length; k++) {
//         for (const i in array[k]) {
//             if (array[k][i] === word) {
//                 sorted.push(array[k])
//             }
//         }
//     }
//     return {sorted}
// }


// let res = sorted(array_objs, 'DEV')

// console.log(res);