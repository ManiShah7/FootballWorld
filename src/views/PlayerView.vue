<template>
  <div class="page">
    <div v-if="error">
      {{ error }}
    </div>

    <div v-else-if="loading">
      <img src="../assets/images/loading.svg" alt="Loading...">
    </div>

    <div v-else-if="playerStatistics">
      <Player :name="playerStatistics.response[0].player.name" />
    </div>
  </div>
</template>

<script>
import Player from "../components/Player.vue";
import {useRoute} from 'vue-router'
import playerStatisticsFunction from "../composables/playerStatisticsFunction";

export default {
  name: "PlayerView",
  components: {Player},
  setup() {
    const route = useRoute()

    const {playerStatistics, error, loading, getPlayersStatistics} = playerStatisticsFunction()

    getPlayersStatistics(route.params.id)

    return {loading, error, playerStatistics}
  }
}
</script>

<style scoped>

</style>