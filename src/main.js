import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/js/bootstrap.js"

// const request = window.indexedDB.open("Organizer", 1);
// request.onerror = (event) => {
//     alert('ERROR')
// };
//
// request.onsuccess = (event) => {
//     event.target.result;
// }
//
// request.onupgradeneeded = (event) => {
//     const db = event.target.result;
//
//     const itemsStore = db.createObjectStore("items",{ autoIncrement: true });
//
//     itemsStore.createIndex("title", "title", { unique: false });
//     itemsStore.createIndex("path", "path", { unique: false });
//     itemsStore.createIndex("category", "category", { unique: false });
//
//     const categoriesStore = db.createObjectStore("categories",{ autoIncrement: true });
//
//     categoriesStore.createIndex("title", "title", { unique: false });
//
//     categoriesStore.transaction.oncomplete = (event) => {
//         const customerObjectStore = db
//             .transaction("categories", "readwrite")
//             .objectStore("categories");
//         customerObjectStore.add({title: 'All'});
//         customerObjectStore.add({title: 'Browser'});
//         customerObjectStore.add({title: 'Video'});
//     };
// };
//
// request.onupgradeneeded = (event) => {
//     const db = event.target.result;
//     console.log('event.target.result.name');
//     db.transaction("categories")
//         .objectStore("categories")
//         .getAll().onsuccess = (event) => {
//         console.log('event.target.result.name');
//     };
// }

createApp(App).mount('#app')
