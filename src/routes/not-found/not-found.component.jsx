import LinkButton from '../../components/link-button/link-button.component';

const NotFound = () => {
	return (
		<main>
			<h1>This is not the route you are looking for</h1>
			<LinkButton to='/' text='Back to browsing'/>
		</main>
	)
}

export default NotFound;
