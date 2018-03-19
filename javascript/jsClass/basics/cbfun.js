//call , bind application 


// call is used to set the this variable explicitly  -- first set this variable and then pass on the arguements
// bind concept will make the copy of the function -- first set this variable, then can pass on the variable, not neccessary to pass all the arguements



//generic function

var jhon = {
    name: 'jhon',
    age: 27,
    job: 'Developer',
    presentation: function(style, time){
        if (style === 'formal'){
            console.log('Hello! ladies and gentleman,good '+time+'.I\'m '+this.name+', '+this.age+' years old.');
        }else if (style === 'informal'){
            console.log('Hey guys!!! whatsup.... Good '+time+'.I\'m '+this.name+', '+this.age+' years old.');
        }
    }
};

jhon.presentation('formal','morning');


var emily = {
    name: 'emily',
    age: 26,
    job: 'programmer'
};

//function borrowing
emily.presentation = jhon.presentation;
emily.presentation('informal','evening');


//implementation of call
var jane = {
    name: 'Jane',
    age: 24,
    job : 'teacher'
};

jhon.presentation.call(jane, 'formal', 'morning'); //function borrowing using call , setting this (jane object) first and then argument


//apply implementation
var leo = {
    name: 'leo',
    age: 24,
    job : 'engineer'
};

jhon.presentation.apply(leo, ['informal','morning']); //apply -- pass the argument as array


//bind implementation
var jhonFormal = jhon.presentation.bind(jhon, 'formal');

jhonFormal('evening');
jhonFormal('morning');
 