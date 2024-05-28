<!-- App.vue -->
<template>
  <div class="App">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
    <BsTest></BsTest>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import BsTest from './components/BsTest.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    BsTest
  },

};
</script>

<style>
.App {
  width: 600px;
  height: 600px;
  background-color: papayawhip;
  padding: 20px;
  align-items: center;
}
</style>
