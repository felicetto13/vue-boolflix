<template>
  <main>
    
      <div v-show="fetchDataMovies.length>0"
        class="full-container"
      >
        <h2>Film ricercati:</h2>
        <div class="container-element">
          <div class="row flex-nowrap">
            <div class="col" @click="cardSelected(film)" v-for="film in fetchDataMovies" :key="film">
              <CardMovies :film="film"></CardMovies>
            </div>
          </div>
        </div>
      </div>

      <div v-show="fetchDataSeries.length>0"
        class="full-container"
      >
        <h2>Serie ricercate:</h2>
        <div class="container-element">
          <div class="row flex-nowrap">
            <div class="col" @click="cardSelected(serie)" v-for="serie in fetchDataSeries" :key="serie">
              <CardSeries :serie="serie"></CardSeries>
            </div>
          </div>
        </div>
      </div>

        <!-- Film lista Upcoming, Top rated, popular -->

    <div v-show="getStatusInput">

        <div class="full-container">
          <h2>Film in uscita:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div
                class="col" @click="cardSelected(upcoming)"
                v-for="(upcoming, i) in fetchMoviesUpcoming"
                :key="i"
              >
                <CardMovies :film="upcoming"></CardMovies>
              </div>
            </div>
          </div>
        </div>
        <div class="full-container">
          <h2>Film Top Rated:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div
                class="col"
                v-for="(topRated, i) in fetchMoviesTopRated"
                :key="i"
              >
                <CardMovies :film="topRated"></CardMovies>
              </div>
            </div>
          </div>
        </div>
        <div class="full-container">
          <h2>Film popolari:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div class="col" @click="cardSelected(popular)" v-for="(popular, i) in fetchMoviesPopular" :key="i">
                <CardMovies :film="popular"></CardMovies>
              </div>
            </div>
          </div>
        </div>
        <!-- Serie tv lista Upcoming, Top rated, popular -->
        <div class="full-container">
          <h2>Serie On Air:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div
                class="col" @click="cardSelected(upcoming)"
                v-for="(upcoming, i) in fetchSeriesUpcoming"
                :key="i"
              >
                <CardSeries :serie="upcoming"></CardSeries>
              </div>
            </div>
          </div>
        </div>
        <div class="full-container">
          <h2>Film Top Rated:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div
                class="col" @click="cardSelected(topRated)"
                v-for="(topRated, i) in fetchSeriesTopRated"
                :key="i"
              >
                <CardSeries :serie="topRated"></CardSeries>
              </div>
            </div>
          </div>
        </div>
        <div class="full-container">
          <h2>Film popolari:</h2>
    
          <div class="container-element">
            <div class="row flex-nowrap">
              <div class="col" @click="cardSelected(popular)" v-for="(popular, i) in fetchSeriesPopular" :key="i">
                <CardSeries :serie="popular"></CardSeries>
              </div>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import CardMovies from "./CardMovies.vue"; 
import CardSeries from './CardSeries.vue';
import { state } from "../store";
import { fetchData } from "../store";
export default {
  components: { CardMovies , CardSeries },
  computed: {
    fetchDataMovies() {
      return state.moviesListResearch;
    },
    fetchDataSeries() {
      return state.seriesListResearch;
    },
    fetchMoviesUpcoming() {
      return state.movieListUpcoming;
    },
    fetchMoviesTopRated() {
      return state.movieListTopRated;
    },
    fetchMoviesPopular() {
      return state.movieListPopular;
    },
    fetchSeriesUpcoming() {
      return state.serieListUpcoming;
    },
    fetchSeriesTopRated() {
      return state.serieListTopRated;
    },
    fetchSeriesPopular() {
      return state.serieListPopular;
    },
    getStatusInput() {
        return state.getStateInput;
    }
  },
  mounted() {
    fetchData();
  },
  
};
</script>

<style lang="scss" >
main {
  background-image: linear-gradient(rgb(0, 0, 0), rgb(20, 20, 20));
  margin-top: 80px;
  flex-grow: 1;
  overflow: auto;

  h2 {
    color: white;
  }
}
.full-container {
  width: 100%;
  padding: 2rem 1rem;
  overflow: hidden;
}
.hide {
  display: none;
}
.container-element {
  width: 100%;
  overflow: auto;
  padding: 2rem 1rem;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}
</style>