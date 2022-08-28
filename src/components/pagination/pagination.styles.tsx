import styled from "styled-components";

export const PaginationContainer = styled.nav`
	margin-top: 20px;
`;

export const PaginationList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	list-style: none;
`;

export const PaginationListItem = styled.li`
	align-items: center;
	border-radius: 16px;
	box-sizing: border-box;
	color: rgba(0, 0, 0, 0.87);
	display: flex;
	font-size: 13px;
    height: 32px;
	justify-content: center;
	letter-spacing: 0.01071em;
    line-height: 1.43;
	margin: auto 4px;
    min-width: 32px;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
		cursor: pointer;
	}
	&.selected {
		background-color: rgba(0, 0, 0, 0.08);
	}

	svg {
		height: auto;
		width: 20px;
	}
`;
