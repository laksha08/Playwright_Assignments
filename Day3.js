//Global Scope
let browserVersion = 'Chrome'
function getBrowserVersion(){
    console.log(browserVersion)  //will print
}
getBrowserVersion()
console.log(browserVersion)    // will print


//Function Scope
 function getBrowserVersion(){
    let browserVersion1 = 'Edge'
    console.log(browserVersion1)  //will print
}
getBrowserVersion()
console.log(browserVersion1)    // error

//Block scope
if (true) {
    let browserVersion2 = 'Safari'
    console.log(browserVersion2)  //will print
}
console.log(browserVersion2)  //error

//Block scope with Var
if (true) {
    var browserVersion2 = 'Safari'
    console.log(browserVersion2)  //will print
}
console.log(browserVersion2)  //will print


//Homework Number Type
function output(a){
if(a > 0){
    console.log("It is a positive number");
}
if (a < 0) {
    console.log("It is a negative number");
}
if (a === 0) {
    console.log("It is a neutral number");
}
}
output(0);

//Conditional Statements
function launchBrowser(browserName){
        if (browserName === "Chrome"){
            console.log("Launching Chrome Browser")
        } else {
            console.log("Launching " + browserName + " Browser")
        }
}
 launchBrowser("Edge");

 function runTests(testType){
switch (testType) {
    case "Smoke":
        console.log("Running Smoke Tests");
        break;
    case "Sanity":
        console.log("Running Sanity Tests");
        break;
    case "Regression":
        console.log("Running Regression Tests");
        break;
    default:
        console.log("Running Smoke Tests");
        break;
}
 }
runTests("Regression");

//Grade Calculation
function studentsGrade(score){
    switch (true) {
        case (score  >= 90 && score <= 100):
            console.log("Grade A");
            break;
        case (score  >= 80 && score < 90):
            console.log("Grade B");
            break;
        case (score  >= 70 && score < 80):
            console.log("Grade C");
            break;   
        case (score  >= 60 && score < 70):
            console.log("Grade D");
            break;  
        default:
            console.log("Grade F");
            break;
    }
}
studentsGrade(90);
