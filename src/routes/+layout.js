export const load = ({ fetch }) => {
	const fetchBechdel = async () => {
		const res = await fetch('/api/bechdel');
		const data = await res.json();
		return data;
	}

	return {
		bechdel: fetchBechdel()
	}
}