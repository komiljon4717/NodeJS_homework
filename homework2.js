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
// function findCollected(num){
//     let collected = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             collected += i
//         }
//     }
//     return collected
// }
// console.log(findCollected(30));





// log str incomplete

// function chack(allData){
//     for (let i = 0; i < allData.length; i++) {
//         // if (allData === 'string') {
//         //     console.log(allData[i]);
//         // }
//     }
//     console.log(allData);
// }


// obj = {
//     name: 'Komiljon',
//     username: 'Nosirov',
//     age: 22,
//     phoneNumber: 1083474
// }

// for (const key in obj) {
//     // console.log(key);
//     for (let i = 0; i < obj.length; i++) {
//        console.log(key[i]) 
//     }
// }




// Truthy value

// function truthy(val){
//     if (val == 0 || val == false || val == "" || val == null || val == undefined || val == NaN || val == -0) {
//         console.log("Falsy value");
//     }
//     else{
//         console.log('Truthy value');
//     }
// }
// truthy(NaN)


// showNumber
function showNumber(num){
    let odd_num = 0
    let couple_num = 0
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            couple_num++
        }
        else{
            odd_num++
        }
    }
    console.log(odd_num + ' odd number');
    console.log(couple_num + ' couple number');
}
showNumber(20)





