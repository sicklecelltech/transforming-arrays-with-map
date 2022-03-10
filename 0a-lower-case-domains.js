function inLowerCase(domain){
    return domain.toLowerCase();
}

function lowerCaseDomains(oldDomains){
    let cleanedDomains = oldDomains.map(inLowerCase);
    return cleanedDomains
}


/* test cases */
console.log(lowerCaseDomains(["bored.com","HeLlO.coM","GITHUB.COM"]), "bored.com,hello.com,github.com"); //First test case bored.com,hello.com,github.com
console.log(lowerCaseDomains(["faCEboOk.cOm","INSTAGRAM.COM","TwItTeR.com"]), "facebook.com,instagram.com,twitter.com");//facebook.com,instagram.com,twitter.com