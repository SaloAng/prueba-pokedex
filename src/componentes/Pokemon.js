import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type pokemon-type-text">
            Tipo: {pokemon.types.map((type, idx) => {
              return (
                <div key={idx}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          
          <div className="pokemon-abilities">
            <div className="pokemon-others-text">Experiencia base: {pokemon.base_experience}</div>
            <div className="pokemon-others-text">Altura: {pokemon.height}</div>
            <div className="pokemon-others-text">Peso: {pokemon.weight}</div>
          </div>
        </div>

        <div className="pokemon-abilities pokemon-ability-text">
            Habilidades: {pokemon.abilities.map((type, idx) => {
              return (
                <div key={idx}>
                  {type.ability.name}
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Pokemon;
