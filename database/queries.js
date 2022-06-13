const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const bechdel_json = require('./bechdel-data.json');

function addBechdelData(request, response) {
  const { id, imdbid, rating, title, year } = request.body;
  for (const row in bechdel_json) {
    pool.query(`INSERT INTO bechdeltable (id, imdbid, rating, title, year) VALUES (${row.id}, '${row.imdbid}', ${row.rating}, '${row.title}',${row.year})`,
    (error, results) => {
      console.log(error, results);
    })
    pool.end();

  }
}

//     [row.id, row.imdbid, row.rating, row.title, row.year],

async function addMovieData(request, response) {
  // const id = parseInt(request.params.id);
  const { id, 
    backdrop_path, 
    budget, 
    genres, 
    original_language, 
    original_title, 
    overview, 
    popularity, 
    poster_path,
    release_date, 
    revenue, 
    runtime, 
    tagline, 
    title, 
    vote_average,
    vote_count, 
    imdb_id } = request.body;
  for (const row of bechdel_json) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/tt${row.imdbid}?api_key=12b43b9b8cd57e50b2441beea35b44b8`);
    const data = await res.json();

    pool.query(`INSERT INTO movietable (
          id, 
          backdrop_path, 
          budget, 
          genres, 
          original_language, 
          original_title, 
          overview, 
          popularity, 
          poster_path,
          release_date, 
          revenue, 
          runtime, 
          tagline, 
          title, 
          vote_average,
          vote_count, 
          imdb_id
        ) 
        VALUES (
          ${data.id}, 
          ${data.backdrop_path},
          ${data.budget},
          ${data.genres},
          ${data.original_language},
          ${data.original_title},
          ${data.overview},
          ${data.popularity},
          ${data.poster_path},
          ${data.release_date},
          ${data.revenue},
          ${data.runtime},
          ${data.tagline},
          ${data.title},
          ${data.vote_average},
          ${data.vote_count},
          ${data.imdb_id.slice(2)}
          )`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Movie added with ID: ${results.id}`)
    })
  }
}

module.exports = {
  addMovieData,
  addBechdelData
}


