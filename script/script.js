const bmiCalculator = () => {
	const weight = document.getElementById('weight').value;

	const height = document.getElementById('height').value;

	const total = weight / Math.pow(height, 2);

	document.getElementById('bmi').innerHTML = Math.round(total);

	console.log(total);
};
