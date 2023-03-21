import {createRouter, createWebHistory} from 'vue-router'
import Home from './vievs/Home.vue'
import CategoryForm from "./vievs/CategoryForm.vue"
import ItemForm from "./vievs/ItemForm.vue";


const router = createRouter({
    routes: [
        {
            path: '/organiser/',
            component: Home,
        },
        {
            path: '/organiser/category-form/',
            component: CategoryForm,
        },
        {
            path: '/organiser/category-form/:id',
            component: CategoryForm,
        },
        {
            path: '/organiser/item-form/',
            component: ItemForm,
        },
        {
            path: '/organiser/item-form/:id',
            component: ItemForm,
        }
    ],
    history: createWebHistory()
})

export default router;