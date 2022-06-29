import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    languageMovies: [],
    languageSeries: [],
    seriesList: [],
})

export function fetchData (/* textQuery */){
    axios.get("https://api.themoviedb.org/3/discover/movie",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
            /* query:textQuery, */
            /* language: "it-IT", */
        }
    })
    .then((resp) => {
        debugger
        state.moviesList = resp.data.results;
        for(let i =0; i < state.moviesList.length ; i++){
            debugger
            console.log(state.moviesList[i].original_language);
            if(!state.languageMovies.includes(state.moviesList[i].original_language)){
                state.languageMovies.push(state.moviesList[i].original_language)
            }
        }
       
    })
    axios.get("https://api.themoviedb.org/3/discover/tv",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
            /* query:textQuery, */
            /* language: "it-IT", */
        }
    })
    .then((resp) => {
        debugger
        state.seriesList = resp.data.results;
        for(let i =0; i < state.seriesList.length ; i++){
            debugger
            console.log(state.seriesList[i].original_language);
            if(!state.languageSeries.includes(state.seriesList[i].original_language)){
                state.languageSeries.push(state.seriesList[i].original_language)
            }
        }
       
    })

}
