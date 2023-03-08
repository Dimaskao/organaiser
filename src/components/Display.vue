<template>
  <div id="display" class="container-md text-center">
    <div class="btn-group pt-2 btn-group-sm" role="group">
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addItemForm">Add new</button>
      <button type="button" class="btn btn-secondary" :disabled="selectedItem.id < 0">Edit</button>
    </div>
    <div class="row g-2 g-lg-3 gap-3 m-auto">
      <Item v-for="item in filteredItems" :item="item" class="border rounded-1" :class="item.id === selectedItem.id ? 'selected' : ''"
            @click="selectedItem.id = item.id"/>
    </div>
    <AddItemForm :items="items" />
  </div>
</template>

<script>
import Item from "./Item.vue";
import { selectedCategory } from '@/selectedCategory'
import Category from '@/categories'
import { selectedItem } from "@/selectedItem";
import AddItemForm from "./AddItemForm.vue";

export default {
  props: ['items'],

  components: {
    Item,
    AddItemForm,
  },
  computed: {
    filteredItems() {
      console.log(selectedCategory.id)
      if (selectedCategory.id === -1) {
        return this.items
      }

      return this.items.filter(i => i.categoryId === selectedCategory.id)
    }
  },
  data() {
    return {
      selectedCategory,
      Category,
      selectedItem,
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: lightgray;
}
</style>