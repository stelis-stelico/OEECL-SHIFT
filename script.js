function predictShift() {
    const shift = document.getElementById("shift").value;
    const inputDate = new Date(document.getElementById("date").value);
    const startDate = new Date("2024-01-03"); // Starting from January 3, 2024
  
    const timeDiff = inputDate - startDate;
    const dayDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  
    const cycleDay = (dayDiff % 16 + 16) % 16; // Ensure positive modulo
  
    let result = "";
  
    switch (shift) {
        case "A":
            result = "Shift A ";
        if (cycleDay < 4) {
            result += `is on day ${cycleDay + 5} of off duty`;
        } else if (cycleDay < 8) {
            result += `is on day ${cycleDay - 3} of morning duty`;
        } else if (cycleDay < 12) {
            result += `is on day ${cycleDay - 7} of night duty`;
        } else {
            result += `is on day ${cycleDay - 11} of off duty`;
        }
        break;
          

        case "B":
        result = "Shift B ";
        if (cycleDay < 4) {
            result += `is on day ${cycleDay + 1} of night duty`;
        } else if (cycleDay < 8) {
            result += `is on day ${cycleDay - 3} of off duty`;
        } else if (cycleDay < 12) {
            result += `is on ${cycleDay - 3} of off duty`;
        } else {
            result += `is on day ${cycleDay - 11} of morning duty`;
        }
        break;

        
        case "C":
        result = "Shift C ";
        if (cycleDay < 4) {
            result += `is on day ${cycleDay + 1} of off duty`;
        } else if (cycleDay < 8) {
            result += `is on day ${cycleDay + 1} of off duty`;
        } else if (cycleDay < 12) {
            result += `is on day ${cycleDay - 7} of morning duty`;
        } else {
            result += `is on day ${cycleDay - 11} of night duty`;
        }
        break;
          
        case "D":
        result = "Shift D ";
        if (cycleDay < 4) {
          result += `is on day ${cycleDay + 1} of morning duty`;
        } else if (cycleDay < 8) {
          result += `is on day ${cycleDay - 3} of night duty`;
        } else {
          result += `is on day ${cycleDay - 7} of off duty`;
        }
        break;
      default:
        result = "Invalid shift";
    }
  
    document.getElementById("result").innerText = result;
  }
  