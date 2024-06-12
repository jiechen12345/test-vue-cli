<template>
    <div class="form">
        <h2>我是兒子</h2>
        <div>姓名: {{ userName }}</div>
        <div>年紀: {{ age }}</div>
        <div>性別: {{ sex == 1 ? '男' : '女' }}</div>
        <div>房子: {{ house.addr }}-{{ house.comm }}社區</div>
        <div>興趣: {{ hobby.join('、') }}</div>
    </div>
</template>

<script>
export default {
    props: ['userName', 'age', 'sex', 'house', 'hobby']
}
</script>

<style scoped>
.form {
    width: 400px;
    border: 1px solid #000;
    padding: 10px 0 5px 10px;
}
</style>