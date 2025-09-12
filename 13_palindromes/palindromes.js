const palindromes = function (str) {
    str = str.replaceAll(",", "").replaceAll("!", "").replaceAll(".", "").replaceAll(" ", "").toUpperCase()
    console.log(str)
    rts = [...str].reduce((acc, char) => char + acc, "")
    return str == rts
};

// Do not edit below this line
module.exports = palindromes;
