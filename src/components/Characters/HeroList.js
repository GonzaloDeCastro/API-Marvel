import React from 'react';
import HeroChar from './HeroCard';

const HeroList = ({ characters, isLoading }) => {
	return isLoading ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<section className="contents">
			{characters.map((character) => (
				<HeroChar key={character.id} character={character} />
			))}
		</section>
	);
};

export default HeroList;
