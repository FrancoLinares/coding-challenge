import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Custom Components
import MediaCard from '../card/CardMovie';
// Material-UI
import Grid from '@material-ui/core/Grid';
// Styles
import '../../../../assets/movieList.scss';

function MoviesList({ movies }) {
  console.log('movies', movies);
  return (
    <>
      <div className="cardsContainer">
        {movies &&
          Object.entries(movies).map(([genre, moviesbyGenre]) => {
            return (
              <Fragment key={genre}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <h2 className="title" key={genre}>
                    {genre}
                  </h2>
                  {moviesbyGenre.map((movie) => (
                    <Grid key={movie.id} item>
                      <MediaCard
                        imagePath={movie.poster_path}
                        title={movie.original_title}
                        year={movie.release_date}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Fragment>
            );
          })}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.object,
  fullUrlImage: PropTypes.string,
};

export default MoviesList;
