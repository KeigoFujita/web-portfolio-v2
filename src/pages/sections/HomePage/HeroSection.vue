<script setup>
import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue';
import Button from '@/components/ui/button/Button.vue';
import GmailIcon from '@/assets/icons/GmailIcon.vue';
import GithubIconRaw from '@/assets/icons/GithubIconRaw.vue';
</script>

<template>
  <div
    class="pt-12 md:pt-0 flex-col-reverse md:flex-row flex items-center space-x-4 md:h-[calc(100vh-4rem)]"
  >
    <div class="space-y-6 md:w-9/12">
      <div class="block sm:hidden">
        <h1 class="text-4xl md:text-6xl font-semibold h-10 mb-0">Hey There,</h1>
        <h1 class="text-4xl md:text-6xl font-semibold mb-3 h-10 text-brand">
          I'm Keigo
        </h1>
        <h2 class="text-xl md:text-3xl text-neutral-400">
          Full Stack Web Developer
        </h2>
      </div>
      <div class="hidden sm:block">
        <h1 class="text-4xl md:text-6xl font-semibold mb-3">
          Hey There, <span class="text-brand">I'm Keigo</span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-neutral-400">
          Full Stack Web Developer
        </h2>
      </div>
      <!-- Contact Buttons -->
      <div
        class="flex-wrap md:flex-nowrap flex items-center space-x-2 pointer-events-auto"
      >
        <Button
          as="a"
          href="https://www.linkedin.com/in/keigo-victor-fujita/"
          target="_blank"
          variant="secondary"
          class="relative bg-[#171717] hover:bg-[#171717] cta-button hover:text-brand rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
        >
          <div class="px-3 md:px-6 flex items-center space-x-2 rounded-lg">
            <LinkedInIcon class="size-3.5 md:size-4.5" />
            <span class="text-xs md:text-sm">LinkedIn</span>
          </div>
        </Button>

        <Button
          variant="secondary"
          class="relative bg-[#171717] hover:bg-[#171717] cta-button hover:text-brand rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
          as="a"
          href="https://github.com/KeigoFujita"
          target="_blank"
        >
          <div class="px-3 md:px-6 flex items-center space-x-2 rounded-lg">
            <GithubIconRaw class="size-3.5 md:size-4.5" />
            <span class="text-xs md:text-sm">GitHub</span>
          </div>
        </Button>

        <Button
          as="a"
          href="mailto:keigofujita19@gmail.com"
          variant="secondary"
          class="relative bg-[#171717] hover:bg-[#171717] cta-button hover:text-brand rounded-full px-0 py-0 h-9 md:h-11 mb-4 md:mb-0"
        >
          <div class="px-3 md:px-6 flex items-center space-x-2 rounded-lg">
            <GmailIcon class="size-3.5 md:size-4.5" />
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
      <!-- <HeroImage class="w-full" /> -->
    </div>
  </div>
</template>

<style scoped>
.cta-button:hover:before,
.cta-button:hover:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;

  border-radius: calc(infinity * 1px);
  background: linear-gradient(
    45deg,
    #9bf4f4,
    #04e4e4,
    #03a0a0,
    #03a0a0,
    #027272
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 10s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 250% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.cta-button:after {
  filter: blur(5px);
}
</style>
