import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterScreen from '../components/Characters/CharacterScreen';
import ComicsScreen from '../components/Comics/ComicsScreen';
import SearchScreen from '../components/Search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<CharacterScreen />} />
				<Route path="/comics" element={<ComicsScreen />} />
				<Route path="/search" element={<SearchScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
