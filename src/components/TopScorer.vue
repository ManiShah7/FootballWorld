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

  <div class="top-scorer-row__col">
    <router-link :to="'/player/' + playerId"  class="btn-primary">
      View player
    </router-link>
  </div>
</template>

<script>
export default {
  name: "topScorer",
  props: ['name', 'image', 'goals', 'playerId']
}
</script>

<style scoped>
img {
  width: 4rem;
}
</style>