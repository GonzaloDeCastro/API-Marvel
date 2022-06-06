import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ character, page }) => {
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
					<Link
						to={`/API-Marvel/characters/page/${page}/hero/${character.name}`}
					>
						{' '}
						More...
					</Link>
				</p>
			</div>
		</div>
	);
};

export default HeroCard;
