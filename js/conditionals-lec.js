"use strict";
<<<<<<< HEAD
// if(some condition){
//     executes if some condition is true
// }

// var isAdmin = true;
//
// if (isAdmin) {
//     console.log("You're an admin")
// }

// var itemPrice = 4.99;
// var moneyInMyWallet = 10.00;
//
// if (moneyInMyWallet > itemPrice) {
//     console.log("You can buy this item")
// } else {
//     console.log("You can not buy this item")
// }
//
// var age = 21;
// var priceOfDrink = 8.00;
//
// if (age >= 21 && moneyInMyWallet >= priceOfDrink) {
//     console.log("You can buy a drink")
// } else {
//     console.log("nope")
// }

// MINI-EXERCISE
// IF / ELSE IF / ELSE
// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
=======

// if(some condition) {
//     executes if some condition is true
// }

var isAdmin = false;

if (isAdmin) {
    console.log("You're an admin")
}

var itemPrice = 4.99;
var moneyInMyWallet = 5.00;

if (moneyInMyWallet >= itemPrice) {
    console.log("You can buy this item");
} else {
    console.log("You can't buy this ya poor")
}

var age = 21;
var priceOfDrink = 8.00;

if (age >= 21 && moneyInMyWallet >= priceOfDrink) {
    console.log("You can buy a drink")
} else {
    console.log("Nope")
}


// IF / ELSE IF / ELSE
// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//
>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
<<<<<<< HEAD
// var age = 14;
// var isInsured = false;
// var hasCar = false;
// var canGetRideShare = false;
// function getToDestination(age, isInsured, hasCar, canGetRideShare) {
//     if (age >= 16 && isInsured && hasCar) {
//         console.log("You can use your own vehicle")
//     } else if (age < 16 || !isInsured || !hasCar) {
//         //let canGetRideShareVar = canGetRideShare();
//         console.log("Function output of canGetRideShare function is: " + canGetRideShare);
//         if (canGetRideShare) {
//             console.log("You can get a rideshare. Call up a rideshare service")
//         } else {
//             console.log("You cannot get a rideshare. Call a friend for a ride")
//         }
//     }
// }
//getToDestination(16, true, true, true);

// getToDestination, part 2
=======
//
//     getToDestination, part 2
>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare
<<<<<<< HEAD
// function canGetRideShare(driversNearby, hasEnoughMoney) {
//     //let driversNearby = false;
//     //let hasEnoughMoney = true;
//     if (driversNearby && hasEnoughMoney) {
//         var returnTrue = true;
//         return returnTrue;
//     } else {
//         var returnFalse = false;
//         return returnFalse;
//     }
// }
// getToDestination(14, true, true, canGetRideShare(true,false));

// var hasCar = false;
// var canGetRideShare = false;
//
// if (driversNearby && hasEnoughMoney && hasCar) {
//     console.log("You can use your own vehicle")
// } else if ((age < 16 || !isInsured || !hasCar) && canGetRideShare) {
//     console.log("Call up a rideshare service")
// } else {
//     console.log("Call a friend for a ride")
// }

//Instructor solution (part 2) - hard codes "canGetRideshare"
// function getToDestination(age, isInsured, hasCar) {
//     if (age > 16 && isInsured && hasCar) {
//         console.log("You can use your own vehicle")
//     } else if (canGetRideshare(false, true)){
//         console.log("You can get a rideshare. Call up a rideshare service")
//     } else {
//         console.log("You cannot get a rideshare. Call a friend for a ride")
//     }
// }
//
// function canGetRideshare(hasDriversNearby, hasEnoughMoney) {
//     if (hasDriversNearby && hasEnoughMoney) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// getToDestination(14, true, true);

//Mini-Exercise 2 (starting at 2:37pm)
// function checkWeather(todaysWeather) {
//     if (todaysWeather === "snowing") {
//         console.log("Please stay inside")
//     } else if (todaysWeather === "raining"){
//         console.log("Grab an umbrella")
//     } else if (todaysWeather === "hailing"){
//         console.log("Cover your car")
//     } else {
//         console.log("Go play in the sun :)")
//     }
// }
//
// checkWeather("bs value");

//Mini-Exercise 3 (starting at 2:43pm)
// function checkWeather(todaysWeather) {
//     todaysWeather = todaysWeather.toLowerCase();
//     switch (todaysWeather) {
//         case "snowing":
//             console.log("Please stay inside");
//             break;
//         case "raining":
//             console.log("Grab an umbrella");
//             break;
//         case "hailing":
//             console.log("Cover your car");
//             break;
//         default:
//             console.log("Go play in the sun :)");
//             break;
//     }
// }
// checkWeather("snowing");
// checkWeather("bs value");
// checkWeather("raining");
// checkWeather("HAILING");
=======


function getToDestination(age, isInsured, hasCar) {
    if (age > 16 && isInsured && hasCar) {
        console.log("You can use your own vehicle");
    } else if (canGetRideshare(true, false)) {
        console.log("You can get a rideshare!");
    } else {
        console.log("You gotta call a friend");
    }
}

function canGetRideshare(hasDriversNearby, hasEnoughMoney) {
    if (hasDriversNearby && hasEnoughMoney) {
        return true;
    } else {
        return false;
    }
    // alternative
    // return !!(hasDriversNearby && hasEnoughMoney);
}

getToDestination(16, false, false);



function checkWeather(todaysWeather) {
    // if (todaysWeather === "snowing") {
    //     console.log("please stay inside")
    // } else if (todaysWeather === "raining") {
    //     console.log("grab an umbrella")
    // } else if (todaysWeather === "hailing") {
    //     console.log("cover your car")
    // } else {
    //     console.log("go play in the sun :)")
    // }
    todaysWeather = todaysWeather.toLowerCase();
    switch (todaysWeather) {
        case "snowing":
            console.log("please stay inside");
            break;
        case "raining":
            console.log("grab an umbrella");
            break;
        case "hailing":
            console.log("cover your car");
            break;
        default:
            console.log("go play in the sun :)");
            break;
    }

}

checkWeather("SNOWING");











>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
