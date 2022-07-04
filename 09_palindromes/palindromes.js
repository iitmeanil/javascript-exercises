const palindromes = function () {
let str = clearStr(arguments[0]);
return check(str);
};

function clearStr (str) {
    let newStr = str.replaceAll(".","");
    newStr = newStr.replaceAll(",","");
    newStr = newStr.replaceAll(" ","");
    newStr = newStr.replaceAll("!","");
    console.log()
    return newStr.toLowerCase();
}

function check(str) {
    let len = str.length;
    console.log(str);
    for (let i = 0; i<= len/2 ;  i++) {
        if (str[i] !== str[len-1-i]) return false;
    }
    return true;
}

// function cleantext() returns array - next we convert to a array and  we need to remove all the spaces, punctuation or word breaks
// cuntion check() returns true or false -  compare the ith element with len - 1 - i th element in a loop till i is less than equal to len/2

// Do not edit below this line
module.exports = palindromes;
