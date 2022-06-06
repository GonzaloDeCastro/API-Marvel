import React from 'react';

const getHeroByName = ({ characters, isLoading }) => {
	return isLoading ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<section className="contents">
			{characters.map((character) => (
				<li key={character.id}>
					<div className="card">
						<img
							src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
							className="card-img"
							alt="Hero"
						/>
						<div className="card-body screen">
							<p className="card-text"> {character.name}</p>
							<p className="card-text">{character.description}</p>
						</div>
					</div>
				</li>
			))}
		</section>
	);
};

export default getHeroByName;
