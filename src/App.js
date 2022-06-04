import './App.css';
import Header from './components/Header';
import HeroList from './components/HeroList';
import Search from './components/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';

const hash = '871be6448964d9fb153bd9eabb671ff1';
const key = 'd2f74ceaed1589cacec81ceec2c61b9e';

function App() {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [search, setSearch] = useState('');
	useEffect(() => {
		axios
			.get(
				`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${key}&hash=${hash}`
			)
			.then((res) => {
				setCharacters(res.data.data.results);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="App">
			<Header />
			<Search search={(s) => setSearch(s)} />
			<HeroList characters={characters} isLoading={isLoading} />
		</div>
	);
}

export default App;
