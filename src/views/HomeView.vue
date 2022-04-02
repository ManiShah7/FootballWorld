<template>
  <div class="links-wrapper">
    <div class="links" v-for="link in links" :key="link.id">
      <ImageLink :image=link.image :title=link.title :slug=link.slug />
    </div>
  </div>
</template>

<script>
import ImageLink from "../components/ImageLink.vue";

export default {
  name: "HomeView",
  components: {ImageLink},
  setup() {
    const links = [
      {
        id: 1,
        slug: 'standings',
        image: '../src/assets/images/standings.jpg',
        title: 'STANDINGS'
      },
      {
        id: 2,
        slug: 'fixtures',
        image: '../src/assets/images/fixtures.jpg',
        title: 'FIXTURES'
      },
      {
        id: 3,
        slug: 'top-scorers',
        image: '../src/assets/images/top-scorers.jpg',
        title: 'TOP SCORERS'
      }
    ]
    return {links}
  }
}
</script>

<style scoped>
.links-wrapper {
  display: flex;
  flex-direction: column;
}

.links {
  position: relative;
  height: 350px;
  padding: 1rem;
}

@media (min-width: 1024px){
  .links-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .links {
    width: 33.33%;
    height: 100vh;
  }
}
</style>
