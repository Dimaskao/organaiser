//import { openDB } from 'idb'
import { openDB } from 'idb/with-async-ittr'

const dbPromise = openDB('organiser', 1, {
    upgrade(db) {
        db.createObjectStore('categories', {keyPath: 'id', autoIncrement: true,}).put({title: 'Site'});
        db.createObjectStore('items', {keyPath: 'id', autoIncrement: true,})
    },
});

async function get(storeName, key) {
    return (await dbPromise).get(storeName, key);
}

async function set(storeName, val) {
    return (await dbPromise).put(storeName, val);
}

async function keys() {
    return (await dbPromise).getAllKeys('categories');
}
async function getAll(storeName) {
    return (await dbPromise).getAll(storeName);
}

async function remove(storeName, key) {
    return (await dbPromise).delete(storeName, key);
}

async function updateCategory(storeName, key, title) {

    const tx = (await dbPromise).transaction(storeName, 'readwrite');

    for await (const cursor of tx.store) {
        if (cursor.value.id === key) {
            const cat = {...cursor.value}
            cat.title = title
            cursor.update(cat)
        }
    }

    await tx.done;
}

export { get, set, keys, getAll, remove, updateCategory }