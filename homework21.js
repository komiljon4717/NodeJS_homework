
/*================factorize_numbers=================*/

// function factorize_numbers(num) {
//     let gres = []
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % 2 === 0) {
//             gres.push(i)
//         }
//         else if (num === 1) {
//             gres.push(num)
//             return gres
//         }
//         else if (num % 2 === 1) {     
//             gres.push(1, num)
//             return gres
//         }
//     }
//     gres.push(num)
//     return gres
// }
// console.log(factorize_numbers(10));


/*================hacker_speak=================*/

// function hacker_speak(value) {
//     value = value.toLowerCase()
//     let result = ''
//     for (x = 0; x < value.length; x++){
//         if (value[x] == "a"){
//             result += "4"
//         } else if (value[x] == "s"){
//             result += "5"
//         } else if (value[x] == "e"){
//             result += "3"
//         } else if (value[x] == "i"){
//             result += "1"
//         } else if (value[x] == "o"){
//             result += "0"
//         } else{
//             result += value[x]
//         }
//    }
//    return result
// }

// console.log(hacker_speak('jAvascript is cool'));

/*================max_min=================*/

function max_min_string(str) {
    let output = []
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    output.push(Math.max(...arr))
    output.push(Math.min(...arr))
    str = output.join(' ')
    console.log(str);
}

max_min_string('1 2 -3 5 3 6')
































