import Vue from 'vue'
import Toast from './Toast'

export default {
  install(Vue, defaultOptions = {}) {
    // Store toast component to be used for future toasts
    var toast_component = null;

    function toast(msg, options = {}) {
      options.message = msg;
      options.id = new Date().getTime();

      // mount toast component if it hasn't been mounted yet
      if (toast_component == null){
        let toast = Vue.extend(Toast);
        toast_component = new toast;
        let vm = toast_component.$mount();
        document.querySelector('body').appendChild(vm.$el);
      }

      // Add message to queue
      toast_component.queue.push(options);
    }
    Vue.toast = Vue.prototype.$toast = toast;
  }
}