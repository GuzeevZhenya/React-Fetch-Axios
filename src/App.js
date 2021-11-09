import React, { useState, useEffect } from "react";
import { userAPI, pokemonAPI } from "./api";

import "./App.css";

const App = () => {
  const [peoples, setPeoples] = useState([]);
  const [pokemonPhoto,setPokemonPhoto] = useState('')

  useEffect(() => {
    try {
      // userAPI.getUser();
      pokemonAPI.getPokemon();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUser = () => {
    userAPI.getUser().then((result) => {
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
const getPokemon = ()=>{
  pokemonAPI.getPokemon(13)
  .then(responese=>setPokemonPhoto(responese.sprites.back_default))
}
  const personInfo = peoples.map(({ name, phone, email, photo }, index) => {
    return (
      <div key={index}>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>
          <img src={photo} alt="photo" />
        </div>
      </div>
    );
  });
  
  return (
    <div className="App">
      <button onClick={() => getUser()}>Click</button>
      <button onClick={() => getPokemon()}>Pokemon</button>
      {personInfo}
      <div><img src={pokemonPhoto} /></div>
    </div>
  );
};

export default App;
