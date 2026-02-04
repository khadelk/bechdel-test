import * as http from 'node:http';
import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const hostname = '127.0.0.1';
const port = 3002;

const apiKey = process.env.MOVIEDB_KEY;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
});

async function getMovieData(movie) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/tt${movie}?api_key=${apiKey}`);
	const movies = await res.json();
	return movies;
}

import combined from './src/lib/combined.json' assert { type: 'json' };
const currMovieData = combined.length && combined.length > 0 ? combined : [];

const newData = [];

async function createData(currItem) {
	// Get additional IMDB movie data
	const imdbData = await getMovieData(currItem.imdbid);
	const newObj = currItem;
	newObj.backdrop_path = imdbData?.backdrop_path;
	newObj.poster_path = imdbData?.poster_path;
	newObj.original_language = imdbData?.original_language;
	newObj.overview = imdbData?.overview;
	newObj.genres = imdbData?.genres;
	newData.push(newObj);
}

const startTime = performance.now();

// Fetch films from Bechdel API
const data = await fetch('http://bechdeltest.com/api/v1/getAllMovies')
	.then(async (response) => {
		const data = response.json();
		data
			.then(async (d) => {
				let curr = 0;
				// Get the number of films in the database
				let currEnd = d.length;
				let currMovieDataEnd = currMovieData.length;

				// If the counter is the same length as what's in the bechdel API, that means there are no new movies to add.
				if (currMovieDataEnd == currEnd) {
					console.log('No new data to add. Exiting');
					return;
				}

				// While the counter is less than the length of the database, call createData on the item
				// At the current index of the database
				curr = currMovieDataEnd;
				while (curr < currEnd) {
					await createData(d[curr]);
					curr++;
				}

				const updatedCombined = combined.concat(newData);

				fs.writeFile('./src/lib/combined.json', JSON.stringify(updatedCombined), (err) => {
					if (err) return err;
				});
			})
			.catch(function (err) {
				console.log('Error', err);
			})
			.finally(function () {
				console.log('done');
				const endTime = performance.now();
				console.log(`Call took ${endTime - startTime} milliseconds`);
			});
	})
	.catch(function (err) {
		console.log('Unable to fetch -', err);
	})
	.finally(() => {
		console.log('Done.');
	});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
