<template>
    <div class="container text-center">
        <ul>
            <li v-for="lang in getLanguage" :key="lang">
            {{ lang }}</li>
        </ul>
        <ul class="list-unstyled" v-for="(film,i) in fetchDataMovies" :key="i">
            <li><strong>Titolo originale: </strong>{{ film.original_title }}</li>
            <li><strong>Titolo: </strong>{{ film.title }}</li>
            <li><strong>Lingua Originale: </strong>{{ film.original_language }}</li>
            <li><strong>Voto: </strong>{{ film.vote_average }}</li>
        </ul>

        <ul class="list-unstyled" v-for="(serie) in fetchDataSeries" :key="serie">
            <li><strong>Titolo originale: </strong>{{ serie.original_name }}</li>
            <li><strong>Titolo: </strong>{{ serie.name }}</li>
            <li><strong>Lingua Originale: </strong>{{ serie.original_language }}</li>
            <li><strong>Voto: </strong>{{ serie.vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import {state} from "../store"
import {fetchData} from "../store"
export default {
    computed:
    {
        fetchDataMovies(){

            return state.moviesList;
        },
        getLanguage(){
            return state.languageMovies
        },
        fetchDataSeries(){
            return state.seriesList;
        }
        
    },
    mounted(){
        fetchData();
    }
}
</script>

<style lang="scss" scoped>

</style>