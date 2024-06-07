<script setup>
import ProfileImage from "@/assets/images/profile_image.png";
import GalleryImage1 from "@/assets/images/gallery/image_1.png";
import GalleryImage2 from "@/assets/images/gallery/image_2.png";
import GalleryImage3 from "@/assets/images/gallery/image_3.png";
import GalleryImage4 from "@/assets/images/gallery/image_4.png";
import GalleryImage5 from "@/assets/images/gallery/image_5.png";
import GalleryImage6 from "@/assets/images/gallery/image_6.png";

let galleryImages = [
  GalleryImage1,
  GalleryImage6,
  GalleryImage2,
  GalleryImage4,
  GalleryImage3,
  GalleryImage5,
];
</script>

<template>
  <div class="py-24">
    <h1 class="text-6xl font-semibold mb-10">About Me</h1>
    <div class="flex mb-10">
      <div class="w-3/5 pr-16">
        <h1 class="font-semibold text-xl text-white mb-5">
          Hey there! I'm Keigo, a passionate Full Stack Web Developer based in
          the Philippines with over 5 years of experience in transforming ideas
          into dynamic, user-friendly web applications.
        </h1>
        <div class="space-y-5 text-neutral-300">
          <p>
            Throughout my career, I've contributed to various projects, sharing
            my skills and knowledge with colleagues along the way.
          </p>
          <p>
            I have a keen interest in exploring new technologies and my current
            goal is to learn and deploy an AI application, integrating my web
            development expertise into it.
          </p>
          <p>When I'm not immersed in code, you can find me:</p>
          <ul class="space-y-3 list-disc px-5">
            <li>
              Watching movies, always on the hunt for the next great film.
            </li>
            <li>Playing billiards, perfecting my trick shots.</li>
            <li>
              Traveling with friends and family, exploring new places and
              cultures.
            </li>
            <li>
              Occasionally diving into online games for some fun and
              competition.
            </li>
            <li>
              Savoring a good cup of coffee, my go-to fuel for creativity and
              late-night coding sessions.
            </li>
          </ul>
        </div>
      </div>
      <div class="w-2/5">
        <img
          class="w-full"
          :src="ProfileImage"
          alt="Profile Image"
        />
      </div>
    </div>
    <div class="grid grid-cols-6 gap-3 mb-10">
      <div
        class="bg-neutral-800 p-1 rounded-lg hover:bg-neutral-700 hover:scale-105 transition-all"
        v-for="image in galleryImages"
      >
        <img
          class="w-full aspect-square rounded-lg"
          :src="image"
          alt="Image 1"
        />
      </div>
    </div>
    <div>
      <h1 class="font-semibold text-3xl text-white mb-5">
        Awards and Recognition:
      </h1>
      <ul class="space-y-3 list-disc px-5 text-neutral-300">
        <li>
          <span class="font-semibold text-neutral-100"
            >Innovator of the year 2023</span
          >
          - Awarded for the exceptional development of the CNX Lighthouse
          Application, completed ahead of schedule and widely adopted by CNX
          employees. This innovative app was prominently featured at the
          Concentrix Tech Expo
        </li>
        <li>
          <span class="font-semibold text-neutral-100"
            >Innovator of the year 2022
          </span>
          - Awarded for developing the CNX Shuttle Application, achieving an
          approved Finance Hard Savings of 4 million pesos. This app, providing
          real-time updates on free shuttle services for CNX employees, received
          high praise from stakeholders
        </li>
      </ul>
    </div>
  </div>
</template>
