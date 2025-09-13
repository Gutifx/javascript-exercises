const fibonacci = function(n) {
    n = +n
    if (n < 0) return "OOPS"
    if(!n) return 0
    ans = 1
    prev = 0
    for (let i=1; i<n; i++) {
        [ans, prev] = [ans + prev, ans]
    }
    return ans
};

// Do not edit below this line
module.exports = fibonacci;
