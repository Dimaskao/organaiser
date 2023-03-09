<template>
  <div class="modal fade" id="addItemForm" tabindex="-1" aria-labelledby="addItemForm" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add new item</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" id="item-btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form @submit.prevent="saveItem()">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input v-model="newTitle" type="text" class="form-control" id="inputEmail3" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">URL</label>
              <div class="col-sm-10">
                <input v-model="newPath" type="text" class="form-control" id="inputPassword3" required>
              </div>
            </div>
            <div class="row mb-3">
              <select v-model="categoryId" class="form-select form-select-sm " aria-label=".form-select-sm example" required>
                <option selected disabled value="">Open this select menu</option>
                <option :value="category.id" v-for="category in this.categories">{{category.title}}</option>
              </select>
            </div>
            <div class="modal-footer" :class="isEdit ? 'justify-content-between' : ''">
              <button @click="deleteItem()" type="button" class="btn btn-outline-danger" v-if="isEdit">Delete</button>
              <div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right: calc(var(--bs-modal-footer-gap) * 0.5)">Close</button>
                <button type="submit" class="btn btn-primary" style="margin-left: calc(var(--bs-modal-footer-gap) * 0.5)">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set, updateItem, remove } from "@/api/idb"
export default {
  props: ['items', 'categories', 'isEdit', 'id'],
  data() {
    return {
      newTitle: '',
      newPath: '',
      categoryId: ''
    }
  },
  watch: {
    id(){
      const item = this.items.find(cat => cat.id === this.id)
      this.newTitle = item?.title
      this.newPath = item?.path
      this.categoryId = item?.categoryId
    }
  },
  methods: {
    saveItem() {
      if (this.isEdit) {
        updateItem('items', {id: this.id, title: this.newTitle, path: this.newPath, categoryId: this.categoryId})
        this.newTitle = ''
        this.newPath = ''
        this.categoryId = ''
        this.$emit('updateItems')
        document.getElementById('item-btn-close').click()
      } else {
        set('items', {title: this.newTitle, path: this.newPath, categoryId: this.categoryId}).then(id=> {
          this.items.push({title: this.newTitle, path: this.newPath, categoryId: this.categoryId, id: id})
          this.newTitle = ''
          this.newPath = ''
          this.categoryId = ''
          document.getElementById('item-btn-close').click()
        })
      }
    },
    deleteItem() {
      remove('items', this.id).then(() => {
        this.$emit('updateItems')
        document.getElementById('item-btn-close').click()
      })
    }
  }
}
</script>

<style scoped>

</style>