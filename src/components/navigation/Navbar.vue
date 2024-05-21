<script setup>
import logo from "@/assets/logo.png";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <nav
    class="sticky dark:bg-dark-900 dark:text-white flex h-16 items-center justify-between px-36"
  >
    <div class="flex items-center space-x-4">
      <img
        class="h-9 w-9"
        :src="logo"
        alt="Keigo Victor FUjita"
      />
      <h1 class="dark:text-white font-semibold">KEIGO FUJITA</h1>
    </div>
    <div></div>
    <div>
      <Button size="sm"> Download Resume </Button>
    </div>
  </nav>
</template>
