<!-- MultiTextContent -->
<template>
    <div name="MultiTextContent">
        <ul class="list-group">
            <li v-for="(item, index) in list" :key="item.id" class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <span>{{ index + 1 }}. &emsp; {{ item.name }}</span>
                    <!--<button>默認會做表單提交所以要加type="button阻止 -->
                    <button type="button" class="btn btn-danger btn-sm" @click="removeItem(item.id)">x</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('delMultiText', id)
        }
    },
};
</script>

<style scoped>
.list-group {
    margin-top: -20px;
}
</style>