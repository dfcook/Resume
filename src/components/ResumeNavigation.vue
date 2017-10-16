<template>
  <v-toolbar class="transparent elevation-0">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/">Summary</v-btn>
      <v-btn flat to="/KeySkills">Key Skills &amp; Knowledge</v-btn>
      <v-btn flat to="/ProfessionalExperience">Professional Experience</v-btn>
      <v-btn flat to="/Education">Education</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'resume-navigation'
})
export default class ResumeNavigation extends Vue {
}
</script>

<style scoped lang="stylus">
  .application--light .toolbar a.btn
    color: white
</style>
