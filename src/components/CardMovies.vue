<template>
  <div class="card" @mouseover.once="cardSelected(film.id)">
    <div class="img-card">
      <img
        :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
        :alt="film.original_title"
        @error="setAltImg"
      />
    </div>
    <div class="card-description">
      <span
        ><strong>Generi: </strong
        ><span v-for="genres in getGenres" :key="genres">{{
          genres
        }}</span></span
      >
      <span
        ><strong>Casting: </strong
        ><span v-for="cast in getCasting" :key="cast">{{ cast }}</span></span
      >
      <span>
        <strong>Titolo originale: </strong>{{ film.original_title }}
      </span>
      <span> <strong>Titolo: </strong>{{ film.title }} </span>
      <span>
        <strong>Lingua Originale: </strong>{{ film.original_language }}
      </span>
      <span>
        <strong>Voto: </strong>
        <span>
          <i v-for="(number, z) in 5" :key="z" class="fa-regular fa-star"></i>
          <i
            v-for="(number, y) in getStar(film.vote_average)"
            :key="y"
            class="fa-solid fa-star"
          ></i>
        </span>
      </span>
      <span><strong>Descrizione: </strong> {{ film.overview }}</span>
    </div>
  </div>
</template>

<script>
import { state } from "../store";
import { getCastingData } from "../store"
export default {
  props: {
    film: Object,
  },
  computed:
  {
    getCasting() {
      return state.casting.join(", ");
    },
    getGenres() {
      return state.genres.join(", ");
    },
  },
  methods: {
    getStar(vote) {
      return Math.ceil(vote / 2);
    },
    setAltImg(event) {
      event.target.src = "img/image_notfound.png";
      event.target.class = "resize-img";
    },
    
    cardSelected(id) {
      getCastingData(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.img-card {
  img {
    object-fit: cover;
    aspect-ratio: 1/1.5;
    width: 350px;
  }
}

i.fa-solid.fa-star {
  transform: translateX(-500%);
  color: gold;
}

.card-description {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 2rem 1rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  transform: rotateY(-90deg);
  transition: transform 0.4s ease-in-out;
  color: white;
  overflow: auto;

  span {
    margin-bottom: 10px;
  }
}
.card:hover .card-description {
  transform: rotateY(0deg);
}
.card {
  border: 0;
  overflow: hidden;
  cursor: pointer;
}
</style>