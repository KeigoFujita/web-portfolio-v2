<script setup>
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";
</script>

<template>
  <div class="font-inter">
    <Navbar />
    <main class="mt-16">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
