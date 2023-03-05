<template>
  <div>
    <a :href="item.path" target="_blank">{{item.title}}</a>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>