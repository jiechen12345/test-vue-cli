<!-- FormComponent.vue -->
<template>
    <input v-model="editValue" v-if="visible" class="form-control" />
</template>

<script>
export default {
    data() {
        return {
            editValue: ''
        }
    },
    props: {
        visible: Boolean
    },
    methods: {

    }
}
</script>

<style scoped>
.base-chart-box {
    width: 700px;
    height: 700px;
}
</style>