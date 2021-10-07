// UI
const btnEl = document.querySelector('.dict-btn');
const wordInputEl = document.querySelector('.word-input');
const soundEl = document.querySelector('.speak');
const wordEl = document.querySelector('.word');
const defEl = document.querySelector('.definition');
const exampleEl = document.querySelector('.example');
const synonymsEl = document.querySelector('.synonyms');

// GLOBALS
let word = 'inevitable';

function display(word, definition, example, synonyms) {
	// Word
	wordEl.textContent = word;
	// definition
	defEl.textContent = definition;
	// example
	exampleEl.textContent = `"${example}"`;
	// synonyms
	if (synonyms.length === 0) {
		document.querySelector('.syn-section').hidden = true;
	} else {
		document.querySelector('.syn-section').hidden = false;
		synonymsEl.innerHTML = '';
		synonyms.forEach((el) => {
			const synonym = document.createElement('li');
			synonym.textContent = el;
			synonymsEl.appendChild(synonym);
		});
	}
}

function displayWordResults(data) {
	const definition = data[0].meanings[0].definitions[0].definition;
	const synonyms = data[0].meanings[0].definitions[0].synonyms;
	const example = data[0].meanings[0].definitions[0].example;
	const sound = data[0].phonetics[0].audio;
	console.log(data);
	display(word, definition, example, synonyms);

	// Set audio
	document.querySelector('audio').src = sound;
}

function getWordData(e) {
	e.preventDefault();
	word = wordInputEl.value;
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
getWordData();
