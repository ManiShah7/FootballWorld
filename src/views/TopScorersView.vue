<template>
  <div class="page">
    <div class="mw-1200">
      <div class="text-center">
        <select @change=getTopScorers($event) id="select-league" class="mb-1 mt-1" title="Select a league">
          <option value="Select a league" selected>Select a league</option>
          <option value="39">Premier League</option>
          <option value="61">Ligue 1</option>
          <option value="78">Bundesliga</option>
          <option value="135">Seria A</option>
          <option value="140">La Liga</option>
        </select>

        <div v-if="error">Something went wrong. Try again later.</div>
        <div v-if="loading">
          <img src="../assets/images/loading.svg" alt="Loading...">
        </div>

        <div v-if="topScorersArray">
          <div class="top-scorer-row" v-for="topScorer in topScorersArray.response">
            <TopScorer :name="topScorer.player.name" :playerId="topScorer.player.id" :image="topScorer.player.photo"
                       :goals="topScorer.statistics[0].goals.total" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopScorer from "../components/TopScorer.vue";
import topScorersFunction from "../composables/topScorersFunction";

export default {
  name: "TopScorersView",
  components: {TopScorer},
  setup() {
    const {loading, error, topScorersArray, getTopScorers} = topScorersFunction()

    return {loading, error, topScorersArray, getTopScorers}
  }
}

</script>

<style scoped>
.top-scorer-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  padding: 1rem;
}
</style>