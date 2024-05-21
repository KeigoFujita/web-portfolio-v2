<script setup>
import logo from "@/assets/logo.png";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <nav class="sticky top-0 dark:bg-dark-900 dark:text-white z-10">
    <div class="max-w-6xl mx-auto">
      <div class="w-full flex items-center justify-between">
        <div class="flex h-16 items-center space-x-4">
          <img
            class="h-9 w-9"
            :src="logo"
            alt="Keigo Victor FUjita"
          />
          <h1 class="dark:text-white font-semibold">KEIGO FUJITA</h1>
        </div>
        <div>
          <ul class="flex items-center space-x-12">
            <li class="dark:text-neutral-200 font-semibold">Home</li>
            <li class="dark:text-neutral-500">Skills</li>
            <li class="dark:text-neutral-500">Projects</li>
            <li class="dark:text-neutral-500">About</li>
            <li class="dark:text-neutral-500">Contact</li>
          </ul>
        </div>
        <div>
          <Button
            size="sm"
            class="text-xs px-4"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>
