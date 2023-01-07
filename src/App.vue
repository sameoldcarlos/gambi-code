<script setup>
import MainVue from '@/components/Main.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col items-center">
    <nav-bar />
    <main-vue />
  </div>
</template>

<style>
@import url('/dist/output.css');
</style>
