<template>
  <div class="notes">
    <AddEditNoteVue v-model="newNote">
      <template v-slot:buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNoteVue>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import AddEditNoteVue from '@/components/notes/AddEditNote.vue';
import Note from '@/components/notes/Note.vue'

const storeNotes = useNotesStore()

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
