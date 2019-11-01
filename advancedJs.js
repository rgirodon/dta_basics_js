/* Exo 1

function power(x, n) {

    if (n == 0) {

        return 1;
    }
    else {
        return x * power(x, n - 1);
    }
}

let msg = power(5, 4);

document.getElementById("result").innerHTML = msg;
*/

/* Exo 2

function makeCounter() {
    
    let count = 0;
    
    return function() {
        
        count = count + 1;
        
        return count;
    }
}

let c1 = makeCounter();

let c2 = makeCounter();

let msg = "";

msg += "c1 : " + c1();

msg += "<br>";

msg += "c1 : " + c1();

msg += "<br>";

msg += "c1 : " + c1();

msg += "<br>";

msg += "c2 : " + c2();

msg += "<br>";

msg += "c2 : " + c2();

document.getElementById("result").innerHTML = msg;
*/

/* Exo 3

(function() {
  
    let u1 = {
        name: "John",
        age: 25
    };
    
    let u2 = {
        name: "Kate",
        age: 35
    };
    
    let msg = "";

    msg += u1.name + " a " + u1.age;

    msg += "<br>";
    
    msg += u2.name + " a " + u2.age;

    document.getElementById("result1").innerHTML = msg;
})();

(function() {
   
    let u1 = {
        name: "Peter",
        age: 45
    };
    
    let u2 = {
        name: "Mary",
        age: 55
    };
    
    let msg = "";

    msg += u1.name + " a " + u1.age;

    msg += "<br>";
    
    msg += u2.name + " a " + u2.age;

    document.getElementById("result2").innerHTML = msg;
})();
*/

/* Exo 4

let multiply = (param1, param2) => param1 * param2;

document.getElementById("result").innerHTML = multiply(12, 24);
*/

/* Exo 5

function User(name, age) {
    
    this.name = name;
    
    this.age = age;    
}

let user1 = new User("John", 25);

let user2 = new User("Kate", 32);

let sayHi = function(prefix, suffix) {
  
    return prefix + this.name + " a " + this.age + " ans." + suffix;
};

document.getElementById("result1").innerHTML = sayHi.apply(user1, ["((", "))"]);

document.getElementById("result2").innerHTML = sayHi.call(user2, "[[", "]]");
*/
/*
let user1SayHi = sayHi.bind(user1);

let user2SayHi = sayHi.bind(user2);

document.getElementById("result1").innerHTML = user1SayHi("((", "))");

document.getElementById("result2").innerHTML = user2SayHi("[[", "]]");
*/

/* Exo 6

let userAsString = "{ \"firstName\" : \"Remy\", \"age\" : 39 }";

let userAsObject = JSON.parse(userAsString);

document.getElementById("result1").innerHTML = userAsObject.firstName + " a " + userAsObject.age + " ans.";

userAsObject.ville = "Paris";

let userAsStringAfterModification = JSON.stringify(userAsObject);

document.getElementById("result2").innerHTML = userAsStringAfterModification;
*/

/* Exo 7

function User(name, age) {
    
    this.name = name;
    
    this.age = age;    
}

let user1 = new User("John", 25);

let user2 = new User("Kate", 32);

let user3 = new User("Tom", 43);

let users = [
    user1,
    user2,
    user3
];

let youngUsers = users.filter(item => item.age < 35);

document.getElementById("result1").innerHTML = "Nb éléments trouvés : " + youngUsers.length;

let msg = "";

youngUsers.forEach(
    youngUser => {
        msg += "Elément trouvé : " + youngUser.name + "(" + youngUser.age + ")" + "<br>";
    }
);

document.getElementById("result2").innerHTML = msg;
*/

/* Exo 8

let array = ["str1", "str2", 100];

let [var1, var2, var3] = array;

let msg = "";
msg += "var1 : " + var1 + "<br>";
msg += "var2 : " + var2 + "<br>";
msg += "var3 : " + var3 + "<br>";

document.getElementById("result1").innerHTML = msg;

let obj = {
    espagnol: "Buenos dias",
    anglais: "Good morning"
};

function displayVars({francais = "Coucou", 
                      anglais = "Hello", 
                      espagnol = "Hola",
                      italien = "Ciao"}) {
    
    let msg = "";

    msg += "francais : " + francais + "<br>";
    msg += "anglais : " + anglais + "<br>";
    msg += "espagnol : " + espagnol + "<br>";
    msg += "italien : " + italien + "<br>";

    document.getElementById("result2").innerHTML = msg;
}

displayVars(obj);
*/

/* Exo 9

class Student {

    constructor(firstName, fatherLastName, motherLastName) {

        this.firstName = firstName;

        this.fatherLastName = fatherLastName;

        this.motherLastName = motherLastName;
    }

    get fullName() {
        
        return this.fatherLastName + " - " + this.motherLastName;
    }
}

let nino = new Student("Rafael", "Nadal", "Parera");

document.getElementById("result1").innerHTML = nino.firstName + " " + nino.fatherLastName;

document.getElementById("result2").innerHTML = "Nom complet : " + nino.fullName;
*/