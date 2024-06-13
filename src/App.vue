<!--App.vue-->
<template>
  <div id="app" v-loading="isLoading" class="container">
    <h1 v-color="color1">{{ msg }}</h1>
    <h1 v-color="color2">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '',
      color1: 'red',
      color2: 'green',
      isLoading: true,
    }
  },
  async created() {
    setTimeout(() => {
      this.msg = 'Title'
      this.isLoading = false
    }, 3000)
  },
  directives: {
    loading: {
      inserted(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value
      },
      update(el, binding) {
        el.style.color = binding.value
      },
    }
  }
};
</script>

<style>
.loading::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../public/img/loading.gif) no-repeat center;
}

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
