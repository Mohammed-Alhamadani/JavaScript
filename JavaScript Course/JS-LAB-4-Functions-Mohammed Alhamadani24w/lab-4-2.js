//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

// 1. Create a function that takes 5 parameters.
// 2. This function will return the average of the five numbers it receives (to one decimal place). NB: Don’t worry about validating the input.
// 3. Test your new function by outputting to the console with the values: 5, 10, 15, 20, 25. The result should be 15.0.
// Now, you will use this function again to determine your program average.
// 4. Create five variables (one for each course in this semester) and initialize them with a grade out of 100.
// 5. Using your custom function, create the logic that will send a success popup message if your function returns an overall average of 70 or more.
// 6. Create the logic that will send a “Review required” popup message if the average is below 70. Again, don’t worry about validating the input.
// 7. Does your logic work? Make sure to test it with known values!

// -------------------------------------------------------------------------------------------


// let a=5;
// let b=10;
// let c=15;
// let d=20;
// let e=25;

// function averageAll(a,b,c,d,e) {
//     let average = (a+b+c+d+e)/5;
//     console.log(average.toFixed(1));
// }

// averageAll(a, b, c, d, e);


// ------------------------------------

let course1 = 90;
let course2 = 80;
let course3 = 70;
let course4 = 60;
let course5 = 90;

function averageAll(course1,course2,course3,course4,course5) {
    let average = (course1 + course2 + course3 + course4 + course5) / 5;
    if (average >= 70) {
        alert(`Congrats, You have success and your overall average is ${average}`);
    } else {
        alert("Review required”")
    }
}

averageAll(course1, course2, course3, course4, course5);