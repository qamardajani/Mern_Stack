import React, { useEffect, useState } from 'react';

const PokemonApi = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    const showPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
  
}
    return (
        <>
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<h1 key={index}>{pokemon.name}</h1>)
            })}
            <button onClick={showPokemon}> Fetch Pokemon</button>
        </div>
        
            </>
    );
}
export default PokemonApi;