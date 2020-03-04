/*
DO TOGETHER using code from form 'four'.

Copy the code from the previous exercise (about employees) before 
the new employee was added, and add the functionality to answer the 
question: Who has worked at the company the longest? Output their 
name.
**change name of employees, employeeYears, newEmp, deleteEmp, foundIndex 
variables to employees2, employeeYears2, newEmp2, deleteEmp2, foundIndex2
*/


let employees2 = ["Mary Edwards","Don Smith","Tricia Evans"]
let employeeYears2 = [22,10,5]

for (i = 0; i < employees2.length;i++) {
    console.log(`${employees2[i]} with ${employeeYears2[i]} years of service.`)
}

let newEmp2 = prompt("Enter the full name of a new employee.")
employees2.push(newEmp2)
employeeYears2.push(0)

for (i = 0; i < employees2.length;i++) {
    console.log(`${employees2[i]} with ${employeeYears2[i]} years of service.`)
}

let deleteEmp2 = confirm("Do you want to delete the last employee added?")
if (deleteEmp2 == true) {
    employees2.pop()
    employeeYears2.pop()
}
 
for (i = 0; i < employees2.length;i++) {
    console.log(`${employees2[i]} with ${employeeYears2[i]} years of service.`)
}
    
let mostYears = employeeYears2[0]
let foundIndex2 = 0
for (i = 1; i < employeeYears2.length;i++) 
    if (employeeYears2[i] > mostYears) {
        mostYears = employeeYears2[i]
        foundIndex2 = i
    }

alert(`${employees2[foundIndex2]} has been here the longest.`)
