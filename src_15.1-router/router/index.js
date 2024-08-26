import Vue from 'vue';
import VueRouter from 'vue-router';
import GridPage from '@/view/GridPage.vue'; //@代表src 絕對路徑
import ModalPage from '@/view/TitlePage.vue';
// 安裝 Vue Router 插件
Vue.use(VueRouter);
// 配置路由
const routes = [
  // 在這裡添加你的route配置
  { path: '/grid', component: GridPage },
  { path: '/grid/grid2', component: GridPage },
  { path: '/modal', component: ModalPage },
];
// 創建路由實例
const router = new VueRouter({
  routes,
});

export default router;
