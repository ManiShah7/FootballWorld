<template>
  <RouterLink :to=slug>
    <img :src=image :alt=title>
    <h2>
      {{ title }}
    </h2>
  </RouterLink>
</template>

<script>
export default {
  name: "ImageLink.vue",
  props: ['image', 'title', 'slug']
}
</script>

<style scoped>
a {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

a::before {
  position: absolute;
  content: '';
  inset: 0;
  background-color: rgba(0,0,0,.65);
  z-index: 2;
  transition: 250ms all ease-in-out;
}

a:hover::before {
  background-color: rgba(0,0,0,.5);
}

img {
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}

h2 {
  z-index: 4;
  font-weight: 700;
  font-size: 2rem;
}

@media (min-width: 1024px){
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
  }
}
</style>