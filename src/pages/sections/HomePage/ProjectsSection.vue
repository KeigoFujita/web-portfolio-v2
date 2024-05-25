<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import TailwindIcon from "@/assets/icons/TailwindIcon.vue";
import LaravelIcon from "@/assets/icons/LaravelIcon.vue";
import VueIcon from "@/assets/icons/VueIcon.vue";
import ViteIcon from "@/assets/icons/ViteIcon.vue";
import WorkbenchIcon from "@/assets/icons/WorkbenchIcon.vue";

import cnxshuttleImage from "@/assets/project_images/cnxshuttle.png";
import cnxshuttleMobileImage from "@/assets/project_images/cnxshuttle_mobile.png";
import lighthouseImage from "@/assets/project_images/lighthouse.png";
import centroImage from "@/assets/project_images/centro.png";
import larabuildImage from "@/assets/project_images/larabuild.png";
import LivewireIcon from "@/assets/icons/LivewireIcon.vue";
import AlpineJSicon from "@/assets/icons/AlpineJSicon.vue";

const projects = [
  {
    name: "CNX Shuttle Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: cnxshuttleImage,
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "CNX Shuttle Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: cnxshuttleMobileImage,
    imgBgClass: "bg-[#212123]",
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "CNX Lighthouse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: lighthouseImage,

    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "CENTRO V2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: centroImage,
    imgBgClass: "bg-[#9893FF]",
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "Larabuild Documentation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: larabuildImage,
    technologies: [
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "Web Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: larabuildImage,
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "ADA Point of Sales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: larabuildImage,
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
  {
    name: "NEU Appointment System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: larabuildImage,
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Livewire",
        icon: LivewireIcon,
      },
      {
        name: "Alpine JS",
        icon: AlpineJSicon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
    ],
  },
  {
    name: "Sunpack ERP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    img: larabuildImage,
    technologies: [
      {
        name: "Laravel",
        icon: LaravelIcon,
      },
      {
        name: "Vue JS",
        icon: VueIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },

      {
        name: "MySQL",
        icon: WorkbenchIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },
];
</script>

<template>
  <div>
    <h1 class="text-6xl font-semibold mb-10">Projects</h1>

    <div>
      <div class="grid grid-cols-3 gap-3 mb-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :img="project.img"
          :img-bg-class="project.imgBgClass"
          :technologies="project.technologies"
        />
      </div>
    </div>
  </div>
</template>
