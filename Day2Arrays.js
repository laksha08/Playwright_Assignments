//classroom activity
let arr = [1,2,3,2,4,5,1,4,9,7]
for (i = 0 ; i < arr.length ; i++){
    for(let j = i+1 ;j < arr.length ; j++ ){
        if (arr[i] === arr[j]){
            console.log(arr[i]);
        }
    }

}

//methods in array
let fruits = ["Apple","Banana","Mango",4,true];
console.log(fruits.length); // 5
fruits.push("Kiwi"); // will add at last
console.log(fruits);
fruits.pop();// removes the last element
console.log(fruits);
fruits.unshift("Kiwi"); //adds an element at the beginning
console.log(fruits);
fruits.shift(); //removes the first element
console.log(fruits);

console.log(fruits.includes("Mango")); //True , check if its ter or not
console.log(fruits.indexOf(true)); //4 
console.log(fruits.indexOf(10)); // -1 is the answer if it doesnt exists
let result = fruits.slice(-3,2); // empty [] will be displayed
console.log(result);

fruits.splice(0,1,"Kiwi","Berry","orange");
console.log(fruits);
console.log(fruits.join("-")); // Kiwi-Berry-orange-Banana-Mango-4-true
console.log(fruits.reverse()); // will reverse it
console.log(fruits.sort()); // will sort it.

//Homework
let array = [1,2,3,4,5,6];
let sum = 0;
for (let i = 0; i < array.length ; i++){
    sum = sum + array[i];
}
console.log("Total sum = " , sum);

