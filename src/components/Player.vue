<template>
  <div class="page text-center">
    <h3 class="mb-1 text-white">Name: {{ name }}</h3>
    <h3 class="mb-1 text-white">Age: {{ age }}</h3>
    <h3 class="mb-1 text-white">Goals: {{ goals }}</h3>
    <img :src="photo" :alt="name">
  </div>
</template>

<script>
export default {
  name: "Player",
  props: ["name", "age", "photo", "goals"]
}
</script>

<style scoped>

</style>