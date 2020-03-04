/*
gets two numbers from the user and outputs the sum using controls 
and events (no prompts, alerts)
*/


btnSum.onclick=function(){
  let answer = Number(inptNum1.value) + Number(inptNum2.value)
  lblSum.value = "The sum is " + answer
}

