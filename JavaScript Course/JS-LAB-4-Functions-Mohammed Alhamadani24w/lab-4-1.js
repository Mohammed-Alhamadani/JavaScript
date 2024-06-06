//#### LAB 4 - FUNCTIONS ####
//PART 1:  PROGRAM ALERT FUNCTION


//################## CREATE YOUR FUNCTION




//################## TEST YOUR FUNCTION



// 1. Create a coursePopup function that takes 2 parameters: courseCode, and courseName.
// 2. This function will send a popup that says: “The course code COURSECODE is COURSENAME.”, with the COURSECODE and COURSENAME being the variables passed in.
// 3. Test your new function three times with HTTP5121 (Web Design), then HTTP5122 (Front-End Web Development 1), then IXD5106 (Interaction Design).




// let courseCode = "HTTP5121";
// let courseName = "Web Design";


// let courseCode = "HTTP5122";
// let courseName = "Front-End Web Development 1";


let courseCode = "IXD5106";
let courseName = "Interaction Design";

function coursePopup(courseCode,courseName) {
    alert(`The course code ${courseCode} is ${courseName}`);
}

coursePopup(courseCode,courseName);