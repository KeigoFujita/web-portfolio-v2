<script setup>
import logo from "@/assets/logo.png";
import Button from "@/components/ui/button/Button.vue";
import GmailIcon from "@/assets/icons/GmailIcon.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
</script>
<template>
  <footer class="bg-[#0F0F11] py-8">
    <div class="px-12 lg:px-12 xl:px-0 max-w-6xl mx-auto">
      <div
        class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:items-start justify-between"
      >
        <div class="flex flex-col md:flex-row items-center md:space-x-4">
          <img
            class="h-16 w-16 md:h-12 md:w-12 mb-3 md:mb-0"
            :src="logo"
            alt="Keigo Victor FUjita"
          />
          <h1 class="text-base md:text-xl dark:text-white font-semibold">
            KEIGO FUJITA
          </h1>
        </div>
        <div class="hidden lg:block">
          <div class="text-xs text-neutral-600 text-center">
            <p>Version 2.0</p>
            <p>Copyright 2024 © Keigo Fujita</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div class="flex space-x-2">
          <Button
            as="a"
            href="mailto:keigofujita19@gmail.com"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-3 flex items-center space-x-2 rounded-lg text-white">
              <GmailIcon class="w-5 h-5" />
            </div>
          </Button>

          <Button
            as="a"
            href="https://web.facebook.com/keigo.fujita.94"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-3 flex items-center space-x-2 rounded-lg text-white">
              <FacebookIcon class="w-5 h-5" />
            </div>
          </Button>
          <Button
            as="a"
            href="https://www.instagram.com/_keigofujita/"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-3 flex items-center space-x-2 rounded-lg text-white">
              <InstagramIcon class="w-5 h-5" />
            </div>
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/keigo-fujita-2a1058143/"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-3 flex items-center space-x-2 rounded-lg text-white">
              <LinkedInIcon class="w-5 h-5" />
            </div>
          </Button>

          <Button
            as="a"
            href="https://github.com/KeigoFujita"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-3 flex items-center space-x-2 rounded-lg text-white">
              <GithubIcon class="w-5 h-5" />
            </div>
          </Button>
        </div>
        <div class="block lg:hidden">
          <div class="text-xs text-neutral-600 text-center">
            <p>Version 2.0</p>
            <p>Copyright 2024 © Keigo Fujita</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
