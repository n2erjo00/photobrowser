import { Link } from "react-router-dom";

import Image from "../image/image.component";

import { GridContainer, GridItem } from "./grid.styles";

const Grid = ({ items, currentIndex, pageSize }) => {
	return (
		<GridContainer>
			{
				items.slice((currentIndex - 1) * pageSize, currentIndex * pageSize).map(({ id, thumbnailUrl, title}) => (
					<GridItem key={id}>
						<Link to={`photo/${id}`} title={title}>
							<Image src={thumbnailUrl} alt={title}/>
						</Link>
					</GridItem>
				))
			}
		</GridContainer>
	)
}

export default Grid;
