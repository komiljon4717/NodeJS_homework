
/*===========================================================*/

// function burglar_series(obj, key, val) {
//     obj[key] = val
//     return obj
// }

// console.log(burglar_series({piano: 500,"Brutus": 400}, "Caligula", 440));


/*====================================================*/

function expensive_orders(obj, num) {
    let newObj = {}
    for (const key in obj) {
        if (obj[key] >= num) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(expensive_orders({"a": 500, "b": 1200, "c": 1500}, 1000));



















