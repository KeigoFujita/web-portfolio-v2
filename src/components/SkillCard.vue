<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Skill',
  },
  icon: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="relative skill-card transition hover:scale-90 group">
    <div
      class="w-full aspect-square bg-[#171717] bg-opacity-[79%] group-hover:bg-opacity-[100%] group-hover:border-none transition rounded border-2 flex flex-col items-center justify-center"
    >
      <component
        :is="props.icon"
        class="h-8 md:h-10 mb-2"
      />
      <span class="font-semibold text-neutral-300 text-sm select-none">
        {{ props.title }}
      </span>
    </div>
  </div>
</template>
