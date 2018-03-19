//below code is to explain about object and primitive
//how prototype works
//how inheritance works




//primitives

var a = 10;
var b = 5;

console.log(a);
console.info(b);



//objects , inheritance and protype

//function constructor - should start with uppercase

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
      console.log(2016 - this.yearOfBirth);
    };
};

//instanciate the object

var leo = new Person('leo','1991','SSD');

leo.calculateAge();


//prototype

Person.prototype.lastname = 'lionel';

Person.prototype.calculateRetirement = function(){
    if ((2016 - this.yearOfBirth) > 65 ){
        console.log('reteired');
    }
    else{
        console.log('not retired');
    }
}


console.log(leo.lastname);
    
leo.calculateRetirement();



//object.create


var persProto = {
    calculateYearToRetire: function calculateYearToRetire(){
       var yearsLeft = 65 - (2017 - this.yearOfBirth);
       console.log(yearsLeft);
};
}

lionel = Object.create(persProto);

lionel.yearOfBirth = 1991;

lionel.calculateYearToRetire();


