// Inject css into DOM using webpack
import './index.css';
import { hello } from './app/App';

// Variables
const button = document.querySelector('#button');

const start = () => {
	init();
};

const init = () => {
	registerListeners();
};

const registerListeners = () => {
	button.addEventListener('click', () => {
		alert(hello());
	});
};

start();