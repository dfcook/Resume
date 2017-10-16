<template>
  <v-app light>
    <resume-header />

    <v-container fluid>
      <v-layout row-xs column child-flex-xs>
        <v-flex xs8 offset-xs2>
          <router-view></router-view>
        </v-flex>
      </v-layout>

      <resume-footer />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { ResumeFooter, ResumeHeader } from '@/components'

@Component({
  name: 'app',
  components: {
    ResumeFooter,
    ResumeHeader
  }
})
export default class App extends Vue {
}
</script>

<style lang="stylus">
  @import './styles/resume'

  hr
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
    height: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
</style>
