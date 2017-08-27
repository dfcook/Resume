<template>
  <v-app light>    
    <resume-header />

    <v-container fluid="fluid">      
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <router-view></router-view>
        </v-flex>
      </v-layout>

      <resume-footer />
    </v-container>    
  </v-app>
</template>

<script>
  import ResumeFooter from '@/components/ResumeFooter'
  import ResumeHeader from '@/components/ResumeHeader'

  export default {
    name: 'app',
    components: { ResumeFooter, ResumeHeader }
  }
</script>

<style scoped>
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
    height: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
</style>
