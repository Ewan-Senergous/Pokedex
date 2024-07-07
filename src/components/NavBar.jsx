import PropTypes from "prop-types";
function NavBar({ setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  return (
    <header>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </header>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
export default NavBar;
