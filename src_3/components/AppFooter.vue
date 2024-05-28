<template>
    <div class="footer">
        footer
        <AppButton></AppButton>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'
export default {
    components: {
        AppButton,
    },
}
</script>

<style>
.footer {
    height: 100px;
    text-align: center;
    font-size: 30px;
    color: black;
    background-color: darkgray;
    align-content: center;
    margin: 10px 0 0 0;
}
</style>