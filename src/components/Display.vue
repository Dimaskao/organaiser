<template>
  <div id="display" class="container-md text-center">
    <div class="row g-2 g-lg-3 gap-3 m-1">
      <Item v-for="item in filteredItems" :item="item" class="border rounded-1"/>
    </div>

  </div>
</template>

<script>
import Item from "./Item.vue";
import { categoryState } from '@/categoryState'
import Category from '@/categories'

export default {
  props: ['items'],

  components: {
    Item,
  },
  computed: {
    filteredItems() {
      if (categoryState.category === Category.ALL) {
        return this.items
      }

      return this.items.filter(i => i.category === categoryState.category)
    }
  },
  data() {
    return {
      categoryState,
      Category
    }
  }
}
</script>

<style scoped>

</style>