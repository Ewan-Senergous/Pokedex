import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePreviusClick = () => {
    pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : "";
  };
  const handleNextClick = () => {
    pokemonIndex < pokemonList.length - 1
      ? setPokemonIndex(pokemonIndex + 1)
      : null;
  };
  return (
    <header>
      <button onClick={handlePreviusClick} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleNextClick}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </header>
  );
}
NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
export default NavBar;
