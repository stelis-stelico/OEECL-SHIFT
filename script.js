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
            result += `(Day ${cycleDay + 5} off duty)`;
        } else if (cycleDay < 8) {
            result += `(Day ${cycleDay - 3} morning duty)`;
        } else if (cycleDay < 12) {
            result += `(Day ${cycleDay - 7} night duty)`;
        } else {
            result += `(Day ${cycleDay - 11} off duty)`;
        }
        break;
          

        case "B":
        result = "Shift B ";
        if (cycleDay < 4) {
            result += `(Day ${cycleDay + 1} night duty)`;
        } else if (cycleDay < 8) {
            result += `(Day ${cycleDay - 3} off duty)`;
        } else if (cycleDay < 12) {
            result += `(Day ${cycleDay - 3} off duty)`;
        } else {
            result += `(Day ${cycleDay - 11} morning duty)`;
        }
        break;

        
        case "C":
        result = "Shift C ";
        if (cycleDay < 4) {
            result += `(Day ${cycleDay + 1} off duty)`;
        } else if (cycleDay < 8) {
            result += `(Day ${cycleDay + 1} off duty)`;
        } else if (cycleDay < 12) {
            result += `(Day ${cycleDay - 7} morning duty)`;
        } else {
            result += `(Day ${cycleDay - 11} night duty)`;
        }
        break;
          
        case "D":
        result = "Shift D ";
        if (cycleDay < 4) {
          result += `(Day ${cycleDay + 1} morning duty)`;
        } else if (cycleDay < 8) {
          result += `(Day ${cycleDay - 3} night duty)`;
        } else {
          result += `(Day ${cycleDay - 7} off duty)`;
        }
        break;
      default:
        result = "Invalid shift";
    }
  
    document.getElementById("result").innerText = result;
  }
  