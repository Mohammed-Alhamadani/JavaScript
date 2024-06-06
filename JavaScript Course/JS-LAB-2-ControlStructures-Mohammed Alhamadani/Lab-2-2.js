//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
// password input
var userName = "dart";
var password = "vader";


var userNameInput=window.prompt("Enter you User Name Please");

console.log("Welcome Back"+" "+userNameInput);



passwordInput=window.prompt("Please Enter Your Password");

console.log(passwordInput);


if (userNameInput === userName && passwordInput === password) {

	window.alert("Welcome Back" + " " + userName);
	console.log("Login successful");
} else { (window.alert("Invalid username/password, Login Fail.")) }





//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE

//5. CREATE POPUP BOX FOR PASSWORD

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE