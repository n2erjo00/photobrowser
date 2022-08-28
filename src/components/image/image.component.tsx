import { ImageResponsive } from "./image.styles";

type ImageProps = {
	src: string;
	alt: string;
}

const Image = (props: ImageProps) => {
	const { src, alt } = props;
	return (
		<ImageResponsive src={src} alt={alt} loading="lazy" />
	)
}

export default Image;
