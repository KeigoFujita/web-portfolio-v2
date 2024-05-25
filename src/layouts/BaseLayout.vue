<template>
  <div class="font-inter">
    <Navbar />
    <main class="scrollbar h-screen overflow-auto">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/navigation/Navbar.vue";
</script>
