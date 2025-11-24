function decimalToBinary(num) {
  // your code here
	return Number(num).toString(2);
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
