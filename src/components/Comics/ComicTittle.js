import React from 'react';

const HeroChar = ({ character }) => {
	return (
		<div className="card">
			<img
				src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
				className="card-img"
				alt="Hero"
			/>
			<div className="card-body">
				<p className="card-text">{character.title}</p>
			</div>
		</div>
	);
};

export default HeroChar;
