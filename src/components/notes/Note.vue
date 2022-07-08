<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <RouterLink
        class="card-footer-item"
        :to="`/edit/${note.id}`"
      >
        Edit
      </RouterLink>
      <a
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'

  return `${length} ${description}`
})

const dateFormatted = computed(() => {
  const date = new Date(parseInt(props.note.createdAt))
  return useDateFormat(date, 'DD-MM-YYYY @ HH:mm').value
})

const modals = reactive({
  deleteNote: false
})
</script>
