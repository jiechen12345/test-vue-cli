<!-- App.vue -->
<template>
  <div class="App">
    <BaseComponent1></BaseComponent1>
    <BaseComponent2></BaseComponent2>
    <BaseCountComponent1></BaseCountComponent1>
    <BaseCountComponent1></BaseCountComponent1>
    <BaseCountComponent1></BaseCountComponent1>
    <BaseCountComponent1></BaseCountComponent1>
  </div>
</template>

<script>
import BaseComponent1 from './components/BaseComponent1.vue';
import BaseComponent2 from './components/BaseComponent2.vue';
import BaseCountComponent1 from './components/BaseCountComponent1.vue';

export default {
  components: {
    BaseComponent1,
    BaseComponent2,
    BaseCountComponent1
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
