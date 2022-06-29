import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesListResearch: [],
    languageMovies: [],
    languageSeries: [],
    seriesListResearch: [],
    movieListUpcoming:[],
    movieListTopRated:[],
    movieListPopular:[],
    getStateInput: true,
})

export function fetchDataResearch (textQuery){
    if(textQuery != ""){
        state.getStateInput = false;
        axios.get("https://api.themoviedb.org/3/search/movie",{
            params:{
                api_key:"d206597de1040586ba02dfac9aaa6cff",
                query:textQuery,
                language: "it-IT",
            }
        })
        .then((resp) => {
            state.moviesListResearch = resp.data.results;
           
        })
        axios.get("https://api.themoviedb.org/3/search/tv",{
            params:{
                api_key:"d206597de1040586ba02dfac9aaa6cff",
                query:textQuery,
                language: "it-IT",
            }
        })
        .then((resp) => {
            state.seriesListResearch = resp.data.results;
           
        })
    }else{
        state.moviesListResearch= [];
        state.seriesListResearch= [];
        state.getStateInput = true;
    }

}

export function fetchData (){
    axios.get("https://api.themoviedb.org/3/movie/upcoming",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
        }
    })
    .then((resp) => {
        state.movieListUpcoming = resp.data.results;
       
    })
    axios.get("https://api.themoviedb.org/3/movie/top_rated",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
        }
    })
    .then((resp) => {
        state.movieListTopRated = resp.data.results;
       
    })
    axios.get("https://api.themoviedb.org/3/movie/popular",{
        params:{
            api_key:"d206597de1040586ba02dfac9aaa6cff",
        }
    })
    .then((resp) => {
        state.movieListPopular = resp.data.results;
       
    })
}
