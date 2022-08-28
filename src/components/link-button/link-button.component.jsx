import { LinkButtoLink } from "./link-button.styles";

const LinkButton = ({ to, text }) => {
	return (
		<LinkButtoLink to={to}>{text}</LinkButtoLink>
	)
}

export default LinkButton;
