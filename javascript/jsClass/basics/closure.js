//closure -- the inner function always will have access to the variables of the outer function



function retirementAge(retirementAge){
    
    var stmt = ' years left until retirement';
    
    return function(yearOfBirth){
        var age = (2016 - yearOfBirth);
        console.log(retirementAge - age + stmt);
        
    };
};



var retirementAgeUS = retirementAge(65);

retirementAgeUS(1991);


//interview question function using closure

function interviewQuestion(job){
    return function(name){
        if (job === 'teacher'){
            console.log('What subject do you teach,'+name+'?');
        }else if(job === 'designer'){
            console.log(name+', do you have experience is front-end development?');
        }else{
            console.log('What is your profession,'+name+'?');
        }
    };
};


var intTeacher = interviewQuestion('teacher');
intTeacher('lionel');

var intDesigner = interviewQuestion('designer');
intTeacher('leo ');


interviewQuestion('coder')('raja');