// UI
const portraitEl = document.querySelector('.portrait');
const landscapeEl = document.querySelector('.landscape');
const refreshEl = document.querySelector('.refresh');
const searchEl = document.querySelector('.input');
const searchBtn = document.querySelector('.submit');
// API
const portraitCount = 1;
const landscapeCount = 2;
const apiKey = 'DZUlmlIlds57GT3j-aNLm58Ug3n4eUmzquAiub4LhRg';
// spare API key
// const apiKey = 'm5D1UzFiF6AHA02Kxar1vW3JPaycqKxPq_znG-7PqP8';

// Search Feature
function displaySearchResults(e) {
	e.preventDefault();
	portraitEl.innerHTML = '';
	landscapeEl.innerHTML = '';
	getPortrait();
	getLandscape();
}

function displayPortrait(data) {
	// Create link element
	const portraitLink = document.createElement('a');
	portraitLink.setAttribute('href', data[0].links.html);
	portraitLink.setAttribute('target', '_blank');
	portraitEl.appendChild(portraitLink);
	// Create img element
	const portraitImg = document.createElement('img');
	portraitImg.setAttribute('src', data[0].urls.small);
	portraitLink.appendChild(portraitImg);
}

function displayLandscape(data) {
	data.forEach(function (img) {
		// Create link element
		let landscapeLink = document.createElement('a');
		landscapeLink.setAttribute('href', img.links.html);
		landscapeLink.setAttribute('target', '_blank');
		landscapeEl.appendChild(landscapeLink);
		// Create img element
		const landscapeImg = document.createElement('img');
		landscapeImg.setAttribute('src', img.urls.small);
		landscapeLink.appendChild(landscapeImg);
	});
}

async function getPortrait() {
	let input = searchEl.value;
	const portraitUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${portraitCount}&orientation=portrait&query=${input}`;
	try {
		const response = await fetch(portraitUrl);
		const data = await response.json();
		displayPortrait(data);
	} catch (error) {
		console.log(error);
	}
}

async function getLandscape() {
	let input = searchEl.value;
	const landscapeUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${landscapeCount}&orientation=landscape&query=${input}`;
	try {
		const response = await fetch(landscapeUrl);
		const data = await response.json();
		displayLandscape(data);
	} catch (error) {
		console.log(error);
	}
}

getPortrait();
getLandscape();

refreshEl.addEventListener('click', function () {
	portraitEl.innerHTML = '';
	landscapeEl.innerHTML = '';
	getPortrait();
	getLandscape();
});

searchBtn.addEventListener('click', displaySearchResults);
