function invertNumbers(numbers){
    let newNumbers= [];
    for (let num of numbers){
        newNumbers.push((num*-1));
    }
    return newNumbers;
}

console.log(invertNumbers([-1,2,5,-6,8]),"1,-2,-5,6,-8");