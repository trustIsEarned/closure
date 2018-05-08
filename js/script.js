// function say667() {
//   // Local variable that ends up within closure
//   var num = 42;
//   var say = function() { console.log(num); }
//   num++;
//   return say;
// }
// var sayNumber = say667();
// sayNumber(); // logs 43



// var gLogNumber, gIncreaseNumber, gSetNumber;
// function setupSomeGlobals() {
//   // Local variable that ends up within closure
//   var num = 42;
//   // Store some references to functions as global variables
//   gLogNumber = function() { console.log(num); }
//   gIncreaseNumber = function() { num++; }
//   gSetNumber = function(x) { num = x; }
// }

// setupSomeGlobals();
// gIncreaseNumber();
// gLogNumber(); // 43
// gSetNumber(5);
// gLogNumber(); // 5

// var oldLog = gLogNumber;

// setupSomeGlobals();
// gLogNumber(); // 42

// oldLog() // 5

// let id = (function(){
	

// 	function increase(){
// 		let idFirst = 1;
// 		idFirst = idFirst+1;
// 		console.log(idFirst);

// 	}

// 	return{
// 		increase: increase
// 	}

// })();


// let data = (function(){

// 	let Person = function(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	let key ="makeMoney";

// 	function makePerson(name, age){
// 		let person = new Person(name, age);
// 		return person;
// 	}	

// 	return{
// 		makePerson: makePerson,
// 		password: key
// 	}

// })();




let data = (function(){
	let name = "allan";
	let age = 35;

	function changeAge(newAge){
		age = newAge;
	}

	function display(){
		console.log(name + " "+age);
	}
	return {
		changeAge:changeAge,
		display: display
	}



})();

let app = (function(data){
	function load(){
		data.changeAge(40);
		data.display();
	}

	return{
		load: load
	}


})(data);


app.load();
















