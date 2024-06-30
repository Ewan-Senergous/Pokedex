import PropTypes from "prop-types";
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          {" "}
          Précédent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          {" "}
          Suivant
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
export default NavBar;
