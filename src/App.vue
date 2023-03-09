<template>
  <header>
    <h1>Organizer</h1>
  </header>
  <main>
    <div id="base-container" class="container d-flex justify-content-center">
      <Categories @updateCategories="updateCategories" :categories="categories" class="border rounded-start-1 w-auto"/>
      <Display @updateItems="updateItems" :items="items" class="border rounded-end-1"/>
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Display from "@/components/Display.vue"

import { set, keys, getAll } from "./api/idb.js";

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
  methods: {
    updateCategories() {
      getAll('categories').then(cat => this.categories = cat)
    },
    updateItems() {
      getAll('items').then(it => this.items = it)
    }
  }
}
</script>

<style>
  body {
    text-align: center;
  }

  /*#base-container {*/
  /*  display: flex;*/
  /*  flex-direction: row;*/
  /*  align-content: stretch;*/
  /*}*/

  /*#base-container > div{*/
  /*  border: 2px solid gray;*/
  /*}*/

  /*#categories {*/
  /*  width: fit-content;*/
  /*  padding-right: 5px;*/
  /*  text-align: left;*/
  /*}*/

  /*#display {*/
  /*  display: inline-flex;*/
  /*  flex-direction: row;*/
  /*  flex-wrap: wrap;*/
  /*  align-items: start;*/
  /*  min-width: 70%;*/
  /*  min-height: 500px;*/
  /*}*/

  /*a {*/
  /*  text-decoration: none;*/
  /*  color: black;*/
  /*}*/
</style>