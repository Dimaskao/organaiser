<template>
<!--  <li @click="apply_filer(category)" class="list-group-item list-group-item-action" :class="categoryState.category === category ? 'active' : ''">{{ category.title }}</li>-->
  <input type="radio" class="btn-check" name="vbtn-radio" :id="category.id" autocomplete="off">
  <label @click="$emit('apply_filter')" class="btn btn-outline-primary" :for="category.id">{{category.title}}</label>
</template>

<script>

export default {
  emits: ['apply_filter'],
  props: {
    category: {
      type: Object,
      required: true
    }
  }

}
</script>