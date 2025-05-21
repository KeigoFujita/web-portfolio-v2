<script setup>
import logo from '@/assets/logo.png';
import Button from '@/components/ui/button/Button.vue';
import useScroll from '@/composable/useScroll';

const { scrollTo } = useScroll();
</script>

<template>
  <nav class="fixed w-full top-0 dark:bg-[#111111] dark:text-white z-10">
    <div class="px-4 md:px-12 lg:px-0 md:max-w-6xl mx-auto">
      <div class="w-full flex items-center justify-between">
        <div class="flex h-16 items-center space-x-2 md:space-x-4">
          <img
            class="h-9 w-9"
            :src="logo"
            alt="Keigo Victor FUjita"
          />
          <h1
            class="dark:text-white font-semibold inline-flex md:hidden lg:inline-flex"
          >
            KEIGO FUJITA
          </h1>
        </div>
        <div class="hidden md:block">
          <ul class="flex items-center space-x-8">
            <li class="dark:text-neutral-200">
              <Button
                variant="ghost"
                class="text-base dark:text-neutral-400 dark:hover:text-white"
                @click="scrollTo('hero-section')"
              >
                Home
              </Button>
            </li>
            <li class="dark:text-neutral-200">
              <Button
                variant="ghost"
                class="text-base dark:text-neutral-400 dark:hover:text-white"
                @click="scrollTo('skills-section')"
              >
                Skills
              </Button>
            </li>
            <li class="dark:text-neutral-200">
              <Button
                variant="ghost"
                class="text-base dark:text-neutral-400 dark:hover:text-white"
                @click="scrollTo('projects-section')"
              >
                Projects
              </Button>
            </li>
            <li class="dark:text-neutral-200">
              <Button
                variant="ghost"
                class="text-base dark:text-neutral-400 dark:hover:text-white"
                @click="scrollTo('about-section')"
              >
                About Me
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <Button
            as="a"
            href="/Keigo Victor Fujita - Resume.pdf"
            target="_blank"
            download
            size="sm"
            class="text-xs px-4 bg-brand text-white hover:bg-brand/80"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>
