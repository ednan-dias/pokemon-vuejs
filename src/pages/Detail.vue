<template>
  <main id="container">
    <article>
      <router-link to="/"><button>Voltar</button></router-link>
      <h1>{{ namePokemon.toUpperCase() }}</h1>
      <img :src="pokemon.sprites.front_default" :alt="namePokemon" />

      <div id="details">
        <span>
          <p>Habilidades:</p>
          <ul
            v-for="abilitie of pokemon.abilities"
            :key="abilitie.ability.name"
          >
            <li>{{ abilitie.ability.name.toUpperCase() }}</li>
          </ul>
        </span>

        <span>
          <p>Tipos:</p>
          <ul v-for="type of pokemon.types" :key="type.type.name">
            <li>{{ type.type.name.toUpperCase() }}</li>
          </ul>
        </span>
      </div>
    </article>
  </main>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      namePokemon: this.$route.params.name,
      pokemon: {},
    };
  },
  async mounted() {
    await api.get(`/pokemon/${this.namePokemon}`).then((response) => {
      this.pokemon = response.data;
      console.log(response.data.types);
    });
  },
};
</script>

<style scoped>
main#container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

main#container article {
  margin: 45px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  background-color: #4d8de0;
  box-shadow: 10px 10px 15px black;
  border-radius: 20px;
}

article button {
  margin: 5px;
  width: 215px;
  height: 60px;
  background-color: #ffcb05;
  border: 0;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.7s;
}

article button:hover {
  transform: scale(1.2, 1.2);
}

article h1 {
  font-weight: 700;
  color: white;
  text-shadow: 1.2px 1.2px 1.2px black;
}

article img {
  width: 110px;
  height: 110px;
}

article p {
  font-weight: 700;
  font-size: 21px;
  color: white;
  text-shadow: 1.2px 1.2px 1.2px black;
}

article li {
  list-style: none;
  font-weight: 700;
  font-size: 16px;
  color: white;
  text-shadow: 1.2px 1.2px 1.2px black;
}

div#details {
  text-align: center;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>