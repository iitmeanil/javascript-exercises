const sumAll = function(x,y) {
let smallNum; 
let largeNum;

// checking for non numbers
if ( typeof x !== "number" || typeof y !== "number") return "ERROR";
if ( x < 0 || y < 0) return "ERROR";

// arranging x and y
if (x > y) {
        smallNum = y;
        largeNum = x;
} else if ( y > x) {
    smallNum = x;
    largeNum = y;
} else return 2*x;

let sum = 0;

for (; smallNum <= largeNum; smallNum++) {
sum += smallNum;    
}
return sum;

};

// Do not edit below this line
module.exports = sumAll;
