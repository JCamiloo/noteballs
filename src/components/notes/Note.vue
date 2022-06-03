<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item">Edit</a>
      <a
        class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)"
      >Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNotesStore } from '@/stores/notesStore'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const storeNotes = useNotesStore();

const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'

  return `${length} ${description}`
})
</script>
