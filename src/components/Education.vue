<template>
  <div>
    <h4>
      <em>Education</em>
    </h4>      
    <ul>
      <li v-for="education in educationHistory">{{ education }}</li>
    </ul>  
  </div>
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
