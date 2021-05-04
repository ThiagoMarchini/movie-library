// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    this.state = {
      search: searchText,
      favorites: bookmarkedOnly,
      genre: selectedGenre,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    if (target.name === 'search') {
      onSearchTextChange(value);
    }
    if (target.name === 'favorites') {
      onBookmarkedChange(value);
    }
    if (target.name === 'genre') {
      onSelectedGenreChange(value);
    }
  }

  render() {
    const { search, favorites, genre } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            name="search"
            id="search"
            type="text"
            data-testid="text-input"
            value={ search }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          <input
            name="favorites"
            id="checkbox"
            type="checkbox"
            data-testid="checkbox-input"
            checked={ favorites }
            onChange={ this.handleChange }
          />
          Mostrar somente favoritos
        </label>
        <br />
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genre"
            data-testid="select-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
