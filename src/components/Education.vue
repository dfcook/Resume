<template>
  <div>
    <h4>Education</h4>
    <ul>
      <li v-for="education in educationHistory" :key="education.id">{{ education.qualifications }} from {{ education.establishment }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

import EducationItem from './../model/EducationItem'

@Component({
  name: 'education'
})
export default class Education extends Vue {
  @State('educationHistory') educationHistory: EducationItem[]
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
