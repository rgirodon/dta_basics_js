function Player(team, name) {
	
	this.team = team;
	this.name = name;
}

let p1 = new Player('PSG', 'Neymar');
let p2 = new Player('PSG', 'MBappe');
let p3 = new Player('PSG', 'Icardi');
let p4 = new Player('Barça', 'Messi');
let p5 = new Player('Barça', 'Suarez');
let p6 = new Player('Barça', 'Griezmann');
let p7 = new Player('Liverpool', 'Mané');
let p8 = new Player('Liverpool', 'Salah');
let p9 = new Player('Juventus', 'Matuidi');
let p10 = new Player('Juventus', 'Cristiano Ronaldo');

let array = [];
array.push(p1);
array.push(p2);
array.push(p3);
array.push(p4);
array.push(p5);
array.push(p6);
array.push(p7);
array.push(p8);
array.push(p9);
array.push(p10);



function buildPlayersMapByTeam(players) {

	let result = new Map();

	for (let player of players) {
	
		let team = player.team;
		
		let playersForTeam = result.get(team);
		
		if (!playersForTeam) {
			
			playersForTeam = [];
			
			playersForTeam.push(player);
			
			result.set(team, playersForTeam);
		}
		else {
			playersForTeam.push(player);
		}
	}
	
	return result;
}

let result = '';

let map = buildPlayersMapByTeam(array);

for (let team of map.keys()) {

	result += '<h2>' + team + '</h2>';
    
    result += '<ul>';

	for (let player of map.get(team)) {
	
		result += '<li>' + player.name + '</li>';
    }
    
    result += '</ul>';
}

document.getElementById('result').innerHTML = result;