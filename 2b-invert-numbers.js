function invert(num){
    return num*-1;
}
function invertNumbers(numbers){
    let newNumbers= numbers.map(invert);
    return newNumbers;
}

console.log(invertNumbers([-1,2,5,-6,8]),"1,-2,-5,6,-8");