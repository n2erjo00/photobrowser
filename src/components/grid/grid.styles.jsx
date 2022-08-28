import styled from "styled-components";

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, 1fr);

	@media (min-width: 576px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
`;

export const GridItem = styled.div`
	padding-left: 0.25rem;
	padding-right: 0.25rem;
`;
