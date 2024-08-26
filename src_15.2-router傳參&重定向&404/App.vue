<template>
  <!-- Vue Router 提供的路由連結元件 <router-link>取代<a> 來自動處理 active 狀態 -->
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <!-- <a class="nav-link active" aria-current="page" href="#">Active</a> -->
        <router-link class="nav-link" active-class="active" exact to="/grid">Grid</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/title">Title</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/title?poName=OK">傳參測試</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-link.active {
  font-weight: bold;
}
</style>
