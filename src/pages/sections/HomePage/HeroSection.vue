<script setup>
import HeroImage from "@/assets/HeroImage.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import EmailIcon from "@/assets/icons/EmailIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="flex w-full items-center py-24 space-x-4">
    <div class="space-y-6 w-7/12">
      <div>
        <h1 class="text-6xl font-semibold mb-3">Hey There, I'm Keigo</h1>
        <h2 class="text-3xl text-neutral-400">Full Stack Web Developer</h2>
      </div>
      <!-- Contact Buttons -->
      <div class="flex items-center space-x-2">
        <Button
          variant="ghost"
          class="rounded-full px-0 py-0 h-11"
        >
          <router-link
            to="/"
            class="px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <LinkedInIcon class="w-5 h-5" />
            <span class="text-sm">LinkedIn</span>
          </router-link>
        </Button>

        <Button
          variant="ghost"
          class="rounded-full px-0 py-0 h-11"
        >
          <router-link
            to="/"
            class="px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <GithubIcon class="w-5 h-5" />
            <span class="text-sm">GitHub</span>
          </router-link>
        </Button>

        <Button
          variant="ghost"
          class="rounded-full px-0 py-0 h-11"
        >
          <router-link
            to="/"
            class="px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <EmailIcon class="w-5 h-5" />
            <span class="text-sm">Email</span>
          </router-link>
        </Button>
      </div>
      <p class="font-light text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div class="w-5/12">
      <HeroImage class="w-full" />
    </div>
  </div>
</template>
