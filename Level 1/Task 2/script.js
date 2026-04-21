
function showGreeting() {
    let hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning";
        document.body.style.backgroundColor = "lightyellow";
    } 
    else if (hour < 18) {
        message = "Good Afternoon";
        document.body.style.backgroundColor = "lightblue";
    } 
    else {
        message = "Good Evening";
        document.body.style.backgroundColor = "lightcoral";
    }

    alert(message);
}


function addNumbers() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter both numbers");
        return;
    }

    let sum = number1 + number2;

    document.getElementById("result").innerText = "Result: " + sum;
} 