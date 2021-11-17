/*==================Largest Swap==================*/


// function largest_swap(digit1) {
//     let string = ''
//     string += digit1
//     let res = string.split("").reverse().join("")
//     console.log(digit1 > res);
// }

// largest_swap(43)

/*==================detect word=================*/

// function detect_word(value) {
//     let word = ''
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] === value[i].toLowerCase()) {
//             word += value[i]
//         }
//     }
//     return word
// }


// const res = detect_word("DdADaSAdFFaSF")

// console.log(res);

/*================char count==========================*/

// function char_count(char, value) {
//     let count = 0
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] === char) {
//             count++
//         }
//     }
//     return count
// }


// const num = char_count("a", "baby")

// console.log(num);

/*===============Add list==================*/

// function add_list(arr1, arr2) {
//     let new_arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (i === Math.floor(arr1.length / 2)) {
//             for (let k = 0; k < arr2.length; k++) {
//                 new_arr.push(arr2[k])
//             }
//             if (arr1.length === 2) {
//                 new_arr.push(arr1[1])
//             }
//         }
       
//         else {
//             new_arr.push(arr1[i])
//         }
//     }
//     return new_arr
// }


// let win = add_list([1, 2, 3, 4], [7, 8, 9])
// console.log(win);

/*===============Filter list==================*/

let array = [1, 2, 's', 'weea', 'y', 5, 'z']

// function filter(arr) {
//     let filtered = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof arr[i] === 'string') {
//            continue
//         }
//         filtered.push(arr[i])
//     }
//     return filtered
// }

// console.log(filter(array));


/*============number split============*/


// function splitt(number) {
//     let arr = []
//     let num1 = Math.floor(number / 2)
//     let num2 = Math.ceil(number / 2)
//     arr.push(num1, num2)
//     return arr
// }

// console.log(splitt(5));

/*============Is it true============*/

// function is_it_true(arg) {
//     let list = arg.split('')
//     for (const val of list) {
        
//     }
// }


// is_it_true("2=2")

/*====================sort string length================*/


// let nima = ['a', 'ccc', 'dd']
// nima.sort(function (a, b) {
//     return a.length - b.length
// })

// console.log(nima);


/*====================sum of cubs================*/

// function sum_of_cubs(arr) {
//     let sum = 0
//     for (const val of arr) {
//         sum += val**3
//     }
//     console.log(sum);
// }

// sum_of_cubs([1, 5, 9])


/*==========sport player=========*/

// class Sport_layer{
//     constructor(name, age, hight, weight){
//         this.name = name
//         this.age = age
//         this.hight = hight
//         this.weight = weight
//     }

//     getAge(){
//         console.log(`${this.name} is age ${this.age}`);
//     }

//     getHeight(){
//         console.log(`${this.name} is ${this.hight}cm`);
//     }

//     getWeight(){
//         console.log(`${this.name} weights ${this.weight}kg`);
//     }




// }

// player1 = new Sport_layer("David Jones", 25, 175, 75)

// player1.getAge()
// player1.getHeight()
// player1.getWeight()


/*===============fulname===============*/

class Fullname{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    fullname(){
        console.log(`${this.firstname} ${this.lastname}`);
    }

    Firstname(){
        console.log(`${this.firstname}`);
    }

    email(){
        console.log(`${this.firstname}.${this.lastname}@company.com`);
    }
}


exm = new Fullname("John", "Smith")

exm.fullname()
exm.email()
exm.Firstname()































