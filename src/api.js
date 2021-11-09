import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const userAPI = {
  getUser() {
    return instance.get().then((response) => response.data);
  },
};


export const pokemonAPI = {
  getPokemon(id) {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.data);
  },
};

// export default userAPI;
