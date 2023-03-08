import { openDB } from 'idb'
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

export { get, set, keys, getAll }