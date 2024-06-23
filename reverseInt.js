const reverseInt = (num) => {
    return parseInt(num.toString().split('').reverse().join(''))
}

console.log(reverseInt(598765542));