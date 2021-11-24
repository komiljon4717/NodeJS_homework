/*====================sort numbers==================*/


// function sort(num) {
//     let safe = ""
//     let str = num.toString().split('')
//     for (let i = 0; i < str.length; i++) {
//         for (let k = 0; k < str.length; k++) {
//             if (str[i] > str[k]) {
//                 safe = str[i]
//                 str[i] = str[k]
//                 str[k] = safe
//             }
//         }
//     }
//     str = str.join("")
//     console.log(str);
// }




// sort(73065)


/*====================mini najot ta'lim==================*/
let user_id = 1
let type_id = 1
let class_id = 1
let class_type = 1
let users = []
let classes = []
let types = []


function create_type(type_name){
    type_name = type_name.toLowerCase()
    type_obj = {
        type_id,
        type_name
    }
    types.push(type_obj)
    type_id++
}


function create_class(class_name, class_time){
    class_name = class_name.toLowerCase()
    class_obj = {
        class_id,
        class_name,
        class_time,
        class_type
    }
    class_id++
    class_type++
    classes.push(class_obj)
}
    
function create_user(firstname, lastname, phone_number, time){
    user_obj = {
        user_id,
        firstname,
        lastname,
        phone_number,
        time,
        class_type
    }
    user_id++
    users.push(user_obj)
}

function type_filter(value) {
    let arr = []
    for (let i = 0; i < classes.length; i++) {
        for (const k in classes[i]) {
            if (classes[i][k] === value.toLowerCase()) {
                // console.log(classes[i][k]);
                arr.push(classes[i])
            }
        }
    }
    console.log(arr);
}
function sort_class(params) {
    
}







create_type("dasturlash")
create_type("Grafik dizayn")
create_type("moushn grafika")

// console.log(types);

create_class("NodeJS", "10.07.2021")
create_class("NodeJS", "10.08.2021")
create_class("NodeJS", "10.09.2021")
create_class("dotNET", "15.05.2021")
create_class("dotNET", "14.06.2021")
create_class("Flutter", "29.05.2021")

// console.log(classes);

create_user("ali", "valiyev", +998905465, "24.11.2021")
create_user("G'ani", "G'ishmatov", +998965165, "24.11.2021")
create_user("Bunyod", "Abdusalohov", +9989054686, "13.06.2021")

// console.log(users);

type_filter("NodeJs");















