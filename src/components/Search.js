import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ search }) => {
	const [text, setText] = useState('');

	const handleSearch = (e) => {
		setText(e.target.value);
		search(e);
	};

	return (
		<div className="containerInput">
			<input
				type="text"
				placeholder="Search a Hero"
				autoFocus
				onChange={handleSearch}
				value={text}
			/>
			<button className="btn btn-success">
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</div>
	);
};

export default Search;
