const removeFromArray = function(arr, ...extras) {
    let result = [];
    arr.forEach((num) => {
        if (!extras.includes(num)) {
            result.push(num);
        }
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
