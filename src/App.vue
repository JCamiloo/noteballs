<template>
  <NavBar />

  <div class="container is-max-desktop">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
