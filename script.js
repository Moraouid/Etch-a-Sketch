const container = document.querySelector(".container");
const input = document.querySelector("#grid-size");
const btn = document.querySelector("#btn");
const warning = document.querySelector(".warning");

let grids = 16;


function draw() {
	for (let i = 0; i < grids * grids; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		square.style.width = `calc(100% / ${grids})`;
		square.style.height = `calc(100% / ${grids})`;
		container.appendChild(square);
	}

	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			square.style.background = "white";
			square.style.border = "1px solid black";
		});
	});

	warning.textContent = "";
}

btn.addEventListener("click", () => {
	grids = input.value;
	if(grids > 100)
	{
		warning.textContent = "The max of grid zise is 100";
		return;
	}
	container.innerHTML = "";
	draw();
});

draw();
