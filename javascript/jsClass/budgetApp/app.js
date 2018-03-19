var budgetController = ( function (){
    //function code
    
    var Expense = function(id, description, value){
        this.id = id;
        this.decsription = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.decsription = description;
        this.value = value;
    };
    
    
    
    var data = {
        allItem:{
            inc: [],
            exp: []
        },
        total:{
            inc: 0,
            ixp: 0 
        }
        
    };
    
    return {
        addItem: function(type, description, value){
            var newItem, ID;
            //create new item
            if (data.allItem[type].length > 0){
                ID = data.allItem[type][data.allItem[type].length - 1].id +1;
            }else{
                ID = 0;
            }
            
            //create new item based on inc or exp
            if (type === 'inc'){
                newItem = new Income(ID, description, value);
            }else if (type === 'exp'){
                newItem = new Expense(ID, description, value);
            }
            
            //push the data into our DS
            data.allItem[type].push(newItem);
            
            //return new item
            return newItem;
        },
        
        testing: function(){
            console.log(data);
        }
    };
    
})();

var uiController = (function(){
    //function code
    //DOM variables
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }
    //reading inputs from the form
    return{
        getInputData: function (){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };  
        },
        getDOMStrings: function(){
            return DOMstrings;
        }
    };
        
})();


//connects ui controller and budget controller
var controller  = ( function (budCntrl, uiCntrl){
    //function code
    //init event listener function
    var setupEventListener = function (){
        var DOM = uiCntrl.getDOMStrings();
        document.querySelector(DOM.addBtn).addEventListener('click',ctrlAddItem);
        //pass the key press event
        document.addEventListener('keypress', function(event){
        
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
    });}
    
    //list of action to be performed on keypress or click for add item
    var ctrlAddItem = function (){
        
        var input, newItem;
        //get input 
        input = uiCntrl.getInputData();
        //add item to the budget controller
        newItem = budCntrl.addItem(input.type, input.description, input.value);
        
    };
    
    return {
        init: function(){
             console.log('Application has started');
             setupEventListener();
        }
    }; 
    
    
})(budgetController, uiController);

controller.init();