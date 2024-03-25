// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers () {
  return drivers.slice(0,2);
 }
 

 function returnLastTwoDrivers () {
    return drivers.slice(2,4);
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
   
 function selectDifferentDrivers([], selectingDrivers) {
   
    return selectingDrivers;
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);



 function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


