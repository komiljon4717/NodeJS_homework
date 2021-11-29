/*=============================================*/


// function change(words) {
//     let new_words = ''
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === words[i].toUpperCase()) {
//             new_words += words[i].toLowerCase()
//             console.log(words[i]);
//         }
//         else{
//             new_words += words[i].toUpperCase()
//         }
//     }
//     return new_words
// }
// console.log(change("Tez jiggarrang tulki"));

/*================================================*/

// function logger(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${i}-qator`);
//         for (let k = 0; k < arr[i].length; k++) {
//             console.log(arr[i][k]);
            
//         }
        
//     }
// }

// console.log(logger([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

/*=======================sum and ko'paytma===================================*/

function sum(arr) {
    let yeg = 0
    let kop = 1
    for (let i = 0; i < arr.length; i++) {
        yeg += arr[i]
        kop *= arr[i]
    }
    console.log(`yeg'indi ${yeg}, ko'paytma ${kop}`);
}


sum([1, 2, 3, 4, 5, 6])





















