<template>
    <div class="test">
        我是base1
    </div>
</template>

<script>
export default {

};
</script>
<!-- 是 Vue 的一個特性，它允許你在單文件組件（Single File Components，SFC）中定義只對當前組件生效的樣式。這樣可以避免樣式在全局範圍內衝突和污染，確保樣式僅應用於該組件內的元素。 -->
<style scoped>
.test {
    color: red
}
</style>