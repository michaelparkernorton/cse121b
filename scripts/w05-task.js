/* W05: Programming Tasks */

/* Step 3: Declare and initialize global variables */
const templesElement = document.getElementById("temples")
let templeList = []

/* Step 4: async displayTemples Function */
const displayTemples = (temples) => temples.forEach(temple => {
	const article = document.createElement("article")
	const h3 = document.createElement("h3")
	h3.textContent = temple.templeName
	const img = document.createElement("img")
	img.src = temple.imageUrl
	img.alt = temple.location
	article.appendChild(h3)
	article.appendChild(img)
	templesElement.appendChild(article)
});


/* Step 5 async getTemples Function using fetch()*/
const getTemples = async () => {
	const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
	if (response.ok) {
		templeList = await response.json();
	}
	displayTemples(templeList);
	// console.log(templeList);
}

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
