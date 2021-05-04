import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      allMovies: movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'all',
      backup: movies,
    };
  }

  filterBySearch = (search) => {
    const { backup } = this.state;
    console.log(search);
    this.setState({
      allMovies: backup.filter((entry) => (
        entry.title.includes(search)
        || entry.subtitle.includes(search)
        || entry.storyline.includes(search)
      )),
    });
  }

  filterByBookmarked = (boolean) => {
    const { backup } = this.state;
    if (boolean === true) {
      this.setState({
        allMovies: backup.filter((entry) => entry.bookmarked === boolean),
      });
    } else {
      this.setState({
        allMovies: backup,
      });
    }
  }

  filterByGenre = (genre) => {
    const { backup } = this.state;
    if (genre === 'action' || genre === 'comedy' || genre === 'thriller') {
      this.setState({
        allMovies: backup.filter((entry) => entry.genre === genre),
      });
    } else {
      this.setState({
        allMovies: backup,
      });
    }
  }

  onClick = (movie) => {
    this.setState((estadoAnterior) => ({
      allMovies: [...estadoAnterior.allMovies, movie],
    }));
  }

  render() {
    const { allMovies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log(allMovies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterBySearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.filterByBookmarked }
          selectedGenre={ selectedGenre }
          filterByGenre={ this.filterByGenre }
        />
        <MovieList movies={ allMovies } />
        <AddMovie onClick={ this.onClick } />
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
