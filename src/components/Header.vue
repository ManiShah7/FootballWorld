<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header class="text-center">
    <RouterLink to="/">
      <p class="header-name">Football World</p>
    </RouterLink>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header-name {
    font-size: 1.6rem;
    font-weight: 700;
  }

  header {
    margin-bottom: 1rem;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 6;
    background-color: black;
    padding: .5rem;
    font-family: 'Russo One', sans-serif;
  }
</style>