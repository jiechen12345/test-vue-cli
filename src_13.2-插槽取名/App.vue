<template>
  <div id="app" v-loading="isLoading" class="container">
    <ModalComponent :visible.sync="isShow">
      確定要刪除?
    </ModalComponent>
    <ModalComponent :customStyle="{ marginTop: '300px' }" :visible.sync="isShow">
      <template #head>
        !!
      </template>
      <template #content>
        要離開?
      </template>
      <template #footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">確認</button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue';
export default {
  data() {
    return {
      msg: '',
      isShow: true,
      isLoading: true,
    }
  },
  async created() {
    setTimeout(() => {
      this.msg = 'Title'
      this.isLoading = false
    }, 1000)
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

  },
  components: {
    ModalComponent,
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
