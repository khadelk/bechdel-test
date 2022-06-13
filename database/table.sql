CREATE TABLE moviedb (
	id int PRIMARY KEY,
	backdrop_path varchar(255),
	budget int,
	genres varchar(1000),
	original_language varchar(30),
	original_title varchar,
	overview varchar,
	popularity float,
	poster_path varchar,
	release_date DATE, 
	revenue int,
	runtime int,
	tagline varchar(255),
	title varchar(255),
	vote_average float,
	vote_count int,
	imdb_id varchar(255),
	FOREIGN KEY (imdb_id) references bechdel (imdbid)
);

CREATE TABLE bechdel (
	id int PRIMARY KEY,
	imdbid varchar(30),
	rating int,
	title varchar(255),
	year int
);

ALTER TABLE bechdel
DROP COLUMN imdbid;

ALTER TABLE bechdel
ADD COLUMN imdbid varchar(30) unique;

ALTER TABLE movietable
DROP COLUMN id;

ALTER TABLE movietable;
ADD COLUMN id int;

insert into bechdeltable (title, year, imdbid, id, rating) values ('Passage de Venus', 1874, '3155794', 9602, 0);
