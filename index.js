// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance <= 42){
        return 42 - distance;
    }
    else {
        return distance - 42;
    }
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start >= destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264
    }
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const dTIF = distanceTravelledInFeet(start, destination)
    if (dTIF <= 400){
        return 0
    }
    else if (dTIF > 400 && dTIF <= 2000){
        return (dTIF - 400) * .02
    }
    else if(dTIF > 2000 && dTIF <= 2500) {
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
    
  }