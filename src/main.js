import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import db from '@/plugins/firebase.db';
import vuetify from '@/plugins/vuetify';
import AppRoot from '@/AppRoot.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

db.ref('messages').on('child_added', snapshot => console.log(snapshot.val()))

new Vue({
  db,
  vuetify,
  router,
  store,
  render: (h) => h(AppRoot),
}).$mount('#app');
