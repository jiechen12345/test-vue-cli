<!-- FormComponent.vue -->
<template>
    <div>
        帳號:<input v-model="userName" class="form-control" />
        密碼:<input v-model="password" class="form-control" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        getValues() {
            return {
                userName: this.userName,
                password: this.password,
            }
        },
        resetValues() {
            this.userName = ''
            this.password = ''
        }
    },
}
</script>

<style scoped>
.base-chart-box {
    width: 700px;
    height: 700px;
}
</style>