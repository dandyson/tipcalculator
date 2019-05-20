function tipCalc() {

    // Input 
    var userAmount = document.getElementById("userAmount").value;
    var tip = document.getElementById("options").value;
    var peopleAmount = document.getElementById("peopleAmount").value;
    
    // Validate input
    
    if(userAmount == "") {
        alert("Please enter values");
        return;
    }
    
    // If the number of people box is empty or just one person
    
    if(peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // Calculate tip
    var total = (userAmount * tip) / peopleAmount;
    // Round to 2 decimal places
    total = Math.round(total * 100) / 100;
    // To always have two digits after a decimal point
    total = total.toFixed(2);
    //Display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById('tip').innerHTML = total;
    
    }
    
    // Hide tip on load
    document.getElementById("totalTip").style.display = "none";
    
    // Click to call function
    document.getElementById("calculate").onclick = function() {
        tipCalc();
    }
    