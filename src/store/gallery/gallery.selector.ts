import { RootState } from "../store";
import { GalleryItem } from "./gallery.types";

export const selectGallery = (state: RootState): GalleryItem[] => state.gallery.items;
export const selectGalleryPage = (state: RootState): number => state.gallery.currentPage;
