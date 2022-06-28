import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    seriesList: []
})

export function fetchData (textQuery){
    axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
            query:textQuery,
            language: "it-IT",
        }
    })
    .then((resp) => {
        state.moviesList = resp.data.results;
    })
}