<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>

      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>

      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >
          Cancel
        </button>
        <button
          @click="notesStore.deleteNote(noteId)"
          class="button is-danger"
        >Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useNotesStore } from '@/stores/notesStore';

const notesStore = useNotesStore();
const modalCardRef = ref(null)

const handleKeyboard = event => {
  if (event.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const closeModal = () => {
  emits('update:modelValue', false)
}

onClickOutside(modalCardRef, closeModal)
</script>
