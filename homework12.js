"use srict"


/*============symmetrical===================*/

// function symmetrical(num) {
//     let a = num.toString()
//     let len = Math.floor(a.length / 2)
//     let first = a.slice(0,len)
//     let second = a.slice(len)

//     console.log(first === second);
    
// }


// symmetrical(1121)



/*============seconds===================*/

// function how_many_seconds(arg) {
//     let all_sec = arg * 60 * 60
//     console.log(`${arg} soat, ${all_sec} soniyaga teng`);
// }


// how_many_seconds(2)


/*============find the largest Ar===================*/

// function find_sum(...args) {
//     let max = []
//     for (let i = 0; i < args.length; i++) {
        
//         max.push(Math.max(...args[i]))
        
//     }
//     console.log(max)
// }

// let arr1 = [1, 3, 6, 7]
// let arr2 = [14, 25, 65, 70]
// let arr3 = [100, 8, 900, 500]

// find_sum(arr1, arr2, arr3)


/*============todo list===================*/

let user_arr = []
let todo = []
let id_count = 1

function create_user(username, password) {
    let obj = {}
    if (username.length >= 8 && username.length < 32) {
        obj.username = username
    }
    else{
        console.log("Error login 8 ta belgidan ko'p va 32 ta belgidan kam bo'lishi kerak");
    }

    if (password.length > 8 && password.length < 32 ) {
        obj.password = password
    }
    else{
        console.log("Error dang");
    }

    obj = {
        user_id: id_count,
        username,
        password,
    }
    id_count++
    user_arr.push(obj)
}



create_user("johnDoe007", "johnDoe1012")
create_user("johnUwik007", "johnUwik1012")
create_user("johnASS007", "johnASS1012")


console.log(user_arr);
todos("johnUwik007", "johnUwik1012", "salom churvaqalar")

let todo_id = 1
function todos(username, password, todo_txt) {
    for (let i = 0; i < user_arr.length; i++) {
        if (user_arr[i].username === username && user_arr[i].password === password) {
            let obj7 = {
                // todo_id,
                todo_txt,
                user_id: user_arr[i].user_id
            }
            // todo_id++

            todo.push(obj7)
        }
        
    }
    return todo
}

console.log(todo);











