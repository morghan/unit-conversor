function convert() {
	//Get the input's value
	let number = document.getElementById('number').value;

	let lengthParagraph = document.getElementById('length-conversion');

	//Round the conversion to 3 decimal places
	let metersToFeet = (number * 3.28084).toFixed(3);
	let feetToMeters = (number * 0.3048).toFixed(3);

	//Use conditional (ternary) operator to verify existence of input value
	//to render accordingly into template literal
	lengthParagraph.textContent =
		`${number ? number : 0} meters = ${metersToFeet} feet | ` +
		`${number ? number : 0} feet = ${feetToMeters} meters`;

	//Rinse and repeat
	let volumeParagraph = document.getElementById('volume-conversion');
	let litersToGallons = (number * 0.264172).toFixed(3);
	let gallonsToLiters = (number * 3.78541).toFixed(3);
	volumeParagraph.textContent =
		`${number ? number : 0} liters = ${litersToGallons} gallons | ` +
		`${number ? number : 0} gallons = ${gallonsToLiters} liters`;

	let massParagraph = document.getElementById('mass-conversion');
	let kilosToPounds = (number * 2.20462).toFixed(3);
	let poundsToKilos = (number * 0.453592).toFixed(3);
	massParagraph.textContent =
		`${number ? number : 0} kilos = ${kilosToPounds} pounds | ` +
		`${number ? number : 0} pounds = ${poundsToKilos} kilos`;
}
