//passing functions as arguement - these functions are called callback function , which will do one task.

var yearList = [1991,1989,1976,1986,1947,1990]

function ageCalc(years , fun) {
 var resAge = [];
 for (var i = 0; i < years.length ; i++){
     resAge.push(fun(years[i]));
 };
    return resAge;
    
};


function fun(year){ 
    return 2017 - year;
};

results = ageCalc(yearList, fun);

console.log(results);