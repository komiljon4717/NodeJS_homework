/*=========================how much is true=====================*/
// function count_true(params) {
//     let count = 0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] === true) {
//             count++
//         }
        
//     }
//     console.log(count);
// }

// count_true([])

/*======================================================*/

function obj_to_array(obj) {
    let result = Object.keys(obj).map((key) => [key, obj[key]])
    console.log(result);
}

obj_to_array({"a": 1, "b": 2, "c": 3})
















