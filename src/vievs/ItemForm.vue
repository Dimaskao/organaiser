<template>
  <form @submit.prevent="saveItem()" class="mt-5">
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
        <button type="button" class="btn btn-secondary" style="margin-right: 3px" @click="$router.push('/organiser/')">Close</button>
        <button type="submit" class="btn btn-primary" style="margin-left: 3px">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
import { set, get, getAll, updateItem, remove } from "@/api/idb"
import { selectedItem } from "@/selectedItem";

export default {
  created() {
    getAll('categories').then(cat => this.categories = cat)
    if (this.$route.params.id) {
      this.isEdit = true
      this.id = parseInt(this.$route.params.id)
      get('items', parseInt(this.$route.params.id)).then(it => {
        this.newTitle = it?.title
        this.newPath = it?.path
        this.categoryId = it?.categoryId
      })
    }
  },
  data() {
    return {
      newTitle: '',
      newPath: '',
      categoryId: '',
      isEdit: false,
      categories: null,
      id: -1,
    }
  },
  methods: {
    saveItem() {
      if (this.isEdit) {
        updateItem('items', {id: this.id, title: this.newTitle, path: this.newPath, categoryId: this.categoryId})
        this.newTitle = ''
        this.newPath = ''
        this.categoryId = ''
        this.$router.push('/organiser/')
      } else {
        set('items', {title: this.newTitle, path: this.newPath, categoryId: this.categoryId}).then(() => {
          this.newTitle = ''
          this.newPath = ''
          this.categoryId = ''
          this.$router.push('/organiser/')
        })
      }
    },
    deleteItem() {
      remove('items', this.id).then(() => {
        selectedItem.id = -1
        this.$router.push('/organiser/')
      })
    }
  }
}
</script>

<style scoped>
  form{
    display: inline-block;
    max-width: 500px;
    padding: 30px;
    border: 1px solid gray;
    border-radius: 10px;
  }
</style>