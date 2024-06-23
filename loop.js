const maxChar = (str) => {
    let obj = {}

    for(let char of str)
        (!obj[char])?obj[char] = 1 : obj[char]++
    let maxNum = 0;
    let maximumCharater = '';      

    for(char in obj) {
        if(obj[char] >= maxNum)
            {
                maxNum = obj[char]
                maximumCharater = char
            }
    }
    console.log(`${maximumCharater} appears ${maxNum} times.`);
}

maxChar('#%he3#331l##o')
