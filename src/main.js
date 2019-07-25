import Vue from 'vue';
import App from './App.vue';
import router from './router';
import resource from 'vue-resource'

import './common/stylus/index.styl';

Vue.config.productionTip = false

Vue.use(router);
Vue.use(resource);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.push('/goods');
