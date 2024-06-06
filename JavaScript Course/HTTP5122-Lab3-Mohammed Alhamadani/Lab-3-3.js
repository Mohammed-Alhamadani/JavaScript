//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========




// Create an array to hold the user-submitted prices of the shopping cart items.

var cart = [];

// declaration of user Input

var userInput;

// declaration of total variable
var sum=0;

// As long as the shipping threshold hasn’t been met, a popup box will ask the user for the dollar value of each new item.

	while(sum < 35) {

		userInput = window.prompt("Please Enter The Value Of The Item");

// Each item value input will be converted to a number with parseInt() and added to the running total variable, and inserted into the shopping cart array.

		userInput = parseInt(userInput);
		sum += userInput;
		cart.push(userInput);
	}
// Once the $35 minimum has been met, a popup tells the user, “Your shipping for this order will be free!”

alert("Your shipping for this order will be free!");
	
// Next, a string message appears in the console: “Item prices: “ along with the list of items separated by | (the ‘pipe’).

console.log("Item prices: " + cart.join(" | "));
	
// Add the total value of the purchases to the popup message.

alert("The total value of the purchases " + sum + "$");



