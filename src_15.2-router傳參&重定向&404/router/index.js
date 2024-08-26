import Vue from 'vue';
import VueRouter from 'vue-router';
import GridPage from '@/view/GridPage.vue'; //@代表src 絕對路徑
import TitlePage from '@/view/TitlePage.vue';
import NotFoundPage from '@/view/NotFoundPage.vue';
// 安裝 Vue Router 插件
Vue.use(VueRouter);
// 配置路由
const routes = [
  { path: '/', redirect: '/grid' },
  // 在這裡添加你的route配置
  { path: '/grid', component: GridPage },
  { path: '/title', component: TitlePage },
  { path: '*', component: NotFoundPage },
];
// 創建路由實例
const router = new VueRouter({
  mode: 'history', //預設是hash
  routes,
});

export default router;
