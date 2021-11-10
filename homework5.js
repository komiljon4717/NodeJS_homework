
// HOMEWORK

let users = []
let id = 0

function addUser(name, email, password,  arr = users) {
    date = new Date
    id++
    obj = {
        user_id: id,
        name,
        email,
        password,
        date
    }
    arr.push(obj)
    
}

function searchUser(char,  data = users) {
    if (typeof char === 'number') {
        for (let i = 0; i < data.length; i++) {
            arr = Object.values(data[i])
            for (let l = 0; l < arr.length; l++) {
                if (arr[l] === char) {
                    console.log(data[i]);
                } 
            }
        }
    }
    else if (typeof char === 'string') {
        for (let i = 0; i < data.length; i++) {
            arr = Object.values(data[i])
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] === char) {
                    console.log(data[i]);
                }
            }
        }
    }
}





addUser('John Doe', 'John20002gmail.com', '123456')

addUser('Lily', 'lily666@gmail.com', '654321')

// console.log(users);

searchUser('John Doe')
