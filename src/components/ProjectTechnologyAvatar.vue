<script setup>
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

defineProps({
  name: { type: String, required: true },
  icon: { type: Object, required: true },
});
</script>
<template>
  <TooltipProvider>
    <Tooltip :delayDuration="200">
      <TooltipTrigger>
        <div
          class="h-9 w-9 p-0.5 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-800/70 border border-neutral-800"
        >
          <component
            :is="icon"
            class="w-5 h-5"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <span class="text-white">{{ name }}</span>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
