import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterScreen from '../components/Characters/CharacterScreen';
import ComicsScreen from '../components/Comics/ComicsScreen';
import HeroScreen from '../components/Characters/HeroScreen';

import SearchScreen from '../components/Search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<CharacterScreen />} />
				<Route path="/API-Marvel" element={<CharacterScreen />} />
				<Route path="/API-Marvel/characters/" element={<CharacterScreen />} />
				<Route
					path="/API-Marvel/characters/page/:page"
					element={<CharacterScreen />}
				/>
				<Route path="/API-Marvel/comics" element={<ComicsScreen />} />
				<Route
					path="/API-Marvel/characters/page/:page/hero/:heroName"
					element={<HeroScreen />}
				/>

				<Route path="/search" element={<SearchScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
