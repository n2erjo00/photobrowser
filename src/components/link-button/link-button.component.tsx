import { LinkButtoLink } from "./link-button.styles";

type LinkButtonProps = {
	to: string;
	text: string;
}

const LinkButton = (props: LinkButtonProps) => {
	const { to, text } = props;
	return (
		<LinkButtoLink to={to}>{text}</LinkButtoLink>
	)
}

export default LinkButton;
