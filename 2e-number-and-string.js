function asObject(num){
    return {asNumber: num, asString: num.toString()};
}

function numberAndString(numbers){
    let newString = numbers.map(asObject);
    return newString;
}

console.log (numberAndString([4, -3.2]), "[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]");