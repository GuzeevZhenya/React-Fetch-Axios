import React, { useState, useEffect } from "react";
import { userAPI, pokemonAPI } from "./api";

import "./App.css";

const App = () => {
  const [peoples, setPeoples] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState("");

  useEffect(() => {
    try {
      // userAPI.getUser();
      pokemonAPI.getPokemon();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUser = () => {
    userAPI.getUserInfo().then((result) => {
      const data = result.results[0];
      setPeoples([
        ...peoples,
        {
          name: `${data.name.first} ${data.name.last}`,
          phone: data.phone,
          email: data.email,
          photo: data.picture.medium,
        },
      ]);
    });
  };
  const getPokemon = () => {
    pokemonAPI.getPokemonInfo(pokemonIndex).then((responese) =>
      setPokemons([
        {
          name: responese.name,
          photo: responese.sprites.back_default,
        },
      ])
    );
  };
  const personInfo = peoples.map(({ name, phone, email, photo }, index) => {
    return (
      <div className="about-person" key={index}>
        <div className="person-photo">
          {/* <img src={photo} alt="photo" /> */}
        </div>
        <div className="person-info">
          <div><h5>Name:</h5>{name}</div>
          <div><h5>Phone:</h5>{phone}</div>
          <div><h5>Email:</h5>{email}</div>
        </div>
      </div>
    );
  });

  const pokemonInfo = pokemons.map(({ name, photo }, index) => {
    return (
      <div key={index}>
        <div>{name}</div>
        <div>
          <img src={photo} />
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <div>
        <input onChange={(e) => setPokemonIndex(e.target.value)} />
        <button onClick={() => getPokemon()}>Pokemon</button>
      </div>
      <button onClick={() => getUser()}>Random User</button>

      {personInfo}
      <div>{pokemonInfo}</div>
    </div>
  );
};

export default App;
