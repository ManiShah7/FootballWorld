<template>
  <div class="h3 top-scorer-row__name top-scorer-row__col text-white">
    {{ name }}
  </div>

  <div class="h3 top-scorer-row__goals top-scorer-row__col text-white">
    {{ goals }}
  </div>

  <div class="top-scorer-row__image top-scorer-row__col text-white">
    <img class="top-scorer-row__image" :src=image :alt=name height="150" width="150">
  </div>
</template>

<script>
export default {
  name: "topScorer",
  props: ['name', 'image', 'goals']
}
</script>

<style scoped>
img {
  width: 5rem;
}
</style>