
var notRight = true;
while(notRight){
	response = prompt("Are we there yet?");
	if((response == "yeah") || (response == "yes")){
		notRight = false;
	} 
}

alert("Yay, we finally made it");