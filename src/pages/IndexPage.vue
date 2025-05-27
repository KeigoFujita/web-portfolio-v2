<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import HeroSection from '@/pages/sections/HomePage/HeroSection.vue';
import SkillsSection from '@/pages/sections/HomePage/SkillsSection.vue';
import ProjectsSection from '@/pages/sections/HomePage/ProjectsSection.vue';
import AboutSection from '@/pages/sections/HomePage/AboutSection.vue';
import ContactSection from '@/pages/sections/HomePage/ContactSection.vue';
import HoneycombSphere3D from '@/components/3d/HoneycombSphere3D.vue';
</script>
<template>
  <BaseLayout>
    <div class="relative px-6 sm:px-12 md:max-w-6xl mx-auto">
      <HoneycombSphere3D />
      <HeroSection
        id="hero-section"
        class="pointer-events-none z-10 relative"
      />
    </div>
    <div class="relative w-full bg-[#0a0a0a] z-10">
      <div class="relative bg-[#0a0a0a] px-6 sm:px-12 md:max-w-6xl mx-auto">
        <SkillsSection id="skills-section" />
        <ProjectsSection id="projects-section" />
        <AboutSection id="about-section" />
      </div>
    </div>

    <ContactSection id="contact-section" />
  </BaseLayout>
</template>
