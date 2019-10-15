/*
let a = 'bla bla';

let b = 40;

let c = 0;

let d = '';

if (a && b && c && d) {

    document.getElementById('result').textContent = 'a et b et c et d sont tous vrais !';
}
else {
    document.getElementById('result').textContent = 'a, b, c, et d ne sont pas tous vrais !';
}
*/

/*
let result = a && b && c && d;

document.getElementById('result').textContent = result;
*/

/*
let result = (a && b) || (c && d);

document.getElementById('result').textContent = result;
*/

/*
if (a || b || c || d) {

    document.getElementById('result').textContent = 'a ou b ou c ou d est vrai !';
}
else {
    document.getElementById('result').textContent = 'a et b et c et d sont tous faux !';
}
*/

/*
let reponse = prompt('Entrez un nombre entre 1 et 3');

switch(reponse) {
    case '1' : 
        document.getElementById('result').textContent = 'Vous avez rentré Un';
        break;
    
    case '2' : 
        document.getElementById('result').textContent = 'Vous avez rentré Deux';
        break;

    case '3' : 
        document.getElementById('result').textContent = 'Vous avez rentré Trois';
        break;

    default:
        document.getElementById('result').textContent = 'Vous n\'avez pas compris la question';
        break;
}
*/

/*
let array = [11, 22, 33, 44, 55, 66];

let index = array.length - 1;

while(index >= 0) {

    console.log(array[index]);

    index--;
}
*/

/*
let sum = 0;

while(true) {

    let value = +prompt('Entrez un nombre');

    if (!value) {

        break;
    }

    if (value % 2 == 1) {
        
        continue;
    }

    sum = sum + value;
}

document.getElementById('result').textContent = 'Somme des pairs : ' + sum;
*/

/*
function displayDouble(param) {

    alert(computeDouble(param));
}

function computeDouble(param) {

    return(2 * param);
}

let nb = 10;

displayDouble(nb);

let doubleNb = computeDouble(nb);

alert(doubleNb);
*/

/*
let sayHi = function() {
    alert('Hi !');
}

let sayHello = sayHi;

sayHello();

sayHello = function() {
    alert('Hello !');
}

sayHello();
*/

let ok = function() {
    alert('OK !');
}

let cancel = function() {
    alert('Cancel !');
}

let ask = function(question, fctClickOk, fctClickCancel) {

    let reponse = confirm(question);

    if (reponse) {
        fctClickOk();
    }
    else {
        fctClickCancel();
    }
}

ask('Est ce que ça va ?', ok, cancel);

let sing = function() {
    alert('LA LA LAAAAAAAAA !');
}

let cry = function() {
    alert('BOUHHHHHHHH !');
}

ask('Est ce que tu aimes chanter ?', sing, cry);