<template>
  <NavBar />

  <div class="container is-max-desktop px-4 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNotesStore } from '@/stores/notesStore';
import NavBar from '@/components/layout/NavBar.vue'

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.getNotes()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
