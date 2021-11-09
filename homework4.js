// 1-mashq

function showAdress(obj) {
    for (const key in obj) {
       console.log(key, obj[key]);
    }
    
}


let adress = {
    street : 'a',
    city : 'b',
    zipCode : 'c'
}

showAdress(adress)