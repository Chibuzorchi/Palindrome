function palindrome(str) {
    const alphNum = str.toLowerCase().match(/[a-z0-9]/g);

    return alphNum.join('') === alphNum.reverse().join('')

}

const outcome = palindrome('eye')

console.log(outcome);