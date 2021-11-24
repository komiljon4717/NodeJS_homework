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
let type_id = 1
let class_id = 1
let class_type = 1
let classes = []
let types = []
class Najot{
    constructor(type_name, class_name, class_time){
        this.type_name = type_name
        this.class_name = class_name
        this.class_time = class_time


    }
    create_type(){
        type_obj = {
            type_id,
            type_name: this.type_name
        }
        types.push(type_obj)
        type_id++
    }


    






}






