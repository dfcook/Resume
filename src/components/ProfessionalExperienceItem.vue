<template>
  <div class="cd-timeline-block">
    <div class="cd-timeline-img">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
      </span>
    </div>

    <v-card class="cd-timeline-content">
      <v-card-title>
        <div>
          <span class="company-name">Company: {{exp.company}}</span><br>
          <span class="job-title">{{exp.jobTitle}}</span><br>
          <span>Skills: {{exp.skills}}</span>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="description">{{exp.description}}</div>
      </v-card-text>
      <span class="cd-date job-dates">{{formatDate(exp.startDate)}} - {{formatDate(exp.endDate)}}</span>
    </v-card>
  </div>
</template>

<script lang="ts">
import * as moment from 'moment'
import Vue from 'vue'
import Component from 'vue-class-component'

import ExperienceItem from './../model/ExperienceItem'

@Component({
  name: 'professional-experience-item',
  props: [ 'exp' ]
})
export default class ProfessionalExperienceItem extends Vue {
  exp: ExperienceItem

  formatDate (date: Date) {
    if (!date) {
      return 'Current'
    }

    return moment(date).format('MMMM YYYY')
  }
}
</script>