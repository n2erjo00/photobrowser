import { AnyAction } from "@reduxjs/toolkit";
import { GalleryActionType, GalleryItem } from "./gallery.types";

export type GalleryState = {
	readonly items: GalleryItem[] | null;
	readonly currentPage: number
}

const initialState: GalleryState = {
	items: null,
	currentPage: 0
};

export const galleryReducer = (state = initialState, action = {} as AnyAction) => {
	switch (action.type) {
		case GalleryActionType.FETCH_GALLERY:
			return { ...state, items: action.payload };
		case GalleryActionType.CHANGE_PAGE:
			return { ...state, currentPage: action.payload };
		default:
			return state;
	}
}