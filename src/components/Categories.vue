<template>
  <div id="categories" class="container-sm">
    Category<br>
    <div class="btn-group btn-group-sm pt-2" role="group">
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addCategoryForm" @click="isEdit=false">New</button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addCategoryForm" :disabled="selectedCategory.id === -1" @click="isEdit=true">Edit</button>
    </div>
    <div class="btn-group-vertical pt-1 pb-1" role="group" aria-label="Vertical radio toggle button group">
      <input @click="apply_filer(-1)" type="radio" class="btn-check" name="vbtn-radio" id="-1" autocomplete="off" :checked="selectedCategory.id === -1">
      <label class="btn btn-outline-primary" for="-1">All</label>
      <Category @apply_filter="apply_filer(category.id)" v-for="category in categories" :category="category"/>
    </div>
    <AddCategoryForm @updateCategories="updateCategories()" :categories="categories" :isEdit="isEdit" :id="selectedCategory.id"/>
  </div>
</template>

<script>
  import Category from './Category.vue'
  import {selectedCategory} from "@/selectedCategory";
  import AddCategoryForm from "./AddCategoryForm.vue";

  export default {
    props: ['categories'],
    components: {
      Category,
      AddCategoryForm
    },
    data() {
      return {
        selectedCategory,
        isEdit: false,
      }
    },
    methods: {
      apply_filer(catId){
        selectedCategory.id = catId
      },
      updateCategories() {
        selectedCategory.id = -1
        this.$emit('updateCategories')
      }
    }


  }
</script>