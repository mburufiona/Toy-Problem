// calculate the payee
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
const netSalary = grossSalary - payee - Nhif - NSSF1 -NSSF2

// Return 
    console.log (netSalary)
    console.log (grossSalary)
    console.log (payee)
    console.log (Nhif)
    console.log (NSSF)





        
    

