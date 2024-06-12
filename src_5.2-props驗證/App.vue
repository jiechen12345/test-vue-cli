<!-- App.vue -->
<template>
  <div class="App">
    <h1>我是爸爸</h1>
    <SonComponent :userName="userName2" :age="age" :sex="sex" :house="house" :hobby="hobby"></SonComponent>

  </div>
</template>

<script>
import SonComponent from './components/SonComponent.vue';

export default {
  data() {
    return {
      userName2: '阿坤',
      age: 20,
      sex: '1',
      house: {
        addr: '桃園市蘆竹區OO路1號',
        comm: '長榮大樓',
      },
      hobby: ['唱', '跳', 'rap', '籃球']
    }

  },
  components: {
    SonComponent
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
