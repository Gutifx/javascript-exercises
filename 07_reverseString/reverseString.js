const reverseString = function(str) {
    ans ="";
    for (let i = str.length; i>0; i--) ans = ans + str[i - 1]
    return ans
};

// Do not edit below this line
module.exports = reverseString;
