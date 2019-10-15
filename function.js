/*
function ask(question, ok, cancel) {

	let reponse = confirm(question);
  
	if (reponse) {
  	
		document.getElementById('result').textContent = ok();
	}
	else {
		document.getElementById('result').textContent = cancel();
	}
}
*/

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

/*
document.getElementById('result').textContent = saySomething()();
*/

/*
let eleve1 = {
	firstName : 'Luc',
	lastName : 'Dupont',
	age : 30,
	sayHello : function() {
		alert('Hello je suis ' + this.firstName);
	}
};

eleve1.sayHello();

let eleve2 = {
	firstName : 'Louise',
	lastName : 'Durand',
	age : 40,
	direBonjour : function() {
		alert('Bonjour je suis ' + this.firstName);
	}
};

eleve2.direBonjour();

eleve2.firstName = 'Marie';

eleve2.direBonjour();
*/

/*
for (let key in eleve1) {

	alert(key + ' : ' + eleve1[key]);
}
*/

/*
let result = 'Les élèves sont : ' + eleve1.firstName + ' ' + eleve1.lastName
									+ ' et ' 
									+ eleve2.firstName + ' ' + eleve2.lastName;

document.getElementById('result').textContent = result;

eleve1.hobbys = ['Dessin', 'BD'];

eleve2.hobbys = ['Chanson', 'Athlétisme', 'Séries TV'];

alert(eleve2.hobbys[1]);

eleve2.firstName = 'Marie';

alert(eleve2.firstName);
*/

/*
function presenterEleve(eleve) {

	alert(eleve.firstName + ' ' + eleve.lastName);
}

function renommerEleve(eleve, newLastName) {

	eleve.lastName = newLastName;
}
*/

function Eleve(prenom, nom, age) {

	this.firstName = prenom;

	this.lastName = nom;

	this.age = age;
}

let eleve1 = new Eleve('Remy', 'Girodon', 41);

let eleve2 = new Eleve('Xavier', 'Durand', 61);

let eleve3 = new Eleve('Kathy', 'Dupont', 34);

alert(eleve1.firstName);

alert(eleve2.lastName);

alert(eleve3.age);

/*
presenterEleve(eleve1);

presenterEleve(eleve2);

renommerEleve(eleve1, 'Dumoulin');

presenterEleve(eleve1);

let eleve3 = creerEleve('Rémy', 'Girodon', 41);

presenterEleve(eleve3);
*/

/*
let user1 = {
	firstName : "Sam"
};

let user2 = {
	firstName : "Bob"
};

function sayHello() {

	alert(this.firstName);
}

user1.direBonjour = sayHello;

user2.direBonjour = sayHello;

user1.direBonjour();

user2.direBonjour();

sayHello();
*/