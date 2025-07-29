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
const slideDots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");

let slideNumber = 0;

leftArrow.addEventListener("click", () => {
	slideNumber--;
	let newText = slides[slideNumber].tagLine;
	bannerTxt.innerHTML = newText;
	bannerImg.setAttribute("src", `./assets/images/slideshow/${slides[slideNumber].image}`);

})

rightArrow.addEventListener("click", () => {
	slideNumber++;
	let newText = slides[slideNumber].tagLine;
	bannerTxt.innerHTML = newText;
	bannerImg.setAttribute("src", `./assets/images/slideshow/${slides[slideNumber].image}`);
})

//ajout dots
for (let i = 1; i <= slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dot.setAttribute("id", `dot${i}`);
	slideDots.appendChild(dot);
}


