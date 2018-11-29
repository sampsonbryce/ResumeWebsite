import Vue from 'vue';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueScrollTo from 'vue-scrollto';
import Toast from './plugins/Toast';
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.use(Toast);
Vue.use(VueScrollTo);

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App)
})
