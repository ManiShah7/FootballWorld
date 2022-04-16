<template>
  <tr>
    <td>
      {{ team.team.name }}
    </td>

    <td>
      {{ team.all.played }}
    </td>

    <td>
      {{ team.all.win }}
    </td>

    <td>
      {{ team.all.draw }}
    </td>

    <td>
      {{ team.all.lose }}
    </td>

    <td>
      {{ team.all.goals.for }}
    </td>

    <td>
      {{ team.all.goals.against }}
    </td>

    <td>
      {{ team.goalsDiff }}
    </td>

    <td>
      {{ team.form }}
    </td>

    <td>
      {{ team.points }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "Team.vue",
  props: ['team']
}
</script>

<style scoped>

</style>