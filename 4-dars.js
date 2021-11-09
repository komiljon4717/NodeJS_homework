

function creatUser(firstName, lastName, phone) {
    return{
        firstName,
        lastName,
        phone,
        
    }
}


function Random(firstName, lastName, phone) {
    const random = Math.floor(Math.random() * firstName.length);
    console.log(random, firstName[random]);
    
}



// console.log(creatUser(firstName, lastName, phone));

console.log(Random(firstName, lastName, phone));



const firstName = ['Ali', 'Vali', 'Eshmat', "G'ishmat", 'Toshmat', 'Abduvali']
const lastName = ['Uzbekov', 'Uzbekov', 'Uzbekov', 'Uzbekov', 'Uzbekov', 'Uzbekov']
const phone = ['1234567', '7654321', '3214567', '7456321', '1452367', '7456321']
