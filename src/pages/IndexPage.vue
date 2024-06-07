<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeroSection from "@/pages/sections/HomePage/HeroSection.vue";
import SkillsSection from "@/pages/sections/HomePage/SkillsSection.vue";
import ProjectsSection from "@/pages/sections/HomePage/ProjectsSection.vue";
import AboutSection from "@/pages/sections/HomePage/AboutSection.vue";
import ContactSection from "@/pages/sections/HomePage/ContactSection.vue";
</script>
<template>
  <BaseLayout>
    <div class="max-w-6xl mx-auto">
      <HeroSection id="hero-section" />
      <SkillsSection id="skills-section" />
      <ProjectsSection id="projects-section" />
      <AboutSection id="about-section" />
    </div>
    <ContactSection id="contact-section" />
  </BaseLayout>
</template>
