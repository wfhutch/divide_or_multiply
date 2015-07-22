var input = document.getElementById("input");
var button = document.getElementById("click");

function divideTen(num) {
	return num/10;
} 

function multiplyFive(num) {
	return num * 5;
} 

function newValue(num) {
	if (num >= 10000) {
		return divideTen(num);
		
	}
	if (num < 10000) {
		return multiplyFive(num);
	}
}

function checkNumber() {
	if (input.value === "") {
		alert("Please enter a number into the box");
	} 
	if  (isNaN(input.value)) {
		alert("Please enter a number only");
	} else {
		var newNumber = newValue(input.value);
		document.getElementById("output").innerHTML = "<strong>" + "The new number is " + newNumber + "</strong>";
	}
}

button.onclick = checkNumber;










