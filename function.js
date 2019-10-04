function ask(question, ok, cancel) {

	let reponse = confirm(question);
  
	if (reponse) {
  	
		document.getElementById('result').textContent = ok();
	}
	else {
		document.getElementById('result').textContent = cancel();
	}
}

/*
function showOk() {
	return('Ca va, merci !');
}

function showCancel() {
	return('Bof bof, ça ira mieux demain !');
}

ask('Vous allez bien ?', showOk, showCancel);
*/

/*
function sing() {
	return('La la laaaa');
}

function cry() {
	return('Bouhhhhhh');
}

ask('Vous allez bien ?', sing, cry);
*/

/*
let sayHello = function() {
	
	return('Hello');
}

let sayGoodBye = function() {
	
	return('Good Bye');
}

function saySomething() {

	let reponse = confirm('Voulez vous dire bonjour ?');
  
	if (reponse) {
  	
		return sayHello;
	}
	else {
		return sayGoodBye;
	}
}

let myFunction = saySomething();

document.getElementById('result').textContent = myFunction();
*/