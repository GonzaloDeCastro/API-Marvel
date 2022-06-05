import React from 'react';
import { Link } from 'react-router-dom';

const HeroChar = ({ character }) => {
	return (
		<div className="card">
			<img
				src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
				className="card-img"
				alt="Hero"
			/>
			<div className="card-body">
				<p className="card-text">
					{character.name}
					<Link to={`/API-Marvel/hero/${character.name}`}> More...</Link>
				</p>
			</div>
		</div>
	);
};

export default HeroChar;
