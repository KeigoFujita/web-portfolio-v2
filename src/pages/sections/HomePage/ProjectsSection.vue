<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import TailwindIcon from '@/assets/icons/TailwindIcon.vue';
import LaravelIcon from '@/assets/icons/LaravelIcon.vue';
import VueIcon from '@/assets/icons/VueIcon.vue';
import ViteIcon from '@/assets/icons/ViteIcon.vue';
import WorkbenchIcon from '@/assets/icons/WorkbenchIcon.vue';
import LivewireIcon from '@/assets/icons/LivewireIcon.vue';
import AlpineJSicon from '@/assets/icons/AlpineJSicon.vue';
import JavaScriptIcon from '@/assets/icons/JavaScriptIcon.vue';
import HTMLIcon from '@/assets/icons/HTMLIcon.vue';
import PowerBuilderIcon from '@/assets/icons/PowerBuilderIcon.vue';

import cnxshuttleImage from '@/assets/project_images/cnxshuttle.png';
import cnxshuttleMobileImage from '@/assets/project_images/cnxshuttle_mobile.png';
import lighthouseImage from '@/assets/project_images/lighthouse.png';
import centroImage from '@/assets/project_images/centro.png';
import larabuildImage from '@/assets/project_images/larabuild.png';
import webPortfolioImage from '@/assets/project_images/webportfolio.png';
import webPortfolioV1Image from '@/assets/project_images/webportfoliov1.png';
import sunpackImage from '@/assets/project_images/sunpack.png';
import SQLServerIcon from '@/assets/icons/SQLServerIcon.vue';

const projects = [
  {
    name: 'CNX Connect',
    description:
      'CNX Connect is a smart recruitment platform for candidates and recruiters. Candidates can track their application progress and view status updates, while recruiters can assess applicants, manage candidate queues, and review scores and background information efficiently.',
    img: cnxshuttleMobileImage,
    imgBgClass: 'bg-[#212123]',
    technologies: [
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },

      {
        name: 'MySQL',
        icon: WorkbenchIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },
  {
    name: 'CNX Shuttle',
    description:
      'CNX Shuttle Mobile Application provides an efficient shuttle experience for drivers and CNX employees. Drivers can view their schedules and manage passenger boarding, while passengers can input pickup and drop-off points, view trip history, and locate the nearest vehicle. ',
    img: cnxshuttleMobileImage,
    link: 'https://cnxshuttle.concentrix.com',
    imgBgClass: 'bg-[#212123]',
    technologies: [
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },

      {
        name: 'MySQL',
        icon: WorkbenchIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },
  {
    name: 'CNX Lighthouse',
    description:
      'CNX Lighthouse Application helps CNX employees find career opportunities based on their skills, promoting internal promotions and transfers. Recruiters create job scorecards to match candidates to roles, and employees discover suitable job openings.',
    img: lighthouseImage,
    link: 'https://lighthouse.concentrix.com',
    technologies: [
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },

      {
        name: 'MySQL',
        icon: WorkbenchIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },
  {
    name: 'CENTRO V2',
    description:
      'CNX Centro Application is a training room reservation tool for CNX employees. Admins can manage sites and rooms, and approve or decline reservations. Requestors can select sites, reserve rooms based on availability, and cancel or postpone their requests.',
    img: centroImage,
    imgBgClass: 'bg-[#9893FF]',
    link: 'https://centro.concentrix.com',
    technologies: [
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },

      {
        name: 'MySQL',
        icon: WorkbenchIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },
  {
    name: 'Larabuild Documentation',
    description:
      'Larabuild Documentation is a comprehensive guide for developers on our team. It provides detailed instructions on workflows, project setup, cloning, creating new projects, and includes documentation for both Vue and Laravel projects, as well as API documentation.',
    img: larabuildImage,
    link: 'https://larabuild-docs.vercel.app',
    repositoryLink: 'https://github.com/keigo56/larabuild-docs',
    technologies: [
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },
  {
    name: 'Web Portfolio',
    description:
      'My web portfolio showcases my projects, skills, and experience as a Full Stack Web Developer. It includes detailed descriptions of my work, highlights my technical expertise, and demonstrates my ability to build high-quality, scalable web applications.',
    img: webPortfolioImage,
    link: 'https://keigovictorfujita.vercel.app',
    repositoryLink: 'https://github.com/KeigoFujita/web-portfolio-v2',
    imgBgClass: 'bg-[#232222]',
    technologies: [
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
    ],
  },

  {
    name: 'NEU Appointment System',
    description:
      'NEU Appointment System is a school appointment tool that allows students to book appointments for various tasks like submission of requirements, payments to cashier and other school related activities.',
    img: larabuildImage,
    repositoryLink: 'https://github.com/keigo56/neuas',
    technologies: [
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'Livewire',
        icon: LivewireIcon,
      },
      {
        name: 'Alpine JS',
        icon: AlpineJSicon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },

      {
        name: 'MySQL',
        icon: WorkbenchIcon,
      },
    ],
  },
  {
    name: 'Web Portfolio V1',
    description:
      'The first web portfolio I created around 2019 where I showcased my projects, skills, and experience as an entry Laravel Web Developer. This is also the first time I used VueJS and Tailwind CSS and deployed on Netlify.',
    img: webPortfolioV1Image,
    repositoryLink: 'https://github.com/KeigoFujita/keigofujita',
    link: 'https://keigofujita.netlify.app',
    imgBgClass: 'bg-[#1A4E7E]',
    technologies: [
      {
        name: 'Vue JS',
        icon: VueIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },
      {
        name: 'JavaScript',
        icon: JavaScriptIcon,
      },
      {
        name: 'HTML',
        icon: HTMLIcon,
      },
    ],
  },
  {
    name: 'Sunpack ERP',
    description:
      'A desktop Enterprise Resource Planning software for a carton manufacturing company. Sunpack ERP integrates all software and business processes on a single system. Built with Powerbuilder and SQL Server.',
    img: sunpackImage,
    imgBgClass: 'bg-[#2D2D2E]',
    technologies: [
      {
        name: 'Powerbuilder',
        icon: PowerBuilderIcon,
      },
      {
        name: 'SQL Server',
        icon: SQLServerIcon,
      },
    ],
  },
];
</script>

<template>
  <div class="pt-24">
    <h1 class="text-4xl md:text-6xl font-semibold mb-10 text-brand">
      Projects
    </h1>

    <div>
      <div class="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :link="project.link"
          :repository-link="project.repositoryLink"
          :img="project.img"
          :img-bg-class="project.imgBgClass"
          :technologies="project.technologies"
        />
      </div>
    </div>
  </div>
</template>
