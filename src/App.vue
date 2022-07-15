<template>
  <NavBar />

  <div class="container is-max-desktop px-4 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import NavBar from '@/components/layout/NavBar.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
