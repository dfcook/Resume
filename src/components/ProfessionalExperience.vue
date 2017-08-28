<template>
  <v-layout fill-height>
    <v-flex xs12>
      <h4>Professional Experience</h4>
      <section id="cd-timeline" class="cd-container">        
        <div v-for="exp in orderedExperience" :key="exp.id" class="cd-timeline-block">                      
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
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'
  import _ from 'lodash'
  import moment from 'moment'

  export default {
    computed: {
      ...mapState(['professionalExperience']),
      orderedExperience () {
        return _.orderBy(this.professionalExperience, ['startDate'], ['desc'])
      }
    },
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
