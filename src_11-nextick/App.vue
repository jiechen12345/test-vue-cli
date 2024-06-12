<!--App.vue-->
<template>
  <div id="app" class="container">
    {{ msg }}
    <a href="#" @click="handleSet" class="btn btn-success">編輯</a>
    <FormComponent ref="FormComponent1" :visible="isShowEdit"></FormComponent>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'

export default {
  data() {
    return {
      msg: 'Title',
      isShowEdit: false,
    }
  },
  methods: {
    handleSet() {
      // 顯示 FormComponent
      this.isShowEdit = true;
      // 使用 $nextTick 確保 DOM 已被更新後再設置焦點
      this.$nextTick(() => {
        this.$refs.FormComponent1.focus();
      });
    },
    clearForm() {
      this.$refs.FormComponent1.clear();
    },
    setFormValue(value) {
      this.$refs.FormComponent1.setValue(value);
    },
    getFormValue() {
      return this.$refs.FormComponent1.getValue();
    }
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
