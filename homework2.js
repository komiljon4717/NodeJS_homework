// FizzBuzz

// function FizzBuzz(num){
//     if(num % 3 == 0){
//         console.log('Fizz');
//     }
//     if (num % 5 == 0) {
//         console.log('Buzz');
//     }
// }
// FizzBuzz(15)



// Prime Number

function FindPrimeNumber(num){
    let sanoq = 0
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            sanoq++;
        }
    }
    if (sanoq == 0) {
        console.log("Prime Number");       
    }
    else{
        console.log("Not Prime Number");
    }
}
FindPrimeNumber(7)




