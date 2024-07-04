# week-1-Code Challenge

### Date, 30th June 2024

### Authour; *Fiona Nduta Mburu*

## STUDENT GRADE GENERATOR.
This program calculates the student's marks and assigns the marks to their corresponding grades.
This  function  prompts the user to input student marks.
The student marks input should between 0 and 100
The output should correspond the correct grade ;
                A >79,
                B - 60 to 79,
                C - 59 to 49,
                D - 40 to 49,
                E - less 40.
 Using if and else if, the code is written inside the function, inputStudentMarks;

 
## SPEED DETECTOR.
This program takes the speed of a car as input and if the speed is less than 70 which is the speed limit, it prints "Ok".
However, for every 5 km/s above the speed limit which is 70, it gives the driver one demerit point and prints the total number of demerit points.
The maximum number of demerit points is 12 points, if the driver gets more than 12 points, the function will return; "License suspended"
The code is using switch case to determine and calculate the points and corresponds it with the output.
    The code is inside the function calcDemeritsPoints as shown below;

#### code
// Calculate Demerit Points.
function calcDemeritsPoints(speed){


    switch(true){
        case speed < 70:
            output = "Ok";
            break;
        case speed === 75:
            output = "1 point";
            break;
        case speed === 80:
            output = "2 points";
            break;
        case speed === 85:
            output = "3 points";
            break;
        case speed === 90:
            output = "4 points";
            break;
        case speed === 95:
            output = "5 points";
            break;
        case speed === 100:
            output = "6 points";
            break;
        case speed === 105:
            output = "7 points";
            break;
        case speed === 110:
            output = "8 points";
            break;
        case speed === 115:
            output = "9 points";
            break;
        case speed === 120:
            output = "10 points";
            break;
        case speed === 125:
            output = "11 points";
            break;
        case speed === 130:
            output = "12 points";
            break;
        case speed > 130:
            output = "License suspended."
            break;
            default:
            }
        
        return output;
}
// return Demerit Points
const points = calcDemeritsPoints(2000)
console.log(points)


## NET SALARY CALCULATOR.
This programs calculates an individual's Net Salary by getting the inputs of basic salary and benefits.
It uses KRA, NHIF and NSSF values to calculate the payee, NHIF Deductions, Nssf Deductions, gross salary and net salary.
The net salary is calculated by deducting payee, NSSF and Nhif from the gross salary.has defined using const.
The payee, nhif and both NSSF1 and NSSF2 are using switch case to calculate the deduction.
The code is as shown below;

#### code
function calcPayee(basicSalary, benefit){
    let grossSalary = basicSalary + benefits;
    let payee;

    switch (true) {
    case grossSalary <= 24000:
        payee = (10/100)
        break;
     case grossSalary > 24000 && grossSalary <= 32333:
        payee = (25/100)
        break;
    case grossSalary >= 32334 && grossSalary <= 500000:
        payee = (30/100)
        break;
    case grossSalary >= 500001 && grossSalary <= 800000:
        payee = (32.5/100) 
        break;
    case grossSalary > 800000:
        payee = (35/100) 
        break;
        default:
    }
    return payee;
}
    // calculate the Nhif deductions.
function calcNhif(basicSalary, benefit){
    let grossSalary = basicSalary + benefit;
    let nhif;

    switch (true) {
        case grossSalary <= 5999:
            deduction = 150
            break;
        case grossSalary >= 6000 && grossSalary <= 7999:
            deduction = 300
            break;
        case grossSalary >= 8000 && grossSalary <= 11999:
            deduction = 400
            break;
        case grossSalary >= 12000 && grossSalary <= 14999:
            deduction = 500
            break;
        case grossSalary >= 15000 && grossSalary <= 19999:
            deduction = 600
            break;
        case grossSalary >= 20000 && grossSalary <= 24999:
            deduction = 750
            break;
        case grossSalary >= 25000 && grossSalary <= 29999:
            deduction = 850
            break;
        case grossSalary >= 30000 && grossSalary <= 34999:
            deduction = 900
            break;
        case grossSalary >= 35000 && grossSalary <= 39999:
            deduction = 950
            break;
        case grossSalary >= 40000 && grossSalary <= 44999:
            deduction = 1000
            break;
        case grossSalary >= 45000 && grossSalary <= 49999:
            deduction = 1100
            break;
        case grossSalary >= 50000 && grossSalary <= 59999:
            deduction = 1200
            break;
        case grossSalary >= 60000 && grossSalary <= 69999:
            deduction = 1300
            break;
        case grossSalary >= 70000 && grossSalary <= 79999:
            deduction = 1400
            break;
        case grossSalary >= 80000 && grossSalary <= 89999:
            deduction = 1500
            break;
        case grossSalary >= 90000 && grossSalary <= 99999:
            deduction = 1600
            break;
        case grossSalary >= 100000:
            deduction = 1700
            break;
        default:

    }
    return nhif;
}
// calculate the NSSF Deduction
const NSSF1 = 7000 * 0.06
const NSSF2 = (36000 - 7000)*0.06  

// calculate the netSalary.
const netSalary = grossSalary - (payee + nhif + NSSF1 + NSSF2)


// Return 
    console.log (netSalary)
 
## Installation.
Use git clone to download the documents in the Github.

## Installation Requirements.
Git

## Technologies Used.
JavaScript.

## contact support.
 https://github.com/mburufiona

## Livelink
 https://mburufiona.github.io/Toy-Problem/

## copyright 
Copyright (c) [2024] [Fiona Mburu]
MIT License.

