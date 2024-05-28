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
<!-- 是 Vue 的一個特性，它允許你在單文件組件（Single File Components，SFC）中定義只對當前組件生效的樣式。這樣可以避免樣式在全局範圍內衝突和污染，確保樣式僅應用於該組件內的元素。 -->
<style scoped>
</style>