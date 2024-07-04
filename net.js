function calcPayee(basicSalary, benefit) {
    let grossSalary = basicSalary + benefit;
    let payee;

    switch (true) {
        case grossSalary <= 24000:
            payee = grossSalary * (10 / 100);
            break;
        case grossSalary > 24000 && grossSalary <= 32333:
            payee = grossSalary * (25 / 100);
            break;
        case grossSalary >= 32334 && grossSalary <= 500000:
            payee = grossSalary * (30 / 100);
            break;
        case grossSalary >= 500001 && grossSalary <= 800000:
            payee = grossSalary * (32.5 / 100);
            break;
        case grossSalary > 800000:
            payee = grossSalary * (35 / 100);
            break;
        default:
            // Handle cases that shouldn't happen with proper input validation
            payee = 0;
    }

    return payee;
}

function calcNhif(basicSalary, benefit) {
    let grossSalary = basicSalary + benefit;
    let nhif;

    switch (true) {
        case grossSalary <= 5999:
            nhif = 150;
            break;
        case grossSalary >= 6000 && grossSalary <= 7999:
            nhif = 300;
            break;
        case grossSalary >= 8000 && grossSalary <= 11999:
            nhif = 400;
            break;
        case grossSalary >= 12000 && grossSalary <= 14999:
            nhif = 500;
            break;
        case grossSalary >= 15000 && grossSalary <= 19999:
            nhif = 600;
            break;
        case grossSalary >= 20000 && grossSalary <= 24999:
            nhif = 750;
            break;
        case grossSalary >= 25000 && grossSalary <= 29999:
            nhif = 850;
            break;
        case grossSalary >= 30000 && grossSalary <= 34999:
            nhif = 900;
            break;
        case grossSalary >= 35000 && grossSalary <= 39999:
            nhif = 950;
            break;
        case grossSalary >= 40000 && grossSalary <= 44999:
            nhif = 1000;
            break;
        case grossSalary >= 45000 && grossSalary <= 49999:
            nhif = 1100;
            break;
        case grossSalary >= 50000 && grossSalary <= 59999:
            nhif = 1200;
            break;
        case grossSalary >= 60000 && grossSalary <= 69999:
            nhif = 1300;
            break;
        case grossSalary >= 70000 && grossSalary <= 79999:
            nhif = 1400;
            break;
        case grossSalary >= 80000 && grossSalary <= 89999:
            nhif = 1500;
            break;
        case grossSalary >= 90000 && grossSalary <= 99999:
            nhif = 1600;
            break;
        case grossSalary >= 100000:
            nhif = 1700;
            break;
        default:
            nhif = 0;
    }

    return nhif;
}

// Prompt for basicSalary
const basicSalary = parseInt(prompt('Enter basic salary:'));
if (isNaN(basicSalary)) {
    console.log("Invalid input. Please enter a valid number for basic salary.");
} else {
    // Prompt for benefit
    const benefit = parseInt(prompt('Enter benefit:'));
    if (isNaN(benefit)) {
        console.log("Invalid input. Please enter a valid number for benefit.");
    } else {
        // Calculate payee and nhif
        const payee = calcPayee(basicSalary, benefit);
        const nhif = calcNhif(basicSalary, benefit);

        // NSSF Deductions (assuming these are constants based on your provided constants)
        const NSSF1 = 7000 * 0.06;
        const NSSF2 = (36000 - 7000) * 0.06;

        // Calculate gross salary
        const grossSalary = basicSalary + benefit;

        // Calculate net salary
        const netSalary = grossSalary - (payee + nhif + NSSF1 + NSSF2);

        console.log(`Net Salary: ${netSalary}`);
    }
}