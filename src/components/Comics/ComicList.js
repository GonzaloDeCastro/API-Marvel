import React from 'react';
import ComicCard from './ComicCard';

const HeroList = ({ comics, isLoading }) => {
	return isLoading ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<section className="contents">
			{comics.map((comic) => (
				<ComicCard key={comic.id} comic={comic} />
			))}
		</section>
	);
};

export default HeroList;
