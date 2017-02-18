var secretNumber = 21;
var guess = prompt("Guess a number");
guess = Number(guess);
if(guess === secretNumber){
	alert("You got it right!");
} else if(guess > secretNumber){
	alert("Too high, try again!");
} else{
	alert("Too low, try again!");
}

