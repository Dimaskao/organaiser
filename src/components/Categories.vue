<template>
  <div id="categories">
    <ul>
      <Category v-for="category in categories" :category="category"/>
    </ul>
  </div>
</template>

<script>
  import Category from './Category.vue'
  export default {
    props: ['categories'],

    components: {
      Category
    }
  }
</script>