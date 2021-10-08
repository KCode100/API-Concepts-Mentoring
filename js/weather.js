// UI
const submitBtnEl = document.querySelector('.submit-city');
const msgEl = document.querySelector('.error-msg');
const cityEl = document.querySelector('.city');
const description = document.querySelector('.description');
const iconEl = document.querySelector('.icon');
const extraDescEl = document.querySelector('.extra-desc');

// Globals
let city = '';
const format = 'metric';
const weatherKey = '473d8db7c8988d4ee2df88190ff5f201';
function getData(e) {
	e.preventDefault();
	// remove error msg
	msgEl.hidden = true;

	// Get input field
	const cityInputEl = document.querySelector('.city-input');
	city = cityInputEl.value;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=${format}`;
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			// Display icon
			iconEl.innerHTML = data.weather[0].icon;
			iconEl.setAttribute(
				'src',
				`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
			);

			// Display city name
			cityEl.textContent = `${data.name} (${data.sys.country})`;

			// Display description
			description.innerHTML = `
				${data.weather[0].description}
				<span class="degrees">${data.main.temp}&#176;C</span>
			`;

			// Display extra descriptions
			extraDescEl.innerHTML = `
				<span>Feels like: ${data.main.feels_like}&#176;C</span>
				<span>Min: ${data.main.temp_min}&#176;C</span>
				<span>Max: ${data.main.temp_max}&#176;C</span>
			`;
			extraDescEl.hidden = false;
		})
		.catch(() => {
			msgEl.hidden = false;
			msgEl.textContent = 'City not found...';
		});
}

submitBtnEl.addEventListener('click', getData);
