<template>
  <div>
    <h4>Summary</h4>
    <div class="summary">{{ summary.summary }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

import ResumeSummary from './../model/ResumeSummary'

@Component({
  name: 'summary'
})
export default class Summary extends Vue {
  @State('summary') summary: ResumeSummary
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
