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
    <progress
      v-if="notesStore.isLoading"
      class="progress is-large is-success"
      max="100"
    />

    <template v-else>
      <Note
        v-for="note in notesStore.notes"
        :key="note.id"
        :note="note"
      />

      <div
        if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
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

useWatchCharacters(newNote, 200)
</script>
