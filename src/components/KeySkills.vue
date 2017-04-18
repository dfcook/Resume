<template>
  <div>
    <h4>
      <em>Key Skills &amp; Knowledge</em>
    </h4>
    <v-container fluid="fluid">
      <v-row>
        <v-col md6>
          <h5>
            <em>Skills</em>
          </h5>
          <ul>
              <li v-for="skill in keySkills">{{ skill }}</li>
          </ul>
        </v-col>

        <v-col md6>
          <h5>
            <em>Industry Knowledge</em>
          </h5>
          <ul>
            <li v-for="knowledge in industryKnowledge">{{ knowledge }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['keySkills', 'industryKnowledge'])
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
