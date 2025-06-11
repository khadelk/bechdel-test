import data from '$lib/combined.json';

export const load = async () => {
	return {
		bechdel: data
	};
};
