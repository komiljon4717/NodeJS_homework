
/*==================Promise============*/

let pr1 = new Promise((res, rej) =>{
    res('Salom bolalar')
})

// pr1.then((value) =>{
//     console.log(value);
// })

let pr2 = new Promise((resolve, rejact) => {
    resolve('NodeJS')
})

// pr2.then((val) => {
//     console.log(val);
// })

let pr3 = new Promise((rost, yolgon) => {
    rost('Bu rost')
})

// pr3.then((value) =>{
//     console.log(value);
// })

let pr4 = new Promise((togri, notogri) => {
    togri('Togri xabar')
})

// pr4.then((qiymat) => {
//     console.log(qiymat);
// })

let pr5 = new Promise((res, rej) => {
    res('ok')
})

// pr5.then((val) => {
//     console.log(val);
// })

/*==========================asycn========================*/

async function pr6() {
    return 'SAlom churvaqalar'
}

// pr6().then((val)=> {
//     console.log(val);
// })

async function pr7() {
    return 'Salom NodeJS 146'
}

// pr7().then((val) => {
//     console.log(val);
// })

async function pr8() {
    return 'Foundation 14'
}

// pr8().then((value) =>{
//     console.log(value);
// })

async function pr9() {
    return 'Kv bardak'
}

// pr9().then((val) => {
//     console.log(val);
// })


async function pr10() {
    return 'Hello John'
}

// pr10().then((val) => {
//     console.log(val);
// })


/*=========================await=====================*/

async function pr11() {
    return 'This is await function'
}

async function pr011() {
    let a = await pr11()
    console.log(a);
}

// pr011()





