<template>
  <v-toolbar class="transparent elevation-0">    
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-toolbar-item>
        <router-link to="/">Summary</router-link>
      </v-toolbar-item>
      <v-toolbar-item>
        <router-link to="/KeySkills">Key Skills &amp; Knowledge</router-link>
      </v-toolbar-item>
      <v-toolbar-item>
        <router-link to="/ProfessionalExperience">Professional Experience</router-link>
      </v-toolbar-item>
      <v-toolbar-item>
        <router-link to="/Education">Education</router-link>
      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
  li {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: white;
  }
</style>
