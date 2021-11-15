// function ids(val) {
//     let id = []
//     for (let i = 1; i <= val; i++) {
//         user_id = '_' + Math.random().toString(36).substr(2, 9) + i;
//         id.push(user_id)
//     }
//     return id
// }



// function createUserName(num) {
//     let userName = []
//     let user_name = ''
//     for (let k = 1; k <= num; k++) {
//         user_name = 'username' + k
//         userName.push(user_name)
        
//     }
//     return userName
// }



// function createEmail(val) {
//     let userName = createUserName(val)
//     let email = []
//     for (let l = 0; l < val; l++) {
//         email.push(userName[l] + '@gmail.com')
//     }
//    return email
// }


// function password(num) {
//     let pass = []
//     for (let t = 0; t < num; t++) {
//         pass.push(Date.now() + Math.floor(Math.random() * 1000))
//     }
//     return pass
// }


// function make(num) {
//     let user = []
//     let id = ids(num)
//     let user_name = createUserName(num)
//     let email = createEmail(num)
//     let pass = password(num)
    
//     // console.log(id);
//     // console.log(user_name);
//     // console.log(email);
//     // console.log(pass);

//     let alldata = []

//     for (let i = 0; i <num; i++) {
//        user = {
//            id: id[i],
//            username: user_name[i],
//            email: email[i],
//            password: pass[i]
//        }
//        alldata.push(user)
//     }
//     return alldata
// }






// console.log(make(10));




/*==========================5-mashq===========================*/

// function plus_colour_name(val) {
//     let all_colour = ""
//     let all_colour2 = ""
//     for (let i = 0; i < val.length; i++) {
//         if (i === 0 ) {
//             all_colour += val[i]
//             all_colour2 += val[i]
//         }
//         else{
//             all_colour += "," + val[i]
//             all_colour2  += '+' + val[i]
//         }
//     }
//     console.log(all_colour);
//     console.log(all_colour2);
// }


// let my_colour = ["Red", "Green", "White", "Black"]
// plus_colour_name(my_colour)


/*==========================7-mashq===========================*/


// let arr = [3, 8, 7, 6, 5, -4, 3, 2, 1]

// arr.sort((a, b) => {
//     return a - b
// })
// console.log(arr);

/*==========================8-mashq===========================*/


// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function find(array) {
    
//     let res = 0
//     let char = ''
//     for (let i = 0; i < array.length; i++) {
//         let count = 0
//         for (let k = 0; k < array.length; k++) {
//             if (array[i] === array[k]) {
//                 count++
//                  // console.log(count, array[i]);
//             }   
//         }
//         if (count > res) {
//             res = count
//             char = array[i]
//         }
//     }
//     console.log(char, res);
// }
// find(arr1)


/*==========================8-mashq===========================*/

function chars(val) {
    for (let i = 0; i < val.length; i++) {
        if (isUpper(val[i])) {
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
let sen = "Mening Ismim Komiljon"

// chars("Salom")





/*==========================6-mashq===========================*/

// function dashes(val) {
//     let word = val.toString()
//     let num = 0
//     let num2 = 0
//     let res = ''
//     for (let i = 0; i < word.length; i++) {
//         num = Number(word[i])
//         num2 = Number(word[i+1])
//         if (num % 2 === 0 && i === 0) {
//             res += num
//         }
//         else if (num % 2 === 0 && num2 % 2 === 0) {
//             res += num + "-"
//         }
//         else{
//             res += num
//         }
//     }
//     console.log(res);
// }

// dashes(25468742)


/*==========================10-mashq=========================*/

// function nested(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(i + ' row');
//         for (let k = 0; k < array.length; k++) {
//             console.log(array[i][k]);
//         }
//     }
// }

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [17, 4, 28, 14], [3, 10, 26, 7]]
// nested(arr)

/*==========================1-mashq=========================*/

// function isArray(arg) {
//     return Array.isArray(arg)
// }

// console.log(isArray(5156));


/*==========================2-mashq=========================*/

// function clone(array) {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[i])
//     }
//     console.log(newArr);
// }

// let arr = [1, 2, 1, 24]
// clone(arr)


/*==========================3-mashq=========================*/

// function first(...args) {
//     if (args.length === 1) {
//         for (let i = 0; i < args.length; i++) {
//             for (let k = 0; k < args.length; k++) {
//                 return args[i][k]  
//             }
//         }
//     }
//     else if (args.length > 1) {
//         for (let i = 0; i < args.length; i++) {
//             return args[i]
            
//         }
//     }
// }

// console.log(first([1, 2, 3], 3));



/*==========================4-mashq=========================*/


// function last(...args) {
//     const newArr = args.reverse()
//     if (args.length === 1) {
//         let arr = args[0].reverse()
//         for (let i = 0; i < args.length; i++) {
//             for (let k = 0; k < args.length; k++) {
//                 return args[i][k]  
//             }
//         }
//     }
//     else if (args.length > 1) {
//         for (let i = 0; i < args.length; i++) {
//             return args[i]   
//         }
//     }
// }

// console.log(last([1, 2, 3], 9));


/*=====================================================*/

function chack_array(array, target) {
    let new_arr = []
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[i] + array[k]== target) {
                new_arr.push(i, k)
                return new_arr
            }
        }
    }
}


let arr = [2, 7, 11, 15]
console.log(chack_array(arr,9)
);














