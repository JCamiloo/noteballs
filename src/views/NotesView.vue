<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template v-slot:buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import Note from '@/components/notes/Note.vue'

const notesStore = useNotesStore()
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>
