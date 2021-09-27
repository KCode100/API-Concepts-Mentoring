const btn = document.querySelector('button');
const imgEl = document.querySelector('.user-img');
const titleEl = document.getElementById('title');
const firstEl = document.getElementById('first');
const lastEl = document.getElementById('last');
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const dobEl = document.getElementById('dob');

function updateProfile(data) {
	let user = data.results[0];
	imgEl.style.backgroundImage = `url("${user.picture.large}")`;
	titleEl.textContent = user.name.title;
	firstEl.textContent = user.name.first;
	lastEl.textContent = user.name.last;
	usernameEl.textContent = user.login.username;
	passwordEl.textContent = user.login.password;
	emailEl.textContent = user.email;
	phoneEl.textContent = user.cell;
	dobEl.textContent = user.dob.date.substring(0, 10);
}

function getUser() {
	fetch('https://randomuser.me/api')
		.then((res) => res.json())
		.then(updateProfile);
}

getUser();

btn.addEventListener('click', getUser);
