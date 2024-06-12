<!--ModalComponent-->
<template>
    <div>
        <div class="modal fade" :class="{ show: visible }" tabindex="-1"
            :style="{ display: visible ? 'block' : 'none' }">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">提示</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>確定要退出嗎?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade" :class="{ show: visible }" v-if="visible"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        visible: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('update:visible', false)
        }
    }

}
</script>

<style></style>