<template>
    <div class="form">
        <h2>我是兒子</h2>
        <!-- @click="$emit('adduserNameByA', userName + 'A')" -->
        <div>姓名: {{ userName }} <button class="btn btn-primary" @click="addText">+++</button></div>
        <div>年紀: {{ age }}</div>
        <div>性別: {{ sex == 1 ? '男' : '女' }}</div>
        <div>房子: {{ house.addr }}-{{ house.comm }}社區</div>
        <div>興趣: {{ hobby.join('、') }}</div>
    </div>
</template>

<script>
export default {
    // props: ['userName', 'age', 'sex', 'house', 'hobby']
    // props: {
    //     userName: null, age: Number, sex: String, house: Object, hobby: [String, Array]
    //          //null 代表any
    //          // [String, Array] 可以是String也可以是Array
    // }
    props: {
        userName: {
            type: null,
            require: false, //是否必傳
            default: 'xx', //連傳都沒傳預設值
            validator(val) {
                if (val.length > 4) {
                    console.error(`名字太長了`)
                    return false //false代表驗證不過
                }
                return true
            }
        }, age: Number, sex: String, house: Object, hobby: [String, Array]
    },
    methods: {
        addText() {
            //子傳父this.$emit(事件名,參數)
            this.$emit('adduserNameByA', this.userName + 'A')
        }
    },
}
</script>

<style scoped>
.form {
    width: 400px;
    border: 1px solid #000;
    padding: 10px 0 5px 10px;
}
</style>