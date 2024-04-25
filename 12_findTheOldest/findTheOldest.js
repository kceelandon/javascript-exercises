const findTheOldest = function(people) {
    let indexOfOldest = -1;
    let oldestAge = -1;
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let diff = 0;
        if (person.yearOfDeath === undefined) {
            diff = 2024 - person.yearOfBirth;
        } else {
            diff = person.yearOfDeath - person.yearOfBirth;
        }
        if (diff > oldestAge) {
            oldestAge = diff;
            indexOfOldest = i;
        }
        console.log(indexOfOldest);
    }
    return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
