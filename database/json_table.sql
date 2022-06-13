INSERT INTO movietable
SELECT backdrop_path,
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
    id
FROM json_populate_record (NULL::json_table,
    '{
      "id": "0",
      "str_col": "orkb type foo examples tutorials orkb",
      "int_col": 5743,
      "bool_col": true,
      "json_col": {
        "ObjectRocket": "examples"
      },
      "float_col": 94.55681687716474
    }'
);




  INSERT INTO movietable (
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
      ${movie_json[row].backdrop_path},
${movie_json[row].budget},
${movie_json[row].genres},
${movie_json[row].original_language},
${movie_json[row].overview},
${movie_json[row].popularity},
${movie_json[row].poster_path},
${movie_json[row].release_date},
${movie_json[row].revenue},
${movie_json[row].tagline},
${movie_json[row].title},
${movie_json[row].vote_average},
${movie_json[row].vote_count},
${movie_json[row].imdb_id},
${movie_json[row].runtime},
${movie_json[row].id}
    )`,
      (error, results) => {
    if (error) {
      console.log(bechdel_json[row].title);
    }
    console.log(error, results);
  })