<template>
    <header>
      <v-container fluid="fluid">
        <v-row>
          <resume-navigation />
        </v-row>
        <v-row>
          <v-col lg8 offset-lg2 md10 offset-md1>
            <div class="site-heading">
              <h2>Daniel Cook</h2>
              <hr>
              <p>Senior Developer</p>
              <p>LLC: DOTA IT Services Ltd</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
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

  .site-heading {
    padding-top: 100px;
    padding-bottom: 100px;
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
     background-image: url('/static/home-bg.jpg');
  }
</style>
