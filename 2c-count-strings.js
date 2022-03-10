function getLength(str){
    return str.length;
}

function countString(strings){
    let newStrings=strings.map(getLength);
    
    return newStrings;
}

console.log(countString(["one","three", "five"]), "3,5,4");