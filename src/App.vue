<template>
  <navbar />

  <div class="container is-max-desktop w-100 px-2 py-4">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/navbar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
