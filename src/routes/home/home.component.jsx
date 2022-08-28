import { useSelector } from "react-redux";
import { selectGallery, selectGalleryPage } from "../../store/gallery/gallery.selector";

import Grid from "../../components/grid/grid.component";
import Pagination from "../../components/pagination/pagination.component";
import { Fragment } from "react";

const Home = () => {
	const gallery = useSelector(selectGallery);
	const currentPage = useSelector(selectGalleryPage);
	return (
		<main>
			<h1>Photobrowser</h1>
			{
				gallery && (
					<Fragment>
						<Grid items={gallery} currentIndex={currentPage + 1} pageSize={gallery.length / 250} />
						<Pagination currentPage={currentPage} pagesTotal={gallery.length / 20} pageSize={20}/>
					</Fragment>
				)
			}
		</main>
	)
}

export default Home;
