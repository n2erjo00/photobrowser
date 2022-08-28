import { useEffect } from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setGallery } from './store/gallery/gallery.action';
import { doGet } from './utils/request';

import Home from './routes/home/home.component';
import GalleryItem from './routes/gallery-item/gallery-item.component';
import NotFound from './routes/not-found/not-found.component';

import './App.css';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getGallery = async() => {
			const gallery = await doGet('http://jsonplaceholder.typicode.com/photos');
			dispatch(setGallery(gallery));
		}
		getGallery();
	}, [dispatch])
	return (
		<div className='App'>
			<Routes>
				<Route element={<Home />} index />
				<Route path="/photo" element={<NotFound />} />
				<Route path="/photo/*" element={<GalleryItem />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
	  </div>
	);
}

export default App;
