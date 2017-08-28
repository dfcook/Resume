<template>
  <v-footer fixed>
    <v-bottom-nav value="true" class="white">
      <v-btn href="mailto: dota_it@hotmail.co.uk" flat light class="teal--text">
        <v-icon>fa-envelope</v-icon>
      </v-btn>
      <v-btn href="https://uk.linkedin.com/in/daniel-cook-938529110" flat light class="teal--text">
        <v-icon>fa-linkedin</v-icon>
      </v-btn>
      <v-btn href="https://github.com/dfcook" flat light class="teal--text">
        <v-icon>fa-github</v-icon>
      </v-btn>        
    </v-bottom-nav>
  </v-footer>              
</template>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }

  li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
  }

  a {
    color: #404040;
  }

  a:hover, a:focus {
    color: #0085a1;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 0;
    color: #777;
    line-height: 1.5;
    margin: 30px 0;
  }

  footer {
    padding: 50px 0 65px;
  }
</style>
