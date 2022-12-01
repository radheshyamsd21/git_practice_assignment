Program to check given number is prime or not 

let num = 11;

let factor=0;

for (let i=1; i<=num; i++){

if(num%i==0)

factor++
}

if(factor==2){
 console.log("Yes")
}
else{
console.log("No")
}








PROBLEM_2  program to check string is palindrome or not




let str= "naman";

let bag= "";

 for(let i=str.length-1;i>=0;i--){

        bag+=str[i]
}
if(bag ==str) {
console.log("Yes")
}
else{
 console.log("No")
}