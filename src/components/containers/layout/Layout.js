import React, { useState, useEffect, useRef } from 'react';
// Material-UI
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
// Styles
import '../../assets/search.scss';
// External lib
import axios from 'axios';
// Lib
import createUrl from '../../lib/requests/createUrl.ts';
import getGenres from '../../lib/requests/getGenres.ts';
// Custom Components
import MoviesList from '../movies/list/MoviesList';

function Search() {
  // States
  const [searchText, setSearchText] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const initialRender = useRef(true);
  // Functions
  const onChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  useEffect(() => {
    // Avoid excecute search function on initial render
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (searchText.length >= 3) {
        if (!genres) {
          // Using promise to prevent sort without genders
          getGenresHandle().then((genres) => {
            searchMovie(genres);
          });
        } else {
          searchMovie();
        }
        setSearchError(null);
      } else {
        // Get rid of Alert if text field is empty
        if (searchText.length === 0) {
          setSearchError(null);
        } else {
          setSearchError('Write a little bit more');
        }
      }
    }
  }, [searchText]);

  const searchMovie = async (genres) => {
    try {
      const url = createUrl(searchText);
      const req = await axios.get(url);
      const sortedByGenre = sortByGenre(req.data.results, genres);
      setMovies(sortedByGenre);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  const getGenresHandle = async () => {
    const res = await getGenres();
    console.log(res.data.genres[0].id);
    const genreById = res.data.genres.reduce(
      (map, genre) => ({
        ...map,
        [genre.id]: genre.name,
      }),
      {}
    );
    setGenres(genreById);
    return genreById;
  };

  const sortByGenre = (movies, genresSynchronous) => {
    let sortedByGenre = {};
    const genresById = genres || genresSynchronous;
    movies.forEach((movie) => {
      movie.genre_ids.forEach((genreID) => {
        if (!sortedByGenre[genresById[genreID]]) {
          sortedByGenre[genresById[genreID]] = [];
          sortedByGenre[genresById[genreID]].push(movie);
        } else {
          sortedByGenre[genresById[genreID]].push(movie);
        }
      });
    });
    return sortedByGenre;
  };

  return (
    <>
      <TextField
        fullWidth
        id="movie"
        label="Find Movie"
        variant="outlined"
        name="search"
        value={searchText}
        onChange={onChange}
      />
      {searchError && (
        <Alert severity="info" className="alert">
          This is an info alert — check it out!
        </Alert>
      )}
      <MoviesList movies={movies} />
    </>
  );
}

Search.propTypes = {};

export default Search;
