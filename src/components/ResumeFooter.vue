<template>
  <v-bottom-nav value="true" class="white">
    <v-btn v-for="link in links" :key="link.id" :href="link.url" flat light class="teal--text">
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

import Link from './../model/Link'

@Component({
  name: 'resume-footer'
})
export default class ResumeFooter extends Vue {
  @State('links') links: Link[]
}
</script>
