<template>
  <section>
    <div class="full-container">
      <h2>Film ricercati:</h2>
      <div class="container-element">
        <div class="row flex-nowrap">
            <div class="col" v-for="(film, i) in fetchDataMovies" :key="i">
                 <CardMovies :film="film"></CardMovies>
            </div>
        </div>
      </div>
    </div>

    <div class="full-container">
      <h2>Serie ricercate:</h2>
      <div class="container-element">
        <div class="row flex-nowrap">
        <div class="col" v-for="(serie, i) in fetchDataSeries" :key="i">
          <CardSeries :serie="serie"></CardSeries>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardMovies from "./CardMovies.vue";
import CardSeries from './CardSeries.vue';
import { state } from "../store";
export default {
  components: { CardMovies, CardSeries },
  computed: {
    fetchDataMovies() {
      return state.moviesList;
    },
    fetchDataSeries() {
      return state.seriesList;
    },
  },
    
};
</script>

<style lang="scss" >
.full-container {
  width: 100%;
  padding: 2rem 1rem;
  overflow: hidden;
}
.container-element {
  width: 100%;
  overflow: auto;
}
</style>