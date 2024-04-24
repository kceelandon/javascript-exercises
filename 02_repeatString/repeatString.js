const repeatString = function(s, numReps) {
    if (numReps < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < numReps; i++) {
        result += s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
