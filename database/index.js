const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// 'use strict';
const fs = require('fs');

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries');
const app = express()
const port = 3001

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'bechdel',
  password: 'password',
  port: 5432,
});

const bechdel_json = require('./bechdel-data.json');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.post('/movies', db.addBechdelData);
// app.post('/movies', db.addMovieData);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// for (const row in bechdel_json) {
//   // console.log(bechdel_json[row].title);
//   pool.query(`INSERT INTO bechdeltable (id, rating, title,
//     year,
//     imdbid
//   ) VALUES (
//     ${bechdel_json[row].id},
//     ${bechdel_json[row].rating},
//     '${bechdel_json[row].title}',
//     ${bechdel_json[row].year},
//     '${bechdel_json[row].imdbid}'
//   )`,
//   (error, results) => {
//     if (error) {
//       console.log(bechdel_json[row].title);
//     }
//     console.log(error, results);
//   })
// }

const movie_json = require('./movie-data-1.json');
for (const row in movie_json) {
  sql = `INSERT INTO movietable (
    backdrop_path,
    budget,
    genres,
    original_language,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    tagline,
    title,
    vote_average,
    vote_count,
    imdb_id,
    runtime,
    id)
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
    )`
    vals = [movie_json[row].backdrop_path,
    movie_json[row].budget,
    movie_json[row].genres,
    movie_json[row].original_language,
    movie_json[row].overview,
    movie_json[row].popularity,
    movie_json[row].poster_path,
    movie_json[row].release_date,
    movie_json[row].revenue,
    movie_json[row].tagline,
    movie_json[row].title,
    movie_json[row].vote_average,
    movie_json[row].vote_count,
    movie_json[row].imdb_id,
    movie_json[row].runtime,
    movie_json[row].id]
  pool.query(sql, vals,
      (error, results) => {
    if (error) {
      console.log(bechdel_json[row].title);
    }
    console.log(error, results);
  });
}


// let movieFile = fs.writeFileSync('moviedata.json');

// async function addMovieData() {
//   let main = [];
//   for (const row of bechdel_json) {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/tt${row.imdbid}?api_key=12b43b9b8cd57e50b2441beea35b44b8`);
//     const data = await res.json();
//     // let writeData = data;
//     main.push(data);
//     }
//     fs.writeFileSync('movie-data-1.json', JSON.stringify(main), (error) => {
//       if (error) throw error;
//     });
// }

// addMovieData();

  //   let dataIMDBID = 'null';
  //   if (data.title && data.title.indexOf("'") >= 0) {
  //     let i = data.title.indexOf("'");
  //     let dataTitle = data.title.slice(0,i) + "'" + data.title.slice(i);
  //   } else {
  //     dataTitle = data.title;
  //   }
  //   if (data.overview && data.overview.indexOf("'") >= 0) {
  //     let i = data.overview.indexOf("'");
  //     let dataOverview = data.overview.slice(0,i) + "'" + data.overview.slice(i);
  //   } else {
  //     dataOverview = data.overview;
  //   }
  //   if (data.tagline && data.tagline.indexOf("'") >= 0) {
  //     let i = data.tagline.indexOf("'");
  //     let datatagline = data.tagline.slice(0,i) + "'" + data.tagline.slice(i);
  //     } else {
  //       datatagline = data.tagline;
  //   }
  //   if (data.imdb_id) {
  //     dataIMDBID = data.imdb_id.slice(2);
  //   } else {
  //     dataIMDBID = 'null';
  //   }
  //   console.log(data.imdb_id);
  //   if (data.id && data.backdrop_path && data.budget && JSON.stringify(data.genres) && data.original_language && dataOverview && data.popularity 
  //   && data.poster_path && data.release_date && data.revenue && data.runtime && datatagline && dataTitle && data.vote_average 
  //   && data.vote_count && dataIMDBID) {
  //   pool.query(`INSERT INTO movietable (id, backdrop_path, budget, genres, original_language, overview, popularity, poster_path,
  //     release_date, revenue, runtime, tagline, title, vote_average, vote_count, imdb_id) 
  //       VALUES (
  //         ${data.id}, 
  //         '${data.backdrop_path}',
  //         ${data.budget},
  //         '${JSON.stringify(data.genres)}',
  //         '${data.original_language}',
  //         '${dataOverview}',
  //         ${data.popularity},
  //         '${data.poster_path}',
  //         '${data.release_date}',
  //         ${data.revenue},
  //         ${data.runtime},
  //         '${datatagline}',
  //         '${dataTitle}',
  //         ${data.vote_average},
  //         ${data.vote_count},
  //         '${dataIMDBID}'
  //         )
  //         ON CONFLICT ${data.id} DO NOTHING`, (error, results) => {
  //     if (error) {
  //       console.log(data);
  //       console.log(dataTitle);
  //       throw error
  //     }
  //   })
  // }
// }
// console.log(count);


