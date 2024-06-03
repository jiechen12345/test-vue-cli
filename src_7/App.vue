<!-- app.vue -->
<template>
  <div id="app" class="container">
    <BComponent></BComponent>
    <AComponent></AComponent>
    <CComponent></CComponent>
  </div>
</template>

<script>

import AComponent from './components/AComponent'
import BComponent from './components/BComponent'
import CComponent from './components/CComponent'
export default {
  name: 'App',
  components: {
    AComponent,
    BComponent,
    CComponent,
  },
  methods: {

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
