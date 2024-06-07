<script setup>
import HeroImage from "@/assets/HeroImage.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import EmailIcon from "@/assets/icons/EmailIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="flex w-full items-center space-x-4 h-[calc(100vh-4rem)]">
    <div class="space-y-6 w-7/12">
      <div>
        <h1 class="text-6xl font-semibold mb-3">Hey There, I'm Keigo</h1>
        <h2 class="text-3xl text-neutral-400">Full Stack Web Developer</h2>
      </div>
      <!-- Contact Buttons -->
      <div class="flex items-center space-x-2">
        <Button
          as="a"
          href="https://www.linkedin.com/in/keigo-fujita-2a1058143/"
          target="_blank"
          variant="secondary"
          class="rounded-full px-0 py-0 h-11"
        >
          <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
            <LinkedInIcon class="w-5 h-5" />
            <span class="text-sm">LinkedIn</span>
          </div>
        </Button>

        <Button
          variant="secondary"
          class="rounded-full px-0 py-0 h-11"
          as="a"
          href="https://github.com/KeigoFujita"
          target="_blank"
        >
          <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
            <GithubIcon class="w-5 h-5" />
            <span class="text-sm">GitHub</span>
          </div>
        </Button>

        <Button
          as="a"
          href="mailto:keigofujita19@gmail.com"
          variant="secondary"
          class="rounded-full px-0 py-0 h-11"
        >
          <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
            <EmailIcon class="w-5 h-5" />
            <span class="text-sm">Email</span>
          </div>
        </Button>
      </div>
      <p class="font-light text-lg">
        Experienced Full Stack Web Developer with over 5 years of expertise in
        building high-quality, robust and scalable web applications using
        Laravel, MySQL, and Vue JS. Focused on enhancing code readability,
        implemented efficient coding practices and optimized development
        workflows to drive productivity and ensure project success.
      </p>
    </div>
    <div class="w-5/12">
      <HeroImage class="w-full" />
    </div>
  </div>
</template>
