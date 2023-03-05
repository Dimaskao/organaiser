<template>
  <header>
    <h1>Organizer</h1>
  </header>
  <main>
    <div id="base-container">
      <Categories :categories="Category" @apply_filer="apply_filer"/>
      <Display :items="items"/>
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Display from "@/components/Display.vue";
import Category from "@/categories"

export default {
  data() {
    return {
      items: [
        {id: 1, title: 'Vue', path: 'https://vuejs.org/', category: Category.SITE},
        {id: 2, title: 'Google', path: 'https://www.google.com/', category: Category.SITE},
        {id: 3, title: 'Youtube', path: 'https://www.youtube.com/', category: Category.SITE},
        {id: 4, title: 'VS Code', path: 'soon', category: Category.PROGRAM},
        {id: 5, title: 'OSU', path: 'soon', category: Category.PROGRAM},
      ],
      Category
    }
  },
  components: {
    Categories,
    Display
  },
  methods: {
    apply_filer(category){
      alert(category)
    }
  }
}
</script>

<style>
  body {
    text-align: center;
  }

  #base-container {
    display: flex;
    flex-direction: row;
    align-content: stretch;
  }

  #base-container > div{
    border: 2px solid gray;
  }

  #categories {
    width: fit-content;
    padding-right: 5px;
    text-align: left;
  }

  ul {
    list-style: none;
    margin-left: -30px;
  }

  #display {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    min-width: 70%;
    min-height: 500px;
  }

  #display div {
    margin: 10px;
    padding: 5px;
    border: 1px solid green;
    border-radius: 3px;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>