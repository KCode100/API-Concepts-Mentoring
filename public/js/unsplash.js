// UI
const portraitEl = document.querySelector('.portrait');
const landscapeEl = document.querySelector('.landscape');
const refreshEl = document.querySelector('.refresh');
// API
const portraitCount = 1;
const landscapeCount = 2;
const apiKey = 'DZUlmlIlds57GT3j-aNLm58Ug3n4eUmzquAiub4LhRg';
const portraitUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${portraitCount}&orientation=portrait`;
const landscapeUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${landscapeCount}&orientation=landscape`;

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
	try {
		const response = await fetch(portraitUrl);
		const data = await response.json();
		displayPortrait(data);
	} catch (error) {}
}

async function getLandscape() {
	try {
		const response = await fetch(landscapeUrl);
		const data = await response.json();
		displayLandscape(data);
	} catch (error) {}
}

getPortrait();
getLandscape();

refreshEl.addEventListener('click', function () {
	portraitEl.innerHTML = '';
	landscapeEl.innerHTML = '';
	getPortrait();
	getLandscape();
});
