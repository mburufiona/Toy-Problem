function calcDemeritsPoints() {
    const speed = parseInt(prompt('Enter speed of car in (km/h)'));

    let output;

    switch (true) {
        case speed <= 70:
            output = "Ok";
            break;
        case speed > 70 && speed <= 74:
            output = "1 point";
            break;
        case speed >= 75 && speed <= 79:
            output = "2 points";
            break;
        case speed >= 80 && speed <= 84:
            output = "3 points";
            break;
        case speed >= 85 && speed <= 89:
            output = "4 points";
            break;
        case speed >= 90 && speed <= 94:
            output = "5 points";
            break;
        case speed >= 95 && speed <= 99:
            output = "6 points";
            break;
        case speed >= 100 && speed <= 104:
            output = "7 points";
            break;
        case speed >= 105 && speed <= 109:
            output = "8 points";
            break;
        case speed >= 110 && speed <= 114:
            output = "9 points";
            break;
        case speed >= 115 && speed <= 119:
            output = "10 points";
            break;
        case speed >= 120 && speed <= 124:
            output = "11 points";
            break;
        case speed >= 125 && speed <= 129:
            output = "12 points";
            break;
        case speed >= 130:
            output = "License suspended";
            break;
        default:
            output = "Invalid speed input"; // Handle cases that shouldn't happen with proper input validation
    }

    return output;
}

// Example usage:
const points = calcDemeritsPoints();
console.log(points);  // Outputs the appropriate message based on the speed entered