const caesar = function(str,shift) {
shift = shift%26;
let newStr = [];
let len = str.length;
let a = "a".charCodeAt();
let z = "z".charCodeAt();
let A = "A".charCodeAt();
let Z = "Z".charCodeAt();
let newChar = 0;
let char = 0;

for (let i = 0; i< len; i++){
    char = str.charCodeAt(i);
    if ( char >= a && char <= z){
        newChar = str.charCodeAt(i) + shift;
        if ( newChar < a) {
            newChar = z - (a-newChar -1);
        } else if ( newChar > z) {
            newChar = a + (newChar-z-1);
        }
    } else if ( char >= A && char <= Z){
        newChar = str.charCodeAt(i) + shift;
        if ( newChar < A) {
            newChar = Z - (A-newChar -1);
        } else if ( newChar > Z) {
            newChar = A + (newChar-Z-1);
        }
    } else {
        newChar = str.charCodeAt(i);
    }
    newStr.push(String.fromCharCode(newChar));
}

return newStr.join("");

};

// use text.charCodeAt(0) to get the charcode and then we can shift it. charCodeAt()
// we need to differenciate Caps vs non caps, so will have to work with the two lists and rebase the A/a to 0, so that we can get the loop going. 

// Do not edit below this line
module.exports = caesar;
