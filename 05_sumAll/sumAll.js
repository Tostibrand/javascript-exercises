const sumAll = function(number1, number2) {
    if (number1 < 0 
        || number2 < 0 
        || typeof number1 != `number` 
        || typeof number2 != `number`) {
        return `ERROR`;
    }
    if (number1 < number2){
        // algo (number2-number1 + 1)/2 *(number1+number2) found here --> https://www.quora.com/What-is-the-sum-of-all-numbers-between-two-given-numbers#:~:text=Let%20the%20first%20given%20integer,%2B2%2C%E2%80%A6%2C%20l.
        return (number2-number1 + 1)/2 *(number1+number2)
    }
    if (number1 > number2){
        // to reverse the algo and make it work with large number first
        return (number1-number2 + 1)/2 *(number1+number2)
    }
    
};

// Do not edit below this line
module.exports = sumAll;
