<template>
    <form @submit.prevent="saveCategory()" class="mt-5">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input v-model="newCategoryTitle" type="text" class="form-control" id="inputEmail3" required>
        </div>
      </div>
      <div class="modal-footer" :class="isEdit ? 'justify-content-between' : ''">
        <button @click="deleteCategory()" type="button" class="btn btn-outline-danger" v-if="isEdit">Delete</button>
        <div>
          <button type="button" class="btn btn-secondary" style="margin-right: 3px" @click="$router.push('/organiser/')">Close</button>
          <button type="submit" class="btn btn-primary" style="margin-left: 3px">Save</button>
        </div>
      </div>
    </form>
</template>

<script>
import { set, get, remove, updateCategory, getAll } from "@/api/idb"
import {selectedCategory} from "@/selectedCategory";

export default {
  created() {
    if (this.$route.params.id) {
      this.isEdit = true
      this.id = parseInt(this.$route.params.id)
      get('categories', parseInt(this.$route.params.id)).then(cat => this.newCategoryTitle = cat.title)
    }
  },
  data() {
    return {
      newCategoryTitle: '',
      isEdit: false,
      id: -1,
    }
  },

  methods: {
    saveCategory() {
      if (this.isEdit) {
        updateCategory('categories', this.id, this.newCategoryTitle).then(
          this.newCategoryTitle = '',
          this.$router.push('/organiser/')
        )
      } else {
        set('categories', {title: this.newCategoryTitle}).then(
            this.newCategoryTitle = '',
            this.$router.push('/organiser/')
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
          remove('categories', this.id).then(
            selectedCategory.id = -1,
            this.$router.push('/organiser/')
          )
        }
      })
    }
  }
}
</script>

<style scoped>
  form{
    display: inline-block;
    max-width: 500px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
  }

</style>