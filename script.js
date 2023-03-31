window.addEventListener('load', function () {
	const firstHeader = document.querySelector('.first-header');

	const redElement = document.querySelector("#red");
	redElement.addEventListener('click', () => {
		firstHeader.style.color = "red";
	})

	const greenElement = document.querySelector("#green");
	greenElement.addEventListener('click', () => {
		firstHeader.style.color = "green";
	})


	const blueElement = document.querySelector("#blue");
	blueElement.addEventListener('click', () => {
		firstHeader.style.color = "blue";
	})
})