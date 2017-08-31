<template>
  <div>
    <h4>Key Skills &amp; Knowledge</h4>
    <v-layout row>
      <v-flex xs6>
        <v-card height="100%">
          <v-card-title>
            <h5>
              <em>Skills</em>
            </h5>
            <br>
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="skill in keySkills" :key="skill.id">{{ skill.description }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card height="100%" >
          <v-card-title>
            <h5>
              <em>Industry Knowledge</em>
            </h5>
            <br>
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="knowledge in industryKnowledge" :key="knowledge.id">{{ knowledge.description }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
