<template>
    <div>
        <h1>BB Page</h1>
        <p>This is the content of {{ user }} page.</p>
        <!-- 根據需求放置功能元件 -->
    </div>
</template>

<script>
export default {
    name: 'BBPage',
    data() {
        return {
            user: '',
        }
    },
    async created() {
        console.log(this.$route.query.inputUser)
        this.user = this.$route.query.inputUser
    }
};
</script>

<style scoped>
/* 可根據需要自訂義樣式 */
</style>