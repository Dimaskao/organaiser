<template>
  <div class="modal fade" id="addCategoryForm" tabindex="-1" aria-labelledby="addCategoryForm" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add new category</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input v-model="newCategory" type="text" class="form-control" id="inputEmail3">
              </div>
            </div>
          </form>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="addCategory()" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set } from "@/api/idb"
export default {
  props:['categories'],
  data() {
    return {
      newCategory: '',
    }
  },

  methods: {
    addCategory() {
      set('categories', {title: this.newCategory}).then(id=>
          this.categories.push({title: this.newCategory, id: id})
      )
    }
  }
}
</script>

<style scoped>

</style>