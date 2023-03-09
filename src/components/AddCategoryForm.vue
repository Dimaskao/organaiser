<template>
  <div class="modal fade" id="addCategoryForm" tabindex="-1" aria-labelledby="addCategoryForm" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ isEdit ? 'Edit category' : 'Add new category' }}</h1>
          <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveCategory()">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input v-model="newCategoryTitle" type="text" class="form-control" id="inputEmail3" required>
              </div>
            </div>
            <div class="modal-footer" :class="isEdit ? 'justify-content-between' : ''">
              <button @click="deleteCategory()" type="button" class="btn btn-outline-danger" v-if="isEdit">Delete</button>
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
import { set, remove, updateCategory, getAll } from "@/api/idb"
export default {
  props:['categories', 'isEdit', 'id'],
  data() {
    return {
      newCategoryTitle: '',
      divClass: '',
    }
  },

  watch: {
    id(){
      this.newCategoryTitle = this.categories.find(cat => cat.id === this.id)?.title
    }
  },

  methods: {
    saveCategory() {
      if (this.isEdit) {
        updateCategory('categories', this.id, this.newCategoryTitle)
        this.newCategoryTitle = ''
        this.$emit('updateCategories')
        document.getElementById('btn-close').click()
      } else {
        set('categories', {title: this.newCategoryTitle}).then((id)=> {
              this.categories.push({title: this.newCategoryTitle, id: id})
              this.newCategoryTitle = ''
              document.getElementById('btn-close').click()
            }
        )
      }
    },
    deleteCategory() {
      let canBeRemove = true
      getAll('items').then(items => {
        items.forEach(item => {
          if (item.categoryId === this.id) {
            canBeRemove = false
            alert('Move or remove items from this category before deleting')
            return
          }
        })
        if (canBeRemove) {
          remove('categories', this.id).then(() => {
            this.$emit('updateCategories')
            document.getElementById('btn-close').click()
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>