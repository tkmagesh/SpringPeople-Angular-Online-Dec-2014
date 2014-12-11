//Synchronous
function add(x,y){
   return x + y;
}

function usingAdd(){
   var number1 = 10,
       number2 = 20;
   var result = add(number1, number2);
   console.log("result = ", result);
}

//Asynchronous using Callbacks
function addAsync(x,y,onResult){
   setTimeout(function(){
      var result = x + y;
      if (typeof onResult === "function")
         onResult(result);
   },5000);
}

function usingAddAsync(){
   var number1 = 10,
       number2 = 20;
   addAsync(number1, number2, function(result){
     console.log("result = ", result);
   });
}

//Asynchronous using callbacks - part - 2
function addAsync2(x,y){
   setTimeout(function(){
      var result = x + y;
      if (typeof addAsync2.onResult === "function")
         addAsync2.onResult(result);
   },5000);
}

//Asynchronous using promise
function addUsingPromise(number1,number2){
    var promise = new Promise(function(resolve, reject){
         setTimeout(function(){
              var result = number1 + number2;
              resolve(result);
              console.log("add operation completed");
         },5000);
    });
    return promise;
}
var promise = addUsingPromise(100,200);
promise.then(function(result){
    console.log("result = ", result);
});

