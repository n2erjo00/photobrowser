const initialState = {
	items: null,
	currentPage: 0
};

export const galleryReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'FETCH_GALLERY':
			return { ...state, items: payload };
		case 'CHANGE_PAGE':
			return { ...state, currentPage: payload };
		default:
			return state;
	}
}