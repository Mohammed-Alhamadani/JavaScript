//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

// 1. Create a checkTemp function that takes 1 parameter: currentTemp.
// 2. If the current temperature is above 30, return false, otherwise, return true.

// a. What the function does

// The function checking the current temperature and according to it giving true or falls so if the temperature between the 30 & -10 will give true value, but if its above 30 and above -10 will give false value.
// b. What parameters it expects (variable name and data type)

// currentTemp is the parameter and data type is number.
// c. What value(s) it returns (data type)
// its return Boolean values

let currentTemp;

function checkTemp(currentTemp) {

    if (currentTemp > 30 && currentTemp < -10) {
        return false;
    } else if (currentTemp <= 30 && currentTemp >= -10) {
        return true;
    }

}

checkTemp(currentTemp);

// ----------------------------------------------------------

// 3. Create a popup that asks for the current temperature.
// 4. Take the value from the user and pass it as a parameter into your checkTemp function.
// 5. If the value comes back false, send a popup that says, “Yikes! Too hot for dog walking!”
// 6. If the value comes back true, send a popup that says, “You’re good, have a nice walk!”

currentTemp = window.prompt("Please enter the current temperature");


if (checkTemp(currentTemp)) {
    alert("You are good, have a nice walk!");
} else {
    alert("Yikes! Too hot/Too cold for dog walking!");
}