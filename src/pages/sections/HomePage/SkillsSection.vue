<script setup>
import { MapIcon, LockIcon } from "lucide-vue-next";
import SkillCard from "@/components/SkillCard.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import HTMLIcon from "@/assets/icons/HTMLIcon.vue";
import CSSIcon from "@/assets/icons/CSSIcon.vue";
import JavaScriptIcon from "@/assets/icons/JavaScriptIcon.vue";
import PHPIcon from "@/assets/icons/PHPIcon.vue";
import MySQLIcon from "@/assets/icons/MySQLIcon.vue";
import SQLServerIcon from "@/assets/icons/SQLServerIcon.vue";
import LaravelIcon from "@/assets/icons/LaravelIcon.vue";
import LivewireIcon from "@/assets/icons/LivewireIcon.vue";
import SanctumIcon from "@/assets/icons/SanctumIcon.vue";
import VueIcon from "@/assets/icons/VueIcon.vue";
import JQueryIcon from "@/assets/icons/JQueryIcon.vue";
import AlpineJSicon from "@/assets/icons/AlpineJSicon.vue";
import AxiosIcon from "@/assets/icons/AxiosIcon.vue";
import ViteIcon from "@/assets/icons/ViteIcon.vue";
import TailwindIcon from "@/assets/icons/TailwindIcon.vue";
import BootstrapIcon from "@/assets/icons/BootstrapIcon.vue";
import JiraIcon from "@/assets/icons/JiraIcon.vue";
import VSCodeIcon from "@/assets/icons/VSCodeIcon.vue";
import AzureIcon from "@/assets/icons/AzureIcon.vue";
import PHPStormIcon from "@/assets/icons/PHPStormIcon.vue";
import WorkbenchIcon from "@/assets/icons/WorkbenchIcon.vue";
import FigmaIcon from "@/assets/icons/FigmaIcon.vue";
import PostmanIcon from "@/assets/icons/PostmanIcon.vue";
import TechicalSkillCard from "@/components/TechicalSkillCard.vue";

import ApiDevImage from "@/assets/technical_skills_images/ApiDevImage.vue";
import DevelopmentProcessDocImage from "@/assets/technical_skills_images/DevelopmentProcessDocImage.vue";
import HighFidelityWireframingImage from "@/assets/technical_skills_images/HighFidelityWireframingImage.vue";

const programmingLanguages = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },

  {
    name: "PHP",
    icon: PHPIcon,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    name: "SQL Server",
    icon: SQLServerIcon,
  },
];

const frameworksAndLibraries = [
  {
    name: "Laravel",
    icon: LaravelIcon,
  },
  {
    name: "Livewire",
    icon: LivewireIcon,
  },
  {
    name: "Sanctum API",
    icon: SanctumIcon,
  },

  {
    name: "Vue JS",
    icon: VueIcon,
  },
  {
    name: "JQuery",
    icon: JQueryIcon,
  },
  {
    name: "Alpine JS",
    icon: AlpineJSicon,
  },
  {
    name: "Axios",
    icon: AxiosIcon,
  },
  {
    name: "Vite",
    icon: ViteIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Bootstrap",
    icon: BootstrapIcon,
  },
];

const toolsAndSoftware = [
  {
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    name: "JIRA",
    icon: JiraIcon,
  },
  {
    name: "Azure AD",
    icon: AzureIcon,
  },

  {
    name: "VS Code",
    icon: VSCodeIcon,
  },
  {
    name: "PHP Storm",
    icon: PHPStormIcon,
  },
  {
    name: "Workbench",
    icon: WorkbenchIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Postman",
    icon: PostmanIcon,
  },
];
</script>

<template>
  <div class="pt-24">
    <h1 class="text-4xl md:text-6xl font-semibold mb-10">Skills</h1>

    <div class="block md:hidden">
      <div class="mb-10">
        <h1 class="text-xl mb-5">Programming Languages</h1>
        <div
          class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 px-0.5"
        >
          <SkillCard
            v-for="programmingLanguage in programmingLanguages"
            :key="programmingLanguage.name"
            :title="programmingLanguage.name"
            :icon="programmingLanguage.icon"
          />
        </div>
      </div>
      <div class="mb-10">
        <h1 class="text-xl mb-5">Frameworks & Libraries</h1>
        <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <SkillCard
            v-for="frameworkAndLibrary in frameworksAndLibraries.slice(
              0,
              frameworksAndLibraries.length - 1,
            )"
            :key="frameworkAndLibrary.name"
            :title="frameworkAndLibrary.name"
            :icon="frameworkAndLibrary.icon"
          />
        </div>
      </div>
    </div>

    <div class="hidden lg:flex w-full space-x-3 mb-5">
      <div class="md:w-1/2 lg:w-[37.5%]">
        <h1 class="text-xl mb-5">Programming Languages</h1>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-0.5"
        >
          <SkillCard
            v-for="programmingLanguage in programmingLanguages"
            :key="programmingLanguage.name"
            :title="programmingLanguage.name"
            :icon="programmingLanguage.icon"
          />
        </div>
      </div>
      <div class="md:w-1/2 lg:w-[62.5%]">
        <h1 class="text-xl mb-5">Frameworks & Libraries</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <SkillCard
            v-for="frameworkAndLibrary in frameworksAndLibraries"
            :key="frameworkAndLibrary.name"
            :title="frameworkAndLibrary.name"
            :icon="frameworkAndLibrary.icon"
          />
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-full space-x-3 mb-5">
      <div class="w-full">
        <h1 class="text-xl mb-5">Tools & Software</h1>
        <div class="grid grid-cols-8 gap-3">
          <SkillCard
            v-for="toolAndSoftware in toolsAndSoftware"
            :key="toolAndSoftware.name"
            :title="toolAndSoftware.name"
            :icon="toolAndSoftware.icon"
          />
        </div>
      </div>
    </div>

    <div class="block md:hidden w-full space-x-3 mb-5">
      <div class="w-full">
        <h1 class="text-xl mb-5">Tools & Software</h1>
        <div class="grid grid-cols-3 gap-3">
          <SkillCard
            v-for="toolAndSoftware in toolsAndSoftware"
            :key="toolAndSoftware.name"
            :title="toolAndSoftware.name"
            :icon="toolAndSoftware.icon"
          />
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-xl mb-5">Technical Skills</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <TechicalSkillCard
          :img="ApiDevImage"
          title="API Development & Integration"
          description="Proficient in designing, developing, and integrating secure and scalable APIs tailored to meet specific project requirements."
        />
        <TechicalSkillCard
          :img="HighFidelityWireframingImage"
          title="High Fidelity Wireframing"
          description="Skilled in creating detailed wireframes to visualize user interfaces and enhance user experience (UX) for web applications."
        />
        <TechicalSkillCard
          :img="DevelopmentProcessDocImage"
          title="Development Process Documentation"
          description="Documented development processes to enhance code readability and ensure clarity and consistency in project workflows."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <TechicalSkillCard
          title="Azure AD OAuth Integration"
          description="Experienced in implementing Azure AD OAuth integration to secure and manage user authentication."
          :icon="LockIcon"
        >
        </TechicalSkillCard>
        <TechicalSkillCard
          title="Open Street Maps Integration"
          description="Experienced using Leaflet.js to integrate OpenStreetMap into web applications, providing dynamic, interactive maps."
          :icon="MapIcon"
        />
      </div>
    </div>
  </div>
</template>
