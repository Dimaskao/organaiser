<template>
  <input type="radio" class="btn-check" name="vbtn-radio" :id="category.id" autocomplete="off" :checked="(selectedCategory.id === category.id)">
  <label @click="$emit('apply_filter')" class="btn btn-outline-primary" :for="category.id">{{category.title}}</label>
</template>

<script>

import {selectedCategory} from "../selectedCategory";

export default {
  emits: ['apply_filter'],
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedCategory,
    }
  }

}
</script>