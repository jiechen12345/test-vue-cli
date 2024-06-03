<!-- app.vue -->
<template>
  <div id="app" class="container">

    <div class="card" style="width: 50rem;">
      <div class="card-body">
        <h5 class="card-title">APP <a href="#" @click="update" class="btn btn-primary">修改</a></h5>
        <AComponent></AComponent>
        <BComponent></BComponent>

      </div>
    </div>
  </div>
</template>

<script>

import AComponent from './components/AComponent'
import BComponent from './components/BComponent'

export default {
  data() {
    return {
      msg: 'A',
      userInfo: {
        name: 'Chris',
        age: 18,
      }
    }
  },
  provide() {
    return {
      msg: this.msg,
      userInfo: this.userInfo
    }
  },
  name: 'App',
  components: {
    AComponent,
    BComponent,
  },
  methods: {
    update() {
      this.msg = 'B'
      console.log('')
      this.userInfo.name = (this.userInfo.name == 'Chris') ? this.userInfo.name = 'David' : this.userInfo.name = 'Chris'

    }
  }
};
</script>

<style>
.container {
  padding-top: 20px;
}

.row {
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

/*redio*/
.custom-radio-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.custom-radio-btn input[type="radio"] {
  display: none;
}

.custom-radio-btn.selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
