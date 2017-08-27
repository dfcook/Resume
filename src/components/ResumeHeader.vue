<template>  
  <header>
    <v-parallax height="252" src='/static/home-bg.jpg'>
      <resume-navigation />
      <v-layout column align-center justify-center>
        <h2 class="white-text">Daniel Cook</h2>
        <hr>
        <p>Senior Developer</p>
        <p>LLC: DOTA IT Services Ltd</p>
      </v-layout>      
    </v-parallax>
  </header>  
</template>

<script>
  import ResumeNavigation from '@/components/ResumeNavigation'

  export default {
    components: { ResumeNavigation }
  }

</script>

<style scoped>
  h2 {
    color: white;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;    
  }
  
  hr {
    width: 100px;
    text-align: center;
    margin: 15px auto;
    border-width: 4px;
    border-color: white;
    border-top-style: solid;
    border-right-style: initial;
    border-bottom-style: initial;
    border-left-style: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }

  header {
    text-align: center;
    background-color: #808080;
    background: no-repeat center center;
    background-attachment: scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;     
  }
</style>
