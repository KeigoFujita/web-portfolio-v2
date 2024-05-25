<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: Object, required: false },
});
</script>

<template>
  <div
    class="p-6 w-full bg-[#171717] bg-opacity-[79%] hover:bg-opacity-[100%] rounded border-2"
  >
    <div
      class="p-5 bg-[#1B1B1B] h-48 mb-5 rounded-md overflow-hidden"
      v-if="img"
    >
      <component
        :is="img"
        class="w-full"
      />
    </div>
    <h3 class="font-semibold text-neutral-200 mb-2">
      {{ title }}
    </h3>
    <p class="text-neutral-500 text-sm">
      {{ description }}
    </p>
  </div>
</template>
