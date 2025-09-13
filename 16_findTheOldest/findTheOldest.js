const findTheOldest = function(arr) {
    return arr.sort((a, b) => (b.yearOfDeath?? new Date().getFullYear()) - b.yearOfBirth - (a.yearOfDeath?? new Date().getFullYear()) + a.yearOfBirth ).at(0)
};

// Do not edit below this line
module.exports = findTheOldest;
