<template>
    <header>
        <nav>
            <h1 class="title-page">boolflix</h1>
            <div class="search-bar">
                <label for="searchBar">Ricerca titoli</label>
                <input type="text" name="searchBar" v-model="searchText">
                <button class="btn btn-outline-danger" @click="onSearchData">Ricerca</button>
            </div>
        </nav>
    </header>
</template>

<script>
import {fetchData} from "../store"
export default {
    data(){
        return{
            searchText:"",
        }
    },
    methods:
    {
        onSearchData(){
            fetchData(this.searchText);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>