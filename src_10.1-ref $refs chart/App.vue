<!-- app.vue -->
<template>
  <div id="app" class="container">
    <!--來亂的div-->
    <div class="base-chart-box" style="width:60px; height: 60px;"></div>
    <EchartsComponent></EchartsComponent>
  </div>
</template>

<script>
import EchartsComponent from './components/EchartsComponent'
export default {
  data() {
    return {

    }
  },
  components: {
    EchartsComponent
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
