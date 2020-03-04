/*
Write a program to calculate debt-to-income ratio using a 
function and controls (no prompt, alert, console.log, etc).
    Use these controls: Bootstrap4 button(s), label(s), input(s), 
    and one control of your choice.We will assume the user has 
    only 3 debts - get these:        
    > monthly car payment
    > monthly rent payment
    > monthly credit card payment
Get the user gross monthly income.
Create a function that takes four arguments (the 3 debts, 
the gross monthly income) and returns the debt-to-income 
ratio to the calling module using this formula:
   (sum of the monthly debt payments/gross monthly income) x 100
Display the answer outside of the function in a control. 
Eg. Say you have these numbers from the user: 
    Car payment:           $150/month
    Rent payment:          $550/month
    Credit Card Payment:   $250/month
    Gross Income:          $2500/month
    In this case the debt to income ratio would be 38%
*/

function calcDebtIncomeRatio(car, rent, cc, income) {
   return ((car + rent + cc)/income)*100
}

btnSubmit.onclick=function(){
    lblAnswer.value = calcDebtIncomeRatio(Number(inptCar.value), Number(inptRent.value),Number(inptCreditCard.value),Number(inptGrossIncome.value))
}
