import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      allMovies: movies,
    };
  }

  render() {
    const { allMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        <MovieList movies={ allMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })),
};

MovieLibrary.defaultProps = {
  movies: {
    title: 'TITLE',
    subtitle: 'SUBTITLE',
    storyline: 'STORYLINE',
    rating: 0.0,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    bookmarked: false,
    genre: 'GENRE',
  },
};

export default MovieLibrary;
