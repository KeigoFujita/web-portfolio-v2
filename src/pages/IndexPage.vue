<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeroSection from "@/pages/sections/HomePage/HeroSection.vue";
import SkillsSection from "@/pages/sections/HomePage/SkillsSection.vue";
</script>
<template>
  <BaseLayout>
    <div class="max-w-6xl mx-auto">
      <HeroSection />
      <SkillsSection />
    </div>
  </BaseLayout>
</template>
