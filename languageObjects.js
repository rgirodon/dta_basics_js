/*
let phrase = "Dans_la_jungle_terrible_jungle";

let words = phrase.split('_');

for (let word of words) {

	alert(word);
}
*/

/*
let str = 'Javascript un langage super pour apprendre à développer';

str = str.toUpperCase();

let arrayStr = str.split(' ');

let resultArray = [];

for (let iterStr of arrayStr) {

	if ((iterStr.indexOf('A') != -1) 
		|| (iterStr.indexOf('À') != -1)) {
	
		resultArray.push(iterStr);
	}
}

let result = '';

for (let iterStr of resultArray) {

	result += iterStr + ' ';
}

document.getElementById('result').textContent = result;
*/

let map2 = new Map();
map2.set('joueur1', 'Pete Sampras');
map2.set('joueur2', 'Andre Agassi');

let map3 = new Map();
map3.set('joueur1', 'Henri Leconte');
map3.set('joueur2', 'Guy Forget');

let map1 = new Map();
map1.set('USA', map2);
map1.set('France', map3);

let map4 = new Map();
map4.set('joueur1', 'Richard Gasquet');
map4.set('joueur2', 'Gael Monfils');
map1.set('France', map4);

for (let key of map4.keys()) {

	alert(key + ' : ' + map4.get(key));
}

document.getElementById('result').textContent = map1.get('France').get('joueur2') 
												+ ' - ' 
												+ map1.get('USA').get('joueur2');