<template>
  <div id="categories" class="container-sm">
    Category<br>
    <div class="btn-group btn-group-sm pt-2" role="group">
      <button type="button" class="btn btn-secondary"
              @click="isEdit=false; $router.push('/organiser/category-form')">New</button>
      <button type="button" class="btn btn-secondary"
              :disabled="selectedCategory.id === -1" @click="isEdit=true;
              $router.push('/organiser/category-form/' + selectedCategory.id)">Edit</button>
    </div>
    <div class="btn-group-vertical pt-1 pb-1" role="group" aria-label="Vertical radio toggle button group">
      <input @click="apply_filer(-1)" type="radio" class="btn-check" name="vbtn-radio" id="-1" autocomplete="off"
             :checked="selectedCategory.id === -1">
      <label class="btn btn-outline-primary" for="-1">All</label>
      <Category @apply_filter="apply_filer(category.id)" v-for="category in categories" :category="category"/>
    </div>
  </div>
</template>

<script>
  import Category from './Category.vue'
  import {selectedCategory} from "@/selectedCategory";

  export default {
    props: ['categories'],
    components: {
      Category
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
      }
    }
  }
</script>