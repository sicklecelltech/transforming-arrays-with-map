function addHello(name){
    return "Hello "+name+"!";
}

function greeting (names){
    let greetingArray = names.map(addHello);
    return greetingArray;
}

console.log(greeting(["Gary", "Kate", "Holly"]), "Hello Gary!, Hello Kate!, Hello Holly!"); 