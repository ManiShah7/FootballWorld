<script setup>
import {RouterView} from 'vue-router'
import Header from "./components/Header.vue";

</script>

<template>
  <Header/>
  <main>
    <RouterView/>
  </main>
</template>

<style>
@import '@/assets/base.css';
</style>
