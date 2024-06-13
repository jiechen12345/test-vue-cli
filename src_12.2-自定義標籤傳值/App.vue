<!--App.vue-->
<template>
  <div id="app" class="container">
    <h1 v-color="color1">{{ msg }}</h1>
    <h1 v-color="color2">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Title',
      color1: 'red',
      color2: 'green',
    }
  },
  directives: {
    color: {
      inserted(el, binding) { //只限於DOM 被插入時
        console.log(binding.value)
        el.style.color = binding.value
      },
      update(el, binding) { //指令相關值被更新
        console.log('updated')
        el.style.color = binding.value
      },
    }
  },


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
