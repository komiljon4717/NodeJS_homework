// Landscape or
// function WhichOne(a ,b){
//     if (a > b) {
//         return console.log("Portrait mode");
//     }
//     else{
//         return console.log("Landscape mode");
//     }
// }
// WhichOne(4, 3)







// FizzBuzz

// function FizzBuzz(num){
//     if(num % 3 == 0){
//         process.stdout.write("Fizz");
//     }
//     if (num % 5 == 0) {
//         return process.stdout.write("Buzz");
//     }
//     else if (isNaN(num)) {
//         return console.log('Not a number');
//     }
//     else {
//         console.log(num);
//     }
// }
// FizzBuzz(7)





// Demerit points


// function Radar(speed) {
//     let a = Math.floor(speed / 5)
    
//     if (a > 12) {
//         console.log('Suspended');
//     }
// }
// Radar(70)



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
// function findCollected(arr){
//     let collected = 0
//    for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
//             collected += arr[i]
//         }
//    }
//     return collected
// }
// console.log(findCollected([3, 10, 7, 4]));





// log str incomplete

// function chack(allData){
//     for (let i = 0; i < allData.length; i++) {
//         if (isNaN(allData[i])) {
//             console.log(allData[i]);
//         }
//     }
// }


// obj = {
//     name: 'Komiljon',
//     username: 'Nosirov',
//     age: 22,
//     phoneNumber: 1083474
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
// function showNumber(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             console.log(arr[i] + ' Juft');
//         }
//         else{
//             console.log(arr[i] + ' Toq');
//         }
//     }
    
// }
// showNumber([0, 6, 7, 15])



// if1

// let a = 5
// if (a > 0) {
//     return console.log(a+=1);
// }
// else{
//     return console.log(a);
// }


// if2


// let a = -5
// if (a > 0) {
//     return console.log(a+=1);
// }
// else{
//     return console.log(a-=2);
// }


// if3

// let a = 0
// if (a > 0) {
//     return console.log(a+=1);
// }
// else if (a < 0) {
//     return console.log(a-=2);
// }
// else{
//     return console.log(a +=10);
// }


// if4

// let a = 4
// let b = 5
// let c = -8

// let d = 0

// if (a > 0) {
//     d++
// }
// if (b > 0) {
//     d++
// }
// if (c > 0) {
//     d++
// }
// console.log(d + ' musbat');




// if5






