/*======================uniquesort======================*/
function uniqueSort(arr) {
    arr = [...new Set(arr)].sort()
    return arr
}

console.log(uniqueSort([1, 2, 3, 2, 1, 4, 5]));