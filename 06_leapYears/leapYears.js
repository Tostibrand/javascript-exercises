const leapYears = function(year) {

//step 1 
if((year % 4 == 0)){
    
    // step 2
    if(year % 100 == 0){
        
        // step 3
        if(year % 400 == 0){
            return true
        }else return false

    } else return true
        
}else return false
}

// Do not edit below this line
module.exports = leapYears;

// step 1 -- If the year is evenly divisible by 4, go to step 2. Otherwise, return false.
// step 2 -- If the year is evenly divisible by 100, go to step 3. Otherwise, return true.
// step 3 -- If the year is evenly divisible by 400, return true. Otherwise, return false.

// True = The year is a leap year (it has 366 days).
// False = The year is not a leap year (it has 365 days).