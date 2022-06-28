<template>
    <div class="container text-center">
        <ul class="list-unstyled" v-for="(film,i) in fetchDataOn" :key="i">
            <li><strong>Titolo originale: </strong>{{ film.original_title }}</li>
            <li><strong>Titolo: </strong>{{ film.title }}</li>
            <li><strong>Lingua Originale: </strong>{{ film.original_language }}</li>
            <li><strong>Voto: </strong>{{ film.vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import {state} from "../store"
export default {
    computed:
    {
        fetchDataOn(){

            return state.moviesList;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>