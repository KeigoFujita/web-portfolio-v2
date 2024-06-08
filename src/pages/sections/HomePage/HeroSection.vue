<script setup>
import HeroImage from "@/assets/HeroImage.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import Button from "@/components/ui/button/Button.vue";
import GmailIcon from "@/assets/icons/GmailIcon.vue";
</script>

<template>
  <div
    class="pt-20 md:pt-0 flex-col-reverse md:flex-row flex w-full items-center space-x-4 md:h-[calc(100vh-4rem)]"
  >
    <div class="space-y-6 md:w-7/12">
      <div>
        <h1 class="text-4xl md:text-6xl font-semibold mb-3">
          Hey There, I'm Keigo
        </h1>
        <h2 class="text-2xl md:text-3xl text-neutral-400">
          Full Stack Web Developer
        </h2>
      </div>
      <!-- Contact Buttons -->
      <div class="flex-wrap md:flex-nowrap flex items-center space-x-2">
        <Button
          as="a"
          href="https://www.linkedin.com/in/keigo-fujita-2a1058143/"
          target="_blank"
          variant="secondary"
          class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
        >
          <div
            class="px-3 md:px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <LinkedInIcon class="h-4 md-4 md:w-5 md:h-5" />
            <span class="text-xs md:text-sm">LinkedIn</span>
          </div>
        </Button>

        <Button
          variant="secondary"
          class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          as="a"
          href="https://github.com/KeigoFujita"
          target="_blank"
        >
          <div
            class="px-3 md:px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <GithubIcon class="h-4 md-4 md:w-5 md:h-5" />
            <span class="text-xs md:text-sm">GitHub</span>
          </div>
        </Button>

        <Button
          as="a"
          href="mailto:keigofujita19@gmail.com"
          variant="secondary"
          class="bg-[#171717] rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
        >
          <div
            class="px-3 md:px-6 flex items-center space-x-2 rounded-lg text-white"
          >
            <GmailIcon class="h-4 md-4 md:w-5 md:h-5" />
            <span class="text-xs md:text-sm">Gmail</span>
          </div>
        </Button>
      </div>
      <p class="font-light text-base md:text-lg">
        Experienced Full Stack Web Developer with over 5 years of expertise in
        building high-quality, robust and scalable web applications using
        Laravel, MySQL, and Vue JS. Focused on enhancing code readability,
        implemented efficient coding practices and optimized development
        workflows to drive productivity and ensure project success.
      </p>
    </div>
    <div class="mb-10 w-full md:w-5/12 md:mb-0">
      <HeroImage class="w-full" />
    </div>
  </div>
</template>
