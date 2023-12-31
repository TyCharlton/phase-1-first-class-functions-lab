// // Code your solution in this file!
// const returnFirstTwoDrivers = function() {
//     const driverArr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     return driverArr.slice(0, 2);
// }

// const firstTwoDrivers = returnFirstTwoDrivers();
// console.log(firstTwoDrivers);  

// //

// const returnLastTwoDrivers = function() {
//     const driverArr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     return driverArr.slice(2);
// }

// const lastTwoDrivers = returnLastTwoDrivers();
// console.log(lastTwoDrivers);  

// //

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// //

// const createFareMultiplier = function(multiplier) {
//     return function(fare) {
//         return fare * multiplier;
//     }
// }

// //

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// const selectingDifferentDrivers = function(drivers, driverFunction){
//     return driverFunction(drivers);
// }

// // Testing
// const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// console.log(selectingDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
// console.log(selectingDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers));  // ['Amari', 'Mo']

// returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

// returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
}

// Example usage
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(driversArray)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(driversArray));  // ['Amari', 'Mo']
console.log(selectingDrivers[0](driversArray));    // ['Antonia', 'Nuru']
console.log(selectingDrivers[1](driversArray));    // ['Amari', 'Mo']
console.log(fareDoubler(10));                      // 20
console.log(fareTripler(10));                      // 30
console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));  // ['Amari', 'Mo']
