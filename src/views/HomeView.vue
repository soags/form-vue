<script setup>
import {ref} from 'vue'

const todos = ref([])
const title = ref('')
const editId = ref(null)

function add(){
  todos.value.push({
    id: todos.value.length + 1,
    title: title.value
  })
  title.value = ''
}

function edit(id){
  editId.value = id
  title.value = todos.value.find(todo => todo.id === id).title
}

function cancelEdit(){
  editId.value = null
  title.value = ''
}

function save(){
  const todo = todos.value.find(todo => todo.id === editId.value)
  todo.title = title.value
  editId.value = null
  title.value = ''
}

function remove(id){
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
  <main>    
    <input v-model="title" placeholder="Title" />
    <template v-if="!editId">
      <button @click="add">Add</button>
    </template>
    <template v-else>
      <button @click="save">Save</button>
      <button @click="cancelEdit">Cancel</button>  
    </template>
    
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>
            <button @click="edit(todo.id)" >Edit</button>
            <button @click="remove(todo.id)" >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>      
  </main>
</template>
