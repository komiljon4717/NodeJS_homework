
// function shiftToLeft(num1, num2){
//     return num1 << num2
// }

// console.log(shiftToLeft(-6, 5));

/*====================================================================*/

function reversedBinaryInteger(num) {
    let newNum = num.toString(2).split('').reverse().join('')
    newNum = parseInt(newNum, 2)
    console.log(newNum);
}

reversedBinaryInteger(10)

























