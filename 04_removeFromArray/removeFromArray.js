    const removeFromArray = function() {
    let len = arguments.length;
    let arr = arguments[0];

    for (let i = 1; i<=len-1; i++){
    let check = arguments[i];

    if (arr.includes(check)){
        result = removeElement(arr,check); 
        }
    }
    return arr;
    }


    function removeElement(arr,check){
    let index = arr.indexOf(check);
    arr.splice(index,1);
    if (arr.includes(check)){
        result = removeElement(arr,check); 
    } else {
        return arr;
    }
    }

// Do not edit below this line
module.exports = removeFromArray;
