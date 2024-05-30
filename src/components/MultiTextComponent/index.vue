<!--multiTextComponent-->
<template>
    <div name="multiTextComponent" class="form-group">
        <label for="multiTextComponent">MB/L No.</label>
        <MultiTextInput @addMultiText="addText"></MultiTextInput>
        <MultiTextContent @delMultiText="delText" :list="list"></MultiTextContent>
    </div>

</template>

<script>
import MultiTextInput from './MultiTextInput'
import MultiTextContent from './MultiTextContent'
export default {
    data() {
        return {
            list: [
                { id: 1, name: 'test' },
                { id: 2, name: 'tes2' },
            ]
        }
    },
    methods: {
        addText(val) {
            this.list.unshift({ id: +new Date(), name: val })
        },
        delText(id) {
            this.list = this.list.filter(item => item.id != id)
        }
    },
    components: {
        MultiTextInput,
        MultiTextContent
    }
}
</script>

<style scoped></style>