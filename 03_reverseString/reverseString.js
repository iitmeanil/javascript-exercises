const reverseString = function(str) {
let len = str.length;
let reversedStr = "";

for (let i = len -1; i>= 0; i--){
    reversedStr = reversedStr.concat(str[i]);
}
 return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
