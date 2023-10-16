const removeFromArray = function(getFromArray, ...remove) {
   
    getFromArray = getFromArray.filter(item => !remove.includes(item))
    return getFromArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
