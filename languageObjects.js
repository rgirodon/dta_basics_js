/*
let phrase = "Dans_la_jungle_terrible_jungle";

let words = phrase.split('_');

for (let word of words) {

	alert(word);
}
*/

let str = 'Javascript un langage super pour apprendre à développer';

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
