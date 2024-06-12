<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card C(接收2)</h5>
            <p class="card-text">{{ msg }}-2</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>
import Bus from '@/utils/EventBus';
export default {
    data() {
        return {
            msg: 'no msg'
        }
    },
    created() {
        Bus.$on('sendMsg', (msg) => {
            this.msg = msg
        })
    },
}
</script>

<style></style>
