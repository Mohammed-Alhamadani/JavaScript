//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========



//==== LOGIC =============
var emailInput;
input = window.confirm("would you like to join your mailing list?");

if (input) {
    emailInput = window.prompt("me@example.com");
    if (emailInput) {
        
        alert("Thank you, our next newsletter will be sent to" + " " + emailInput)
    } else if (emailInput === "") {
        alert("Thank you, but your email was not valid.")
    } else {
        alert("Sorry to see you canceling, we will not bother you again.");
        
}
}
    else {
    window.alert("Thank you, we will not bother you again.");
}

