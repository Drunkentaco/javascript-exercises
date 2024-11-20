const removeFromArray = function(array, ...removeThese){
    let newArray = [];
    for (let i = 0 ; i < array.length; i++){
        const filter = array[i]
        if (removeThese.includes(filter)){
            continue
        }else newArray.push(array[i]);
    }
   return newArray
}
// Do not edit below this line
module.exports = removeFromArray;
