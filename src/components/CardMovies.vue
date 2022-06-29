<template>
    <div class="card">
        <div class="img-card">
          <img
            :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
            :alt="film.original_title"
            @error="setAltImg"
          />
        </div>
        <div class="card-description">
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
        </div>
    </div>
</template>

<script>


export default {
  props:{
      film: Object
  },
   methods: {
    getStar(vote) {
      debugger;
      return Math.ceil(vote / 2);
    },
    setAltImg(event) {
      event.target.src = "img/image_notfound.png";
      event.target.class = "resize-img";
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
  }

.card-description {
  display: flex;
  flex-direction: column;
}
</style>