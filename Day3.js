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