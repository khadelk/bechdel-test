import { writable } from 'svelte/store';
import json from '../bechdel-data.json';
import movieJson from '../movie-data.json';

export const bechdelData = writable(json)

export const movieData = writable(movieJson)

export const displayMovies = writable([]);

export const filteredData = writable([]);

// create a new json object with rating and number of movies
export const numMovies = writable({});
bechdelData.subscribe(value => {
	numMovies.subscribe(val => val['0'] = value.filter(movie => movie.rating == 0).length) 
	numMovies.subscribe(val => val['1'] = value.filter(movie => movie.rating == 1).length)
	numMovies.subscribe(val => val['2'] = value.filter(movie => movie.rating == 2).length)
	numMovies.subscribe(val => val['3'] = value.filter(movie => movie.rating == 3).length)
})

export let filteredBechdelData = writable([])

export const bechdelClicked = writable(false);
export const genreClicked = writable(false);
export const yearClicked = writable(false);