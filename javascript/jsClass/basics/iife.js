//immedieately invoked function expression



(function(){
    var score = Math.random() * 10;
    console.log( score >= 5);
})();



(function(luck){
    var score = Math.random() * 10;
    console.log( score >= 5 - luck);
})(-10);