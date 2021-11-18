/*===========================Class work======================*/


/*============Older than Me=================*/


// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     compare_age(obj){
//         if (this.age < obj.age) {
//             console.log(`${obj.name} is older then me`);
//         }
//         else if (this.age > obj.age) {
//             console.log(`${obj.name} is younger then me`);
//         }
//         else{
//             console.log(`${obj.name} is the same age as me`);
//         }
//     }
// }


// const p1 = new Person('Samuel', 24)

// const p2 = new Person('Joel', 36)

// const p3 = new Person('Lily', 24)


// // console.log(p1);

// p1.compare_age(p2)

// p2.compare_age(p1)

// p1.compare_age(p3)


/*=================Count Number of Instance===============*/

let arr = []
class User{
    constructor(name, arr){
        this.name = name,
        arr.push(this.name)
    }

    username(){
        console.log(this.name);
    }
    static count(){
        console.log(arr.length);
    }

}

const u1 = new User("Ali1012")
User.count()

const u2 = new User("Vali1210")
User.count()

const u3 = new User("G'ishmat007")
User.count()

// u1.username()

// u2.username()

// u3.username()

/*=================Simple OOP Calculator===============*/

// class Calculator{
    

//     add(number1, number2){
//         console.log(number1 + number2);
//     }

//     subtract(number1, number2){
//         console.log(number1 - number2);
//     }

//     multiply(number1, number2){
//         console.log(number1 * number2);
//     }

//     divide(number1, number2){
//         console.log(number1 / number2);
//     }


// }


// let cal = new Calculator
// cal.divide(10, 5)
