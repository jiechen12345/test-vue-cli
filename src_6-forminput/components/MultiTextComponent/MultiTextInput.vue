<template>
    <div class="input-group mb-3">
        <!-- 傳event 阻止默認行為必兩送兩次 -->
        <input @keyup.enter.once="addMultiText($event)" v-model="no" type="text" class="form-control" name="no"
            v-bind="$attrs" />
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="addMultiText">+</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            no: ''
        }
    },
    methods: {
        addMultiText(event) {

            if (event) {
                event.preventDefault();
            }
            if (!this.no) {
                return
            }
            this.$emit('addMultiText', this.no)
            this.no = ''
        }
    }
};
</script>

<style scoped>
/* 保持輸入框和按鈕在同一行 */
.input-group {
    display: flex;
    align-items: center;
}
</style>