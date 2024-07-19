<template>
    <div>
        <div class="modal fade" :class="{ show: visible }" tabindex="-1"
            :style="{ display: visible ? 'block' : 'none', ...customStyle }">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <slot name="head">提示</slot>
                        </h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <slot name="content">我是預設提示</slot>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary">Yes</button>
                        </slot>

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
        visible: {
            type: Boolean,
            default: false
        },
        customStyle: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:visible', false)
        }
    }
}
</script>

<style scoped>
.base-chart-box {
    width: 700px;
    height: 700px;
}
</style>