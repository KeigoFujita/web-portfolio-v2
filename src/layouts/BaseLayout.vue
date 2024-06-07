<template>
  <div class="font-inter">
    <Navbar />
    <main class="mt-16">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/navigation/Navbar.vue";
</script>
