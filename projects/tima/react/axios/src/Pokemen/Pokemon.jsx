// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Pokemon() {
//   const [pokemonData, setPokemonData] = useState([]);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       const promises = [];
//       for (let i = 1; i <= 4; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(axios.get(url));
//       }

//       try {
//         const responses = await Promise.all(promises);
//         const pokemon = responses.map((res) => ({
//           name: res.data.name,
//           image: res.data.sprites.front_default,
//           id: res.data.id,
//         }));
//         // console.log(response);
//         setPokemonData(pokemon);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchPokemon();
//   }, []);

//   return (
//     <div>
//       <h2>Список покемонов:</h2>
//       <ul>
//         {pokemonData.map((pokemon, index) => (
//           <li key={index}>
//             <div>{pokemon.id} ↓</div>
//             <h2>{pokemon.name}</h2>
//             <img src={pokemon.image} alt={`Изображение ${pokemon.name}`} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        if (response.status === 200) {
          const results = response.data.results;
          const pokemonData = [];

          for (const result of results) {
            const pokemonResponse = await axios.get(result.url);
            const pokemon = {
              name: pokemonResponse.data.name,
              imageUrl: pokemonResponse.data.sprites.back_default,
            };
            pokemonData.push(pokemon);
          }

          setPokemonList(pokemonData);
        } else {
          setError(`Error: ${response.status}`);
        }
      } catch (error) {
        setError(`An error occurred: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.imageUrl} alt={pokemon.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonList;
