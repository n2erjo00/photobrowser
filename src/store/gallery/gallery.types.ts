export enum GalleryActionType {
	FETCH_GALLERY = 'FETCH_GALLERY',
	CHANGE_PAGE = 'CHANGE_PAGE'
}

export type GalleryItem = {
	albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
