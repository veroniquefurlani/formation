let user1 = {"prenom": "felix", "lunettes" : true};
let user2 = {"prenom": "aurélie", "lunettes" : false};

let user = user2 ;

// Conditions
if (user.lunettes == true){
    console.log("ATTENTION LUNETTES");
} else if (user.lunettes == false)  {
    console.log("Tout va bien, pas de lunettes");
} else {
    console.log("inconnu ...");
}

switch(user.prenom){
    case "felix":
        console.log("bonjour felix");
        break;
    case "aurelie":
        console.log("bonjour madame");
        break;
    default:
        console.log("bonjour");
        break;
}

const tabUsers = [user1, user2];

let i=0;
while(i < 2){
    console.log(tabUsers[i++]);
}

i=0;
console.log(i); //0
console.log(i++); //0
console.log(i); //1
console.log(++i); //2

console.log(i); //2
console.log(i*=2); //2

console.log("------------------------");
console.log(i); //4
console.log(i+=2); //6
console.log(i-=2); //4

console.log("------------------------");
for (let i = 0; i < tabUsers.length ; i++){
    console.log(tabUsers[i]);
}

console.log("------------------------");
for (let i = 10; i >= 0 ; i--){
    console.log(i);    
}



