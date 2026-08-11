 let str = "Laksha.Sree";
 let str1 = new String("Hello");
 console.log(str1.length);  // length of the string

 console.log(str.charAt(6));


//classroom activity
let str ="Testleaf";
let rev = "";
for (let i=str.length-1 ; i >= 0 ; i--){
rev = rev + str[i];
}
    console.log(rev);


//Homework 1
let s = "Hello World";
let word = s.split(" ");
console.log(word[word.length-1].length);

//Homework 2
let s1 = " fly me to the moon ";
let trim = s1.trim().split(" ");
console.log(trim[trim.length - 1].length);

//Homework 3
function isAnagram(str1, str2){
     str1 = str1.trim().toLowerCase().split("").sort().join("");
     str2 = str2.trim().toLowerCase().split("").sort().join("");
    return str1 === str2;
}
console.log(isAnagram("Listen","Silent"));
console.log(isAnagram('hello', 'world'));
