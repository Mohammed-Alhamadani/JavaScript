//LAB 3 - ARRAYS & LOOPS - PART 2



// Create an array named ourTeam that holds the first names of the people in your study group (or fake team of five).

var ourTeam = ['mohammed', 'mike', 'andi', 'mark', 'saif'];

// Output the array to the console.

console.log(ourTeam);

// Use JavaScript to remove the last member of the team.

ourTeam.pop();

// Output the array to the console.

console.log(ourTeam);

// Use JavaScript to add me (“Sean”) to the front of the array.

ourTeam.unshift("sean");

// Output the array to the console.
console.log(ourTeam);

// Use JavaScript to organize the array alphabetically.

ourTeam.sort();

// Output the array to the console.

console.log(ourTeam);

// A message on the console should say, “We have NUMBER people in our group.”, where NUMBER is a dynamic number that is the number of items in the ourTeam array.

console.log("We have " + ourTeam.length + " people in our group.");

// Next, the console will display the names of the group members with each name on its own line. Beside each name should be " is # NUM." with the person's number for NUM. Remember: we want ‘1’ and not ‘0’ for the first person.


for (var i = 0; i < ourTeam.length; i++){
    console.log(ourTeam[i] + " is number " +(i+ 1));
}