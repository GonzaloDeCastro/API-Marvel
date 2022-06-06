import React from 'react';

const ComicCard = ({ comic }) => {
	return (
		<div className="card">
			<img
				src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
				className="card-img"
				alt="Hero"
			/>
			<div className="card-body">
				<p className="card-text">{comic.title}</p>
			</div>
		</div>
	);
};

export default ComicCard;
