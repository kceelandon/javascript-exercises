const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    let startRange = start;
    let endRange = end;
    if (start > end) {
        startRange = end;
        endRange = start;
    }
    let sum = 0;
    for (let i = startRange; i <= endRange; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
