function countString(strings){
    let newStrings=[];
    for (let string of strings){
        newStrings.push(string.length);
    }
    return newStrings;
}

console.log(countString(["one","three", "five"]), "3,5,4");