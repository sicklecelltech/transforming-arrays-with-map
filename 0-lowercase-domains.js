/* creating a function that turns any string into loweercase
PARAMETER- STRING -oldDomains
RETURN- STRING IN LOWER LETTERS- newDomains
FUNCTION NAME- lowerCaseDomains
set newDomains[]
for each letter in string{
    newString= lowercase string letter
}
 return newDomains
*/
function lowerCaseDomains(oldDomains){
    let newDomains= [];
    for (let domain of oldDomains){
        newDomains.push(domain.toLowerCase());
    }
    return newDomains;
}


/* test cases */
console.log(lowerCaseDomains(["bored.com","HeLlO.coM","GITHUB.COM"]), "bored.com,hello.com,github.com"); //First test case bored.com,hello.com,github.com
console.log(lowerCaseDomains(["faCEboOk.cOm","INSTAGRAM.COM","TwItTeR.com"]), "facebook.com,instagram.com,twitter.com");//facebook.com,instagram.com,twitter.com