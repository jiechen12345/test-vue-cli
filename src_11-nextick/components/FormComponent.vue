<!-- FormComponent.vue -->
<template>
    <div v-if="visible">
        <input ref="inputField" v-model="editValue" class="form-control" />
    </div>
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
        focus() {
            this.$refs.inputField.focus();
        },
        clear() {
            this.editValue = '';
        },
        setValue(value) {
            this.editValue = value;
        },
        getValue() {
            return this.editValue;
        }
    }
}
</script>

<style scoped>
.base-chart-box {
    width: 700px;
    height: 700px;
}
</style>