<script setup>
import MainVue from '@/components/Main.vue'
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col items-center dark:bg-app-secondary">
    <nav-bar />
    <main-vue />
    <footer-vue />
  </div>
</template>

<style>
@import url('/dist/output.css');
</style>
