//To find the odd numbers
function printOddNumbers(){
for(let i=1 ; i<=25 ; i++){
    if (i%2 !=0){
        console.log(i);
    }
}
}
printOddNumbers()

//Homework Odd or Even
function isOddOrEven(number){
    if (number % 2 === 0){
        console.log("Number is Even")
    } else {
        console.log("Number is Odd")
    }
}
isOddOrEven(17);