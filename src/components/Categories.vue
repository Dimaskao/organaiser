<template>
  <div id="categories" class="container-sm">
    Category
    <ul class="list-group pt-2 pb-2">
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