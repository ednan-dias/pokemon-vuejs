<template>
  <main id="container">
    <div id="data">
      <span v-for="pokemon of pokemons" :key="pokemon.name">
        <div class="pokemon">
          <img src="../assets/pokebola.svg" alt="Pokebola" />
          <p>{{ pokemon.name.toUpperCase() }}</p>
        </div>
        <hr />
        <router-link :to="`pokemon/${pokemon.name}`">
          <button>Ver em Detalhes</button></router-link
        >
      </span>
    </div>
    <div id="footer">
      <article>
        <button id="anterior" @click="previous()">Retroceder</button>
        <button id="proximo" @click="next()">Avançar</button>
      </article>
      <p>Desenvolvido por Ednan Dias, 2021</p>
    </div>
  </main>
</template>

<script>
import api from "../services/api";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      pokemons: [],
      dados: {},
    };
  },
  async mounted() {
    await api
      .get("pokemon?offset=0&limit=20")
      .then((response) => {
        this.pokemons = response.data.results;
        this.dados = response.data;

        if (this.dados.previous === null) {
          document.getElementById("anterior").setAttribute("disabled", "true");
          document.getElementById("anterior").style = "background-color: gray";
        }
      })
      .catch((err) => console.log(err));
  },
  methods: {
    async next() {
      await api.get(this.dados.next).then(async (response) => {
        if (response.data.next === null) {
          const proximo = document.getElementById("proximo");
          proximo.setAttribute("disabled", true);
          proximo.style = "background-color: gray";
        } else {
          const anterior = document.getElementById("anterior");
          anterior.removeAttribute("disabled");
          anterior.removeAttribute("style");

          this.pokemons = response.data.results;
          this.dados = response.data;
        }
      });
    },

    async previous() {
      await api.get(this.dados.previous).then(async (response) => {
        if (
          response.data.previous !== null ||
          response.data.previous === null
        ) {
          this.pokemons = response.data.results;
          this.dados = response.data;

          const proximo = document.getElementById("proximo");
          proximo.removeAttribute("disabled");
          proximo.removeAttribute("style");

          if (response.data.previous === null) {
            const anterior = document.getElementById("anterior");
            anterior.setAttribute("disabled", true);
            anterior.style = "background-color: gray";
          }
        }
      });
    },
  },
};
</script>

<style scoped>
main#container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div#data {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

div.pokemon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

div#data span {
  margin-left: 13px;
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  width: 225px;
  height: 120px;
  text-align: center;
  border-radius: 20px;
  padding: 0 5px 20px 5px;
}

span img {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}

span p {
  font-weight: 700;
}

span button {
  width: 100%;
  height: 60px;
  background-color: #f1362f;
  border: 0;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.7s;
}

span button a {
  text-decoration: none;
  color: white;
}

span button:hover {
  transform: scale(1.2, 1.2);
}

div#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div#footer article {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

div#footer button {
  margin: 10px;
  width: 250px;
  height: 60px;
  background-color: #4d8de0;
  color: #ffcb05;
  border: 0;
  font-weight: 700;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.7s;
}

div#footer p {
  font-size: 16px;
}

div#footer button:hover {
  transform: scale(1.2, 1.2);
}
</style>