<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: Object, required: false, default: () => null },
  icon: { type: Function, required: false, default: null },
});
</script>

<template>
  <div
    class="p-6 w-full bg-[#171717] bg-opacity-[79%] hover:bg-opacity-[100%] rounded border-2 group"
    :class="[icon && 'flex flex-row space-x-5']"
  >
    <div
      v-if="img"
      class="p-5 bg-[#1B1B1B] h-48 mb-5 rounded-md overflow-hidden group-hover:scale-95 transition-all"
    >
      <component
        :is="img"
        class="w-full"
      />
    </div>
    <div
      v-if="icon"
      class="p-2.5 h-min rounded-full border dark:border-neutral-700"
    >
      <component
        :is="icon"
        class="w-7 h-7"
      />
    </div>
    <div>
      <h3 class="font-semibold text-neutral-200 mb-2">
        {{ title }}
      </h3>
      <p class="text-neutral-500 text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>
