function greeting (names){
    let greetingArray = [];
    for (let name of names){
        let newGreeting= "Hello " + name +"!";
        greetingArray.push(newGreeting);
    }
    return greetingArray;
}

console.log(greeting(["Gary", "Kate", "Holly"]), "Hello Gary!, Hello Kate!, Hello Holly!"); 