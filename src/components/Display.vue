<template>
  <div id="display" class="container-md text-center">
    <div class="btn-group pt-2 btn-group-sm" role="group">
      <button type="button" class="btn btn-secondary"
              @click="isEdit=false; $router.push('/organiser/item-form')">Add new</button>
      <button type="button" class="btn btn-secondary" @click="isEdit=true; $router.push('/organiser/item-form/' + selectedItem.id)"
              :disabled="selectedItem.id < 0">Edit</button>
    </div>
    <div class="row g-2 g-lg-3 gap-3 m-auto mb-2">
      <Item v-for="item in filteredItems" :item="item" class="border rounded-1" :class="item.id === selectedItem.id ? 'selected' : ''"
            @click="selectedItem.id = item.id"/>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { selectedCategory } from '@/selectedCategory'
import { selectedItem } from "@/selectedItem";

export default {
  props: ['items'],

  components: {
    Item,
  },
  computed: {
    filteredItems() {
      if (selectedCategory.id === -1) {
        return this.items
      }

      return this.items.filter(i => i.categoryId === selectedCategory.id)
    }
  },
  data() {
    return {
      selectedCategory,
      selectedItem,
      categories: [],
      isEdit: false,
    }
  },
}
</script>

<style scoped>
.selected {
  background-color: lightgray;
}
</style>