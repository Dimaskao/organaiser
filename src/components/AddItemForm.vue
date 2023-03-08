<template>
  <div class="modal fade" id="addItemForm" tabindex="-1" aria-labelledby="addItemForm" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add new item</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input v-model="newTitle" type="text" class="form-control" id="inputEmail3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">URL</label>
              <div class="col-sm-10">
                <input v-model="newPath" type="text" class="form-control" id="inputPassword3">
              </div>
            </div>
            <div class="row mb-3">
              <select v-model="categoryId" class="form-select form-select-sm " aria-label=".form-select-sm example">
                <option selected disabled value="">Open this select menu</option>
                <option :value="category.id" v-for="category in categories">{{category.title}}</option>
              </select>
            </div>
          </form>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" @click="addItem()" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set, getAll } from "@/api/idb"
export default {
  props: ['items'],
  data() {
    return {
      newTitle: '',
      newPath: '',
      categories: [],
      categoryId: ''
    }
  },
  mounted() {
    getAll('categories').then(cat => this.categories = cat)
  },
  methods: {
    addItem() {
      set('items', {title: this.newTitle, path: this.newPath, categoryId: this.categoryId}).then(id=>
          this.items.push({title: this.newTitle, path: this.newPath, categoryId: this.categoryId, id: id}))
    }
  }

}
</script>

<style scoped>

</style>