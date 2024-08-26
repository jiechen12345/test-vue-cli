<template>
  <div>
    <h1>{{ displayText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
  data() {
    return {
      poName: null
    };
  },
  computed: {
    displayText() {
      return (this.poName) ? this.poName : 'test';
    }
  },
  created() {
    console.log(this.$route.query)
    const poName = this.$route.query.poName;
    if (poName) {
      this.poName = (poName);
    }
  }
};
</script>

<style scoped></style>
