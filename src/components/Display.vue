<template>
  <div id="display">
    <Item v-for="item in items" :item="item"
          v-show="item.category === categoryState.category || categoryState.category === Category.ALL"/>
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