<template>
  <div id="app">
    <header-component />
    <qualifications-component />
    <whatsnew-component />
    <documentation-component />
    <supporters-component />
    <contact-component />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import WhatsnewComponent from './components/WhatsNew.vue';
import QualificationsComponent from './components/Qualifications.vue';
import DocumentationComponent from './components/Documentation.vue';
import SupportersComponent from './components/Supporters.vue';
import ContactComponent from './components/Contact.vue';

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
    DocumentationComponent,
    SupportersComponent,
    ContactComponent
  }
}
</script>

<style lang="scss">

html,body{
  width:100%;
  height:100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  display:grid;
  justify-items: center;
}

h1 {
  font-weight: 200;
  font-size:2rem;
  &.large{
    font-size:3rem;
    @media (max-width: $phone){
      font-size: 2rem;
    }
  }
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a{
  text-decoration:none;
}
</style>
