<template>
  <footer>
    <v-container fluid="fluid">
      <v-row>
        <v-col lg8 offset-lg2 md10 offset-md1>
          <ul>
            <li>
              <a href="mailto: dota_it@hotmail.co.uk">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://uk.linkedin.com/in/daniel-cook-938529110">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/dfcook">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright © DOTA IT Services Ltd 201</p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
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
