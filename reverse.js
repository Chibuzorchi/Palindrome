const reverseString = (str) => {
    const arrStr = str.split('').reverse().join('')
    return arrStr
}

console.log(reverseString('future is brighter!!22'));