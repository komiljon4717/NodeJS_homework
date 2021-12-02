
/*================factorize_numbers=================*/

function factorize_numbers(num) {
    let gres = []
    for (let i = 1; i <= num / 2; i++) {
        if (num % 2 === 0) {
            gres.push(i)
        }
        else if (num === 1) {
            gres.push(num)
            return gres
        }
        else if (num % 2 === 1) {     
            gres.push(1, num)
            return gres
        }
    }
    gres.push(num)
    return gres
}
console.log(factorize_numbers(10));