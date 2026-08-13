//call back function
function greet(name,callback){
    console.log("Hello " + name);
    callback();
}
function goodbye(){
    console.log("Bye");
}
greet("LAk",goodbye);

//Homework
//Task 1: Function Declaration
function userProfile(name1){
    console.log("Hello " + name1 + '!')
}
userProfile("Aryan");

//Task 2 : Arrow Function
let double = (a) => {
 return a * 2 ;
}
  console.log("The number is " + double(5));

//Task 3: Anonymous Function
    setTimeout(function() {
    console.log("This message is Delayed by 2 Secs")
}, 2000);


//Task 4: Callback Function
function getUserData(callback1){
setTimeout(function() {
     let user = {name2: "Lak", age: "37"
    };
    callback1(user);
    
}, 3000);
}
getUserData (function (user){
    console.log("Name: " + user.name2);
    console.log("Age: " + user.age);
});