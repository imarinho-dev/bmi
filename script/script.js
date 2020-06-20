const bmiCalculator = () => {
	const weight = document.getElementById('weight').value;

	const height = document.getElementById('height').value;

	const total = weight / Math.pow(height, 2);

	if (weight === '' || height === '') {
		alert('Define the correct value to weight and height!');
	} else {
		document.getElementById('bmi').innerHTML = Math.round(total);
	}
};
