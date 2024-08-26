import Vue from 'vue';
import App from './App.vue';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import router from './router/index.js';

Vue.config.productionTip = false;
// 創建並掛載 Vue 實例
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount('#app');
