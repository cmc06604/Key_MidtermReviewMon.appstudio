/*
Write a program that gets two numbers from the user, uses a 
function to tell whether they are both even or not. Also use a 
boolean operator. Then in the main program, tell the user 
what was found: 
      The results of our test:  both numbers are even.
*/


function evenOrNot(n1,n2) {
    if (n1 % 2 == 0 && n2 % 2 == 0)
       return true
   else
       return false
}

let numb1 = Number(prompt("Enter first number."))
let numb2 = Number(prompt("Enter second number."))
let answer = evenOrNot(numb1,numb2)
if (answer == true)
    alert(`Both numbers are even.`)
else
    alert(`Both numbers are NOT even.`)
