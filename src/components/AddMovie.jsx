// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          param={
            ['title', 'title-input-label', 'Título',
              'title-input', title, this.handleChange]
          }
        />
        <InputText
          param={
            ['subtitle', 'subtitle-input-label', 'Subtítulo',
              'subtitle-input', subtitle, this.handleChange]
          }
        />
        <InputText
          param={
            ['imagePath', 'image-input-label', 'Imagem',
              'image-input', imagePath, this.handleChange]
          }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <InputNumber
          param={
            ['rating', 'rating-input-label', 'Avaliação',
              'rating-input', rating, this.handleChange]
          }
        />
        <InputSelect
          param={
            ['genre', 'genre-input-label', 'Gênero',
              'genre-input', genre, this.handleChange, 'genre-option']
          }
        />
        <button type="submit" data-testid="send-button" onClick={ this.addMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
