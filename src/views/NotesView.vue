<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add a new note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)
const notes = ref([
  {
    id: 1,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nesciunt quam laborum quisquam fugiat labore"
  },
  {
    id: 2,
    content: "Shorter note"
  }
])

const addNote = () => {
  const note = {
    id: new Date().getTime(),
    content: newNote.value
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (id) => {
  notes.value = notes.value.filter(note => note.id !== id)
}
</script>

