
let one = [];
let two = [];


function addition(){
one.push(document.getElementById("one").value)
two.push(document.getElementById("two").value)

document.getElementById("one").innerHTML=one;
document.getElementById("two").innerHTML=two;
// console.log(one)
// console.log(two)

compNum1 =one-"9999";
compNum2 =two-"9999";

compNum1 = -compNum1;
compNum2 = -compNum2;
document.getElementById("compNum1").innerHTML="computer 1st name ; "+compNum1;
document.getElementById("compNum2").innerHTML="computer 2nd name ; "+compNum2;


result =(+compNum1+ +compNum2+ +one+ +two)
document.getElementById("result").innerHTML="result :"+result

return false;




}