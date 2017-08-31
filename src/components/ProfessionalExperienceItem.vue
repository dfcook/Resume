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

<script>
  import moment from 'moment'

  export default {
    props: [ 'exp' ],
    methods: {
      formatDate (date) {
        if (!date) {
          return 'Current'
        }

        return moment(date).format('MMMM YYYY')
      }
    }
  }
</script>
