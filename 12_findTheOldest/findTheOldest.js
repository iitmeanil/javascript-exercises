const findTheOldest = function(people) {

let len = people.length;
let ageList = [];

for ( let i = 0; i<len; i++ ) {
    if (people[i]['yearOfDeath'] > 0) {
        ageList.push( people[i]['yearOfDeath'] - people[i]['yearOfBirth']);
    } else {
        ageList.push( 2022 - people[i]['yearOfBirth']);
    }
}

let oldestAge = Math.max.apply(null, ageList);
let index = ageList.indexOf(oldestAge);
return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;