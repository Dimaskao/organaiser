<template>
  <li @click="apply_filer(category)" class="list-group-item list-group-item-action" :class="categoryState.category === category ? 'active' : ''">{{ category }}</li>
</template>

<script>
import { categoryState } from '@/categoryState'
import Category from "@/categories";

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },

  data() {
    return{
      categoryState
    }
  },

  methods: {
    apply_filer(cat){
      categoryState.category = cat
    },
  }
}
</script>