import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroList from './HeroList';
import axios from 'axios';
import Header from '../Header';

const hash = '871be6448964d9fb153bd9eabb671ff1';
const key = 'd2f74ceaed1589cacec81ceec2c61b9e';

const HeroScreen = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { heroName } = useParams();
	useEffect(() => {
		axios
			.get(
				`https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1&apikey=${key}&hash=${hash}`
			)
			.then((res) => {
				setCharacters(res.data.data.results);
				console.log(res.data.data.results);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(heroName);
	return (
		<div>
			<Header />
			<HeroList characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default HeroScreen;
//https://gateway.marvel.com/v1/public/characters?name=Namor&ts=1&apikey=d2f74ceaed1589cacec81ceec2c61b9e&hash=871be6448964d9fb153bd9eabb671ff1
