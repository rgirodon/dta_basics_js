let str = 'Le début de semaine est difficile pour la DTA';

str = str.toUpperCase();

let arrayStr = str.split(' ');

let resultArray = [];

for (let iterStr of arrayStr) {

	if (iterStr.indexOf('A') != -1) {
	
		resultArray.push(iterStr);
	}
}

let result = '';

for (let iterStr of resultArray) {

	result += iterStr + ' ';
}

document.getElementById('result').textContent = result;