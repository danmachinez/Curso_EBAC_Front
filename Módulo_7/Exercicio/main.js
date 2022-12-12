const form = document.getElementById('form-validation');

function validForm(numbaB, numbaA) {
	return numbaB > numbaA;
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let isValid = false;

	const numberA = document.getElementById('a-field');
	const numberB = document.getElementById('b-field');
	const successMessage = `O número ${numberB.value} é maior que o número ${numberA.value}`;

	isValid = validForm(numberB.value, numberA.value);
	if (isValid) {
		const containerSuccessMessage = document.querySelector('.success-message');

		containerSuccessMessage.innerHTML = successMessage;
		containerSuccessMessage.style.display = 'block';
		document.querySelector('.error-message').style.display = 'none';

		numberA.value = '';
		numberB.value = '';
	} else {
		document.querySelector('.error-message').style.display = 'block';
		document.querySelector('.success-message').style.display = 'none';

		numberA.value = '';
		numberB.value = '';
	}
});
