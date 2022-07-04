const getTheTitles = function() {

    let len = arguments[0].length;
    let oldArr = arguments[0];
    let newArr = [];

    for (let i = 0; i< len; i++) {
        newArr.push( oldArr[i]["title"]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
