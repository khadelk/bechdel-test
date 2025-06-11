import * as http from 'node:http';
import * as fs from 'fs';
import dotenv from 'dotenv';
// import { fetch, setGlobalDispatcher, Agent } from 'undici';
// setGlobalDispatcher(new Agent({ connect: { timeout: 100_000 } }));

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

const newData = [];

async function createData(currItem) {
	const imdbData = await getMovieData(currItem.imdbid);
	const newObj = currItem;
	newObj.backdrop_path = imdbData?.backdrop_path;
	newObj.poster_path = imdbData?.poster_path;
	newObj.original_language = imdbData?.original_language;
	newObj.overview = imdbData?.overview;
	newObj.genres = imdbData?.genres;
	newData.push(newObj);
}

function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const startTime = performance.now()

const data = await fetch('http://bechdeltest.com/api/v1/getAllMovies')
	.then(async (response) => {
		const data = response.json();
		data.then(async (d) => {
			let curr = 0;
			let currEnd = d.length;
			console.log('🚀 ~ data.then ~ currEnd:', currEnd);

			while (curr < currEnd) {
				console.log(curr)
				await createData(d[curr]);
				curr++
			}
			fs.writeFile('./src/lib/combined.json', JSON.stringify(newData), (err) => {
				if (err) return err;
			});
		}).catch(function(err) {
			console.log('Error', err)
		}).finally(function() {
			console.log('done')
		});
	})
	.catch(function (err) {
		console.log('Unable to fetch -', err);
	})
	.finally(() => {
		console.log('Done.')
	});

	const endTime = performance.now();

	console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);



server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});