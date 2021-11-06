// FizzBuzz

// function FizzBuzz(num){
//     if(num % 3 == 0){
//         process.stdout.write("Fizz");
//     }
//     if (num % 5 == 0) {
//         process.stdout.write("Buzz");
//     }
// }
// FizzBuzz(15)





// Prime Number

// function FindPrimeNumber(num){
//     let sanoq = 0
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) {
//             sanoq++;
//         }
//     }
//     if (sanoq == 0) {
//         console.log("Prime Number");       
//     }
//     else{
//         console.log("Not Prime Number");
//     }
// }
// FindPrimeNumber(7)




// Star
// function showStar(num){
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(" *"); 
//         }   
//         console.log(' ');  
//     }
// }
// showStar(5)



// Exercise Grade
// function ExerciseGrade(array){
//     let generalPoint = 0;
//     for (let i = 0; i < array.length; i++) {
//         generalPoint += array[i];
//     }
//     let overBall = generalPoint / array.length

//     if (overBall <= 59) {
//         return console.log('F');
//     }
//     if (overBall <= 69) {
//         return console.log('D');
//     }
//     if (overBall <= 79) {
//         return console.log('C');
//     }
//     if (overBall <= 89) {
//         return console.log('B');
//     }
//     else{
//         console.log('A');
//     }
// }

// let arr = [80, 60, 70, 90]
// ExerciseGrade(arr)



// 3 & 5
function findCollected(num){
    let collected = 0
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            collected += i
        }
    }
    return collected
}
console.log(findCollected(30));











