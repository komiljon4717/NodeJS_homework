/*===========================================================*/

Array.prototype.mySort = function () {
    let newArray = [...this]
    let a = 0
    for (let i = 0; i < this.length; i++) {
        for (let k = i + 1; k < this.length; k++) {
            if (newArray[i] > newArray[k] && i !== k) {
                a = newArray[i]
                newArray[i] = newArray[k]
                newArray[k] = a
            }
        }
    }
    return newArray
}
let arr = ['a', 'd', 'b', 'c', 'f']

console.log(arr.mySort((a, b) => b - a));

/*===========================================================*/


let data = [
    {income: 500, expanse: 200},
    {income: 400, expanse: 100},
    {income: 150, expanse: 145},
    {income: 230, expanse: 320},
]

function finance(arr, key) {
    return arr.reduce((acc, val) => {
        if (key === 'total') {
            acc += val.income - val.expanse
            return acc
        }
        acc += val[key]
        return acc
    }, 0)
}


console.log(finance(data, 'expanse'));











































































/*===========================================================*/

// Array.prototype.myFilter = function (callback) {
//     let newArray = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             newArray[i] = callback(this[i], i, this)
//         }
        
//     }
//     return newArray
// }


// console.log(arr.myFilter(value => value > 2));





// console.log(arr.filter(val => val > 2));









































