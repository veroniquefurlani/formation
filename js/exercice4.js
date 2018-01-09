let toto = 2;

// JSON
let a = { "nb" : 2};
console.log(a.nb);

a = { "nb" : 2, "name":"felix"}
console.log(a.nb + "" + a.name);

let b = {"user" : a};
console.log("name=" + b.user.name);

let c = {"user": { "nb" : 3, "name":"aurelie"}}
console.log(c);

let tabl = [1, 2, 3 ];
console.log("0->" + tabl[0]);
console.log("1->" + tabl[1]);
console.log("2->" + tabl[2]);
console.log("taille->" + tabl.length);

let tabUsers = [ b, c ];
console.log("user0->" + tabUsers[0]);
console.log(tabUsers[0]);

console.log(b);
b.valid = true;
console.log(b);

b.parents = [ c ];
console.log(b);






