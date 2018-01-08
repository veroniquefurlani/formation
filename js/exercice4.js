let toto = 2;

// JSON
let a = { "nb" : 2};
console.log(a.nb);

a = { "nb" : 2, "name":"felix"}
console.log(a.nb + "" + a.name);

let b = {"user" : a};
console.log("name=" + b.user.name);

