// homework

function User(firstName, lastName, email, password, phone, status) {
    
    let user_id = '_' + Math.random().toString(36).substr(2, 9);
 
    
    
    let hide = ''
    for (let i = 0; i < password.length; i++) {
        if (Math.floor(password.length / 2) === i+1) {
            hide = hide.concat(Date.now())
            // console.log('pass');
        }
        hide += password[i]
    } 
    // console.log(hide);
    
    let char = ''
    for (let k = 0; k < 4; k++) {
        char += phone[k]
        }
        if (char === '+998') {
            // console.log('phone'); 
        }
        else{
            console.log('Phone number error dang');
        }
    if (status === 'user' || status === 'admin' || status === 'moderator') {
        // console.log('status');
    }else{
        console.log('Status error dang');
    }


        
    return{
        user_id,
        firstName,
        lastName,
        email,
        password: hide,
        phone: phone,
        status: status
    }
}


const user1 = User('Komiljon', 'Nosirov', 'komiljon4717@gmail.com', 'botanika', '+998931083474', 'admin')

console.log(user1);




// ===================1-mashq=================

// function sum(...value) {
//     let sum = 0
//     // console.log(...value);

//     for (let i = 0; i < value.length; i++) {
//         sum += value[i]
//     }
//     return sum
// }


arr = [1, 2, 3, 4]
// console.log(sum(...arr));



// ================2-mashq=========================


// function min_max(arr) {
//     let min = arr[0]
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return{
//         min,
//         max
//     }
// }


// console.log(min_max(arr));



// ============3-mashq===========

// function includs(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (num === arr[i]) {
//             return true
//         }
//     }
//     return false
// }

// console.log(includs(arr, 8));


/*=================4-mashq=======================*/

// function except(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < num.length; j++) {
//             if (arr[i] === num[j]) {
//                 arr.splice([i], 1)
//             }
//         }
//     }
//     return arr
// }

// console.log(except(arr, [1]));


/*=================5-mashq=======================*/

// function move(arr, index, offset) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === index) {
//             arr.splice(offset + 1, 0, arr[i])
//             arr.splice(i, 1)
//         }
//     }
//     return arr
// }

// console.log(move(arr, 0, 2));


/*=================6-mashq=======================*/


// function get_max(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[0] < arr[i]) {
//             arr[0] = arr[i]
//         }
//     }
//     return arr[0]
// }

// console.log(get_max(arr));



/*=================7-mashq=======================*/

// const movie = [
//     {title: 'a', year: 2021, rating: 4.5},
//     {title: 'b', year: 2020, rating: 4.7},
//     {title: 'c', year: 2019, rating: 3},
//     {title: 'd', year: 2020, rating: 4.5},
// ]

// function find_movie(val, data) {
//     // val.sort()
//     // for (let k = 0; k < val.length; k++) {
//     //     console.log(val[k].length);
//     //     for (let l = 0; l < val[k].length; l++) {
            
            
//     //     }
        
//     // }
//     let res = []
//     for (let i = 0; i < val.length; i++) {
//         console.log(val[i]);
//         all = Object.values(val[i])
//         console.log(all);
//         for (const value of all) {
//             if (value === data) {
//                 res.push(all[0])
//             }
//         }
//     }
//     return res
// }

// console.log(find_movie(movie, 2020));