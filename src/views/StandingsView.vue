<template>
  <div class="page">
    <div class="mw-1200">
      <div class="text-center">
        <select @change=getStandings($event) id="select-league" class="mb-1 mt-1" title="Select a league">
          <option value="Select a league" selected>Select a league</option>
          <option value="39">Premier League</option>
          <option value="61">Ligue 1</option>
          <option value="78">Bundesliga</option>
          <option value="135">Serie A</option>
          <option value="140">La Liga</option>
        </select>

        <div v-if="error">Something went wrong. Try again later.</div>
        <div v-if="loading">
          <img src="../assets/images/loading.svg" alt="Loading...">
        </div>

        <div v-if="standingsArray">
          <div v-for="standing in standingsArray.response">
            <Standing :standing="standing.league" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import standingsFunction from "../composables/standingsFunction";
import Standing from "../components/Standing.vue";

export default {
  components: {Standing},

  setup() {
    const {standingsArray, loading, error, getStandings} = standingsFunction()

    return {standingsArray, loading, error, getStandings}
  }
}
</script>