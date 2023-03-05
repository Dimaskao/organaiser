import { reactive } from 'vue'
import Category from "@/categories"

export const categoryState = reactive({
    category: Category.ALL
})