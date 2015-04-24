var formattedName = HTMLheaderName.replace("%data%", "Nic Edwards"); 
var formattedRole = HTMLheaderRole.replace("%data%" ,"Product Manager")


var awesomeThoughts = "I am Nic and he is totally awesome"
var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(awesomeThoughts);
console.log(funThoughts);


$("#main").prepend(formattedName);
$("#main").append(formattedRole);
// $("#main").append(funThoughts);

