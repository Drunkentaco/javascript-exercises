const repeatString = function (string, num) {
    let answer = '';
    if (0 > num)
        return "ERROR"
    for( i = 0 ; i < num ; i++ ){
        answer = answer + string;
    }
    return answer;
};
// Do not edit below this line
module.exports = repeatString;
