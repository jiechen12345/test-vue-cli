<!-- app.vue -->
<template>
  <div id="app" class="container">
    <a href="#" class="btn btn-primary" @click="showModal()">exit</a>
    <!-- <ModalComponent :visible="isShow" @update:visible="isShow = $event"></ModalComponent> -->
    <ModalComponent :visible.sync="isShow"></ModalComponent>
    <!-- vue3 -->
    <!-- <ModalComponent v-model:visible="isShow"></ModalComponent> -->
  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
  data() {
    return {
      cityId: '1',
      isShow: false
    }
  },
  components: {
    ModalComponent,
  },
  methods: {
    showModal() {
      this.isShow = true
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
