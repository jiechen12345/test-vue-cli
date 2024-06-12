<template>
    <div class="card" style=" width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card B(發送)</h5>
            <a href="#" @click="sendMsg" class="btn btn-primary">emit</a>
        </div>
    </div>
</template>

<script>
import Bus from '@/utils/EventBus';
export default {
    data() {
        return {

        }
    },
    methods: {
        sendMsg() {
            Bus.$emit('sendMsg', 'test')
        }
    },
}
</script>

<style></style>