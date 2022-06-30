<template>
  <div class="card">
    <div class="img-card">
      <img
        :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path"
        :alt="serie.original_title"
        @error="setAltImg"
      />
    </div>
    <div class="card-description">
      <span>
        <strong>Titolo originale: </strong>{{ serie.original_name }}
      </span>
      <span> <strong>Titolo: </strong>{{ serie.name }} </span>
      <span>
        <strong>Lingua Originale: </strong>{{ serie.original_language }}
      </span>
      <span>
        <strong>Voto: </strong>
        <span>
          <i v-for="(number, z) in 5" :key="z" class="fa-regular fa-star"></i>
          <i
            v-for="(number, y) in getStar(serie.vote_average)"
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
  props: {
    serie: Object,
  },
  methods: {
    getStar(vote) {
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
  transition: transform .4s ease-in-out;
  color: white;
  height: 100%;
  overflow: auto;
}
.card:hover .card-description{
    transform: rotateY(0deg);
}
.card {
    border: 0;
    overflow: hidden;
    cursor: pointer;
}
</style>