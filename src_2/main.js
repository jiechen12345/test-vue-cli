// 引入Vue 負責初始化 Vue 實例，並也引入 App.vue
// <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
import Vue from 'vue';
import App from './App.vue';
import AppButton from './components/AppButton';
Vue.config.productionTip = false;

//全局註冊
//(組件名，組件物件)
Vue.component('AppButton', AppButton);
//建立Vue 實例，並且掛載到 #app 元素中
new Vue({
  render: (h) => h(App),
}).$mount('#app');
