const repeatString = function(str,num) {
let concatStr = "";
for (let i = 0; i < num; i++){
    concatStr = concatStr.concat(str);
}
return concatStr;
};

// Do not edit below this line
module.exports = repeatString;
