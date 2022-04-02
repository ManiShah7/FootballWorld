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

<script>
export default {
  data() {
    return {
      countries: [
        'England',
        'France',
        'Germany',
        'Italy',
        'Portugal',
        'Spain'
      ]
    }
  },
  methods: {
    async fetchCats() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const cats = await response.json()
        return cats
      } catch (e) {
        console.error(`Could not fetch data. ${e}`)
      }
    }
  },
  mounted() {
    // console.log(this.countries)
    // console.log(import.meta.env.VITE_API_KEY)
    // this.fetchCats().then((cats) => {
    //   this.img = cats[0].url
    // }).catch((err) => {
    //   console.log(`Rejected ${err}`)
    // })
  }
}
</script>
<style>
@import '@/assets/base.css';
</style>
