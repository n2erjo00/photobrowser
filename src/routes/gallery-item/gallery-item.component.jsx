import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectGallery } from "../../store/gallery/gallery.selector";
import Image from "../../components/image/image.component";
import LinkButton from "../../components/link-button/link-button.component";

const GalleryItem = () => {
	const location = useLocation();
	const { pathname } = location;
	const id = pathname.substring(pathname.lastIndexOf('/', pathname.length) + 1);
	const gallery = useSelector(selectGallery);
	if (!gallery) {
		return 'Loading...';
	}
	const { 0: { title, url }} = gallery.filter(item => item.id === id * 1);
	return (
		<main>
			<h1>{title}</h1>
			<Image src={url} alt={title} />
			<div>
				<LinkButton to='/' text='Back to browsing'/>
			</div>
		</main>
	)
}

export default GalleryItem;
