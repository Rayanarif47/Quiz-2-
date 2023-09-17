function Result() {
    var num = document.getElementById("userInput").value;
    if (!isNaN(num)) {
        const number = parseInt(num);
        const resultnumber = document.getElementById('resultnum');
        if (number % 2 === 0) {
            resultnumber.textContent = `${number} is even.`;
        } else {
            resultnumber.textContent = `${number} is odd.`;
        }
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}
