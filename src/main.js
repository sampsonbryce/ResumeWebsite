import Vue from 'vue';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueScrollTo from 'vue-scrollto';
import Toast from './plugins/Toast';
import VueObserveVisibility from 'vue-observe-visibility';
import ECharts from 'vue-echarts/components/ECharts'

import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import VTooltip from 'v-tooltip';

Vue.use(VueObserveVisibility)
Vue.use(Toast);
Vue.use(VueScrollTo);
Vue.use(VTooltip);

Vue.component('icon', Icon);
Vue.component('v-chart', ECharts);

new Vue({
  el: '#app',
  render: h => h(App)
})
