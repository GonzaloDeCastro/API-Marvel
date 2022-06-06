import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({ characters, isLoading }) => {
	return isLoading ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<section className="contents">
			{characters.map((character) => (
				<HeroCard key={character.id} character={character} />
			))}
		</section>
	);
};

export default HeroList;
