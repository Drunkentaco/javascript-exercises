const sumAll = function(num1, num2) {
   const numbers = [num1, num2]
    if (
    (Number.isInteger(num1) === false)||
    (Number.isInteger (num2) === false)
    ){
        return "ERROR";
    }else if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else
    numbers.sort();
    let end = numbers.pop();
    let start = numbers.shift();
    
    let sum = 0;
    for (let n = start; n <= end; n++){
        sum += n
    }
return sum
}

// Do not edit below this line
module.exports = sumAll;
