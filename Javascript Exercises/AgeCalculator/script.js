var ageYears = prompt("How old are you?");
var ageDays = ageYears * 365.25;
alert("You have been on this earth for " + ageDays + " days...");
if(ageYears < 0){
	console.log("ERROR");
} else if(ageYears == 21){
	console.log("happy 21st birthday!!");
} 

if(ageYears % 2 ==1){
	console.log("your age is odd");
}

if(Math.sqrt(ageYears) % 1 == 0){
	console.log("your age is a perfect square");
}