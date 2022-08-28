import { GalleryActionType, GalleryItem } from "./gallery.types";

export const setGallery = (payload: GalleryItem[]) => {
	return { type: GalleryActionType.FETCH_GALLERY, payload };
}

export const setGalleryPage = (payload: number) => {
	return { type: GalleryActionType.CHANGE_PAGE, payload }
}
