<script setup>
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Button from "@/components/ui/button/Button.vue";
import { ChevronRightIcon, CodeBracketIcon } from "@heroicons/vue/24/solid";
import ProjectTechnologyAvatar from "./ProjectTechnologyAvatar.vue";

defineProps({
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, default: null },
  repositoryLink: { type: String, default: null },
  img: { type: String, required: true },
  imgBgClass: { type: String, required: false, default: "bg-[#293152]" },
  technologies: { type: Object, required: true },
});

function openLink(link) {
  window.open(link, "_blank");
}
</script>

<template>
  <div
    class="p-6 w-full bg-[#171717] bg-opacity-[79%] rounded border-2 space-y-4"
  >
    <div
      class="px-3 md:h-64 rounded-sm group"
      :class="[imgBgClass]"
    >
      <img
        class="group-hover:scale-90 md:h-64 transition-all"
        :src="img"
        :alt="name"
      />
    </div>
    <div>
      <h3 class="font-semibold text-neutral-200 mb-3">{{ name }}</h3>
      <p class="text-neutral-500 text-sm">
        {{ description }}
      </p>
    </div>

    <!-- <div>
      <a
        href="#"
        class="text-sm text-neutral-200 font-semibold flex items-center space-x-0.5 hover:underline"
      >
        <span> View More Details</span>
        <ChevronRightIcon class="w-4 h-4 text-neutral-200" />
      </a>
    </div> -->

    <div class="flex items-center space-x-2">
      <Button
        :disabled="link === null"
        @click="openLink(link)"
        size="sm"
        class="bg-neutral-100 text-neutral-900 hover:bg-white/80 text-sm px-4 disabled:cursor-not-allowed"
      >
        <span class="font-semibold">Visit Site</span>
      </Button>
      <TooltipProvider>
        <Tooltip :delayDuration="200">
          <TooltipTrigger>
            <Button
              :disabled="repositoryLink === null"
              @click="openLink(repositoryLink)"
              size="sm"
              variant="secondary"
              class="px-4"
            >
              <div class="flex items-center space-x-2">
                <CodeBracketIcon class="w-4 h-4 text-neutral-400" />
                <span class="text-neutral-400">Source Code</span>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            v-if="repositoryLink === null"
          >
            <span class="text-white"
              >Source code not available due to copyright.</span
            >
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <div class="flex items-center space-x-1">
      <ProjectTechnologyAvatar
        v-for="technology in technologies"
        :name="technology.name"
        :icon="technology.icon"
      />
    </div>
  </div>
</template>
