<template>
    <select :value="value" @change="handleChange" class="form-select form-select-lg">
        <option selected>Open this select menu</option>
        <option value="1">台北</option>
        <option value="2">桃園</option>
        <option value="3">台中</option>
        <option value="4">台南</option>
        <option value="5">高雄</option>
    </select>
</template>

<script>
export default {
    props: {
        value: String
    },
    methods: {
        handleChange(event) {
            // console.log(event.target.value)
            this.$emit('input', event.target.value)
        }
    },
}
</script>

<style></style>