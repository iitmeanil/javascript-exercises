const fibonacci = function() {
let num = Number(arguments[0]);
if ( num <=0) return "OOPS";
if ( num === 1 || num === 2) return 1;
let first = 1;
let second = 1;
let sum = 0;
for (let i = 3; i <= num; i++) {
    sum = first + second; // 2
    first = second;
    second = sum; // 2
    
}

return sum;


};

// Do not edit below this line
module.exports = fibonacci;
