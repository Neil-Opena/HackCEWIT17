function printReverse(array){
	for(var i =0;i<array.length;i++){
		console.log(array[array.length - 1 - i]);
	}
}

function isUniform(array){
	var first = array[0];
	for(var i = 1;i<array.length;i++){
		if(first === array[i]){
			first = array[i];
		} else{
			return false;
		}
	}

	return true;
}

function sumArray(array){
	var sum = 0;
	for(var i = 0;i<array.length;i++){
		sum += array[i];
	}
	return sum;
}

function max(array){
	var largest = 0;
	for(var i = 0;i<array.length;i++){
		if(array[i] > largest){
			largest = array[i];
		}
	}
	return largest;
}



//own forEach
var nums = [45,65,77,34];
nums.forEach(function(num) {
	console.log(num)
});
