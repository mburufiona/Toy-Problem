function calcDemeritsPoints(speed){

// Calculate Demerit Points.
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
const points = calcDemeritsPoints()
console.log(points)