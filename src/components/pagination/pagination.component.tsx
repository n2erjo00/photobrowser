import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { setGalleryPage } from "../../store/gallery/gallery.action";

import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';
import { PaginationContainer, PaginationList, PaginationListItem } from "./pagination.styles";

type PaginationProps = {
	currentPage: number;
	pagesTotal: number;
}

const Pagination = (props: PaginationProps) => {
	const { currentPage, pagesTotal } = props;
	const dispatch = useDispatch();
	const pages = [];
	const endIndex = (currentPage + 10 > pagesTotal) ? pagesTotal : currentPage + 10;
	let startIndex = endIndex - 10;
	while (startIndex < endIndex) {
		pages.push(startIndex)
		++startIndex;
	}
	const moveToIndex = (index: number) => {
		dispatch(setGalleryPage(index));
	}
	return (
		<PaginationContainer>
			<PaginationList>
				{
					currentPage > 0 && (
						<Fragment>
							<PaginationListItem onClick={() => moveToIndex(0)} title="Jump to start">...</PaginationListItem>
							<PaginationListItem onClick={() => moveToIndex(currentPage - 1)} title="Previous"><ArrowLeft/></PaginationListItem>
						</Fragment>
					)
				}
				{
					pages.map(index => (
						<PaginationListItem key={index} className={currentPage === index ? 'selected' : ''} title={`Jump to page ${index + 1}`} onClick={() => moveToIndex(index)}>{index + 1}</PaginationListItem>
					))
				}
				{
					currentPage < (pagesTotal - 10) && (
						<Fragment>
							<PaginationListItem onClick={() => moveToIndex(currentPage + 1)} title="Next"><ArrowRight/></PaginationListItem>
							<PaginationListItem onClick={() => moveToIndex(pagesTotal - 1)} title="Jump to end">...</PaginationListItem>
						</Fragment>
					)
				}
			</PaginationList>
		</PaginationContainer>
	)
}

export default Pagination;

/**
 * const dispatch = useDispatch();
	const paginationRange = [];
	const rangeEnd = (currentPage + 10 > totalCount) ? totalCount : currentPage + 10;
	for (let i = currentPage; i < rangeEnd; ++i) {
		paginationRange.push(i + 1);
	}
	const moveToStart = () => {
		dispatch(setGalleryPage(0));
	}
	const moveToEnd = () => {
		dispatch(setGalleryPage(totalCount / pageSize));
	}
	const moveNextIndex = () => {
		dispatch(setGalleryPage(currentPage + 1));
	}
	const movePrevIndex = () => {
		dispatch(setGalleryPage(currentPage - 1));
	}
	const moveToIndex = index => {
		dispatch(setGalleryPage(index));
	}
	return (
		<PaginationContainer>
			<PaginationList>
				{
					(currentPage > 0) && (
						<Fragment>
							<PaginationListItem onClick={moveToStart} title="Jump to start">...</PaginationListItem>
							<PaginationListItem onClick={movePrevIndex} title="Previous"><ArrowLeft/></PaginationListItem>
						</Fragment>
					)
				}
				{
					paginationRange.map((value, key) => (
						<PaginationListItem key={key} onClick={() => moveToIndex(value - 1)} className={currentPage + 1 === value && 'selected'} title={`Jump to page ${value}`}>{value}</PaginationListItem>
					))
				}
				{
					(currentPage === 0 || currentPage % totalCount !== 0) && (
						<Fragment>
							<PaginationListItem onClick={moveNextIndex} title="Next"><ArrowRight/></PaginationListItem>
							<PaginationListItem onClick={moveToEnd} title="Jump to end">...</PaginationListItem>
						</Fragment>
					)
				}
			</PaginationList>
		</PaginationContainer>
	)
 */