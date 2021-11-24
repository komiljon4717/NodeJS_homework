function sort(num) {
    let safe = ""
    let str = num.toString().split('')
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < str.length; k++) {
            if (str[i] > str[k]) {
                safe = str[i]
                str[i] = str[k]
                str[k] = safe
            }
        }
    }
    str = str.join("")
    console.log(str);
}




sort(73065)











