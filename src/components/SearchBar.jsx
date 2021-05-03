// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    this.state = {
      text: searchText,
      bookmarked: bookmarkedOnly,
    };
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            id="search"
            type="text"
            value={this.state.text}
            onChange={this.props.onChange}
            data-testid="text-input"
          />
        </label>
        <br />
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          <input
            id="checkbox"
            type="checkbox"
            checked={this.state.bookmarked}
            onChange={this.props.onBookmarkedChange}
          />
          Mostrar somente favoritos
        </label>
        <br />
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="state"
            onChange={this.props.onSelectedGenreChange}
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
        <br />
        <button>Buscar</button>
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
