import '../../App.css';
import Header from '../Header';
import HeroList from './HeroList';
import Search from './Search';
import axios from 'axios';
import { useState, useEffect } from 'react';

const hash = '871be6448964d9fb153bd9eabb671ff1';
const key = 'd2f74ceaed1589cacec81ceec2c61b9e';
let randomChar = '';
let wordChars = 'abcdefghijklmnopqrstuvwxyz';
let page = 0;

const generateRandom = (x) => {
	randomChar = wordChars.charAt(Math.floor(Math.random() * wordChars.length));
};
generateRandom(1);

const CharacterScreen = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (search === '') {
			axios
				.get(
					`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${randomChar}&ts=1&apikey=${key}&hash=${hash}`
				)
				.then((res) => {
					setCharacters(res.data.data.results);
					console.log(res.data.data.results);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		} else {
			axios
				.get(
					`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${key}&hash=${hash}`
				)
				.then((res) => {
					setCharacters(res.data.data.results);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		}
	}, [search]);
	const handleNext = () => {
		page += 10;
		axios
			.get(
				`https://gateway.marvel.com/v1/public/characters?limit=10&offset=${page}&ts=1&apikey=${key}&hash=${hash}`
			)
			.then((res) => {
				setCharacters(res.data.data.results);
				console.log(res.data.data.results);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	};

	const handleBack = () => {
		if (page >= 20) {
			page -= 10;
			axios
				.get(
					`https://gateway.marvel.com/v1/public/characters?limit=10&offset=${page}&ts=1&apikey=${key}&hash=${hash}`
				)
				.then((res) => {
					setCharacters(res.data.data.results);
					console.log(res.data.data.results);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="App">
			<Header />
			<Search search={(s) => setSearch(s)} />
			<HeroList characters={characters} isLoading={isLoading} />
			<div className="pages">
				<button onClick={handleBack}>Back</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
};

export default CharacterScreen;
