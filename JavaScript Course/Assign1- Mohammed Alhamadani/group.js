
// declaration of the array

var teamArray = [
    {
        teamNumber: 1,
        firstName: 'mohammed',
        lastName:'alhamadani'
    },
    {
        teamNumber: 2,
        firstName: 'john',
        lastName:'marlok'
    } ,
    {
        teamNumber: 3,
        firstName: 'jayson',
        lastName:'bob'
    },
    {
        teamNumber: 4,
        firstName: 'saif',
        lastName:'rodi'
    } ,
    {
        teamNumber: 5,
        firstName: 'mario',
        lastName:'kumeez'
    } ,
    {
        teamNumber: 6,
        firstName: 'dani',
        lastName:'sean'
    }
]

// logic code

// here declaration and doing the prompt that the user will use it for input the team number

let userInput = window.prompt("which team number you are?");
// here to make the user input just numeral
userInput = parseInt(userInput);


// this the value for the flag by default
let isValidTeamNumber = false;

// doing the for loop to read the array index
for (var i = 0; i < teamArray.length; i++) {

    // doing the new array to read inside every index(objects)
    let newArray = teamArray[i];

    if (userInput == newArray.teamNumber) {
        isValidTeamNumber = true;
        let newUserInput = window.prompt("Please enter your name: ");
        if (newUserInput == newArray.firstName) {
            alert("Welcome "+ newArray.firstName+" "+newArray.lastName);
            break;
        } else {
            isValidTeamNumber = false;
        }

    } else {
        isValidTeamNumber = false;
    }
}
// I have use this to fix the problem of the else the last one that continue iterating because of the for loop so i have used this flag.
if (isValidTeamNumber == false) {
    alert("Access denied!");
}


