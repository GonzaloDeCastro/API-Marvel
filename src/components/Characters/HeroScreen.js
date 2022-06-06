import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import GetHeroByName from '../helperApi/GetHeroByName';

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
				const { results } = res.data.data;
				console.log(results);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, [heroName]);

	return (
		<div>
			<Header />
			<GetHeroByName characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default HeroScreen;
