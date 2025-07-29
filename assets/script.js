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
selectActiveDot(slideNumber);

leftArrow.addEventListener("click", () => {
	if (slideNumber === 0) {
		slideNumber = slides.length - 1;
	}
	else {
		slideNumber--;
	}
	moveSlider(slideNumber);
	selectActiveDot(slideNumber);
})

rightArrow.addEventListener("click", () => {
	if (slideNumber === slides.length - 1) {
		slideNumber = 0;
	}
	else {
		slideNumber++;
	}
	moveSlider(slideNumber);
	selectActiveDot(slideNumber);
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
 * @param {Number} index : variable to iterate through "dot" list
 */
function selectActiveDot(index) {
	let dotList = document.querySelectorAll(".dot");
	let className = "dot_selected";
	//remove the class on every element for each function call
	for (let i = 0; i < dotList.length; i++) {
		if (dotList[i].classList.contains(className)) {
			dotList[i].classList.remove(className);
		}
	}
	//adding the class on the targeted element
	dotList[index].classList.add(className);
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



