
function factor_chain(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i; k < arr.length; k++) {
            if (arr[k] % arr[i] === 0) {
                continue;
            }
            else return false
        }
    }
    return true
}

console.log(factor_chain([1, 1, 1, 1, 1, 1]));