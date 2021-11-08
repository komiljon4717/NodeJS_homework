// Homework

function withOut(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a || arr[i] === b) {
            arr.splice(i, 1)
        }
        
    }
    return arr
}

let data = [1, 2, 3, 1, 2]
console.log(withOut(data, 1, 2));