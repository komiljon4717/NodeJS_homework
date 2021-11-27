
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



async function pr12() {
    return 'Chelsea is champion'
}

async function pr012() {
    let a = await pr12()
    console.log(a);
}

// pr012()

async function pr13() {
    return 'Lalula where are you?'
}

async function pr013() {
    let a = await pr13()
    console.log(a);
}

// pr013()

async function pr14() {
    return 'Messi is best player'
}

async function pr014() {
    let a = await pr14()
    console.log(a);
}

// pr014()

async function pr15() {
    return "Najot ta'lim"
}

async function pr015() {
    let a = await pr15()
    console.log(a);
}

// pr015()


/*=====================aralash=======================*/

async function pr16() {
    return "Hello bachalar"
}

// pr16().then((val) => {
//     console.log(val);
// })

async function pr17() {
    return 'NodeJS '
}

// pr17().then((qiy) => {
//     console.log(qiy);
// })

async function pr18() {
    return 'Javascript'
}

// pr18().then((val) => {
//     console.log(val);
// })


async function pr19() {
    return 'Flutter'
}
// pr19().then((val) => {
//     console.log(val);
// })


async function pr20() {
    return "O'zMU"
}

pr20().then((val) => {
    console.log(val);
})

