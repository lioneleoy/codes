//coding challenge 2

//iife to make the code private

(function(){
    function Questions(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Questions.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0 ; i < (this.answer).length; i ++){
        console.log(i+ ':  '+this.answer[i]);
    }
//    prompt(this.question);
}





Questions.prototype.checkAns = function(ans, callback){
    var sc;
    if (ans === this.correct){
        console.log("correct ans");
        sc = callback(true);
    }else{
        console.log("wrong ans");
        sc = callback(false);
    }
    this.displayScore(sc);
}

Questions.prototype.displayScore = function(score){
    console.log("your current score is :"+score);
    console.log("*********************************");
}

//question list
var q1 = new Questions("what is the teachers name", ['Jonas','lionel','jane','jhon'], 1);
var q2 = new Questions("is java the coolest language?", ['yes','no'], 0);
var q3 = new Questions("is tamil international language?", ['yes','no'], 1);
var q4 = new Questions("which is a cable company", ['comcast','tata','renault'], 0);
var q5 = new Questions("is python a scripting language?", ['yes','no'], 0);

var questions = [q1,q2,q3,q4,q5];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}
    
var keepScore = score();

//console.log(Math.floor(Math.random() * questions.length));
function nextQuestion(){
    
var randomQuestion = questions[Math.floor(Math.random() * questions.length)];

//console.log(randomQuestion);

randomQuestion.displayQuestion();

var ans = prompt(randomQuestion.question);


if(ans !== 'exit'){
    ans  = parseInt(ans);
    randomQuestion.checkAns(ans,keepScore);
    nextQuestion();
}

}
    
nextQuestion();

})();
