import React from 'react';
import ReactDOM from 'react-dom/client';
import CharacterScreen from './components/Characters/CharacterScreen';
import ComicScreen from './components/Comics/ComicsScreen';
import 'bootstrap/dist/css/bootstrap.css';
import MarvelApp from './MarvelApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MarvelApp />
	</React.StrictMode>
);
