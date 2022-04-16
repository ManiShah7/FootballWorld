<template>
  <div class="mw-1200">
    <div v-if="standing.standings">
      <div style="overflow-x:auto;">
        <table class="standings-table text-white">
          <tr>
            <th>Club</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Goals for</th>
            <th>Goals against</th>
            <th>Goal difference</th>
            <th>Form</th>
            <th>Points</th>
          </tr>

          <template v-for="team in standing.standings[0]">
            <Team :team="team"/>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Team from "../components/Team.vue";

export default {
  components: {Team},
  props: ['standing'],
  setup(props) {
    const {logo, name} = props.standing

    return {logo, name}
  }
}
</script>