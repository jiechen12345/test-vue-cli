<!--App.vue-->
<template>
  <div id="app" class="container">
    <FormComponent v-focus ref="FormComponent1"></FormComponent>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'

export default {
  data() {
    return {
      msg: 'Title',
    }
  },
  methods: {

  },
  components: {
    FormComponent
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

/*radio*/
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
