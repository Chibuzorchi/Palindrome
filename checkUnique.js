// const isUnique = (str) => {
//     const obj = {};
//     for (let i of str)
//         (!obj[i])?obj[i] =1:obj[i]++
//     for (let i in obj)
//         {
//             if (obj[i] > 1) 
//                 return false
//         }

//         return true
// }

function checkUnique(str) {
    let set = new Set(str);
    if (set.size === str.length) return true;
    return false;
  }

console.log(checkUnique('blantant'));