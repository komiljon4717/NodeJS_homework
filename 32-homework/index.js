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


/*==========================20.12.2021==============================*/


function chack2(arr) {
    let safe = {}
    let obj = arr.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 0
            acc[val]++
        }else acc[val]++
        return acc
    }, {})
    safe = Object.values(obj)
    let a = Math.max(...safe)
    for (const key in obj) {
        if (obj[key] === a) {
            return {[key]: obj[key]}
        }
    }
}

console.log(chack2(['a', 1, 2, 3, 2, 6, 2, 4, 'a']));


















