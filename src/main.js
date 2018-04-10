import Vue from 'vue';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueScrollTo from 'vue-scrollto';
import Toast from './plugins/Toast';
import MediaQueries from './plugins/Media';

Vue.use(Toast);
Vue.use(MediaQueries);
Vue.use(VueScrollTo);

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App)
})
