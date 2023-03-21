<template>
  <header>
    <h1>Organizer</h1>
  </header>
  <main>
    <div id="base-container" class="container d-flex justify-content-center">
      <Categories :categories="categories" class="border rounded-start-1 w-auto"/>
      <Display :items="items" class="border rounded-end-1"/>
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Display from "@/components/Display.vue"

import { getAll } from "@/api/idb.js";

export default {
  data() {
    return {
      items: [],
      categories: []
    }
  },
  components: {
    Categories,
    Display
  },
  mounted() {
    getAll('categories').then(cat => this.categories = cat)
    getAll('items').then(items => this.items = items)
  },
}
</script>