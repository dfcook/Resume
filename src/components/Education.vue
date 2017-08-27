<template>  
  <v-layout fill-height>
    <v-flex xs12>                
        <h4>Education</h4>        
          <ul>
            <li v-for="education in educationHistory" :key="education.id">{{ education.qualifications }} from {{ education.establishment }}</li>
          </ul>        
    </v-flex>        
  </v-layout>       
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['educationHistory'])
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
