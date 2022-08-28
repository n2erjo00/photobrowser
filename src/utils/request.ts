import axios from 'axios';

export const doGet = async (url: string) => {
	const { data } = await axios.get(url, {
		headers: {
			'Content-type': 'application/json'
		}
	});
	return data;
}