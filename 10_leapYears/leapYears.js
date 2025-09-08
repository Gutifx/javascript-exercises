const leapYears = function(year) {
    return year % 4? false : (year % 100 ? true : (year % 400? false : true))
};

// Do not edit below this line
module.exports = leapYears;
