// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;

    this.state = {
      text: searchText,
      bookmarked: bookmarkedOnly,
      genre: selectedGenre,
    };
  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { text, bookmarked, genre } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            id="search"
            type="text"
            value={ text }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <br />
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          <input
            id="checkbox"
            type="checkbox"
            checked={ bookmarked }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <br />
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ genre }
            name="state"
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
