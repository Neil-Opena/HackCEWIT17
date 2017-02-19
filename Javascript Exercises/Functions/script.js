function isEven(num){
	if(num % 2 == 0){
		return true;
	} return false;
}


function factorial(num){
	var ans = 1;
	if(ans === 0){
		return 1;
	}
	while(num >= 1){
		ans *= num;
		num--;
	}
	return ans;
}

function kebabToSnake(word){
	var counter = 0;
	var sentence;
	for(var i =  0; i<word.length;i++){
		if(word.charAt(i) == '-'){
			counter++;
		}
	}

	for(var i = 0; i<counter;i++){
		word = word.substring(0,word.indexOf('-')) + "_" + word.substring(word.indexOf('-') + 1);
	}
	return word;
}