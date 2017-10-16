<template>
  <v-layout row-xs column child-flex-xs>
    <v-flex xs12>
      <h4>Professional Experience</h4>
      <section id="cd-timeline" class="cd-container">
        <professional-experience-item v-for="exp in orderedExperience" :exp="exp" :key="exp.id"></professional-experience-item>
      </section>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { orderBy } from 'lodash'
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

import ProfessionalExperienceItem from '@/components/ProfessionalExperienceItem'

import ExperienceItem from './../model/ExperienceItem'

@Component({
  name: 'professional-experience',
  components: {
    ProfessionalExperienceItem
  }
})
export default class ProfessionalExperience extends Vue {
  @State('professionalExperience') professionalExperience: ExperienceItem[]

  get orderedExperience () {
    return orderBy(this.professionalExperience, ['startDate'], ['desc'])
  }
}
</script>

<style scoped>
  h4 {
    font-size: 1.9em;
    font-weight: bold;
    font-style: italic;
  }

  .company-name {
    font-style: italic;
    text-transform: uppercase;
  }

  .job-title {
    font-weight: bold;
  }

  .job-dates {
    font-style: italic;
  }
</style>
