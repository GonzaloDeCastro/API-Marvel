import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
	const [character, setCharacter] = useState([]);
	const [search, setSearch] = useState('');
	useEffect(() => {
		axios
			.get(
				`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d2f74ceaed1589cacec81ceec2c61b9e&hash=871be6448964d9fb153bd9eabb671ff1`
			)
			.then((res) => {
				setCharacter(res.data.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className="App">
			<h1>Marvel</h1>
			<div className="containerInput">
				<input
					className="form-control inputSearch"
					value={search}
					placeholder="Search Hero"
					onChange={handleSearch}
				/>
				<button className="btn btn-success">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{character.map((charact) => (
					<div className="col" key={charact.id}>
						<div className="card">
							<img
								src={`${charact.thumbnail.path}.${charact.thumbnail.extension}`}
								className="card-img-top"
								style={{ width: '80%' }}
								alt="Hero"
							/>
							<div className="card-body">
								<p className="card-text">{charact.name}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
