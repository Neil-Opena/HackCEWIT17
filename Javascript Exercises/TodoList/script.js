var notQuit = true;
var toDo = [];
while(notQuit){
	var response = prompt("What would you like to do?");
	if(response == "new"){
		var new1 = prompt("Enter a new todo");
		toDo.push(new1);
		console.log(new1 + " added to list");
	}else if(response == "list"){
		console.log("=======================");
		for(var i = 0; i<toDo.length;i++){
			console.log(i+": " + toDo[i]);
		}
	}else if(response == "delete"){
		var index = prompt("Enter index of todo to delete");
		toDo.splice(index,1);
		console.log("Todo removed");
	}else if(response == "quit"){
		notQuit = false;
	}
}