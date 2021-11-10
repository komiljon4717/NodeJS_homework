// 1-mashq

// function showAdress(obj) {
//     for (const key in obj) {
//        console.log(key, obj[key]);
//     }
    
// }


// let adress = {
//     street : 'a',
//     city : 'b',
//     zipCode : 'c'
// }

// showAdress(adress)



// 2-mashq

// function creatObj(street, city, zipCode) {
//     return{
//         street,
//         city,
//         zipCode
//     }
    
// }

// console.log(creatObj('chilonzor', 'tashkent', 'aabb'));



// 3-mashq constructiv object yasash


// function obj(street, city, zipCode) {
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
    
// }

// const obj2 = new obj('Olimlar', 'tashkent', 'aabb')
// console.log(obj2);

// 4-mashq


// function obj(name, city, job) {
//     this.name = name,
//     this.city = city,
//     this.job = job
// }

// function chack(obj2, obj3) {
//     let allDataObj2 = []
//     let allDataObj3 = []
//     for (const key in obj2) {
//         allDataObj2.push(key, obj2[key]);
//     }
//     // console.log(allDataObj2);

//     for (const key in obj3) {
//         allDataObj3.push(key, obj3[key]);
//     }
//     // console.log(allDataObj3);

//     for (let i = 0; i < allDataObj2.length; i++) {
//         if (allDataObj2[i] === allDataObj3[i]) {
//             console.log(allDataObj2[i] + ' teng ' + allDataObj3[i]);
//         }
//         else{
//             console.log(allDataObj2[i] + ' teng emas ' + allDataObj3[i]);
//         }
//     }
// }


// const obj2 = new obj('Islom', 'tashkent', 'developer')
// // console.log(obj2);
// const obj3 = new obj('Karim', 'tashkent', 'teacher')
// // console.log(obj3);
// chack(obj2, obj3)




// minusPlus

// function minusPlus(obj) {
//     let a = 0
//     let b = 0
//     console.log(obj);
//     for (const key in obj) {
//         if (key === 'plus'){
//             a += obj[key]
//         }

//         else if (key === 'minus') {
//             a -= obj[key]
            
//         }

//     }
//     console.log(a - b);
// }

// minusPlus ({plus: 15, minus: 5})




// sizeOfBox

// function sizeOfBox(obj) {
//     let a = 1
//     for (const key in obj) {
//         a *= obj[key]
//     }
//     return console.log(a);
// }

// sizeOfBox({width: 3, lenght: 5, height: 3})



// toUp

// function toUp(num) {
//     let yeg = 0
//     for (let i = 1; i <= num; i++) {
//         yeg += i
//     }
//     return console.log(yeg);
// }

// toUp(13)



function allObj(name, age, job) {
    for (const i of Object.values(name)) {
        name = i
    }
    for (const i of Object.values(age)) {
        age = i
    }
    for (const i of Object.values(job)) {
        job = i
    }
    const time = new Date

    
    return{
        name,
        age,
        job,
        time
    }
}




let name1 = {name: 'John Doe'}
let age = {age: 35}
let job = {job: 'anonymous'}

console.log(allObj(name1, age, job));