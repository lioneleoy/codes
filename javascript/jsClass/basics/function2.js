//function returning function


function question(job){
    
    if ( job === 'teacher'){
        
        return function(name){
            
            console.log(name+ ', are you a teacher?');
        };
    }
    else if( job === 'designer'){
        
        return function(name){
            console.log(name+', are you a designer?');
        };
    }
    else{
        console.log(name + ', what is your profession?');
    }
};


var teacherQ = question('teacher');

teacherQ('lionel');

var designerQ = question('designer');

designerQ('leo');