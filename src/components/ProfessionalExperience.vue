<template>
  <div>
    <h4>Professional Experience</h4>
    <section id="cd-timeline" class="cd-container">
    <div v-for="exp in professionalExperience" class="cd-timeline-block">
        <div class="cd-timeline-img">
            <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
        </div>

        <div class="cd-timeline-content">
            <div class="company-name">Company: {{exp.company}}</div>
            <div class="job-title">{{exp.jobTitle}}</div>
            <div>Skills: {{exp.skills}}</div>
            <br />
            <div class="description">{{exp.description}}</div>
            <span class="cd-date job-dates">{{exp.startDate}} - {{exp.endDate}}</span>
        </div>
    </div>
</section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['professionalExperience'])
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
