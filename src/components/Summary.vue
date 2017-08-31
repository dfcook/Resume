<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h4>Summary</h4>
      <div class="summary">{{ summary.summary }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['summary'])
    }
  }
</script>

<style scoped>
  div {
    margin-top: 10px;
  }

  h4 {
    font-size: 1.9em;
    font-weight: bold;
    font-style: italic;
  }
</style>
