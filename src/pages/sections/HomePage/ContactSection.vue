<script setup>
import ContactImage from "@/assets/ContactImage.vue";
import GmailIcon from "@/assets/icons/GmailIcon.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="px-12 py-16 lg:py-24 border-t border-neutral-800">
    <h1 class="md:hidden text-4xl font-semibold mb-10 text-center">Contact</h1>
    <div class="flex flex-col-reverse lg:flex-row md:max-w-6xl mx-auto">
      <div class="text-center md:text-left">
        <h1 class="hidden md:block text-6xl font-semibold mb-10">Contact</h1>
        <h4 class="text-xl md:text-2xl mb-2 font-semibold">
          Wanna get in touch or talk about a project?
        </h4>
        <p class="text-base md:text-lg text-neutral-500 mb-10">
          Feel free to contact me via email or through my social accounts below:
        </p>
        <div
          class="flex items-center justify-center md:justify-start flex-wrap lg:flex-nowrap space-x-2"
        >
          <Button
            as="a"
            href="mailto:keigofujita19@gmail.com"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <GmailIcon class="h-4 md-4 md:w-5 md:h-5" />
              <span class="text-xs md:text-sm">Gmail</span>
            </div>
          </Button>

          <Button
            as="a"
            href="https://web.facebook.com/keigo.fujita.94"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <FacebookIcon class="h-4 md-4 md:w-5 md:h-5" />
              <span class="text-xs md:text-sm">Facebook</span>
            </div>
          </Button>
          <Button
            as="a"
            href="https://www.instagram.com/_keigofujita/"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <InstagramIcon class="h-4 md-4 md:w-5 md:h-5" />
              <span class="text-xs md:text-sm">Instagram</span>
            </div>
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/keigo-victor-fujita/"
            target="_blank"
            variant="secondary"
            class="hidden md:inline-flex bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <LinkedInIcon class="h-4 md-4 md:w-5 md:h-5" />
              <span class="text-xs md:text-sm">LinkedIn</span>
            </div>
          </Button>
        </div>
      </div>
      <div class="px-20 py-10 md:py-12 lg:py-0 lg:px-32 w-full">
        <ContactImage class="w-full md:w-72 md:mx-auto lg:w-full" />
      </div>
    </div>
  </div>
</template>
