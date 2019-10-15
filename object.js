/*
let menu = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
	dessert: 'fondant chocolat'
};

document.getElementById('result').textContent = menu.entree + ' * ' + menu.plat + ' * ' + menu.dessert;
*/

/*
let myMenu = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
	dessert: 'fondant chocolat'
};

function afficheMenu(menu) {

    return(menu.entree + ' * ' + menu.plat + ' * ' + menu.dessert);
}

document.getElementById('result').textContent = afficheMenu(myMenu);
*/

/*
let myMenu = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
	dessert: 'fondant chocolat'
};

function changeMenu(menu) {

    menu.plat = 'saucisse - purée';

    menu.bonus = 'café';
}

function afficheMenu(menu) {

    return(menu.entree 
            + ' * ' + menu.plat 
            + ' * ' + menu.dessert 
            + (menu.bonus ? ' * ' + menu.bonus : ''));
}

changeMenu(myMenu);

document.getElementById('result').textContent = afficheMenu(myMenu);
*/

/*
let myMenu = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
    dessert: 'fondant chocolat',
    
    affiche: function() {

        return(this.entree 
                + ' * ' + this.plat 
                + ' * ' + this.dessert 
                + (this.bonus ? ' * ' + this.bonus : ''));
    },

    change: function() {

        this.plat = 'saucisse - purée';

        this.bonus = 'café';
    }
};

myMenu.change();

document.getElementById('result').textContent = myMenu.affiche();
*/

function Menu(entree, plat, dessert) {

    this.entree = entree;

    this.plat = plat;

    this.dessert = dessert;

    this.affiche = function() {

        return(this.entree + ' * ' + this.plat + ' * ' + this.dessert);
    };
}

let menu1 = new Menu('Tomates Mozza', 'Spaghetti bolognaises', 'Ile flottante');

let menu2 = new Menu('Concombres', 'Choucroute', 'Mousse au chocolat');

document.getElementById('result').textContent = menu1.affiche() + ' / ' + menu2.affiche();
