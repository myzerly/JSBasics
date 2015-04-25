var formattedName = HTMLheaderName.replace("%data%", "Nic Edwards"); 
var formattedRole = HTMLheaderRole.replace("%data%" ,"Fun Dude")


$("#header").prepend(formattedRole);
$("#header").append(formattedName);


// $("#main").append(funThoughts);

// var awesomeThoughts = "I am Nic and he is totally awesome"
// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// console.log(awesomeThoughts);
// console.log(funThoughts);
