export const setGallery = payload => {
	return { type: 'FETCH_GALLERY', payload };
}

export const setGalleryPage = payload => {
	return { type: 'CHANGE_PAGE', payload }
}
