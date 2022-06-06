import '../../App.css';
import { useState, useEffect } from 'react';
import Header from '../Header';
import ComicList from './ComicList';
import Search from './Search';
import axios from 'axios';

const hash = '871be6448964d9fb153bd9eabb671ff1';
const key = 'd2f74ceaed1589cacec81ceec2c61b9e';
let randomChar = '';
let wordChars = 'abcdefghijklmnopqrstuvwxyz';

//comic Random
const generateRandom = (x) => {
	randomChar = wordChars.charAt(Math.floor(Math.random() * wordChars.length));
};
generateRandom(1);

const ComicsScreen = () => {
	const [comics, setcomics] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [search, setSearch] = useState('');
	useEffect(() => {
		if (search === '') {
			axios
				.get(
					`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${randomChar}&ts=1&apikey=${key}&hash=${hash}`
				)
				.then((res) => {
					setcomics(res.data.data.results);
					console.log(res.data.data.results);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		} else {
			axios
				.get(
					`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&ts=1&apikey=${key}&hash=${hash}`
				)
				.then((res) => {
					setcomics(res.data.data.results);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		}
	}, [search]);

	return (
		<div className="App">
			<Header />
			<Search search={(s) => setSearch(s)} />
			<ComicList comics={comics} isLoading={isLoading} />
		</div>
	);
};

export default ComicsScreen;
