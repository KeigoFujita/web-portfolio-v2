<script setup>
import ContactImage from "@/assets/ContactImage.vue";
import GmailIcon from "@/assets/icons/GmailIcon.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="py-24 border-t border-neutral-800">
    <div class="flex max-w-6xl mx-auto">
      <div>
        <h1 class="text-6xl font-semibold mb-10">Contact</h1>
        <h4 class="text-2xl mb-2 font-semibold">
          Wanna get in touch or talk about a project?
        </h4>
        <p class="text-lg text-neutral-500 mb-10">
          Feel free to contact me via email or through my social accounts below:
        </p>
        <div class="flex space-x-2">
          <Button
            as="a"
            href="mailto:keigofujita19@gmail.com"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <GmailIcon class="w-5 h-5" />
              <span class="text-sm">Gmail</span>
            </div>
          </Button>

          <Button
            as="a"
            href="https://web.facebook.com/keigo.fujita.94"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <FacebookIcon class="w-5 h-5" />
              <span class="text-sm">Facebook</span>
            </div>
          </Button>
          <Button
            as="a"
            href="https://www.instagram.com/_keigofujita/"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <InstagramIcon class="w-5 h-5" />
              <span class="text-sm">Instagram</span>
            </div>
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/keigo-fujita-2a1058143/"
            target="_blank"
            variant="secondary"
            class="bg-[#171717] rounded-full px-0 py-0 h-11"
          >
            <div class="px-6 flex items-center space-x-2 rounded-lg text-white">
              <LinkedInIcon class="w-5 h-5" />
              <span class="text-sm">LinkedIn</span>
            </div>
          </Button>
        </div>
      </div>
      <div class="px-32 w-full">
        <ContactImage class="w-full" />
      </div>
    </div>
  </div>
</template>
