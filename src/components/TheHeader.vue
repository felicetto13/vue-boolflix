<template>
    <header>
        <nav>
            <h1 class="title-page">boolflix</h1>
            <div class="search-bar">
                <input type="text" name="searchBar" v-model="searchText" @keyup="onSearchData" placeholder="Ricerca titoli..">
            </div>
        </nav>
    </header>
</template>

<script>
import {fetchDataResearch} from "../store"
export default {
    data(){
        return{
            searchText:"",
        }
    },
    methods:
    {
        onSearchData(){
            fetchDataResearch(this.searchText);
        }
    }
}
</script>

<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
    nav{
        background-image: linear-gradient(rgb(0,0,0), rgb(20,20,20));
        display: flex;
        justify-content: space-between;
        padding: 1rem ;
            h1{
                margin: 0;
                text-transform: uppercase;
                color: red;
                font-weight: bold;
                align-self: center;
                text-shadow: 0 0 20px red;
            }
         .search-bar {
             color: white;
             align-self: center;

             input[type=text]{
                width: 200px;
                padding: 0.5rem 1rem;
                margin-right: 10px;
                &:focus{
                    width: 400px;
                    outline-color: red;
                }
             }
         }
    }
</style>