<script setup>
import logo from "@/assets/logo.png";
import Button from "@/components/ui/button/Button.vue";
import useScroll from "@/composable/useScroll";

const { scrollTo } = useScroll();
</script>

<template>
  <nav class="fixed w-full top-0 dark:bg-dark-900 dark:text-white z-10">
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
            <li class="dark:text-neutral-200">
              <button @click="scrollTo('hero-section')">Home</button>
            </li>
            <li class="dark:text-neutral-200">
              <button @click="scrollTo('skills-section')">Skills</button>
            </li>
            <li class="dark:text-neutral-200">
              <button @click="scrollTo('projects-section')">Projects</button>
            </li>
            <li class="dark:text-neutral-200">
              <button @click="scrollTo('about-section')">About Me</button>
            </li>
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
