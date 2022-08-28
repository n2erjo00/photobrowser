import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';

import App from './App';
import Grid from './components/grid/grid.component'
import Pagination from './components/pagination/pagination.component';

describe('App Component', () => {

  it('renders without crashing', () => {
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter><App /></BrowserRouter>
		</Provider>
	);
	expect(tree).toBeTruthy();
  });
  it('renders grid', () => {
	const gallery = [
		{
			"albumId": 1,
			"id": 1,
			"title": "accusamus beatae ad facilis cum similique qui sunt",
			"url": "https://via.placeholder.com/600/92c952",
			"thumbnailUrl": "https://via.placeholder.com/150/92c952"
		  },
		  {
			"albumId": 1,
			"id": 2,
			"title": "reprehenderit est deserunt velit ipsam",
			"url": "https://via.placeholder.com/600/771796",
			"thumbnailUrl": "https://via.placeholder.com/150/771796"
		  },
		  {
			"albumId": 1,
			"id": 3,
			"title": "officia porro iure quia iusto qui ipsa ut modi",
			"url": "https://via.placeholder.com/600/24f355",
			"thumbnailUrl": "https://via.placeholder.com/150/24f355"
		  },
		  {
			"albumId": 1,
			"id": 4,
			"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
			"url": "https://via.placeholder.com/600/d32776",
			"thumbnailUrl": "https://via.placeholder.com/150/d32776"
		  },
		  {
			"albumId": 1,
			"id": 5,
			"title": "natus nisi omnis corporis facere molestiae rerum in",
			"url": "https://via.placeholder.com/600/f66b97",
			"thumbnailUrl": "https://via.placeholder.com/150/f66b97"
		  },
		  {
			"albumId": 1,
			"id": 6,
			"title": "accusamus ea aliquid et amet sequi nemo",
			"url": "https://via.placeholder.com/600/56a8c2",
			"thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
		  }
	]
	const currentPage = 0;
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter><Grid items={gallery} currentIndex={currentPage + 1} pageSize={gallery.length / 2} /></BrowserRouter>
		</Provider>
	);
	expect(tree).toBeTruthy();
  });

  it('renders pagination', () => {
	const currentPage = 0;
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<Pagination currentPage={currentPage} pagesTotal={20} pageSize={20}/>
			</BrowserRouter>
		</Provider>
	);
	expect(tree).toBeTruthy();
  });

});
