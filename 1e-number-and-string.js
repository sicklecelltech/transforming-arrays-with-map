function numberToString(numbers){
    let newString = [];

    for (let number of numbers){
        let aNumber = number;
        let aString = number.toString();
        newString.push([{asNumber: aNumber, asString: aString}]);
    }
    return newString;
}

console.log (numberToString([4, -3.2]), "[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]");