<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-3"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          :disabled="!noteContent"
          class="button is-link has-background-link"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/notesStore'
import AddEditNote from '../components/notes/AddEditNote.vue'

const notesStore = useNotesStore()
const route = useRoute()
const router = useRouter()
const noteContent = ref('')

noteContent.value = notesStore.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value)
  router.push('/')
}
</script>
