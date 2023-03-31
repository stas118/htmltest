window.addEvenListener('load', function () {
	const firstHeader = document.querySelector('.first-header');

	const redElement = document.querySelector("#red");
	redElement.addEvenListener('click', () => {
		firstHeader.style.color = "red";
	})

	const greenElement = document.querySelector("#green");
	greenElement.addEvenListener('click', () => {
		firstHeader.style.color = "green";
	})


	const blueElement = document.querySelector("#blue");
	blueElement.addEvenListener('click', () => {
		firstHeader.style.color = "blue";
	})
})