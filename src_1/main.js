//index.html 加載完成後，Webpack 打包的 JavaScript 文件（包括 main.js）會被加載並執行。
// 引入Vue 負責初始化 Vue 實例，並也引入 App.vue
// <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
import Vue from 'vue';
import App from './App.vue';

//修改這個去提示你是否在開發模式
Vue.config.productionTip = false;

//建立Vue 實例，並且掛載到 #app 元素中
{
  /* <script>
      const obj = new Vue({
        el: '#app',
        data: {
        
        },
        reder: (creatElement) => {
          //創建元素，元素的模板結構在App.vue
          return creatElement(App);
  },
     
      });
    </script> */
}
new Vue({
  render: (h) => h(App),
}).$mount('#app');
