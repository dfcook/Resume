<template>
  <v-bottom-nav value="true" class="white">
    <v-btn v-for="link in links" :key="link.id" :href="link.url" flat light class="teal--text">
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['links'])
    }
  }
</script>
