import { combineReducers } from 'redux';
import { galleryReducer } from './gallery/gallery.reducer';
export const rootReducer = combineReducers({
	gallery: galleryReducer
});