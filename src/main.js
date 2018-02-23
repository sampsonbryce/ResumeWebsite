import Vue from 'vue';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import './assets/styles/global.scss';
import VueScrollTo from 'vue-scrollto';
// var VueScrollTo = require('vue-scrollto')


console.log(VueScrollTo)

Vue.use(VueScrollTo);
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App)
})
