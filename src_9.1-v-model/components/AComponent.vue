<template>
    <div class="card" style="width: 28rem;">
        <div class="card-body">
            <h5 class="card-title">Card A</h5>
            <p class="card-text">{{ msg }}</p>
            <AComponent_son></AComponent_son>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

        </div>
    </div>
</template>

<script>
import AComponent_son from './AComponent_son'
export default {
    components: {
        AComponent_son
    },
    data() {
        return {
            msg: ''
        }
    },

}
</script>

<style></style>
