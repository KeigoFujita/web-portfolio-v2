<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#41b883' : 'white'));
const secondaryColor = computed(() => (props.active ? '#34495e' : '#757575'));
</script>
<template>
  <svg
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.125 6.75L25 44.25L46.875 6.75H38.2812L25 29.4062L11.7188 6.75H3.125Z"
      :fill="primaryColor"
    />
    <path
      d="M11.7188 6.75L25 29.4062L38.2812 6.75H30.4688L25.102 16.1447L19.5312 6.75H11.7188Z"
      :fill="secondaryColor"
    />
  </svg>
</template>
