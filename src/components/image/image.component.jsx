import { ImageResponsive } from "./image.styles";

const Image = ({ src, alt }) => {
	return (
		<ImageResponsive src={src} alt={alt} loading="lazy" />
	)
}

export default Image;
