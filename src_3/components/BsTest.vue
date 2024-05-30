<template>
    <div>
        <h1 class="text-primary">Hello, Bootstrap!</h1>
        <button class="btn btn-primary" @click="showAlert">Click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        showAlert() {
            window.alert('test')
        }
    }
};
</script>
<style></style>