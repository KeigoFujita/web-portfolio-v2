<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeroSection from "@/pages/sections/HomePage/HeroSection.vue";
import SkillsSection from "@/pages/sections/HomePage/SkillsSection.vue";
import ProjectsSection from "@/pages/sections/HomePage/ProjectsSection.vue";
</script>
<template>
  <BaseLayout>
    <div class="max-w-6xl mx-auto pb-24">
      <HeroSection />
      <div class="space-y-24">
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  </BaseLayout>
</template>
