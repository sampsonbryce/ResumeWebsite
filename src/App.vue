<template>
  <div id="app">
    <header-component />
    <qualifications-component />
    <whatsnew-component />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import WhatsnewComponent from './components/WhatsNew.vue';
import ProjectsComponent from './components/Projects.vue';
import QualificationsComponent from './components/Qualifications.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderComponent,
    QualificationsComponent,
    WhatsnewComponent,
  }
}
</script>

<style lang="scss">

html,body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>
