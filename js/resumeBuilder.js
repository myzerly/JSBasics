var formattedName = HTMLheaderName.replace("%data%", "Nic Edwards"); 
var formattedRole = HTMLheaderRole.replace("%data%" ,"Fun Dude");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Changing a specific character in a string  
//then slicing out a specific number of characters in that string
var s = "audacity"

var change = function(s) {
	s = s[1].toUpperCase() + s.slice(2);

	return s;
}

console.log(change(s));

//Changing values in an array by adding 1 to each
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));






// $("#main").append(funThoughts);

// var awesomeThoughts = "I am Nic and he is totally awesome"
// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// console.log(awesomeThoughts);
// console.log(funThoughts);
