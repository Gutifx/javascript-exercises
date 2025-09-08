const removeFromArray = function(arr, ...args) {

    for (const arg of args) {
        let ind
        while ((ind = arr.findIndex(x => x === arg)) != -1) arr.splice(ind, 1)
    }
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
