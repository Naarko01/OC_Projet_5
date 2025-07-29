const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let slideNumber = 0;

createBulletPoints();
toggleSelectedDot(slideNumber);

leftArrow.addEventListener("click", () => {
	toggleSelectedDot(slideNumber);
	if (slideNumber === 0) {
		slideNumber = slides.length - 1;
	}
	else {
		slideNumber--;
	}
	moveSlider(slideNumber);
	toggleSelectedDot(slideNumber);
})

rightArrow.addEventListener("click", () => {
	toggleSelectedDot(slideNumber);
	if (slideNumber === slides.length - 1) {
		slideNumber = 0;
	}
	else {
		slideNumber++;
	}
	moveSlider(slideNumber);
	toggleSelectedDot(slideNumber);
})

/**
 * @param {Number} index : variable to iterate through "slides" table
 */
function moveSlider(index) {
	const bannerImg = document.querySelector(".banner-img");
	const bannerTxt = document.querySelector("#banner p");
	let newText = slides[index].tagLine;
	bannerTxt.innerHTML = newText;
	bannerImg.setAttribute("src", `./assets/images/slideshow/${slides[index].image}`);
}

/**
 * @param {Number} index : variable to iterate through dot list
 */
function toggleSelectedDot(index) {
	const selectedDot = document.getElementById(`dot${index + 1}`) //+1 because .dot start to 1
	selectedDot.classList.toggle("dot_selected");
}

/**
 * create bullet points to follow slide order
 */
function createBulletPoints() {
	const slideDots = document.querySelector(".dots");

	for (let i = 1; i <= slides.length; i++) {
		let dotDiv = document.createElement("div");
		dotDiv.classList.add("dot");
		dotDiv.setAttribute("id", `dot${i}`);
		slideDots.appendChild(dotDiv);
	}
}



