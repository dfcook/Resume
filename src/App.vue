<template>
  <div id="app">
    <resume-header />

    <v-container fluid="fluid">
      <v-row>
        <v-col lg10 offset-lg1>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>

    <hr/>

    <resume-footer />
  </div>
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
