// UI
const btnEl = document.querySelector('.dict-btn');
const wordInputEl = document.querySelector('.word-input');
const soundEl = document.querySelector('.speak');

function displayWordResults(data) {
	const definition = data[0].meanings[0].definitions[0].definition;
	const example = data[0].meanings[0].definitions[0].example;
	const sound = data[0].phonetics[0].audio;
	console.log(data);
	console.log(definition);
	console.log(example);
	console.log(sound);
	document.querySelector('audio').setAttribute('src', sound);
}

function getWordData(e) {
	e.preventDefault();
	const word = wordInputEl.value;
	const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
	fetch(dictionaryUrl)
		.then((res) => res.json())
		.then(displayWordResults);
}

function playAudio() {
	document.querySelector('audio').play();
}

btnEl.addEventListener('click', getWordData);
soundEl.addEventListener('click', playAudio);
