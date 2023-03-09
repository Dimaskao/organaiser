<template>
  <div id="display" class="container-md text-center">
    <div class="btn-group pt-2 btn-group-sm" role="group">
      <button type="button" class="btn btn-secondary" @click="getCategories(); isEdit=false" data-bs-toggle="modal"
              data-bs-target="#addItemForm">Add new</button>
      <button type="button" class="btn btn-secondary" @click="getCategories(); isEdit=true" :disabled="selectedItem.id < 0"
              data-bs-toggle="modal" data-bs-target="#addItemForm">Edit</button>
    </div>
    <div class="row g-2 g-lg-3 gap-3 m-auto mb-2">
      <Item v-for="item in filteredItems" :item="item" class="border rounded-1" :class="item.id === selectedItem.id ? 'selected' : ''"
            @click="selectedItem.id = item.id"/>
    </div>
    <AddItemForm @updateItems="$emit('updateItems'); selectedItem.id = -1" :items="items" :categories="categories" :isEdit="isEdit" :id="selectedItem.id"/>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { selectedCategory } from '@/selectedCategory'
import { selectedItem } from "@/selectedItem";
import { getAll } from "@/api/idb"
import AddItemForm from "./AddItemForm.vue";

export default {
  props: ['items'],

  components: {
    Item,
    AddItemForm,
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
  methods: {
    getCategories() {
      getAll('categories').then(cat => this.categories = cat)
    },
  }
}
</script>

<style scoped>
.selected {
  background-color: lightgray;
}
</style>