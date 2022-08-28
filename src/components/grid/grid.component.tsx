import { Link } from "react-router-dom";

import { GalleryItem } from "../../store/gallery/gallery.types";
import Image from "../image/image.component";

import { GridContainer, GridItem } from "./grid.styles";

type GridProps = {
	items: GalleryItem[];
	currentIndex: number;
	pageSize: number
}

const Grid = (props: GridProps) => {
	const { items, currentIndex, pageSize } = props;
	return (
		<GridContainer>
			{
				items.slice((currentIndex - 1) * pageSize, currentIndex * pageSize).map((gridItemProps: GalleryItem) => {
					const { id, thumbnailUrl, title} = gridItemProps;
					return (<GridItem key={id}>
						<Link to={`photo/${id}`} title={title}>
							<Image src={thumbnailUrl} alt={title}/>
						</Link>
					</GridItem>
					)
				})
			}
		</GridContainer>
	)
}

export default Grid;
